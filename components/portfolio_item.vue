<template>
  <div class="wrapper">
    <div v-if=" !is_mobile && ( info.image !== null || info.video !== null ) && side === 'left' " class="img-wrapper" :style=" 'box-shadow: 2px 1px 4px rgba(0,0,0,0.2), 10px 7px ' + info.color + ', 0 7px ' + info.color + ( ( is_mobile && side === 'right' ) ? '; margin-left: auto' : '' ) ">
      <img v-if=" info.image !== null " :src=" info.image ">
      <iframe v-if=" info.video !== null " :src=" 'https://www.youtube.com/embed/' + info.video + '?rel=0&showinfo=0' " frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="details" :style="{ 'margin-left': margin.left + 'px', 'margin-right': margin.right + 'px' }">

      <h2>
        <span v-if=" info.url !== null ">
          <a :href="info.url">{{ info.title }}</a>
        </span>
        <span v-else>
          {{ info.title }}
        </span>
      </h2>

      <div v-if=" is_mobile && ( info.image !== null || info.video !== null ) " class="img-wrapper" :style=" 'box-shadow: 2px 1px 4px rgba(0,0,0,0.2), 10px 7px ' + info.color + ', 0 7px ' + info.color + ( ( is_mobile && side === 'right' ) ? '; margin-left: auto' : '' ) ">
        <img v-if=" info.image !== null " :src=" info.image ">
        <iframe v-if=" info.video !== null " :src=" 'https://www.youtube.com/embed/' + info.video + '?rel=0&showinfo=0' " frameborder="0" allowfullscreen></iframe>
      </div>

      <p>
        {{ info.main }}
      </p>

      <p class="tech">
        <strong>&mdash; The Tech &mdash;</strong>
      </p>

      <p v-html=" info.tech "></p>

      <ul v-if=" info.frontend !== null || info.backend !== null">
        <em>As for the rest of the stack…</em>
        <li><strong>Front-end:</strong> {{ info.frontend }}</li>
        <li v-if=" info.backend !== null "><strong>Back-end:</strong> {{ info.backend }}</li>
      </ul>
    </div>

    <div v-if=" !is_mobile && ( info.image !== null || info.video !== null ) && side === 'right' " class="img-wrapper" :style=" 'box-shadow: 2px 1px 4px rgba(0,0,0,0.2), 10px 7px ' + info.color ">
      <img v-if=" info.image !== null " :src=" info.image ">
      <iframe v-if=" info.video !== null " :src=" 'https://www.youtube.com/embed/' + info.video + '?rel=0&showinfo=0' " frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
</template>

<style lang="less">
  .wrapper {
    width: 100%;
    display: flex;
    padding: 20px 0 80px;

    @media ( max-device-width: 1024px ) {
      flex-direction: column;
    }
  }
  .img-wrapper {
    width: fit-content;
    height: fit-content;

    @media ( max-device-width: 1024px ) {
      margin-bottom: 50px;
    }
  }
  img {
    width: 35vw;

    @media ( max-device-width: 1024px ) {
      width: 75vw;
    }
  }
  .details {
    display: flex;
    flex-direction: column;
    width: inherit;
  }
  h2 {
    display: inline-block;
    margin: 0 auto 30px;
    font-size: 2rem;
    font-weight: 300;
    font-style: italic;

    a {
      text-decoration: none;
    }

    @media ( max-device-width: 1024px ) {
      margin-left: 0;
      margin-right: 0;
      text-align: left;
      padding: 0 50px;
    }
  }
  p {
    padding: 0 60px;
    margin: 5px 0;
  }
  .tech {
    text-align: center;
    margin: 15px 0 0px;
  }
  ul {
    list-style-type: none;
    padding: 0 60px;
  }
  li {
    padding-top: 5px;
  }

  iframe {
    width: 35vw;
    height: ~"calc( 35vw * 0.5625 )";

    @media ( max-device-width: 1024px ) {
      width: 75vw;
      height: ~"calc( 75vw * 0.5625 )";
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        is_mobile: window.innerWidth < 1024 ? true : false ,
        margin: {
          left:  ( this.info.image === null && this.info.video === null || this.side === 'right' ) && window.innerWidth > 1100 ? ( window.innerWidth - 1100 ) / 2 : 0,
          right: ( this.info.image === null && this.info.video === null || this.side === 'left' ) && window.innerWidth > 1100 ? ( window.innerWidth - 1100 ) / 2 : 0
        }
      };
    },
    props: [ 'info', 'side' ]
  };
</script>
