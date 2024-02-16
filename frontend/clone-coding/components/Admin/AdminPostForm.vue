<template>
  <form @submit.prevent="onSave">
    <UIAppControlInput v-model="editedPost.author">Author Name</UIAppControlInput>

    <UIAppControlInput v-model="editedPost.title">Title</UIAppControlInput>

    <UIAppControlInput v-model="editedPost.thumbnail">Thumbnail Link</UIAppControlInput>

    <UIAppControlInput
        control-type="textarea"
        v-model="editedPost.content">Content</UIAppControlInput>

    <UIAppControlInput
        control-type="textarea"
        v-model="editedPost.previewText">Content</UIAppControlInput>

    <UIAppButton type="submit">Save</UIAppButton>

    <UIAppButton
        type="button"
        style="margin-left: 10px"
        btn-style="cancel"
        @click="onCancel">Cancel</UIAppButton>
  </form>
</template>

<script setup lang="ts">

const router = useRouter();
const props = defineProps({
  post: {
    type: Object,
    required: false
  }
});

const editedPost = ref( props.post ? { ...props.post } : {
  author: '',
  title: '',
  thumbnail: 'https://wikis.krsocsci.org/images/4/4a/%ED%96%84%EC%8A%A4%ED%84%B0.jpg',
  content: '',
  previewText: '',
})

const emits = defineEmits(['submit']);
const onSave = () => emits('submit', editedPost);
const onCancel = () => router.push('/admin');
</script>

<style>

</style>