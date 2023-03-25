<template>
  <main class="flex flex-col items-center justify-center">
    <form class="flex flex-col items-center" @submit="login">
      <h1 class="text-lg font-bold">Login</h1>
      <input class="mt-2 border-grey border-2 rounded-md p-2" v-model="username">
      <input type="password" class="mt-2 border-grey border-2 rounded-md p-2" v-model="password">
      <button class="bg-gray-200 p-2 rounded-lg w-full mt-6">Login</button>
    </form>
  </main>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from "vue-router";
export default {
  setup() {
    const username = ref("");
    const password = ref("");
    const router = useRouter();

    return {
      username,
      password,
      router,

      login: () =>{
        if (username.value == "collin" && password.value == "collin"){
          router.push("/")
        }
      }
    }
  }
}

</script>
