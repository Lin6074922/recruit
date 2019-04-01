<template id='Title'>
  <div class="title d-flex">
    <h1 class=" text-white mr-5">高级java开发工程师/技...</h1>
    <h2 class="redcolor">
      25K-40K
    </h2>
  </div>
</template>

<script>

// Vue.component('tiTle',title)
export default {
  name:'tile',
  data() {
    return {
       
    }
  },
}
</script>

<style>
.title{
 padding: 0.5rem 0; 
}
.title h1{
max-width: 24.75rem;
font-size: 2rem;
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;

}
.title h2{
  font-weight: 600;
}
</style>