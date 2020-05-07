<template>
    <div>
        <el-card class="box-card">
            <div>
                <h2>Welcome 欢迎！</h2>
                <h4>请勿删除数据</h4>
            </div>
        </el-card>
        <el-calendar v-model="value" class="data-box">
        </el-calendar>
    </div>
</template>

<script>
export default {
     data() {
      return {
        value: new Date()
      }
    }
}
</script>

<style lang="scss" scoped>
    .box-card{
        text-align: center;
        h4{
            color: #F56C6C;
        }
    }
    .data-box{
        margin-top: 20px;
        width: 500px;
    }
</style>