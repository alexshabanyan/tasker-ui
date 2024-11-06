<template>
  <a-modal 
    :open="isOpen"
    title="Добавить пространство"
    @cancel="cancel"
    @ok="save"
    :cancel-text="modalCancelBtnText"
    :ok-text="modalSaveBtnText"
  >
  <a-form
    ref="formRef"
    :model="spaceFormModel"
    :rules="spaceModelRules"
    name="basic"
    autocomplete="off"
    layout="vertical"
  >
    <a-form-item label="Название пространства" name="name">
      <a-input v-model:value="spaceFormModel.name" />
    </a-form-item>
  </a-form>
  </a-modal>
</template>

<script setup lang="ts">
import { createSpace } from '@/api/space-service';
import { modalCancelBtnText, modalSaveBtnText } from '@/constants/constants'
import { mockUser } from '@/constants/mock';
import { spaceModel, spaceModelRules } from '@/constants/space';
import { SpaceDto, SpaceModel } from '@/types/types';
import { FormInstance } from 'ant-design-vue';
import { ref } from 'vue';

const props = defineProps<{
  isOpen: boolean,
}>();

const formRef = ref<FormInstance>();

const spaceFormModel = ref<SpaceModel>(spaceModel())

const emits = defineEmits(['update:isOpen']);

const cancel = () => {
  emits('update:isOpen', false)
}

const save = async () => {
  await formRef.value?.validate();
  await createSpace({ ...spaceFormModel.value, userId: mockUser.id });
};
</script>