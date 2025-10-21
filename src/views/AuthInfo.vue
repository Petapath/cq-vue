<script setup type="module">
    import {ref} from "vue";
    import {getUser} from "@/main.js";

    const user = getUser();
    const email = ref(user.profile?.email);
    const accessToken = ref(user.access_token);
    const idToken = ref(user.id_token);
    const refreshToken = ref(user.refresh_token);
</script>

<template>
  <div>
    Hello: <pre id="email">{{ email }}</pre>
    Access token: <pre id="access-token">{{ accessToken }}</pre>
    ID token: <pre id="id-token">{{ idToken }}</pre>
    Refresh token: <pre id="refresh-token">{{ refreshToken }}</pre>
  </div>
</template>