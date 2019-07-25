<template>
  <div>
    <h1>Event Listing</h1>
    <EventCard
      v-for="event in events"
      :key="event.id"
      :event="event"
    ></EventCard>

    <!-- <router-link :to="{name:'event-show',params:{'id':'1'}}">Show Event #1</router-link> -->
  </div>
</template>



<script>
import EventCard from "@/components/EventCard.vue";
// import axios from "axios";
import EventService from "@/services/EventService.js";

export default {
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    };
  },

  created() {
    // console.log("Beginning loadding api...");
    EventService.getEvents()
      .then(response => {
        // console.log(response.data);
        this.events = response.data;
      })
      .catch(error => {
        console.log(error);
      });

    console.log("End loadding api...");
  }
};
</script>
