<script>
  export let segment;

  let isNavbarOpen = false;

  function handleBurgerClick(e) {
    e.preventDefault();
    isNavbarOpen = !isNavbarOpen;
  }
</script>

<style>
  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  .navbar-item {
    text-decoration: none;
    padding: 1em 0.5em 0;
    display: block;
  }

  .navbar-brand .navbar-item {
    display: flex;
    min-width: 100px;
  }

  .navbar-brand .navbar-item span {
    margin-left: 5px;
    font-family: menlo, inconsolata, monospace;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    .navbar-item {
      text-align: center;
    }

    [aria-current]::after {
      display: none;
    }
  }
</style>

<div class="container">
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="/img/logo-orange.svg" height="28" alt="Anfelo Logo" />
        <span>anfelo</span>
      </a>

      <a
        href="."
        role="button"
        class={`navbar-burger burger ${isNavbarOpen ? 'is-active' : ''}`}
        aria-label="menu"
        aria-expanded="false"
        data-target="mainNavbar"
        on:click={handleBurgerClick}>
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div
      id="mainNavbar"
      class={`navbar-menu ${isNavbarOpen ? 'is-active' : ''}`}>
      <div class="navbar-end">
        <a
          class="navbar-item"
          aria-current={segment === undefined ? 'page' : undefined}
          href=".">
          home
        </a>
        <a
          class="navbar-item"
          aria-current={segment === 'about' ? 'page' : undefined}
          href="about">
          about
        </a>
        <a
          class="navbar-item"
          rel="prefetch"
          aria-current={segment === 'blog' ? 'page' : undefined}
          href="blog">
          blog
        </a>
      </div>
    </div>
  </nav>
</div>
