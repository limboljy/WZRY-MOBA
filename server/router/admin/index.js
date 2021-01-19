const { JsonWebTokenError } = require('jsonwebtoken')

module.exports = app => {
  const express = require('express')
  const router = express.Router({
    mergeParams: true //合并参数
  })
  // const category = require('../../model/Category')

  //创建接口
  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })
  //编辑接口
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  //删除接口
  router.delete('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })
  //创建列表接口  populate(关联取出字段)  limit(限制数)
  router.get('/', async (req, res) => {
    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    }
    const items = await req.Model.find().setOptions(queryOptions).limit(10)
    res.send(items)
  })
  //获取id接口
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })
  app.use('/admin/api/rest/:resource', async (req, res, next) => {
    const modelName = require('inflection').classify(req.params.resource)
    req.Model = require(`../../models/${modelName}`)
    next()
  }, router)

  //上传图片接口
  const multer = require('multer')
  const upload = multer({ dest: __dirname + '/../../uploads' })
  app.post('/admin/api/upload', upload.single('file'), async (req, res) => {
    const file = req.file
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })

  //登录用户名密码判断接口
  app.post('/admin/api/login',async(req,res)=> {
    const {username,password} = req.body
    //1.根据用户名找用户
    const AdminUser = require('../../models/AdminUser')
    const User = await AdminUser.findOne({username}).select('+password')
    if(!User){
      return res.status(422).send({
        message:'用户不存在！！！'
      })
    }
    //2.校验密码
    const isValid = require('bcrypt').compareSync(password,User.password)
    if(!isValid){
      return res.status(422).send({
        message:'密码错误！！！'
      })
    }
    //3.返回token
    const jwt = require('jsonwebtoken')
    const token = jwt.sign({id:User._id},app.get('secret'))
    res.send(token)
  })
}
