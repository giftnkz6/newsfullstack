<template>
    <header>
        <nav class="navbar navbar-expand-lg w-100">
            <div class="container-fluid">
                <a href="#home"><img  class="logo" src="https://i.postimg.cc/GpFmXDCM/Screenshot-12-removebg-preview.png" alt="news logo"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#articles">Articles</a></li>
                    </ul>
  
                </div>
            </div>
        </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  }
  </script>
  <style scoped>
  a {
    /* color: black; */
    font-size: larger;
    color: white;
  }
  li {
    margin: 1.5rem;
  }
  .logo {
    width: 4rem;
  }
  .navbar-nav li {
    margin: 0 4rem;
  }
  .navbar {
    z-index: 3;
    background-color: lightblue;
    position: fixed;
    top: 0px;
  }
  .navbar ul {
    font-size: 18px;
  }
  /* header {
    z-index: +3;
  } */
  a {
    text-decoration: none;
  }</style>