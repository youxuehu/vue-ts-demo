<template>
    <el-header class="header">
      <div class="left">
        <img src="../assets/owl-logo.png" class="logo" />
        <span class="title">Owl Admin</span>
      </div>
      <el-dropdown @command="handleCommand">
        <div class="user-info">
          <el-avatar :size="36" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
          <span class="username">Admin</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="profile">用户中心</el-dropdown-item>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-header>
  </template>
  
  <script setup lang="ts">
  const handleCommand = (command: string) => {
    if (command === 'logout') {
      // 处理退出逻辑
      console.log('执行退出操作')
    } else if (command === 'profile') {
      // 跳转用户中心
      console.log('打开用户中心')
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    border-bottom: 1px solid #eee;
    
    .left {
      display: flex;
      align-items: center;
      
      .logo {
        width: 40px;
        height: 40px;
        margin-right: 12px;
      }
      
      .title {
        font-size: 20px;
        font-weight: bold;
      }
    }
    
    .user-info {
      display: flex;
      align-items: center;
      cursor: pointer;
      
      .username {
        margin-left: 8px;
      }
    }
  }
  </style>