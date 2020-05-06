<script context="module">
  import * as fromApi from "../services/api";

  export async function preload(page, session) {
    const res = await this.fetch("about.json");
    const data = await res.json();
    if (res.status === 200) {
      return {
        bioEntry: data
      };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let bioEntry;
  const profileImage = bioEntry.profileImage.fields;
</script>

<style>
  .picture-container img {
    width: 100%;
  }

  .contact-info h1,
  .contact-info p {
    display: inline;
  }

  @media (max-width: 876px) {
    .picture-container {
      max-width: 50%;
      min-width: 200px;
      margin: auto;
    }
  }
</style>

<svelte:head>
  <title>anfelo - about</title>
</svelte:head>

<div class="container">
  <div class="columns">
    <div class="column">
      <div class="picture-container">
        <img src={profileImage.file.url} alt={profileImage.title} />
      </div>
    </div>
    <div class="column is-four-fifths">
      <h1 class="title">About Me</h1>
      <p>{bioEntry.bio}</p>
    </div>
  </div>
  <div class="contact-info">
    <h1 class="is-size-4">Lets have a coffee</h1>
    <p>- af.osorio1341@gmail.com</p>
  </div>
  <p class="is-size-6">* A virtual coffee works this days *</p>
</div>
