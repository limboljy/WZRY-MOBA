<template>
  <div>
    <h1>{{id?'编辑':'新建'}}文章</h1>
    <el-form @submit.native.prevent="save">
      <!-- native原生表单，prevent阻止默认提交 -->
      <el-form-item label='所属分类'>
        <el-select v-model='model.categories' multiple>
          <el-option v-for="item in categories"
                     :key="item._id"
                     :label="item.name"
                     :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label='标题'>
        <el-input v-model='model.title'></el-input>
      </el-form-item>
      <el-form-item label='详情'>
        <vue-editor v-model="model.body" useCustomImageHandler @imageAdded="handleImageAdded"> </vue-editor>
      </el-form-item>
      <el-button type='primary'
                 native-type='submit'>保存</el-button>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  props: {
    id: {}
  },
  data () {
    return {
      model: {},
      categories: []
    }
  },
   components: {
    VueEditor
  },
  methods: {
    //提交创建的分类
    async save () {
      let res
      if (this.id) {
        res = await this.$http.put(`rest/articles/${this.id}`, this.model) // eslint-disable-line no-unused-vars
      } else {
        res = await this.$http.post('rest/articles', this.model)
      }
      //跳转到'categories/list'
      this.$router.push('articles/list')
      //element方法跳出提示
      this.$message({
        type: 'success',
        message: '保存成功！'
      })
    },
    async fetch () {
      const res = await this.$http.get(`rest/articles/${this.id}`)
      this.model = res.data
    },
    async fetchCategories () {
      const res = await this.$http.get(`rest/categories`)
      this.categories = res.data
    },

    async handleImageAdded (file, Editor, cursorLocation, resetUploader) {
      const formData = new FormData()
      formData.append("file", file)
      const res = await this.$http.post('upload',formData)
      Editor.insertEmbed(cursorLocation, "image", res.data.url)
      resetUploader()
  }
  },
  created () {
    this.fetchCategories()
    this.id && this.fetch()
  }
}
</script>

<style>
</style>