<template>
  <no-ssr>
    <section class="flex flex-row mx-auto fixed navbar w-full shadow-xl" :class="{ scrolled: isScrolled }">
      <nuxt-link  to="/" class="pr-5">
        <div style="height: 55px; width: 64px;">
          <logo />
        </div>
      </nuxt-link>
      <nuxt-link to="/">
        <div
          class="navitem"
          :class="{ itemscrolled: isScrolled }"
        >Item 1</div>
      </nuxt-link>
      <a href="/" v-scroll>
        <div
          class="navitem"
          :class="{ itemscrolled: isScrolled }"
        >Item 2</div>
      </a>
      <nuxt-link to="/">
        <div
          class="navitem"
          :class="{ itemscrolled: isScrolled }"
        >Item 3</div>
      </nuxt-link>
      <a href="https://github.com/">
        <div
          class="navitem"
          :class="{ itemscrolled: isScrolled }"
        >GitHub</div>
      </a>
    </section>
  </no-ssr>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  name: 'TitleBar',
  components: {
    Logo
  },
  data() {
    return {
      isScrolled: false
    }
  },
  beforeMount() {
    // Check if the page is already scrolled
    this.handleScroll()
    // initializes the event listener for scroll
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    // cleanup events before destroy
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      // Check if the page is scrolled from the original position
      this.isScrolled = window.pageYOffset > 35
    }
  }
}
</script>

<style scoped>
.navbar {
  /* background: rgb(235, 235, 235); */
  border-top: 4px solid #052f5f;
  border-bottom: 4px solid #052f5f;
  background: grey;
  height: 64px;
  transition: all 0.3s;
  z-index: 1000;
}
.scrolled {
  background: white;
  color: black;
}
.itemscrolled {
  color: black;
}
.navitem {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin: auto;
  min-height: 60px;
  display: flex;
  align-items: center;
  color: aqua;
}
.navitem:hover {
  color: black;
  background-color: rgb(204, 201, 201);
}
.itemscrolled:hover {
  background-color: rgb(204, 201, 201);
  transition: all 0.3s;
  color: black;
}
</style>