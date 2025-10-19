<script setup type="module">
		import { userManager } from "../main.js";
		import { ref } from 'vue';

		const myText = ref("ABC");

	  async function handleLogin(event) {
				await userManager.signinRedirect();
    };

</script>



<template>
  <div class="about">
    <h1>{{ myText }} </h1>
		<br>
	  <h1>Where is my button  </h1>
		<button @click="handleLogin">Sign In</button>
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
