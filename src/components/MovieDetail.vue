<template>
    <div>
        <h1>Details about {{movie.title}}</h1>
        <p>{{movie.overview}}</p>
    </div>
</template>
<script>
 import axios from "axios";
export default {
   

    name: "MovieDetail",
     data() {
         return {
             id: this.$route.params.movieId, 
            movie: Object
         }
     }, 
     mounted() {
         axios.get("https://api.themoviedb.org/3/movie/" + this.id + "?api_key=ce96ecaa99d9e4a73097699664325729")
         .then(movieInfo => {
             console.log(movieInfo.data);
             this.movie = movieInfo.data; 
         }); 
     }
}

</script>