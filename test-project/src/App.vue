<template>
  <div id="app">
    <Posts/>
  </div>
</template>
<script type="text/javascript">
  import Posts from './components/Posts.vue'

export default {
  components: {
    Posts
  },
  created:function(){
    console.log('testeabdo');
  }
}
</script>
<style lang="scss">
@import './styles/main.scss';
</style>