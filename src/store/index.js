import { createStore } from 'vuex'
import axios from 'axios';
// const techAPI = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7826b7d90f264dc189abac14ff4946c6"
const wallStreetAPI = "https://bnry-api.onrender.com"
export default createStore({
  state: {
    articles: null,
    teslas: null,
    bussiness: null,
    techCrunch: null,
    wallStreet: null
  },
  getters: {
  },
  mutations: {
    setArticles(state, values){
      state.articles = values
    }
  },
  actions: {
    getArticles: async(context) => {
      const res = await axios.get(`${wallStreetAPI}`);
      const results = await res.data.articles;
      console.log(res.data.articles)
      if(results) {
        console.log(results)
        context.commit('setArticles', results);
      }
      else{
        context.commit('setArticles', []);
      }
    }
  },
  modules: {
  }
})