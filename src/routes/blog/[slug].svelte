<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();
    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import * as fromParsers from "../../helpers/parsers";
  export let post;
</script>

<style>
  .article {
    margin-bottom: 25px;
  }

  .article .article-date {
    text-transform: uppercase;
    font-size: 0.8em;
    font-weight: bold;
  }

  .topics-list {
    display: flex;
    margin: 0;
    list-style: none;
    align-items: center;
  }

  .topics-list .topic-img {
    width: 20px;
    margin: 0 5px 0 0;
  }

  .topic-img img {
    width: 100%;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<div class="container">
  <div class="article">
    <!-- <ul class="topics-list">{topics}</ul> -->
    <ul class="topics-list">
      {#each post.topics as topic}
        <li key={topic} class="topic-img">
          <img src={`/img/${topic}.svg`} alt="" />
        </li>
      {/each}
    </ul>
    <span class="article-date">{fromParsers.parseDate(post.publishDate)}</span>
    <h2 class="article-title title">{post.title}</h2>
    <div class="article-content">
      {@html post.html}
    </div>
  </div>
</div>
