<template>
  <div class="home">
    <contacts-viewer />
  </div>
</template>

<script>
// @ is an alias to /src
import ContactsViewer from "@/components/ContactsViewer";

export default {
  name: "Home",
  components: {
    ContactsViewer
  }
};
</script>
