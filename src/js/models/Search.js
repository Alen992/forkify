import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    
    async getResults() {
    // const res = await axios(`${PROXY}http://food2fork.com/api/search?key=${KEY}&q=${this.query}`);
  
    try {
      const res = await axios(
        `https://forkify-api.herokuapp.com/api/search?&q=${this.query}`
      );
    //   console.log(res);
      this.result = res.data.recipes;
    //  console.log(this.result);
    } catch (error) {
        alert(error);
    }
  }
}

// https://forkify-api.herokuapp.com/api/search
