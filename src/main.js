import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'



// OIDC 


import { UserManager } from "oidc-client-ts";

const cognitoAuthConfig = {
    authority: "https://cognito-idp.eu-north-1.amazonaws.com/eu-north-1_FmJL162V7",
    client_id: "72eh4635l92ar1inrulgbuf7gt",
    redirect_uri: "https://d84l1y8p4kdic.cloudfront.net",
    response_type: "code",
    scope: "email openid phone"
};

// create a UserManager instance
export const userManager = new UserManager({
    ...cognitoAuthConfig,
});

export async function signOutRedirect () {
    const clientId = "72eh4635l92ar1inrulgbuf7gt";
    const logoutUri = "<logout uri>";
    const cognitoDomain = "https://eu-north-1fmjl162v7.auth.eu-north-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
};


// APP

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
