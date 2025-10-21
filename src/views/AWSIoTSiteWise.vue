<template>
	<div>
    {{ assetModelSummaries.assetModelSummaries }}
	</div>
</template>

<script setup type="module">
  import {ref} from "vue";
  import {IoTSiteWiseClient, ListAssetModelsCommand} from "@aws-sdk/client-iotsitewise";
  import {fromCognitoIdentityPool} from "@aws-sdk/credential-provider-cognito-identity";
  import {getUser} from "@/main.js";

  const assetModelSummaries = ref(null);
  const user = getUser();
  const cognitoProvider = fromCognitoIdentityPool({
    clientConfig: {
      region: "eu-north-1", // Replace with your AWS Region
    },
    identityPoolId: "eu-north-1:d01661f1-64d3-494c-846b-6d1a72235aae", // Replace with your Identity Pool ID,
    logins: {
      // Map your User Pool's identity provider to the ID token
      "cognito-idp.eu-north-1.amazonaws.com/eu-north-1_PVDEJLbWr": user.id_token,
    },
  });

  const client = new IoTSiteWiseClient({ region: "us-east-1", credentials: cognitoProvider });
  const command = new ListAssetModelsCommand({});
  client.send(command).then((result) => assetModelSummaries.value = result);
</script>
