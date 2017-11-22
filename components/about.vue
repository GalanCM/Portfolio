<template>
  <div class="about">
    <h1>Do you want a web site that is easy to use — with a <em>clean</em>, <strong>distinctive</strong> look?</h1>
    <h1>Do you want visuals that <em>engage</em> your users, that help them find what they are looking for and do what they need to do?</h1>
    <h1>Do you want <strong>UX principles</strong> to guide your product design from <em>front to back</em>?</h1>
    <h2>My name is <span class="name">Galan Montomery</span>. <em>I engineer websites</em> with an eye toward design.</h2>
    <h2><strong>And I am currently for hire.</strong></h2>
  </div>
</template>

<style lang="less" scoped>
  .about {
    margin-top: 50px;
    background-color: #000a14;
    max-width: 100%;
    padding: 50px 100px;

    @media ( max-device-width: 1024px ) and ( orientation: portrait ) {
      margin-top: 99px;
      padding: 50px 50px;
    }
  }

  h1 {
    font-size: 20px;
    font-family: Raleway, sans-serif;
    font-weight: 200;
    color: rgba(255,255,255,0.7);

    @media ( max-device-width: 1024px ) and ( orientation: portrait ) {
      font-size: 40px;
    }
  }
  h1:nth-of-type(2) {
    text-align: right;
  }
  h1:not(:first-of-type) {
    margin-top: 50px;
  }
  h1:first-of-type {
    margin-top: 0;
  }
  h1:not(:last-of-type) {
    margin-bottom: 50px;
  }
  h1:last-of-type {
    margin-bottom: 0;
  }
  h1 em {
    color: rgba(255,255,255,0.3);;
    font-size: 22px;

    @media ( max-device-width: 1024px ) and ( orientation: portrait ) {
      font-size: 44px;
    }
  }
  h1 strong {
    opacity: 1;
    font-size: 30px;
    color: rgba(255,255,255,1.0);

    @media ( max-device-width: 1024px ) and ( orientation: portrait ) {
      font-size: 50px;
    }
  }

  h2 {
    font-size: 28px;
    font-family: Lato;
    font-style: normal;
    text-align: center;
    font-weight: 400;
    margin-bottom: 0;
    color: rgba(255,255,255,0.4);

    @media ( max-device-width: 1024px ) and ( orientation: portrait ) {
      font-size: 56px;
    }
  }
  h2:first-of-type {
    margin-top: 70px;
  }
  h2 em {
    font-weight: 200;
    font-style: normal;
    color: rgba(255,255,255,0.9);
  }
  .name {
    font-weight: 900;
    font-size: 42px;
    color: rgba(255,255,255,1.0);

    @media ( max-device-width: 1024px ) and ( orientation: portrait ) {
      font-size: 72px;
    }
  }
  h2 strong {
    font-weight: 900;
    font-size: 30px;
    color: rgba(255,255,255,1.0);

    @media ( max-device-width: 1024px ) and ( orientation: portrait ) {
      font-size: 60px;
    }
  }
</style>