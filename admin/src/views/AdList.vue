<template>
  <div>
    <h1>分类列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id"
                       label="ID"
                       width="230">
      </el-table-column>
      <el-table-column prop="name"
                       label="广告位名称">
      </el-table-column>
      <el-table-column fixed="right"
                       label="操作"
                       width="200">
        <template slot-scope="scope">
          <el-button type="primary"
                     size="small"
                     @click="$router.push(`/ads/edit/${scope.row._id}`)">编辑</el-button>
          <el-button type="primary"
                     size="small"
                     @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: []
    }
  },
  methods: {
    //获取接口提交分类列表内容
    async fetch () {
      const res = await this.$http.get('rest/ads')
      this.items = res.data
    },
    async remove (row) {
      this.$confirm(`此操作将永久删除广告位：${row.name}?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const res = await this.$http.delete(`rest/ads/${row._id}`)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.fetch()
      })
    }
  },
  created () {
    this.fetch()
  }
}
</script>

<style>
</style>