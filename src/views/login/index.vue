<script setup>
import { ref } from 'vue'
import { Avatar, Lock } from '@element-plus/icons-vue'

const formData = ref({
  usename: '',
  password: ''
})
</script>
<template>
  <el-row class="loginContainer">
    <el-col :offset="10" :span="5" class="loginForm">
      <el-form :model="formData" size="large">
        <el-form-item>
          <h1>用户登录</h1>
        </el-form-item>
        <el-form-item>
          <el-input
            :prefix-icon="Avatar"
            placeholder="请输入用户名"
            v-model="formData.usename"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            :prefix-icon="Lock"
            placeholder="请输入密码"
            type="password"
            v-model="formData.password"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<style lang="scss" scoped>
.loginContainer {
  height: 100vh;
  .loginForm {
    margin-top: 16vh;
  }
}
</style>
