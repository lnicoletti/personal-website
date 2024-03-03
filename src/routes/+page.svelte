<script>
    	/** @type {import('./$types').PageData} */
  import { onMount } from 'svelte';
  import Counter from './Counter.svelte';
  // import articles from '$lib/data/articles.csv';
  import { autoType, csv, timeFormat } from 'd3';
  import { browser } from '$app/environment';

  // let articles = [{date:2020, class:"", img:"", url:"", cat:"", title:"", subtitle:"",}]

  export let data;
  console.log("data comp", data)

  let articles = [];

  // $: if (browser) { onMount(async () => {
  //   articles = await csv('/data/articles.csv', autoType);
  // })};
  
// $: if (browser) {
  $: articles = data.articles
// }

  const formatTime = timeFormat('%B, %Y');
  
  let screenWidth;
  $: screenWidth = 1024;
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
<section
  style="grid-template-columns: {laptop ? '1fr 1fr 1fr 1fr 1fr 1fr' : '1fr'}"
>
  <!-- {#if browser} -->
  {#each articles as data, i}
    <!-- <div class="project" style="grid-column: {laptop ? data.gc : '1/2'}"> -->
    <!-- <div class="project{laptop && data.fw == "TRUE"? "-fw" :""}"> -->
    <div class="project{laptop ? '-' + data.class : ''}">
      <!-- <div class="project" style="grid-column: {laptop ? data.gc : '1/2'};grid-row: {laptop ? data.gr : 'auto'}"> -->
      <div class="project-container" style="border-width:{i===articles.length-1?0:1}">
        {#if i===0}
        <div class="recent-stories">
          <div><h6 class="cat">Recent stories</h6></div>
        </div>
        {/if}
        {#if data.class !== 'nw' || !laptop}
          <div class="thumbnail">
            {#if data.img.split('.')[1] === 'mp4'}
              <a href={data.url} target="__blank">
                <video width="100%" height="100%" autoplay loop>
                  <source src="/images/{data.img}" type="video/mp4" />
                  <!-- <source src="{data.img}.ogg" type="video/mp4" /> -->
                </video>
              </a>
            {:else}
              <a href={data.url} target="__blank">
                <img src="/images/{data.img}" alt="thumb" />
              </a>
            {/if}
          </div>
        {/if}
        <div class="info">
          <div class="flex">
            <h6 class="cat">{data.cat}</h6>
            <span class="dot">&#183</span>
            <h6 class="date">{formatTime(new Date(data.date))}</h6>
          </div>
          <!-- {#if data.gc === '1/5'}
          <h1 class="title">
            <a href={data.url} target="__blank">{data.title}</a>
          </h1>
        {:else} -->
          {#if data.class === 'fw' && laptop}
            <h1 class="title">
              <a href={data.url} target="__blank">{data.title}</a>
            </h1>
          {:else}
            <h2 class="title">
              <a href={data.url} target="__blank">{data.title}</a>
            </h2>
          {/if}
          {#if data.class === 'fw'|| !laptop}
            <h4 class="subtitle">{data.subtitle}</h4>
          {/if}
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
  {/each}
  <!-- {/if} -->
  <!-- <h1>
		<span class="welcome">
			
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2> -->

  <!-- <Counter /> -->
</section>

<style>
  /* .title {
    margin-bottom: 7px;
  } */

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
    margin: 20px;
    margin-left: 0px;
    margin-right: 0px;
    /* padding-bottom: 10px; */
    /* border-bottom: 1px solid lightgrey; */
    vertical-align: bottom;

    /* height:100% */
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
    /* height:100% */
  }

  img {
    /* max-width: 100% */
    width: 100%;
  }

  .info {
    display: flex;
    flex-direction: column;
  }
  section {
    display: grid;
    /* NEW */
    /* grid-template-columns: repeat(3, minmax(120px, 1fr)); */
    /* gap: 10px; */
    gap: 30px;
    grid-auto-flow: row dense;
    /* align-items:baseline; */
    /* flex-direction: column;
		justify-content: center;
		align-items: center; */
    /* border-right: 1px solid black;
    border-left: 1px solid black;
    border-bottom: 1px solid black; */
    /* width: 80%;
    max-width: 1800px ; */
    flex: 1;
    /* align-items:end; */
    grid-row-gap: 1rem;
    /* column-rule: 4px solid red; */
    /* stretch */
  }

  section .project-fw {
    grid-column-end: span 4;
    grid-row-end: span 2;
  }

  /* section .project {
	grid-column-end: span 1;
	grid-row-end: span 2;
   } */

  section .project-hw {
    grid-column-end: span 2;
    grid-row-end: span 1;
  }

  section .project-nw {
    grid-column-end: span 2;
    grid-row-end: span 1;
  }

  h1 {
    width: 100%;
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
