<template>
  <div class="input-control">
    <label>
      <slot/>
    </label>
    <input
        v-if="controlType === 'input'"
        v-model="modelValue"
    >
    <textarea
        v-if="controlType === 'textarea'"
        rows="10"
        v-model="modelValue"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
defineProps({
  controlType: {
    type: String,
    default: 'input'
  },
});
const modelValue = defineModel();
</script>

<!--<template>
  <div class="input-control">
    <label>
      <slot/>
    </label>
    <input
        v-if="controlType === 'input'"
        :value="props.modelValue"
        @input="inputEvent"
    >
    <textarea
        v-if="controlType === 'textarea'"
        rows="10"
        :value="props.modelValue"
        @input="inputEvent"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  controlType: {
    type: String,
    default: 'input'
  },
  value: {
    type: String,
    default: ''
  }
});

const emits = defineEmits(['update:modelValue']);
const inputEvent = (e) => {
  emits('update:modelValue', e.target.value);
}
</script>-->


<style scoped>
.input-control {
  margin: 10px 0;
}

.input-control label {
  display: block;
  font-weight: bold;
}

.input-control input,
.input-control textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  border: 1px solid #ccc;
  padding: 5px;
}

.input-control input:focus,
.input-control textarea:focus {
  background-color: #eee;
  outline: none;
}
</style>


