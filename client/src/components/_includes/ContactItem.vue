<template>
  <b-row class="justify-content-md-center single-contact">
    <b-col cols="1">{{contact._id}}</b-col>
    <b-col cols="2">{{contact.name}}</b-col>
    <b-col cols="2">{{contact.email}}</b-col>
    <b-col cols="2">{{contact.phone}}</b-col>
    <b-col cols="3">{{contact.code}}</b-col>
    <b-col cols="2">
      <b-button variant="warning" class="mr-2" :to="`/contact/edit/${contact._id}`">
        <b-icon-pencil></b-icon-pencil>
      </b-button>
      <b-button variant="danger" @click.stop="deleteContact(contact._id)">
        <b-icon-trash></b-icon-trash>
      </b-button>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "ContactItem",
  props: ["contact"],
  methods: {
    deleteContact(id) {
      this.$emit("deleteContact", id);
    }
  }
};
</script>

<style>
.single-contact * {
  text-overflow: ellipsis;
  overflow: scroll;
}
</style>