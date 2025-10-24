import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'


// OIDC 


import { UserManager } from "oidc-client-ts"

const currentUri = window.location.origin;

const cognitoAuthConfig = {
    authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_ookACd3FN",
    client_id: "2pa2e5snhb0peiqmbdcotgcajf",
		redirect_uri: `${currentUri}`,
    response_type: "code",
    scope: "phone openid email"
};

// create a UserManager instance
export const userManager = new UserManager({
    ...cognitoAuthConfig,
});
//await userManager.signinRedirect();

export async function signOutRedirect () {
    const clientId = "2pa2e5snhb0peiqmbdcotgcajf";
//    const logoutUri = "https://lfm.pages.dev";
    const logoutUri = `${currentUri}`;
		const cognitoDomain = "https://us-east-1ookacd3fn.auth.us-east-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
};

userManager?.signinCallback().then(function (user) {
  window.sessionStorage.setItem('user', JSON.stringify(user));
});

export const getUser = () => {
  const userString = window.sessionStorage.getItem('user');
  return JSON.parse(userString);
}
//signOutRedirect();

// APP

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});


app.mount('#app');
