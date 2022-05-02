<template>
    <div>
        <h1>Now Playing Movies</h1>
            <div class="bordered" v-for="movie of movies" :key="movie.id">
                <h1>{{movie.title}}</h1>
                <p>{{movie.overview}}</p>
                <router-link :to="'movies/' + movie.id">More info about {{movie.title}}</router-link>
            </div>
    </div>
</template>

<script>
import axios from 'axios';

export default{
    name:"MoviesDb", 
    data() {
        return {
            movies: []
        }
    }, 
    mounted() {
        axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=ce96ecaa99d9e4a73097699664325729")
        .then(data => {
            this.movies = data.data.results.map(movie => {
                if(movie.overview.length > 300) movie.overview = movie.overview.substring(0, 200) + '...'; 
                return movie; 
            }); 
            console.log(this.movies);
        });
    }
}
</script>

<style scoped> 

.bordered {

    width: 85%;
    margin: 0 auto 5;

    border: 1px solid black;
    padding: 10px;
    text-align: left;
}

</style>