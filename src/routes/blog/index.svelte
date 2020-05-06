<script context="module">
  import * as fromApi from "../../services/api";
  import * as fromParsers from "../../helpers/parsers";

  export async function preload({ params, query }) {
    const res = await this.fetch("blog.json");
    const data = await res.json();
    if (res.status === 200) {
      return { posts: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let posts;

  const sortedPosts = posts.sort(function(a, b) {
    const aDate = new Date(a.publishDate);
    const bDate = new Date(b.publishDate);
    if (aDate > bDate) {
      return -1;
    }
    if (aDate < bDate) {
      return 1;
    }
    return 0;
  });
  const topics = new Map();
  sortedPosts.forEach(post => {
    post.topics.forEach(topic => {
      topics.set(topic, topic);
    });
  });
  let filteredPosts = sortedPosts;

  function handleFilterChange(value) {
    if (value === "all") {
      filteredPosts = sortedPosts;
    } else {
      filteredPosts = sortedPosts.filter(post => post.topics.includes(value));
    }
  }
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
  <title>anfelo - blog</title>
</svelte:head>

<div class="container">
  <div class="select is-pulled-right">
    <select on:change={event => handleFilterChange(event.target.value)}>
      <option value="all">All</option>
      {#each Array.from(topics.values()) as topic}
        <option value={topic}>{topic}</option>
      {/each}
    </select>
  </div>
  <h5 class="title">Recent posts</h5>
  <ul>
    {#each filteredPosts as post}
      <li key={post.slug} class="article">
        <div class="box">
          <article class="media">
            <div class="media-content">
              <div class="content">
                <ul class="topics-list">
                  {#each post.topics as topic}
                    <li key={topic} class="level-item topic-img">
                      <img src={`/img/${topic}.svg`} alt="" />
                    </li>
                  {/each}
                </ul>
                <span class="article-date">
                  {fromParsers.parseDate(post.publishDate)}
                </span>
                <h4 class="article-title title is-size-4">{post.title}</h4>
                <p class="article-description">{post.short}</p>

              </div>
              <nav class="level is-mobile">
                <div class="level-right">
                  <a
                    rel="prefetch"
                    class="button is-primary"
                    href="blog/{post.slug}">
                    Continue reading →
                  </a>
                </div>
              </nav>
            </div>
          </article>
        </div>
        <ul class="topics-list" />

      </li>
    {/each}
  </ul>
</div>
