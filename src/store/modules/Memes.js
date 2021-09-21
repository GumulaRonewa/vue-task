
const state={
	memes:[{id:2,name:"Mourinho Headphones",description:" Mourinho removing headphone during aboring press conference ",src:"https://i.kym-cdn.com/photos/images/newsfeed/002/080/600/aab.jpg"},
      {id:1,name:"Shaq Funny face",description:"Shaq's reactions after eating a hot wing",src:"https://i.kym-cdn.com/entries/icons/original/000/029/043/Shaq_Tries_to_Not_Make_a_Face_While_Eating_Spicy_Wings___Hot_Ones_11-21_screenshot.png"}
      ]
};

const getters={
	allMemes:(state) => state.memes
};

const actions={
	addMeme({ commit},meme){
		commit("newMeme",meme)
	},
	deleteMeme({commit},id){
		commit("delMeme",id)
	},
	EditMeme({commit},meme){
		commit("editMeme",meme)
		
	}
}

const mutations={
	newMeme:(state,meme)=> state.memes.unshift(meme),
	delMeme:(state,id) => state.memes= state.memes.filter((meme) => meme.id !==id),
	editMeme:(state,meme) => {
    state.memes= state.memes.filter((item) => item.id !==meme.id);
	state.memes.unshift(meme)	 
	}
}

export default{
	state,
	getters,
	actions,
	mutations
}