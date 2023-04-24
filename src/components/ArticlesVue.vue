<template>
    <div class="about">
        <h1 id="articles">Top Stories</h1>
        <form action="">
            <div class="mb-3">
                <input type="text" class="form-control" id="exampleFormControlInput1" v-model="search" placeholder="Search">
            </div>
        </form>
        <div v-if="teslas">

        
        <div class="container">
            <div v-for="(tesla, index) in searchArticles" :key="index">
                <div class="card">
                    <div v-if="tesla.urlToImage">
                        <img :src="tesla.urlToImage" class="card-img-top" alt="...">
                    </div>
                    <div v-else>
                        <img src="../assets/logo.png" alt="">
                    </div>
                <div class="card-body">
                    <h5 class="card-title">{{ tesla.title }}</h5>
                    <p class="card-text">{{ tesla.description }}</p>
                    <a :href="tesla.url" target="_blank" class="btn btn-primary">Read More</a>
                </div>
            </div>

        </div>
    </div>
</div>
<div v-else>
    <div class="spinner-border text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div></div>
</div>
</template>
  
<script>
export default {
    name: "ArticlesVue",
    data() {
        return {
            search: "",
        }
    },
    computed: {
        teslas: function () {
            return this.$store.state.articles;
        },

        searchArticles() {
            let filtering = this.teslas
            if (this.search.trim().length > 0) {
                filtering = filtering.filter((tesla) => tesla.title.toLowerCase().includes(this.search.toLowerCase()))
            }
            return filtering
        },
    },


    mounted() {
        this.$store.dispatch("getArticles")
    }
}
</script>
  
<style scoped>

.about{
    margin-top: 8rem;
}
.card {
    /* background-color: lightblue; */
    margin-top: 2rem;
    box-shadow: 2px 3px 3px grey;
    height: 35rem;
    width: 20rem;
}

.wrapper {
    width: 30rem;
    display: flex;
    margin-bottom: 2rem;
    height: 10rem;
    box-shadow: 3px 2px 3px 3px grey;
}

/* .card:hover{
        color: white;
    } */

h1 {
    color: #289DFF;
    margin-bottom: 3rem;
}


.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
}

form {
    width: 30rem;
    margin: auto;
}

input {
    width: 20rem;
}

a {
    margin-top: 2rem;
}

@media screen and (max-width: 1055px) {
    .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
}

form {
    width: 30rem;
    margin: auto;
}
    
}
@media screen and (max-width: 770px) {
    .container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 1rem;
    margin: auto;
}

.card{
    margin: auto;
    margin-top: 2rem;
}

form {
    width: 30rem;
    margin: auto;
}
    
}

@media screen and (max-width: 480px) {
    form {
    width: 15rem;
    margin: auto;
}
input {
    width: 15rem;
}
    
}

@media screen and (max-width: 350px) {
    .container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 1rem;
    margin: auto;
}

.card{
    margin: auto;
    margin-top: 2rem;
    width: 14rem;
}

form {
    width: 15rem;
    float: left;
}
    
}

@media screen and (max-width: 350px) {
    .container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 1rem;
    margin: auto;
}

.card{
    margin: auto;
    margin-top: 2rem;
    width: 14rem;
}

form {
    width: 10rem;
    float: left;
}

input {
    width: 10rem;
}
    
}
</style>
  