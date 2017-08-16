<template>
  <div class="wrapper">
    <div v-if=" info.image !== null && side === 'left' " :style=" 'box-shadow: 2px 1px 4px rgba(0,0,0,0.2), 10px 7px ' + info.color + ', 0 7px ' + info.color ">
      <img :src=" info.image ">
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

    <div v-if=" info.image !== null && side === 'right' " :style=" 'box-shadow: 2px 1px 4px rgba(0,0,0,0.2), 10px 7px ' + info.color ">
      <img :src=" info.image ">
    </div>
  </div>
</template>

<style lang="less">
  .wrapper {
    width: 100%;
    max-height: 350px;
    display: flex;
    margin-bottom: 100px;
  }
  img {
    height: 100%;
  }
  .details {
    display: flex;
    flex-direction: column;
    width: inherit;
  }
  h2 {
    display: inline-block;
    margin: 30px auto;
    font-size: 35px;
    font-weight: 300;
    font-style: italic;

    a {
      text-decoration: none;
    }
  }
  p {
    padding: 0 30px;
    margin: 5px 0;
  }
  .tech {
    text-align: center;
    margin: 15px 0 0px;
  }
  ul {
    list-style-type: none;
    padding: 0 30px;
  }
  li {
    padding-top: 5px;
  }
</style>

<script>
  export default {
    data() {
      return {
        margin: {
          left:  ( this.info.url === null || this.side === 'right' ) ? ( window.innerWidth - 1100 ) / 2 : 30,
          right: ( this.info.url === null || this.side === 'left' ) ? ( window.innerWidth - 1100 ) / 2 : 30
        }
      };
    },
    props: [ 'info', 'side' ]
  };
</script>
