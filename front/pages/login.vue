<!--  -->
<template>
  <div>
    <el-from class="login-from">
      <el-from-item props="email">
        <span>
          <i class="el-icon-mobile"></i>
        </span>
        <el-input placeholder="邮箱 "></el-input>
      </el-from-item>
      <el-from-item props="passwd">
        <span>
          <i class="el-icon-lock"></i>
        </span>
        <el-input placeholder="密码"></el-input>
      </el-from-item>
    </el-from>
  </div>
</template>

<script>
export default {
  layout:'login',
  data() {
    return {
      rules:[]
    }
  },
}

</script>
<style lang="stylus">
.login-from
  width 800px;
  margin 50px auto;
  
</style>