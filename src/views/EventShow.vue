<template>
  <div>
    <h1>Show Eevnt #{{id}}</h1>
  </div>
</template>




<script>
export default {
  props: {
    id: {
      required: true
    }
  }
};
</script>