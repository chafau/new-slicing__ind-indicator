<template>
  <div class="form-inline">
    <div>
      <label>
        <span class="strong-label">{{ fieldLabel }}</span>
        <input
          :type="password"
          class="password-field form-control d-inline"
          v-model="password"
        />
        <span class="display-eye fa fa-eye" @click="showPassword"></span>
      </label>
    </div>
  </div>
</template>
<style scoped>
input {
  margin-right: -30px;
  padding-right: 35px;
}
.strong-label {
  margin-right: 10px;
  font-weight: 900;
}
.display-eye {
  cursor: pointer;
}
</style>
<script>
export default {
  data() {
    return {
      password: "",
      passwordHidden: "password",
    };
  },
  methods: {
    showPassword() {
      this.passwordHidden =
        this.passwordHidden === this.passwordHidden ? "text" : "password";
    },
  },
};
</script>
