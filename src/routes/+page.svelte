<script>
  /** @type {import('./$types').PageData} */
  import { onMount } from "svelte";
  import Counter from "./Counter.svelte";
  // import articles from '$lib/data/articles.csv';
  import { ascending, autoType, csv, timeFormat } from "d3";
  import { browser } from "$app/environment";

  // let articles = [{date:2020, class:"", img:"", url:"", cat:"", title:"", subtitle:"",}]

  export let data;
  // console.log("data comp", data)

  let articles = [];

  // $: if (browser) { onMount(async () => {
  //   articles = await csv('/data/articles.csv', autoType);
  // })};

  // $: if (browser) {
  $: articles = data.articles.sort((a,b)=>ascending(a.rank,b.rank));
  // }

  function getGridProperties(category) {
    if (category === 'fw') {
      return 'span 4';
    } else {
      return Math.random() < 0.5 ? '1' : '5';
    }
  }

  function getFlexProperties(category, index) {
    if (category === 'fw') {
      return { flexBasis: '80%', order: index };
    } else {
      // Randomly assign to first or last column
      const isFirstColumn = Math.random() < 0.5;
      return {
        flexBasis: '20%',
        order: isFirstColumn ? index - 1 : index + 1
      };
    }
  }

  // Modify this function to match the original layout
  function getFlexBasis(dataClass, laptop) {
    if (!laptop) return '100%';
    switch(dataClass) {
      case 'fw': return '100%';
      case 'hw': return '48%';
      case 'nw': return '31%';
      default: return '31%';
    }
  }

  // const formatTime = timeFormat("%B, %Y");
  const formatTime = timeFormat("%Y");

  let screenWidth = 1024;
  $: vWideScreen = screenWidth > 1440;
  $: laptop = screenWidth >= 1024;
  $: tablet = screenWidth < 1024;
  $: mobile = screenWidth < 780;
  $: vNarrow = screenWidth < 420;

  $: console.log(articles);
  $: innerHeight = 0;
  // $: innerWidth = 0;
  $: outerWidth = 0;
  $: outerHeight = 0;

  // import welcome from '$lib/images/svelte-welcome.webp';
  // import welcome_fallback from '$lib/images/svelte-welcome.png';

  // Modify this function to determine which column the project belongs to
  function getColumnClass(dataClass) {
    return dataClass === 'fw' ? 'main-column' : 'side-column';
  }
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>
<svelte:window
  bind:innerHeight
  bind:innerWidth={screenWidth}
  bind:outerWidth
  bind:outerHeight
/>

<!-- style="grid-template-columns: {mobile?"1fr":tablet?"1fr 1fr":"1fr 1fr 1fr"}"  repeat(auto-fill, 300px ) {(innerWidth*0.7)/3}px-->
<!-- {data.fw==="TRUE"?"1 / 5":"1"} -->
<!-- grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr -->
<section>
  <div class="main-column">
    {#each articles as data, i}
      {#if data.show === "TRUE" && data.class === 'fw'}
        <div class="project-fw">
          <!-- <div class="project-container" style="border-width:{i === articles.length - 1 ? 0 : 1}px"> -->
            <div class="project-container" style="border-bottom-width:{i === articles.length - 1 ? 0 : 1}px">
            {#if i === 0}
              <div class="recent-stories">
                <div><h6 class="cat">Featured</h6></div>
              </div>
            {/if}
            <!-- {#if data.class !== 'nw' || !laptop} -->
            <div class="thumbnail">
              {#if data.img.split(".")[1] === "mp4"}
                <a href={data.url} target="__blank">
                  <!-- svelte-ignore a11y-media-has-caption -->
                  <video width="100%" height="100%" autoplay loop muted>
                    <source src="/images/{data.img}" type="video/mp4" />
                    <!-- <source src="/images/{data.img.replace(".mp4",".ogg")}" type="video/ogg" /> -->
                  </video>
                </a>
              {:else}
                <a href={data.url} target="__blank">
                  <img src="/images/{data.img}" alt="thumb" />
                </a>
              {/if}
            </div>
            <!-- {/if} -->
            <div class="info">
              <div class="flex">
                <h6 class="cat">{data.cat}</h6>
                <span class="dot">&#183</span>
                <h6 class="date">{data.paid==="TRUE"?data.client + ", ":""}{formatTime(new Date(data.date))}</h6>
              </div>
              <!-- {#if data.gc === '1/5'}
              <h1 class="title">
                <a href={data.url} target="__blank">{data.title}</a>
              </h1>
            {:else} -->
              <!-- {#if data.class === 'fw' && laptop} -->
              <h1 class="title">
                <a href={data.url} target="__blank">{data.title}</a>
              </h1>
              <!-- {:else}
                <h2 class="title">
                  <a href={data.url} target="__blank">{data.title}</a>
                </h2>
              {/if} -->
              <!-- {#if data.class === 'fw'|| !laptop} -->
              <h4 class="subtitle">{data.subtitle}</h4>
              <!-- {/if} -->
              <!-- <div class="flex">
                <h6 class="tools">
                  Built with <b>{data.tools.replaceAll('/', ', ')}</b> for
                  <b>{data.client}</b>
                </h6>
              </div>
              {#if data.award !== null}
                <div class="flex">
                  <h6 class="awards">{data.award}</h6>
                </div>
              {/if} -->
              <!-- <div class="flex"><img src="src/lib/images/date.png" alt="thumb" class="icon"/><h6 class='date'>{formatTime(new Date(data.date))}</h6></div> -->
            </div>
          </div>
        </div>
      {/if}
    {/each}
  </div>
  <div class="side-column">
    {#each articles as data, i}
    {@const showSideImgs = Math.random()>0.4}
      {#if data.show === "TRUE" && data.class !== 'fw'}
        <div class="project-{data.class}">
          <div class="project-container" style="border-bottom-width:{i === articles.length - 1 ? 0 : 1}px">
            {#if i === 0}
              <div class="recent-stories">
                <div><h6 class="cat">Featured</h6></div>
              </div>
            {/if}
            <!-- {#if data.class !== 'nw' || !laptop} -->
            {#if showSideImgs}
            <div class="thumbnail">
              {#if data.img}
              {#if data.img.split(".")[1] === "mp4"}
                <a href={data.url} target="__blank">
                  <!-- svelte-ignore a11y-media-has-caption -->
                  <video width="100%" height="100%" autoplay loop muted>
                    <source src="/images/{data.img}" type="video/mp4" />
                  </video>
                </a>
              {:else}
                <a href={data.url} target="__blank">
                  <img src="/images/{data.img}" alt="thumb" />
                </a>
              {/if}
              {/if}
            </div>
            {/if}
            <!-- {/if} -->
            <div class="info">
              <div class="flex">
                <h6 class="cat">{data.cat}</h6>
                <span class="dot">&#183</span>
                <h6 class="date">{data.paid==="TRUE"?data.client + ", ":""}{formatTime(new Date(data.date))}</h6>
              </div>
              <!-- {#if data.gc === '1/5'}
              <h1 class="title">
                <a href={data.url} target="__blank">{data.title}</a>
              </h1>
            {:else} -->
              <!-- {#if data.class === 'fw' && laptop} -->
              <h1 class="title">
                <a href={data.url} target="__blank">{data.title}</a>
              </h1>
              <!-- {:else}
                <h2 class="title">
                  <a href={data.url} target="__blank">{data.title}</a>
                </h2>
              {/if} -->
              <!-- {#if data.class === 'fw'|| !laptop} -->
              <h4 class="subtitle">{data.subtitle}</h4>
              <!-- {/if} -->
              <!-- <div class="flex">
                <h6 class="tools">
                  Built with <b>{data.tools.replaceAll('/', ', ')}</b> for
                  <b>{data.client}</b>
                </h6>
              </div>
              {#if data.award !== null}
                <div class="flex">
                  <h6 class="awards">{data.award}</h6>
                </div>
              {/if} -->
              <!-- <div class="flex"><img src="src/lib/images/date.png" alt="thumb" class="icon"/><h6 class='date'>{formatTime(new Date(data.date))}</h6></div> -->
            </div>
          </div>
        </div>
      {/if}
    {/each}
  </div>
</section>

<style>
  section {
    display: flex;
    justify-content: space-between;
    /* width: 70%; */
    max-width: 1800px;
    margin: 0 auto;
    margin-top: 40px;
    column-gap: 10px;
  }

  .main-column {
    flex: 3;
    margin-right: 20px;
  }

  .side-column {
    flex: 1;
  }

  .project-fw,
  .project-hw,
  .project-nw {
    margin-bottom: 20px;
  }

  .project-container {
    border-bottom: 1px solid lightgrey;
    padding-bottom: 10px;
    margin-bottom: 30px;
  }

  @media (max-width: 1024px) {
    section {
      flex-direction: column;
      /* width: 95%; */
    }

    .main-column,
    .side-column {
      width: 100%;
      margin-right: 0;
    }

    h1 {
      font-size: 1.8rem;
    }

    .subtitle {
      display: block;
    }

    .thumbnail {
      display: block;
    }
  }

  @media (max-width: 720px) {
    section {
      width: 95%;
    }
  }

  @media (min-width: 1024px) {
    .project-fw h1 {
      font-size: 2.5rem;
    }

    .project-hw h1,
    .project-nw h1 {
      font-size: 1.2rem;
    }

    .project-fw .thumbnail,
    .project-hw .thumbnail {
      display: block;
    }

    .project-nw .thumbnail {
      display: none;
    }

    .project-fw .subtitle {
      display: block;
    }

    .project-hw .subtitle,
    .project-nw .subtitle {
      display: none;
    }
  }

  .flex-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 70%;
    max-width: 1000px;
    margin: 0 auto;
  }

  .flex-item {
    margin-bottom: 10px;
  }

  .flex-item.fw {
    height: 300px; /* Adjust as needed */
  }

  .flex-item.hw {
    height: 150px; /* Adjust as needed */
  }

  .flex-item img {
    /* width: 100%;
    height: 100%; */
    /* object-fit: contain; */
  }

  .subtitle {
    /* font-size: 18px; */
    margin-bottom: 7px;
  }

  /* .date {
		font-size: 14px;
	} */

  .project,
  .project-fw,
  .project-hw,
  .project-nw {
    margin-bottom: 20px;
    margin-left: 0px;
    margin-right: 0px;
  }

  .recent-stories {
    border-top: 1px solid lightgrey;
    /* margin-top: 20px; */
  }

  .recent-stories div {
    transform: translate(0px, -13px);
    background-color: white;
    display: inline-block;
  }

  .recent-stories h6 {
    margin-right: 10px;
  }

  .project-container {
    border-bottom: 1px solid lightgrey;
    padding-bottom: 10px;
  }

  img {
    /* max-width: 100% */
    width: 100%;
  }

  .info {
    display: flex;
    flex-direction: column;
  }
  /* section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    max-width: 1800px;
    margin: 0 auto;
  } */

  @media (max-width: 1024px) {
    .project, .project-fw, .project-hw, .project-nw {
      flex-basis: 100% !important;
    }

    h1 {
      font-size: 1.8rem;
    }

    .subtitle {
      display: block;
    }

    .thumbnail {
      display: block;
    }
  }

  @media (min-width: 1024px) {
    .project-fw {
      flex-basis: 100%;
    }

    .project-hw {
      flex-basis: 48%;
    }

    .project-nw {
      flex-basis: 31%;
    }

    .project-fw h1 {
      font-size: 2.5rem;
    }

    .project-hw h1,
    .project-nw h1 {
      font-size: 1.2rem;
    }

    .project-fw .thumbnail,
    .project-hw .thumbnail {
      display: block;
    }

    .project-nw .thumbnail {
      display: none;
    }

    .project-fw .subtitle {
      display: block;
    }

    .project-hw .subtitle,
    .project-nw .subtitle {
      display: none;
    }
  }

  h1 {
    width: 100%;
  }

  @media (max-width:500px) {
    h1 {
      font-size: 1.5rem;
    }

    section {
      gap: 0px;
    }

    .project-fw {
      /* margin-top: 5px; */
      margin-bottom: 5px;
    }
  }

  /* .subtitle, .tools, .date {
    opacity: 0.8
  }

  .cat {
    opacity: 1;
  } */

  .welcome {
    display: block;
    position: relative;
    width: 100%;
    height: 0;
    padding: 0 0 calc(100% * 495 / 2048) 0;
  }

  .welcome img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: block;
  }

  .icon {
    height: 15px;
    width: 15px;
    margin-right: 5px;
  }

  .thumbnail {
    margin-bottom: 15px;
  }
</style>