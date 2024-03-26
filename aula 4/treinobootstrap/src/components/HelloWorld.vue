<template>
  <div class="container">
    <div class="btn btn-outline-primary">Vue.js + Bootstrap</div>
    <div class="row my-3" id="content">
      <div class="col-md-4 bg-danger"></div>
      <div class="col-md-4 bg-primary"></div>
      <div class="col-md-4 bg-success"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#content div{
  height: 300px;
}
</style>
