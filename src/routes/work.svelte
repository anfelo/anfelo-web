<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch("work.json");
    const data = await res.json();
    if (res.status === 200) {
      return {
        workEntries: data.entries
      };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import { onMount } from "svelte";
  import CardList from "../components/card/CardList.svelte";
  export let workEntries;

  let type = "website";
  $: filteredEntries = workEntries.filter(entry => entry.type === type);

  function changeType(newType) {
    if (newType === type) return;
    type = newType;
  }
</script>

<style>

</style>

<svelte:head>
  <title>anfelos - work</title>
</svelte:head>

<div class="container">
  <h1 class="title">My Work</h1>
  <div class="tabs is-centered">
    <ul>
      <li class={type === 'website' ? 'is-active' : ''}>
        <a on:click={() => changeType('website')}>websites</a>
      </li>
      <li class={type === 'webapp' ? 'is-active' : ''}>
        <a on:click={() => changeType('webapp')}>webapps</a>
      </li>
      <li class={type === 'api' ? 'is-active' : ''}>
        <a on:click={() => changeType('api')}>apis</a>
      </li>
      <li class={type === 'otherstuff' ? 'is-active' : ''}>
        <a on:click={() => changeType('otherstuff')}>other stuff</a>
      </li>
    </ul>
  </div>
  <div class="tab-content">
    <CardList entries={filteredEntries} />
  </div>
</div>
