<script>
  import { onMount } from "svelte";
  import { theme } from "../store/stores.js";
  import Nav from "../components/navbar/Nav.svelte";
  import Footer from "../components/footer/Footer.svelte";
  import * as fromLocalStorage from "../services/localStorage";

  export let segment;

  let themeValue;

  onMount(async () => {
    const unsubscribe = theme.subscribe(value => {
      fromLocalStorage.saveEntry({ key: "theme", value: value });
      document.body.className = "";
      document.body.classList.add(value);
      themeValue = value;
    });
  });
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

<Nav {segment} isDark={themeValue === 'dark-theme'} />

<main class={themeValue === 'dark-theme' ? 'has-background-dark' : ''}>
  <slot />
</main>

<Footer isDark={themeValue === 'dark-theme'} />
