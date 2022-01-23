<template>
  <div>
    <h1>HelloWorld</h1>
    <div>
      <p>message: {{ msg }}</p>
      <button @click="onClick">Click Me</button>
    </div>
    <!-- computed properties -->
    <div>
      <p>
        <label for="firstname" class="right">First Name:</label>
        <input type="text" id="firstname" v-model="firstName" />
      </p>
      <p>
        <label for="lastname" class="right">Last Name:</label>
        <input type="text" v-model="lastName" />
      </p>
      <p>Full Name: {{ fullName }}</p>
    </div>
    <!-- emit -->
    <div>
      <p>
        <label for="add" class="right">Number:</label>
        <input type="text" id="add" v-model="num" class="right" />
        <button @click="addToCount(parseInt(num))">Add</button>
      </p>
      <label>{{ count }}</label>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: {
      type: String,
      default: "null",
    },
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      num: 0,
      count: 0,
    };
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
  firstName!: string;
  lastName!: string;
  addValue!: number;
  count!: number;
  // Computed properties
  get fullName(): string {
    if (this.firstName && this.lastName) {
      return `${this.firstName} ${this.lastName}`;
    }
    return "null";
  }
  public onClick(): void {
    console.log("click me");
  }
  // TODO: Watchers
  onNameChange(newName: string): void {
    console.log("total char:", newName.length);
  }
  // TODO: Emit
  addToCount(n: number): number {
    this.count += n;
    return this.count;
  }
  // TODO: Lifecycle hooks
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.right {
  margin-right: 10px;
}
</style>
