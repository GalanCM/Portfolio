<template>
  <section>
    <h1>Portfolio</h1>
    <svg height="40" width="100%">
      <line x1="0" y1="28px" x2="100%" y2="28px" stroke-width="2px" stroke="rgb(12, 27, 42)"></line>
    </svg>
    <span class="nav-bg">
      <div class="thumb" :style="thumb_style"></div>

      <span :class=" [ 'nav', current_tab === 'tab-websites' ? 'active' : '' ] " @click=" set_tab( 'tab-websites' )" ref="tab-websites">
        Websites
      </span>
      <span :class=" [ 'nav', current_tab === 'tab-games' ? 'active' : '' ] " @click=" set_tab( 'tab-games' )" ref="tab-games">
        Games
      </span>
    </span>
  </section>
</template>

<style lang="less" scoped>
  section {
    margin-top: 60px;
  }

  h1 {
    font-size: 40px;
    font-weight: 700;
    background-color: rgb(250, 250, 255);
    width: fit-content;
    padding: 10px;
    display: inline-block;
    margin: 0px;
    position: relative;
    z-index: 1;
  }

  svg {
    position: relative;
    top: -60px;
  }

  .nav-bg {
    background-color: #dadadf;
    font-size: 20px;
    position: relative;
    top: -98px;
    left: 260px;
    box-shadow: 1px 2px 7px rgba(0,0,0,0.3) inset;
    display: inline-block;
  }
  .nav {
    display: inline-block;
    position: relative;
    font-weight: 600;

    &:not( .active ) {
      color: saturate( lighten( rgb(12, 27, 42), 30% ), 10% );
      cursor: pointer;
    }

    &:first-of-type {
      padding: 10px;
      padding-right: 5px;
      border-left: 2px solid rgb(12, 27, 42);
    }
    &:last-of-type {
      padding: 10px;
      padding-left: 5px;
      border-right: 2px solid rgb(12, 27, 42);
    }
  }
  .thumb {
    background-color: #fafaff;
    width: 50%;
    height: 100%;
    box-shadow: 2px 0px 0px rgba(0,0,0,0.03);
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>

<script>
  export default {
    data() {
      return {
        current_tab: "tab-websites",
        thumb_style: {
          left: 0,
          width: '50%'
        }
      };
    },

    mounted() {
      this.set_tab( 'tab-websites', false );
    },

    methods: {
      set_tab( tab: string, transition = true ) {
        this.current_tab = tab;

        this.thumb_style = {
          transition: transition ? "0.5s left ease-in-out, 0.5s width ease-in-out" : '',
          left: this.$refs[ tab ].offsetLeft + "px",
          width: this.$refs[ tab ].offsetWidth + "px"
        };
      }
    }
  };
</script>
