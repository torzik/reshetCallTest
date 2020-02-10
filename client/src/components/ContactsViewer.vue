.<template>
  <div>
    <h1>Contacts List</h1>

    <b-row class="table bordered outlined" v-if="contacts">
      <b-col>
        <b-row class="justify-content-md-center single-contact">
          <b-col cols="1">ContactID</b-col>
          <b-col cols="2">Contact Name</b-col>
          <b-col cols="2">Contact Email</b-col>
          <b-col cols="2">Contact Phone</b-col>
          <b-col cols="3">Code</b-col>
          <b-col cols="2">Actions</b-col>
        </b-row>
        <contact-item
          v-for="contact in contacts"
          :key="contact._id"
          @deleteContact="deleteContact"
          :contact="contact"
          class="mb-2"
        ></contact-item>
      </b-col>
    </b-row>
    <div v-else>
      <h2>No Data</h2>
    </div>
    <b-button type="button" variant="success" to="/contact/add">
      <b-icon-plus></b-icon-plus>New Contact
    </b-button>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import ContactItem from "@/components/_includes/ContactItem";
export default {
  name: "ContactsViewer",
  components: {
    ContactItem
  },
  mounted() {
    this.getContacts();
  },
  methods: {
    ...mapActions(["getContacts", "deleteContact"]),
    editContact(id) {
      this.$router.push(`contacts/edit/${id}`);
    }
  },
  computed: {
    ...mapGetters(["contacts"])
  }
};
</script>
<style>
</style>