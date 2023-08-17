let SubForm = {
  props: {
    data: Object,
  },
  // template: "#subform",
  template: `
  <div>
    <p>Form</p>
    <hr />
    <label for="name">UserName</label>
    <input v-model="data.name" id="name" />
    <label for="age">UserAge</label>
    <input v-model="data.age" id="age" />
  </div>`
}
