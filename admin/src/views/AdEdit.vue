<template>
  <div>
    <h1>{{id?'编辑':'新建'}}广告位</h1>
    <el-form @submit.native.prevent="save">
      <!-- native原生表单，prevent阻止默认提交 -->
      <el-form-item label='名称'>
        <el-input v-model='model.name'></el-input>
      </el-form-item>
      <el-form-item label='广告'>
        <el-button @click='model.items.push({})' size="small"> <i class='el-icon-plus'>添加广告</i></el-button>
        <el-row type='flex' style="flex-wrap:wrap;margin:0 1rem">
          <el-col :md='24' v-for="(item,i) in model.items" :key="i">
            <el-form-item label='跳转链接URL:'>
            <el-input  v-model="item.url"></el-input>
              </el-form-item>
                <el-form-item label='图片' style="margin-top:1rem">
                <el-upload class="avatar-uploader"
                  :action="$http.defaults.baseURL+'/upload'"
                  :show-file-list="false"
                  :on-success="res=>$set(item,'image',res.url)">
              <img v-if="item.image"
                   :src="item.image"
                   class="avatar">
              <i v-else
                 class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
              </el-form-item>
              <el-form-item >
                <el-button size='small' type='danger' @click="model.items.splice(i,1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
      </el-form-item>
      <el-button type='primary' native-type='submit'>保存</el-button>
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
      model: {
        items:[]
      }
    }
  },
  methods: {
    //提交创建的分类
    async save () {
      let res
      if (this.id) {
        res = await this.$http.put(`rest/ads/${this.id}`, this.model) // eslint-disable-line no-unused-vars
      } else {
        res = await this.$http.post('rest/ads', this.model)
      }
      //跳转到'categories/list'
      this.$router.push('ads/list')
      //element方法跳出提示
      this.$message({
        type: 'success',
        message: '保存成功！'
      })
    },
    async fetch () {
      const res = await this.$http.get(`rest/ads/${this.id}`)
      this.model = Object.assign({},this.model,res.data)
    }
  },
  created () {
    this.id && this.fetch()
  }
}
</script>

<style>
</style>