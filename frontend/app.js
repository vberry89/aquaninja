// app.js
    
new Vue({

export default {
    data() {
      return {
        quote: ''
      }
    },
    methods: {
      getQuote() {
        this.$http
          .get('http://localhost:8081/listusers', (data) => {
            this.quote = data;
          })
          .error((err) => console.log(err))
      }
    }
  }});