import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'



// OIDC 


import { UserManager } from "oidc-client-ts";

const currentUri = window.location.origin;

const cognitoAuthConfig = {
    authority: "https://cognito-idp.eu-north-1.amazonaws.com/eu-north-1_PVDEJLbWr",
    client_id: "3sqcotan294u4lgf6r9dpr4r92",
    //redirect_uri: "https://cq-vue.michal-ca5.workers.dev",
		redirect_uri: `${currentUri}/authInfo`,
    response_type: "code",
    scope: "phone openid email"
};

// create a UserManager instance
export const userManager = new UserManager({
    ...cognitoAuthConfig,
});
//await userManager.signinRedirect();

export async function signOutRedirect () {
    const clientId = "3sqcotan294u4lgf6r9dpr4r92";
//    const logoutUri = "https://lfm.pages.dev";
    const logoutUri = `${currentUri}`;
		const cognitoDomain = "https://eu-north-1pvdejlbwr.auth.eu-north-1.amazoncognito.com";
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

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
