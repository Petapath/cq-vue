<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>


	// add sign-in button
	<div>
			<button id="signIn">Sign In</button>
	</div>

	<script type="module">
			import { userManager } from "../main.js";

			document.getElementById("signIn").addEventListener("click", async () => {
					await userManager.signinRedirect();
			});
	</script>

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
