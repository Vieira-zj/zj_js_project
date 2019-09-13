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
<div>
  <router-link to="/router/namedview/settings/emails">emails</router-link><br>
  <router-link to="/router/namedview/settings/profile">profile</router-link>
</div>
  `
}

const UserSettings = {
  template: `
<div>
  <h2>User Settings</h2>
  <UserSettingsNav />
  <router-view />
  <router-view name="helper" />
</div>
  `,
  components: { UserSettingsNav }
}

const UserEmailsSubscriptions = {
  template: '<div><p>Email Subscriptions</p></div>'
}
const UserProfile = {
  template: '<div><p>Edit your profile</p></div>'
}
const UserProfilePreview = {
  template: '<div><p>Preview of your profile</p></div>'
}

export default {
  func: {
    dynamicPropsFn
  },
  elements: {
    UserSettings,
    UserEmailsSubscriptions,
    UserProfile,
    UserProfilePreview
  }
}
