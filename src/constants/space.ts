import { Rule } from "ant-design-vue/es/form";
import { SpaceDto, SpaceModel } from "../types/types";

export const spaceModel = (space?: SpaceDto): SpaceModel => ({
  id: space?.id,
  name: space?.name,
  userId: space?.id,
})

export const spaceModelRules: Record<string, Rule[]> = {
  name: [{ required: true, message: 'Обязательное поле', trigger: 'change' }],
}