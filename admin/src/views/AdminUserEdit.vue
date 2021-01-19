<template>
  <div>
    <h1>{{id?'编辑':'新建'}}管理员</h1>
    <el-form @submit.native.prevent="save">
      <!-- native原生表单，prevent阻止默认提交 -->
      <el-form-item label='用户名'>
        <el-input v-model='model.username'></el-input>
      </el-form-item>
       <el-form-item label='密码'>
        <el-input type='password' v-model='model.password'></el-input>
      </el-form-item>
      <el-button type='primary'
                 native-type='submit'>保存</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data () {
    return {
      model: {},
    }
  },
  methods: {
    //提交创建的分类
    async save () {
      let res
      if (this.id) {
        res = await this.$http.put(`rest/admin_users/${this.id}`, this.model) // eslint-disable-line no-unused-vars
      } else {
        res = await this.$http.post('rest/admin_users', this.model)
      }
      //跳转到'categories/list'
      this.$router.push('admin_users/list')
      //element方法跳出提示
      this.$message({
        type: 'success',
        message: '保存成功！'
      })
    },
    async fetch () {
      const res = await this.$http.get(`rest/admin_users/${this.id}`)
      this.model = res.data
    }
  },
  created () {
    this.id && this.fetch()
  }
}
</script>

<style>
</style>