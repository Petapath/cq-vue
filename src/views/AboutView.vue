<script setup type="module">
		import { userManager, signOutRedirect } from "../main.js";
		import { ref } from 'vue';

		const myText = ref("ABC");

	  async function handleLogin(event) {
				await userManager.signinRedirect();
    };

	  async function handleLogout(event) {
				await signOutRedirect();
    };

</script>



<template>
  <div class="about">
    <h1>{{ myText }} </h1>
		<br>
	  <h1>Where is my button  </h1>
		<button @click="handleLogin">Sign In</button>
		<button @click="handleLogout">Sign Out</button>
	</div>
</template>



<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
