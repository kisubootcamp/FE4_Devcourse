<script setup>
import { ref, inject, defineProps } from 'vue'

const checkbox = ref('checkbox')
const checked = ref(checkbox.value.checked)

const checkboxChecked = () => {
  checked.value = checkbox.value.checked
}
const deleteItem = inject('deleteItem')

const props = defineProps({
  id: Number,
  message: String,
})
</script>
<template>
  <li class="flex items-center justify-between p-3 border-b hover:bg-gray-100 transition-colors">
    <div class="flex items-center">
      <input
        type="checkbox"
        ref="checkbox"
        @change="checkboxChecked"
        :class="`mr-3 h-4 w-4 text-blue-500 focus:ring-blue-400`"
      />
      <span>{{ props.message }}</span>
    </div>
    <button
      :disabled="!checked"
      @click="deleteItem(props.id)"
      class="text-red-500 hover:text-red-700 ml-4"
    >
      Delete
    </button>
  </li>
</template>
