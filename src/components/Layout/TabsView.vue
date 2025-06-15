<template>
    <div class="tabs-container">
      <div class="tabs-bar">
        <div 
          v-for="tab in tabs"
          :key="tab.key"
          class="tab-item"
          :class="{ 'active': tab.key === activeKey }"
        >
          <span>{{ tab.title }}</span>
          <span class="close-btn" @click.stop="handleClose(tab.key)">×</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      tabs: Array,
      activeKey: String
    },
    methods: {
      handleClose(key) {
        this.$emit('close', key);
      }
    }
  };
  </script>
  
  <style scoped>
  .tabs-bar {
    display: flex;
    background: #fff;
    border-bottom: 1px solid #eee;
  }
  
  .tab-item {
    padding: 12px 20px;
    border-right: 1px solid #eee;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: background 0.3s;
  }
  
  .tab-item.active {
    background: #f0f7ff;
    border-bottom: 2px solid #1890ff;
  }
  
  .close-btn {
    margin-left: 8px;
    color: #999;
    padding: 0 4px;
  }
  
  .close-btn:hover {
    color: #666;
  }
  </style>