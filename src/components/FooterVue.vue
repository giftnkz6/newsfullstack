<template>
    <div class= "wrapper">
      <div>
        <ul>
            <h5>Shortcuts</h5>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#articles">Articles</a></li>
            <!-- <li><a href="#about"></a><router-link to="/contact">Contact</router-link></li> -->
        </ul>
      </div>
      <div>
        <ul>
            <h5>Connect with us</h5>
            <li><a href=""><i class="fa-brands fa-linkedin"></i></a></li>
            <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
            <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
        </ul>
      </div>
      <div>
        <ul>
            <h5>Visit Us</h5>
            <address>
            News Online<br>
            3000 Mandela Road,<br> Woodstock
            South Africa
            <br>
        </address>
        </ul>
      </div>
      <div class="copyright">
        <p>copyright &copy; 2023</p>
      </div>
    </div>
</template>

<script>
    export default{
        name: "FooterVue"
    }
</script>

<style scoped>
    .wrapper{
        display: grid;
        grid-template-columns: .5fr 1fr 1fr 1fr;
        background-color: whitesmoke;
        margin-top: 3rem;
    }
    ul{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    .fa-brands{
        font-size: x-large;
    }
    .fa-linkedin{
        color: blue;
        /* background-color: white; */
    }
    .fa-instagram{
        color: orangered;
    }
    .fa-facebook{
        color: blue;
    }
    fa-twitter{
        color: skyblue;
    }
    @media screen and (max-width: 400px) {
        .wrapper{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
        
    }
</style>