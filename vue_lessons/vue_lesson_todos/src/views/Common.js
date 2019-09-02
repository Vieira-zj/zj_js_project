// Functions
function dynamicPropsFn (route) {
  const now = new Date()
  return {
    name: now.getFullYear() + parseInt(route.params.years) + '!'
  }
}

// Components
const UserSettingsNav = {
  template: `
<div class="us__nav">
  <router-link to="/router/named/settings/emails">emails</router-link><br>
  <router-link to="/router/named/settings/profile">profile</router-link>
</div>
  `
}

const UserSettings = {
  template: `
<div class="us">
  <h2>User Settings</h2>
  <UserSettingsNav />
  <router-view class ="us__content" />
  <router-view name="helper" class="us__content us__content--helper" />
</div>
  `,
  components: { UserSettingsNav }
}

const UserEmailsSubscriptions = {
  template: `
<div>
  <h3>Email Subscriptions</h3>
</div>
  `
}

const UserProfile = {
  template: `
<div>
  <h3>Edit your profile</h3>
</div>
  `
}

const UserProfilePreview = {
  template: `
<div>
  <h3>Preview of your profile</h3>
</div>
  `
}

export default {
  dynamicPropsFn,
  UserSettings,
  UserEmailsSubscriptions,
  UserProfile,
  UserProfilePreview
}
