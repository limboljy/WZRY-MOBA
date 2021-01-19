const express = require('express')

const app = express()

app.use(express.json())  //中间件
app.use(require('cors')()) //跨域解决
app.set('secret','dfdfdf') //设置token校验密匙

require('./router/admin')(app)
require('./plugins/db')(app)

app.use('/uploads', express.static(__dirname + '/uploads'))



app.listen(3000, () => {
  console.log('http://localhost:3000');
})  