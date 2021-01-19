<template>
  <div>
    <h1>{{id?'编辑':'新建'}}英雄</h1>
    <el-form @submit.native.prevent="save">
      <!-- native原生表单，prevent阻止默认提交 -->
      <el-tabs value='skills'
               type='border-card'>
        <el-tab-pane label="基本信息"
                     name=''>
          <el-form-item label='名称'>
            <el-input v-model='model.name'></el-input>
          </el-form-item>
          <el-form-item label='称号'>
            <el-input v-model='model.title'></el-input>
          </el-form-item>
          <el-form-item label='类型'>
            <el-select v-model="model.categories"
                       multiple>
              <el-option v-for="item in categories"
                         :key="item._id"
                         :label="item.name"
                         :value="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label='难度'>
            <el-rate :max='9'
                     show-score
                     style="margin-top:0.6rem"
                     v-model='model.scores.difficult'></el-rate>
          </el-form-item>
          <el-form-item label='技能'>
            <el-rate :max='9'
                     show-score
                     style="margin-top:0.6rem"
                     v-model='model.scores.skills'></el-rate>
          </el-form-item>
          <el-form-item label='攻击'>
            <el-rate :max='9'
                     show-score
                     style="margin-top:0.6rem"
                     v-model='model.scores.attack'></el-rate>
          </el-form-item>
          <el-form-item label='生存'>
            <el-rate :max='9'
                     show-score
                     style="margin-top:0.6rem"
                     v-model='model.scores.survive'></el-rate>
          </el-form-item>
          <el-form-item label='顺风出装'>
            <el-select v-model="model.items1"
                       multiple>
              <el-option v-for="item of items"
                         :key="item._id"
                         :value='item._id'
                         :label='item.name'></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label='逆风出装'>
            <el-select v-model="model.items2"
                       multiple>
              <el-option v-for="item of items"
                         :key="item._id"
                         :value='item._id'
                         :label='item.name'></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label='使用技巧'>
            <el-input v-model='model.usageTips'></el-input>
          </el-form-item>
          <el-form-item label='对抗技巧'>
            <el-input v-model='model.battleTips'></el-input>
          </el-form-item>
          <el-form-item label='团战思路'>
            <el-input v-model='model.teamTips'></el-input>
          </el-form-item>
          <el-form-item label='头像'>
            <el-upload class="avatar-uploader"
                       :action="$http.defaults.baseURL+'/upload'"
                       :show-file-list="false"
                       :on-success="afterUpload">
              <img v-if="model.avatar"
                   :src="model.avatar"
                   class="avatar">
              <i v-else
                 class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="技能" name='skills'>
          <el-button @click='model.skills.push({})' size="small"> <i class='el-icon-plus'>添加技能</i></el-button>
          <el-row type='flex' style="flex-wrap:wrap;margin:0 1rem">
            <el-col :md='12' v-for="(item,i) in model.skills" :key="i">
              <el-form-item label='名称'>
                <el-input  v-model="item.name"></el-input>
              </el-form-item>
                <el-form-item label='图标'>
                <el-upload class="avatar-uploader"
                  :action="$http.defaults.baseURL+'/upload'"
                  :show-file-list="false"
                  :on-success="res=>$set(item,'icon',res.url)">
              <img v-if="item.icon"
                   :src="item.icon"
                   class="avatar">
              <i v-else
                 class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
              </el-form-item>
              <el-form-item label='描述'>
                <el-input type='textarea' v-model="item.description"></el-input>
              </el-form-item>
              <el-form-item label='小提示'>
                <el-input type='textarea' v-model="item.tips"></el-input>
              </el-form-item>
              <el-form-item >
                <el-button size='small' type='danger' @click="model.skills.splice(i,1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-button type='primary'
                 style="margin-top:1rem"
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
      categories: [],
      items: [],
      model: {
        name: '',
        title: '',
        avatar: '',
        skills:[],
        scores: {
          difficult: 0
        },
        usageTips: '',
        battleTips: '',
        teamTips: ''
      },
    }
  },
  methods: {
    //提交创建的分类
    async save () {
      let res
      if (this.id) {
        res = await this.$http.put(`rest/heroes/${this.id}`, this.model) // eslint-disable-line no-unused-vars
      } else {
        res = await this.$http.post('rest/heroes', this.model)
      }
      //跳转到'heroes/list'
      this.$router.push('heroes/list')
      //element方法跳出提示
      this.$message({
        type: 'success',
        message: '保存成功！'
      })
    },
    async fetch () {
      const res = await this.$http.get(`rest/heroes/${this.id}`)
      // this.model = res.data
      this.model = Object.assign({}, this.model, res.data)
    },
    async fetchCategories () {
      const res = await this.$http.get(`rest/categories`)
      this.categories = res.data
    },
    async fetchItems () {
      const res = await this.$http.get(`rest/items`)
      this.items = res.data
    },
    afterUpload (res) {
      console.log(res);
      this.$set(this.model, 'avatar', res.url)
      // this.model.url = res.url
    }
  },
  created () {
    this.fetchItems()
    this.fetchCategories()
    this.id && this.fetch()
  }
}
</script>

<style>
</style>