<template>
  <a-layout-sider :collapsed="collapsed" width="22%" :collapsedWidth="80" :trigger="null" collapsible class="sider-wrapper">
    <div class="logo" />
    <a-menu theme="dark" mode="inline">
      <a-menu-item key="1">
        <user-outlined />
        <span>Главная страница</span>
      </a-menu-item>
      <a-menu-item key="2">
        <video-camera-outlined />
        <span>Мои задачи</span>
      </a-menu-item>
    </a-menu>
    <a-divider style="border-color: rgba(255, 255, 255, 0.65);" dashed />
    <SpaceManager />
  </a-layout-sider>
</template>

<script setup lang="ts">
import {
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons-vue';
import SpaceManager from '../sider/space-manager/SpaceManager.vue';

const props = defineProps<{
  collapsed: boolean;
}>();
</script>

<style scoped>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}


</style>

