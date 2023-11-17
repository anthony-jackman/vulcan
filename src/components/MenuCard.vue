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
    <div class='card-image mb-2'>
      <figure class='image is-4by3'>
        <img :src="getImageUrl(props.imageFilename)">
      </figure>
    </div>
    <div class='has-text-centered'>
      <p class="has-text-weight-bold">{{ cardTitle }}</p>
    </div>
  </div>
</template>

