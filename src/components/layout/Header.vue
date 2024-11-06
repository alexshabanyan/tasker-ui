<template>
  <a-layout-header style="background: #fff; padding: 0">
    <menu-unfold-outlined
      v-if="collapsed"
      class="trigger"
      @click="toggleCollapse"
    />
    <menu-fold-outlined v-else class="trigger" @click="toggleCollapse" />
  </a-layout-header>
</template>

<script setup lang="ts">
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';

const props = defineProps({
  collapsed: Boolean
});

const emit = defineEmits(['update:collapsed']);

function toggleCollapse() {
  emit('update:collapsed', !props.collapsed);
}
</script>

<style scoped>
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}


</style>
