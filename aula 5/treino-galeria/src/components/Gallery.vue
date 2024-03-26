<template>
  <div :class="{ minimized: theme === 'minimized' }">
    <div class="container-gallery">
      <h2>{{ name }}</h2>
      <div id="selected-image-title">
        <h3>{{ selectedImage.title }}</h3>
      </div>
      <div id="selected-image">
        <img :src="selectedImage.img" :alt="selectedImage.title" />
      </div>
      <div id="gallery">
        <div v-for="image in images" class="gallery-item">
          <img
            @click="selectImage(image)"
            :src="image.img"
            :alt="image.title"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["selectedImage", "images", "name","theme"],

  methods: {
    selectImage(image) {
      this.selectedImage.img = image.img;
      this.selectedImage.title = image.title;
    },
  },
};
</script>

<style>
.container-gallery {
  height: 100vh;
}
.minimized .container-gallery{
    height: auto;
    width:50%;
}
.minimized.container-gallery {
  height: 50vh;
}
.container-gallery h2 {
  color: #fff;
}
#selected-image-title h3 {
  display: inline-block;
  padding: 10px 20px;
  margin: 0;
  border-radius: 10px 10px 0 0;
  background: red;
  color: #fff;
}

#selected-image img {
  height: 70vh;
  width: 100%;
  margin: 0 auto;
}
.minimized #selected-image img{
    height: 30vh;
    width: 100%;
    margin: 0 auto;
}

#selected-image {
  margin: 0;
}

#gallery {
  display: flex;
  background: #201e1e;
  padding: 10px 0;
  margin: 0;
  width: 100%;
  overflow-x: scroll;
  scrollbar-color: red #201e1e;
}

.gallery-item {
  margin: 3px;
}

.gallery-item img {
  width: 80px;
  height: 60px;
}
</style>