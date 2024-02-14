<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>

    <AppControlInput v-model="editedPost.title">Title</AppControlInput>

    <AppControlInput v-model="editedPost.thumbnailLink">Thumbnail Link</AppControlInput>

    <AppControlInput
        control-type="textarea"
        v-model="editedPost.content">Content</AppControlInput>

    <AppButton type="submit">Save</AppButton>

    <AppButton
        type="button"
        style="margin-left: 10px"
        btn-style="cancel"
        @click="onCancel">Cancel</AppButton>
  </form>
</template>

<script setup lang="ts">
import AppControlInput from "~/components/UI/AppControlInput.vue";
import AppButton from "~/components/UI/AppButton.vue";

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
  thumbnailLink: '',
  content: '',
})

const onSave = () => console.log(editedPost.value);
const onCancel = () => router.push('/admin');
</script>

<style>

</style>