<script>
/** @type {import('./$types').PageData} */
  import { onMount } from 'svelte';
  // import articles from '$lib/data/articles.csv';
  import { autoType, csv, timeFormat, descending } from 'd3';
  import { browser } from '$app/environment';

  export let data;

  let articles = [];
  
//   $: if (browser) {
	$: articles = data.articles!==undefined?data.articles.sort((a,b)=>descending(new Date(a.date), new Date(b.date))):data.articles
//   }

	$: showArticles = category === "all" ? articles : articles.filter(d=>d.cat === category)

//   let articles = [{date:2020, class:"", img:"", url:"", outlet:"", title:"", outlet_url:"", embed:""}]
  
//  $: if (browser) { onMount(async () => {
//     articles = await csv('/data/press.csv', autoType);
//   })};


//   let categories = ["all", "news", "policy (institution)", "policy (public)", "research"]
let categories = ["politicians", "public policy documents", "news articles", "private companies", "academic research"]
  $: category = "all"

  const formatTime = timeFormat('%B, %Y');
  let screenWidth = 1000;
  $: vWideScreen = screenWidth > 1440;
  $: laptop = screenWidth > 1100;
  $: tablet = screenWidth < 1100;
  $: mobile = screenWidth < 780;
  $: vNarrow = screenWidth < 420;

//   $: console.log(data.articles);
  $: innerHeight = 0;
//   $: innerWidth = 0;
  $: outerWidth = 0;
  $: outerHeight = 0;

</script>
<svelte:head>
	<title>Press</title>
	<meta name="description" content="About this app" />
</svelte:head>
<svelte:window
  bind:innerHeight
  bind:innerWidth={screenWidth}
  bind:outerWidth
  bind:outerHeight
/>

<section>
	<!-- <div class="container"> -->
	<p class="subtitle">Leonardo's work has been cited by
	{#each categories as c, i}
	 <!-- <button
	 class="button"
	 on:click={()=>{
		category = c
	 }}
	 ><h3>{c}</h3></button>{i < categories.length-2?", ":i === categories.length-2?" and ":""} -->
	 <u>{c}</u>{i < categories.length-2?", ":i === categories.length-2?" and ":""}
	{/each}
	</p>
	<br>
	<!-- </div> -->
	<!-- {#if articles.length>0} -->
	<!-- {#if browser} -->
	{#each showArticles as data, i}
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
	<!-- {/if} -->
</section>

<style>
	.project-container {
	padding-top: 10px;
	/* margin-left: 20px;
	margin-right: 20px; */
    /* height:100% */
  }
</style>