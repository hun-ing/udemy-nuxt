<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onSubmit">
        <UIAppControlInput type="email" v-model="login.email">E-Mail Address</UIAppControlInput>
        <UIAppControlInput type="password" v-model="login.password">Password</UIAppControlInput>
        <UIAppButton type="submit">{{ login.isLogin ? 'Login' : 'Sign Up' }}</UIAppButton>
        <UIAppButton
            type="button"
            btn-style="inverted"
            style="margin-left: 10px"
            @click="login.isLogin = !login.isLogin">Switch to {{ login.isLogin ? 'Signup' : 'Login' }}</UIAppButton>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const login = ref({
  isLogin: true,
  email: '',
  password: '',
});
definePageMeta({
  layout: 'admin'
})

const runtimeConfig = useRuntimeConfig();
const onSubmit = async () => {
  const {data} = await useFetch(`${runtimeConfig.public.apiBase}/api/auth/sign-up`, {
    method: 'POST',
    headers: {
      Authorization: 'test'
    },
    body: {
      email: login.value.email,
      password: login.value.password
    },
    onResponse({ request, response, options }) {
      // Process the response data
      console.log(response.headers.get('Authorization'))
    },
    onResponseError({ request, response, options }) {
      // Handle the response errors
    }
  })

  console.log('data = ', data.value);
}
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>