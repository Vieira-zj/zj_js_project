<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { googleSdkLoaded } from 'vue3-google-login'

import { clientId, clientSecret } from '@/assets/secret.js'

// refer: https://medium.com/@toluarejibadey/how-to-use-google-login-in-vuejs-8c50cc2fa054

async function sendCodeToBackend (code) {
  try {
    const resp = await axios.post(
      'https://oauth2.googleapis.com/token',
      {
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: 'postmessage',
        grant_type: 'authorization_code'
      }
    )
    const accessToken = resp.data.access_token
    console.log('token:', accessToken)

    // fetch user details using the access token
    const userResp = await axios.get(
      'https://www.googleapis.com/oauth2/v3/userinfo',
      {
        headers: { Authorization: `Bearer ${accessToken}` }
      }
    )
    const userDetails = userResp.data
    console.log('user detail:', userDetails)
  } catch (err) {
    console.error('Token exchange failed:', err.message)
  }
}

function onGLogin () {
  googleSdkLoaded(google => {
    google.accounts.oauth2
      .initCodeClient({
        client_id: clientId,
        scope: 'email profile openid',
        callback: resp => {
          if (resp.code) {
            sendCodeToBackend(resp.code)
          }
        }
      })
      .requestCode()
  })
}

// refer:
// https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid?hl=zh-cn
// https://stackoverflow.com/questions/68438293/the-given-origin-is-not-allowed-for-the-given-client-id-gsi

const clientIdRef = ref(clientId)
</script>

<template>
  <div>
    <button @click='onGLogin'>Google Login</button>
    <hr style="margin-top: 10px; margin-bottom: 10px" />

    <div style="width: 200px">
      <div id="g_id_onload" ref="g_id_onload" :data-client_id="clientIdRef" data-context="signin" data-ux_mode="popup"
        data-callback="onGoogleSignIn" data-auto_prompt="false">
      </div>
      <div class="g_id_signin" data-type="standard" data-shape="rectangular" data-theme="outline" data-text="signin_with"
        data-size="large" data-logo_alignment="left">
      </div>
    </div>
  </div>
</template>
