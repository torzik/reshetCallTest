<template>
  <b-container class="pa2">
    <h1>Edit Contact</h1>
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
import { mapActions, mapGetters } from "vuex";
export default {
  mounted() {
    const id = this.$route.params.id;
    if (id) {
      this.getContactById(id);
    }
  },
  data() {
    return {
      form: {
        name: "",
        phone: null,
        email: "",
        code: null
      }
    };
  },
  methods: {
    ...mapActions(["editContact", "getContactById"]),
    handleSubmit() {
      this.editContact(this.form);
      setTimeout(() => {
        this.onReset();
        this.$router.push("/");
      }, 750);
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
    ...mapGetters(["contact"])
  },
  watch: {
    contact(newData) {
      Object.assign(this.form, newData);
    }
  }
};
</script>