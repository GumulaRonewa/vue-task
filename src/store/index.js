import Vuex from 'vuex';
import Vue from 'vue';

import Memes from './modules/Memes';

Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		Memes
	}
})