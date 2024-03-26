<template>
  <Gallery name="Galeria de Montanhas" :selectedImage="selectedImageG1" :images="imagesG1" />
  <Gallery name="Galeria de Carros" :selectedImage="selectedImageG2" :images="imagesG2" />
  <Gallery name="Galeria Minimizada de Montanhas" :selectedImage="selectedImageG3" :images="imagesG3" theme="minimized" />
  <Gallery name="Galeria Minimizada de Carros" :selectedImage="selectedImageG4" :images="imagesG4" theme="minimized" />
</template>

<script>
import Gallery from "./components/Gallery.vue";

export default {
  name: "App",
  components: {
    Gallery,
  },
  data() {
    return {
      selectedImageG1: { title: "Title 1 Test", img: "/img/g1.webp" },
      imagesG1: [
        { title: "Title 1 ::", img: "/img/g1.webp" },
        { title: "Title 2", img: "/img/g2.jpg" },
        { title: "Title 3", img: "/img/g3.jpg" },
        { title: "Title 4", img: "/img/g4.jpg" },
        { title: "Title 5", img: "/img/g5.jpg" },
        { title: "Title 6", img: "/img/g6.jpg" },
        { title: "Title 7", img: "/img/g7.webp" },
        { title: "Title 8", img: "/img/g8.jpg" },
        { title: "Title 9", img: "/img/g1.webp" },
        { title: "Title 10", img: "/img/g2.jpg" },
        { title: "Title 11", img: "/img/g3.jpg" },
        { title: "Title 12", img: "/img/g4.jpg" },
        { title: "Title 13", img: "/img/g5.jpg" },
        { title: "Title 14", img: "/img/g6.jpg" },
        { title: "Title 15", img: "/img/g7.webp" },
        { title: "Title 16", img: "/img/g8.jpg" },
      ],
      selectedImageG2: { title: "Carro 1", img: "/img/c1.png" },
      imagesG2: [
        { title: "Carro 1", img: "/img/c1.png" },
        { title: "Title 2", img: "/img/c2.jpg" },
        { title: "Title 3", img: "/img/c3.webp" },
        { title: "Title 4", img: "/img/c4.jpg" },
      ],
      selectedImageG3: { title: "Title 1 Test", img: "/img/g1.webp" },
      imagesG3: [
        { title: "Title 1 ::", img: "/img/g1.webp" },
        { title: "Title 2", img: "/img/g2.jpg" },
        { title: "Title 3", img: "/img/g3.jpg" },
        { title: "Title 4", img: "/img/g4.jpg" },
        { title: "Title 5", img: "/img/g5.jpg" },
        { title: "Title 6", img: "/img/g6.jpg" },
        { title: "Title 7", img: "/img/g7.webp" },
        { title: "Title 8", img: "/img/g8.jpg" },
        { title: "Title 9", img: "/img/g1.webp" },
      ],
      selectedImageG4: { title: "Carro 1", img: "/img/c1.png" },
      imagesG4: [
        { title: "Carro 1", img: "/img/c1.png" },
        { title: "Title 2", img: "/img/c2.jpg" },
        { title: "Title 3", img: "/img/c3.webp" },
        { title: "Title 4", img: "/img/c4.jpg" },
      ],
    };
  },
};
</script>

<style>
body {
  background: #292323;
  max-width: 960px;
  margin: 20px auto;
}
</style>
