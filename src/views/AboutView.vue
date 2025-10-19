<template>
  <div class="about">
    <h1>This is an about page</h1>
		<br>
	  <h1>Where is my button  </h1>
		<button id="signIn">Sign In</button>
	</div>
</template>


<!-- script type="module">
		import { userManager } from "../main.js";

		document.getElementById("signIn").addEventListener("click", async () => {
				//await userManager.signinRedirect();
				await userManager.signinPopup();
		});
</script -->


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
