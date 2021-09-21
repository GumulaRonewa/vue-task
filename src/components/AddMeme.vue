<template >

	<form  @submit="onSubmit">
		<div class="form-control">
        <h4>My Favourite Memes</h4>
         <input type="file" @change="onFileChange" accept="image/*" name="text" placeholder="Upload Meme" />
         </div>
         <div class="form-control">
         <input type="text" v-model="name" name="name" placeholder="Meme Title" />
         </div>
         <div class="form-control">
         <input type="text" v-model="description" name="description" placeholder="Reason this is funny" />
         </div>
         <div>
          <div class="end">
            <button class="buttonSt">
              Add
            </button>
          </div>
         
         </div>
	</form>
</template>

<script>
import {mapActions} from 'vuex'
import axios from "axios"
export default {
  name: 'AddMeme',
  
  data() {
    return {
      name: '',
      description: '',
      src:null
    }
  },
  
  methods: {
    ...mapActions(['addMeme']),
    onSubmit(e) {
      e.preventDefault()
      if (!this.name || !this.description) {
        alert('Please add a name or description')
        return
      }
      const meme = {
        id:Date.now(),
        name: this.name,
        description: this.description,
        src:this.src
      }
      this.addMeme(meme);
      this.name = ''
      this.description = ''
    },
    onFileChange(e){
      const img=e.target.files[0]
      //const reader =new FileReader();
      const api="4b2418a2566f59a449107d77ee4c0cfa";
      let body =new FormData();
      body.set('key',api)
      body.set('image',img)
           axios({
               method:"post",
               url:"https://api.imgbb.com/1/upload",
               data:body
           }).then(res =>{
               const result=res.data.data
               this.src=result.display_url
           })
       
      
    },
    onEdit(meme){
    console.log(meme)
    }
  }
 
}
</script>

<style scoped>

.form-control {
  margin: -4px 0;
}
.end{
  display:flex;
  flex-direction:row;
  justify-content:flex-end;
}
.buttonSt{
  color: white;
  width: 120px;
    border-color: white;
      box-shadow: 0 5px 5px rgba(0,0,0,0.3);

  height: 36px;
  border-radius: 10px;
  background-color:#007AF3;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 90%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.img-size{
  width:120px;
  height:120px;
  }
</style>