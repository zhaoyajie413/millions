
const user = {
  namespaced: true,  //多出的一行
  state: {
    name: 'mayuyu',
    tags:[]
  },

  mutations: {
    SET_TAGS:(state, tags) => {
      sessionStorage.setItem('tags',JSON.stringify(tags));
      state.tags = tags
    },
  },
  getters: {
    // ...
    getTags: (state) => {
      if(state.tags.length ==0){
        let listString = sessionStorage.getItem('tags');
        if(listString)state.tags = JSON.parse(listString);
      }
      return state.tags;
    }
  },
  actions: {


  }
}

export default user
