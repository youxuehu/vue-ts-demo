<template>
    <el-aside width="200px" class="side-menu">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>标签管理</span>
          </template>
          <el-menu-item index="1-1">标签列表</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="2">
          <template #title>
            <el-icon><icon-menu /></el-icon>
            <span>用户管理</span>
          </template>
          <el-menu-item index="2-1">用户列表</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="2">
          <template #title>
            <el-icon><icon-menu /></el-icon>
            <span>档案管理</span>
          </template>
          <el-menu-item index="2-1">档案列表</el-menu-item>
        </el-sub-menu>

      </el-menu>
    </el-aside>
  </template>
  
  <script setup lang="ts">
  import { Location, Menu as IconMenu } from '@element-plus/icons-vue'
  
  const handleOpen = (key: string) => {
    console.log('open', key)
  }
  const handleClose = (key: string) => {
    console.log('close', key)
  }
  </script>
  
  <style lang="scss" scoped>
  .side-menu {
    background-color: #fff;
    border-right: 1px solid #eee;
    
    .el-menu {
      border-right: none;
    }
  }
  </style>