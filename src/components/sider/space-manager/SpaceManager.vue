<template>
  <a-flex justify="center" align="center">
    <a-button @click="handleAddNewSpace">Добавить пространство</a-button>
  </a-flex>
  <AddSpaceModal v-if="addSpaceModalVisible" v-model:isOpen="addSpaceModalVisible" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AddSpaceModal from '../../modals/AddSpaceModal.vue';

const addSpaceModalVisible = ref(false);

const handleAddNewSpace = () => { addSpaceModalVisible.value = true; }
</script>