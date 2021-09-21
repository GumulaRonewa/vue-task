<template>
  <div id="app">
     <div class="nav">
        <h3 class="text">MemeGram</h3>
        
     </div>
    <AddMeme   />
    <MemeList/>
  </div>
</template>

<script>
import MemeList from './components/MemeList.vue'
import AddMeme from './components/AddMeme.vue'

export default {
  name: 'App',
  components: {
    MemeList,
    AddMeme,
  },
  
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display:grid;
  place-items:center;
  color: #2c3e50;
}
 .nav{
 background:white;
 width:110%;
 height:50px;
 border-bottom:2px solid black;
 }
  .text{
    font-family:Poppins sans-serif;
    font-size:18px;
    left:0
  }
</style>
