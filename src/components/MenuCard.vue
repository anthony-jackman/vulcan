<script setup>
const props =  defineProps({
  imageFilename: {
    type: String,
    required: false
  },
  cardTitle: {
    type: String,
    required: true
  },
  linkTo: {
    type: String,
    required: false
  }
});

const getImageUrl = (imageFilename) => {
  return new URL(`../assets/icons/${props.imageFilename}`, import.meta.url).href
}

</script>

<template>
  <div class='card'>
    <div class='card-image'>
      <figure class='image'>
        <img :src="getImageUrl(props.imageFilename)">
      </figure>
    </div>
    <header class='card-header'>
      <p class='card-header-title is-centered'>{{ cardTitle }}</p>
    </header>
    
  </div>
</template>

<style lang="scss">

</style>
