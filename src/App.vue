<!-- App.vue -->
<template>
    <a-layout class="layout-wrapper">
      <Sider :collapsed="collapsed" />
      <a-layout>
        <Header :collapsed="collapsed" @update:collapsed="collapsed = $event" />
        <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
        >
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
</template>

<script setup lang="ts">
import Sider from './components/layout/Sider.vue';
import Header from './components/layout/Header.vue';
import { ref } from 'vue';

// Переменная для контроля состояния collapsed
const collapsed = ref(false);
</script>

<style scoped>
.site-layout .site-layout-background {
  background: #fff;
}

.layout-wrapper {
  height: 100%;
}
</style>