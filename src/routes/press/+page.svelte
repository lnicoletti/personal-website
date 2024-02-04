<script>
/** @type {import('./$types').PageData} */
  import { onMount } from 'svelte';
  // import articles from '$lib/data/articles.csv';
  import { autoType, csv, timeFormat, descending } from 'd3';
  import { browser } from '$app/environment';

  export let data = {articles:[]};

  $: articles = data.articles.sort((a,b)=>descending(new Date(a.date), new Date(b.date)))

//   let articles = [{date:2020, class:"", img:"", url:"", outlet:"", title:"", outlet_url:"", embed:""}]
  
//  $: if (browser) { onMount(async () => {
//     articles = await csv('src/lib/data/press.csv', autoType);
//   })};

  const formatTime = timeFormat('%B, %Y');

  $: vWideScreen = innerWidth > 1440;
  $: laptop = innerWidth > 1100;
  $: tablet = innerWidth < 1100;
  $: mobile = innerWidth < 780;
  $: vNarrow = innerWidth < 420;

//   $: console.log(data.articles);
  $: innerHeight = 0;
  $: innerWidth = 0;
  $: outerWidth = 0;
  $: outerHeight = 0;

</script>
<svelte:head>
	<title>Press</title>
	<meta name="description" content="About this app" />
</svelte:head>
<svelte:window
  bind:innerHeight
  bind:innerWidth
  bind:outerWidth
  bind:outerHeight
/>

<section>
	<!-- {#if articles.length>0} -->
	{#if browser}
	{#each articles as data, i}
	  <!-- <div class="project" style="grid-column: {laptop ? data.gc : '1/2'}"> -->
	  <!-- <div class="project{laptop && data.fw == "TRUE"? "-fw" :""}"> -->
	  <div>
	  <!-- <div class="project" style="grid-column: {laptop ? data.gc : '1/2'};grid-row: {laptop ? data.gr : 'auto'}"> -->
	  <div class="project-container">
		<div class="info">
		  <h2 class="title">
			<a href={data.url} target="__blank">{data.title}</a>
		  </h2>
		  <div class="flex">
			<h6 class="cat"><a href={data.outlet_url} target="__blank">{data.outlet}</a></h6>
			<span class="dot">&#183</span>
			<h6 class="date">{formatTime(new Date(data.date))}</h6>
		  </div>
		</div>
		{#if data.embed !== "FALSE"}
		<div class="embed" style="width:{laptop?50:mobile?100:70}%">
		  {@html data.embed}
		</div>
		{/if}
		  <!-- <div class="flex"><img src="src/lib/images/date.png" alt="thumb" class="icon"/><h6 class='date'>{formatTime(new Date(data.date))}</h6></div> -->
		</div>
	  </div>
	{/each}
	{/if}
</section>

<style>
	.project-container {
	padding-top: 10px;
	/* margin-left: 20px;
	margin-right: 20px; */
    /* height:100% */
  }
</style>