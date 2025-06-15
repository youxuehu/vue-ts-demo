<template>

<!-- 右侧内容区 -->
<div class="content-area">
    <TabsView 
      :tabs="tabs" 
      :active-key="activeKey"
      @close="handleTabClose"
      @change="handleTabChange"
    />
    <!-- 内容容器 -->
    <div class="content-container">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component 
            :is="Component" 
            v-if="activeComponent === Component"
          />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>
<script>
import TabsView from '../components/Layout/TabsView.vue'
export default {
  data() {
    return {
      tabs: [],        // 标签页数组
      activeKey: '',    // 当前激活的标签key
      activeComponent: null
    };
  },
  methods: {
    handleMenuSelect(menu) {
      const existingTab = this.tabs.find(t => t.key === menu.key);
      
      if (!existingTab) {
        this.tabs.push({
          key: menu.key,
          title: menu.title,
          component: menu.component
        });
      }
      
      this.activeKey = menu.key;
      this.activeComponent = menu.component;
    },
    
    handleTabClose(key) {
      const index = this.tabs.findIndex(t => t.key === key);
      this.tabs.splice(index, 1);
      
      if (key === this.activeKey) {
        this.activeKey = this.tabs[this.tabs.length - 1]?.key || '';
      }
    },
    
    handleTabChange(key) {
      this.activeKey = key;
      this.activeComponent = this.tabs.find(t => t.key === key).component;
    }
  }
};
</script>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
}

.content-area {
  flex: 1;
  overflow: hidden;
}

.content-container {
  padding: 20px;
}
</style>