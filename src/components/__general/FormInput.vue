<template>
  <div class="flex flex-col items-start gap-1">
    <label :for="props.name" class="font-semibold text-xs">{{
      props.label
    }}</label>
    <input
      :type="props.type"
      :name="props.name"
      :placeholder="props.placeholder"
      @change="handleChange"
      class="px-4 py-3 w-full rounded-md bg-zinc-700 text-zinc-100 placeholder:text-zinc-500"
    />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["change-input-value"]);

const handleChange = (e: any) => {
  const value: string = e.target.value;
  console.log(value);
  emit("change-input-value", value);
};

const props = defineProps({
  label: String,
  type: String,
  name: String,
  placeholder: String,
});
</script>
