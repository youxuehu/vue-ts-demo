<template>
  <el-container class="header-container">    
    <div class="right-header">
      <Header />
    </div>  
    
  </el-container>
  <el-container class="layout-container">
    <SideMenu />
    <el-container>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
// @ts-ignore
import Header from './components/Layout/Header.vue'
// @ts-ignore
import SideMenu from './components/Layout/SideMenu.vue'
</script>

<style lang="scss">
.header-container {
  height: 60px;
  .right-header{
    height: 60px;
  }
}

.layout-container {
  height: 100vh;
  
  .el-main {
    background-color: #f0f2f5;
    padding: 20px;
  }
}
</style>