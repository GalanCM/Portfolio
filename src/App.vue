<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Index</router-link> |
      <router-link to="/abnpmout">About</router-link> 
    </div> -->
    <router-view/>
    <!-- <img src="./assets/logo.png"> -->
  </div>
</template>

<style lang="less">
  body {
    background-color: #aab;
    color: rgb(12, 27, 42);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  h7,
  h8,
  h9 {
    font-family: Raleway, "sans-serif";
  }

  p {
    font-family: Lato, "sans-serif";
  }

  a {
    color: #006cd5;
    text-decoration: none;
  }

  @media (max-width: 1024px) and (orientation: portrait) {
    html {
      font-size: 40px;
    }
  }

  @media (max-width: 1024px) and (orientation: landscape) {
    html {
      font-size: 25px;
    }
  }
</style>
