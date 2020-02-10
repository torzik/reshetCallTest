<template>
  <b-container class="pa2">
    <h1>Add new contact</h1>
    <b-form @reset="onReset">
      <b-row>
        <b-col cols="6">
          <b-form-group id="input-group-2" label="Your Name:" label-for="input-1">
            <b-form-input
              id="input-1"
              name="name"
              v-model="form.name"
              required
              placeholder="Enter name"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group id="input-group-2" label="Your Phone:" label-for="input-2">
            <b-form-input
              id="input-2"
              name="phone"
              v-model="form.phone"
              required
              placeholder="Enter phone"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group id="input-group-1" label="Email address:" label-for="input-3">
            <b-form-input
              id="input-3"
              name="email"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>
        </b-col>

        <b-col cols="6">
          <b-form-group id="input-group-2" label="Your Code:" label-for="input-4">
            <b-form-input
              id="input-4"
              name="code"
              v-model="form.code"
              required
              placeholder="Enter code"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-button @click.prevent="handleSubmit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </b-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        name: "",
        phone: null,
        email: "",
        code: null
      },
      show: true
    };
  },
  methods: {
    ...mapActions(["addContact"]),
    handleSubmit() {
      if (this.isValidForm) {
        this.addContact(this.form);
        setTimeout(() => {
          this.onReset();
          this.$router.push("/");
        }, 1000);
      }
    },
    onReset(evt) {
      if (evt) evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.code = null;
      this.form.phone = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  },
  computed: {
    isValidForm() {
      var phoneRegEx = /^\+(?:[0-9] ?){6,14}[0-9]$/;
      var emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return (
        !!this.form.name &&
        !!this.form.phone &&
        !!phoneRegex.test(this.form.phone) &&
        !!this.form.email &&
        !!emailRegEx.test(this.form.email) &&
        !!this.form.code
      );
    }
  }
};
</script>
