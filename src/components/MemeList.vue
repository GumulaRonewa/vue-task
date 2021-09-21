<template>
    <table>
        <tr>
            <th >Meme</th>
            <th >Title</th>
            <th >Reason this is funny</th>
            <th >Actions</th>
        </tr>
         <tr :key="meme.id" v-for="meme in allMemes" :class="edit ? 'hidememe': 'memeitem' " >
          <td  >
          <img class="img-size" :src="meme.src" alt="meme" >
          </td>
          <td >
            <div>
                {{meme.name}}
            </div>
          </td>
          <td >{{meme.description}}</td>
          <td>
          <div>
            <i @click="onEdit(meme)" class="fas fa-pencil-alt"></i>  
            <i @click="onDelete(meme.id)" class="fas fa-trash-alt"></i>         
          </div>        
          </td> 
         </tr>
         <tr :class="edit ? '': 'hidememe' ">
            
             <td>
                <img class="img-size" :src="src"  alt="meme" > 
             </td>
             <td>
                 <div class="form-control">
                    <input type="text" v-model="name" name="name" placeholder="Meme Title" />
                 </div>
             </td>
             <td>
                 <div class="form-control">
                    <input type="text" v-model="description" name="description" placeholder="Reason this is funny" />
                 </div>
             </td>
             <td>
                 <button v-on:click="onSubmit" class="buttonSt">Edit</button>
             </td>
           
         </tr>
           
        
    </table>
</template>
<script type="text/javascript">
import { mapGetters,mapActions } from 'vuex'
export default{
    name:"MemeList",

    computed: mapGetters(['allMemes']),
    data() {
        return {
            edit:false,
            src:"",
             id:0,
             name: '',
             description: '',
            
           }
     },
    
     methods:{
            ...mapActions(['deleteMeme','EditMeme']),
            onDelete(id){
                this.deleteMeme(id);
            },
            onEdit(meme){
                this.edit =!this.edit;
                this.id=meme.id;
                this.name=meme.name;
                this.src=meme.src;
                this.description=meme.description
            },
            onSubmit(e) {
              e.preventDefault()
              console.log("xj")
              if (!this.name || !this.description) {
                alert('Please add a name or description')
                return
              }
              const meme = {
                id:this.id,
                src:this.src,
                name: this.name,
                description: this.description,
              }
              this.EditMeme(meme);
             this.edit =!this.edit;
              
          }
        },
        emits:['edit-meme']

}
</script>

<style scope>
table{
  border-top: 1px solid #007AF3;
  border-bottom: 1px solid #007AF3;
  border-left: 1px solid #007AF3;
  border-right: 1px solid #007AF3;
  table-layout: fixed;
}
th {
  border-top: 1px solid #007AF3;
  border-bottom: 1px solid #007AF3;
  
  table-layout: fixed;
}
tr{
  border-bottom: 1px solid #007AF3;
}

table {
  margin-top:20px;
  width: 80%;
  border-collapse: collapse;
}
.fas{
 height:40px;
 width:55px;
 margin-left:5px;
 border-radius:30px;
 top:2px;
 background-color:grey;
 padding-top:15px
}
.buttonSt{
  color: white;
  width: 100px;
    border-color: white;
      box-shadow: 0 5px 5px rgba(0,0,0,0.3);

  height: 36px;
  border-radius: 10px;
  background-color:#007AF3;
}
.hidememe{
  display:none
  
  }
.img-size{
  width:120px;
  height:120px;
  }
   .form-control {
  margin: -4px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 70%;
  height: 100px;
  
  font-size: 17px;
}
</style>