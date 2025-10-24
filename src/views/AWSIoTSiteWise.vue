<template>
	<div>
    {{ assetModelSummaries.assetModelSummaries }}
	</div>
</template>

<script setup type="module">
  import {ref} from "vue";

  import {
						IoTSiteWiseClient, 
	        	ListAssetModelsCommand, 
						ListAssetsCommand,
						GetAssetPropertyValueCommand
					} from "@aws-sdk/client-iotsitewise";

  import {fromCognitoIdentityPool} from "@aws-sdk/credential-provider-cognito-identity";
  import {getUser} from "@/main.js";

  const assetModelSummaries = ref(null);
  const user = getUser();
	console.log(user);
  const cognitoProvider = fromCognitoIdentityPool({
    clientConfig: {
      region: "us-east-1", // Replace with your AWS Region
    },
    identityPoolId: "us-east-1:a25c5ccd-e232-47cf-82dd-b518445f44a5", // Replace with your Identity Pool ID,
    logins: {
      // Map your User Pool's identity provider to the ID token
      "cognito-idp.us-east-1.amazonaws.com/us-east-1_ookACd3FN": user.id_token,
    },
  });

  const client = new IoTSiteWiseClient({ region: "us-east-1", credentials: cognitoProvider });
  //const command = new ListAssetModelsCommand({});
  //const command = new ListAssetsCommand({assetModelId: "414899ff-a619-4396-9cdb-f48913bd6001"});
  //const command = new ListAssetsCommand({assetModelId: "externalId:CQModel"});
  const command = new GetAssetPropertyValueCommand({assetId:   "4b5e9f28-5b1e-4ae0-9a4a-60e94d85030e",
	                                                  propertyId:"f8d711a4-23d0-41f7-919b-c302259bb3b8"});
  client.send(command).then((result) => assetModelSummaries.value = result);
</script>
