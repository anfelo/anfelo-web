<script>
  import Nav from "../components/navbar/Nav.svelte";
  import Footer from "../components/footer/Footer.svelte";

  export let segment;
</script>

<style lang="scss" global>
  @import "./style/global.scss";
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>

<Footer></Footer>
