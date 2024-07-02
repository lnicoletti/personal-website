<script>
  /** @type {import('./$types').PageData} */
  import { onMount } from "svelte";
  import Carousel from "svelte-carousel";
  import { browser } from "$app/environment";
  import { autoType, csv, descending, timeFormat } from "d3";
  // import articles from '$lib/data/articles.csv';

  export let data;
  // export let talks;

  $: console.log("awards", data.awards);

  let awards = [];
  let talks = [];

  // $: if (browser) {
  $: awards = data.awards;
  $: talks = data.talks;
  // }

  // 	let bio = `Through effective science communication and visual storytelling, I believe that complex societal issues can be demystified and made accessible to the general public.<br><br>

  // Currently, I am a data visualization reporter at Bloomberg. Previously, I was a research affiliate at the MIT Senseable City Lab and the TU Delft Computational Urban Science and Policy Lab (CUSP). I also worked as a freelance Data Visualization Designer, and Documentary Photographer.<br><br>

  // In the past, I have worked with organizations from both the public sector and private sector to create visual narratives around topics such as the representation of women subjects in news headlines, urban ecological health, the impact of COVID-19 on urban mobility, and accessibility to essential infrastructure across urban communities.`

  //   let bio = `<h2 class="title">Hi there! I'm Leonardo.</h2>

  //   <p class="subtitle">I'm a data visualization reporter at Bloomberg. I use data, code, and photography to tell socially relevant stories.</p><br>

  // <p>Previously, I was a research affiliate at the MIT Senseable City Lab and the TU Delft Computational Urban Science and Policy Lab (CUSP).<br><br>

  // My work has been cited by <a href="https://video.ethz.ch/events/2023/computation/69bf7949-817b-4947-9251-47cfaf0f5416.html" target=__blank>renowned academics</a>, popular <a href="https://www.nytimes.com/2023/07/04/arts/design/black-artists-bias-ai.html" target=__blank>media</a> <a href="https://nypost.com/2023/06/09/ai-tool-stable-diffusion-amplifies-race-and-gender-stereotypes/" target=__blank>outlets</a>, and recently it has been used to develop one of the United Nations' <a href="https://dashboards.sdgindex.org/" target=__blank>Sustainable Development Indicators</a>.</p>`;

  let bio = `
  <p class="subtitle">Leonardo is an award-winning data-journalist at Bloomberg News. He works with data and visual storytelling to report on issues at the intersection of technology and society.</p><br>

<p>Leonardo’s work on <a href="https://www.bloomberg.com/graphics/2023-generative-ai-bias/" target=__blank>Generative AI Bias</a> has been cited in reference to AI-policy recommendations at the <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4576667" target=__blank>local level</a>, as well as in official documents about AI risk from <a href="https://assets.publishing.service.gov.uk/media/653bc393d10f3500139a6ac5/future-risks-of-frontier-ai-annex-a.pdf" target=__blank>national governments</a>, international bodies such as the <a href="https://www.ohchr.org/sites/default/files/documents/issues/business/b-tech/taxonomy-GenAI-Human-Rights-Harms.pdf" target=__blank>United Nations</a> and <a href="https://www.imf.org/-/media/Files/Publications/FTN063/2023/English/FTNEA2023006.ashx" target=__blank>IMF</a>, and NGOs like <a href="https://www.amnestyusa.org/wp-content/uploads/2023/12/Amnesty-VCGenAi-Report-V5.pdf" target=__blank>Amnesty International</a>. His work is referenced by tech executives of major companies like <a href="https://www.youtube.com/live/oNP6W8bl0XI?si=rr9Qvo1iOoKIswy0&t=35504" target=__blank>Microsoft</a>, cited by several academic research papers, and used as a main reference for AI-best practices at dozens of institutions like IBM and the Massachusetts Institute of Technology.
<br><br>

Leonardo is a 2024 recipient of the Sigma Award, which recognizes the best data journalism from around the world, for his work on Generative AI Bias.</p>`;

  // buy me a coffee
  let coffeeText = "Buy me a slice of pizza?";
  let buttonColor = "1f1f1f";
  let fontColor = "ffffff";
  let outlineColor = "ffffff";
  let fontFamily = "Lato"; //"Cookie"
  let coffeeColor = "FFDD00";
  let emoji = "🍕";

  // let awards = [{year:2020, link:"", name:"", award:""}];
  // let talks = [{year:2020, link:"", name:"", role:""}];

  // $: if (browser) { onMount(async () => {
  //   awards = await csv('/data/awards.csv', autoType);
  //   talks = await csv('/data/talks.csv', autoType);
  // })};

  let images = [
    "scl.png",
    "bloomberg.svg",
    "casacongo.svg",
    "delft.png",
    "pudding.svg",
    "tchibo.png",
    "bari.png",
    "ipa.jpeg",
    "ea.png",
    "mv.png",
    "vancity.svg",
    "cusp.svg",
    "ubc.png",
  ];
  let screenWidth = 1024;
  $: vWideScreen = screenWidth > 1440;
  $: laptop = screenWidth >= 1024;
  $: tablet = screenWidth < 1024;
  $: mobile = screenWidth < 780;
  $: vNarrow = screenWidth < 420;

  $: innerHeight = 0;
  // $: innerWidth = 0;
  $: outerWidth = 0;
  $: outerHeight = 0;
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app" />
</svelte:head>
<svelte:window
  bind:innerHeight
  bind:innerWidth={screenWidth}
  bind:outerWidth
  bind:outerHeight
/>

<section>
  <!-- {#if articles.length>0} -->
  <!-- <div class="project" style="grid-column: {laptop ? data.gc : '1/2'}"> -->
  <!-- <div class="project{laptop && data.fw == "TRUE"? "-fw" :""}"> -->
  <!-- {#if browser} -->
  <div>
    <!-- <div class="project" style="grid-column: {laptop ? data.gc : '1/2'};grid-row: {laptop ? data.gr : 'auto'}"> -->
    <div class="info">
      <div class={vNarrow ? "" : "flex"}>
        <div>
          {@html bio}
        </div>
        <div>
          <img
            class="headshot"
            src="/images/headshot_square.jpeg"
            alt="thumb"
          />
        </div>
      </div>
      <div class="mt-5 max-w-[250px]">
        <a href="https://www.buymeacoffee.com/leonardonclt" target="__blank"
          ><img
            src="https://img.buymeacoffee.com/button-api/?text={coffeeText}&emoji={emoji}&slug=leonardonclt&button_colour={buttonColor}&font_colour={fontColor}&font_family={fontFamily}&outline_colour={outlineColor}&coffee_colour={coffeeColor}"
          /></a
        >
      </div>
      <br />
      <h2 class="title">Awards</h2>
      {#each awards.sort((a, b) => descending(a.year, b.year)) as data, i}
        <h6>
          <a href={data.link} target="__blank"><b>{data.year} {data.name}</b></a
          >
          - {data.award}
        </h6>
      {/each}
      <br />
      <h2 class="title">Talks</h2>
      {#each talks.sort((a, b) => descending(a.year, b.year)) as data, i}
        <h6>
          <a href={data.link} target="__blank"><b>{data.year} {data.name}</b></a
          >
          - {data.role}
        </h6>
      {/each}
    </div>
    <div class="container">
      <h2 class="title">Who I have worked with</h2>
      {#if browser}
        <Carousel
          autoplayDuration={0}
          duration={5000}
          autoplay
          timingFunction="linear"
          dots={false}
          arrows={false}
          swiping={false}
          particlesToShow={5}
          let:loaded
        >
          {#each images as src, imageIndex (src)}
            <div class="img-container">
              {#if loaded.includes(imageIndex)}
                <img class="logo" src="/images/clients/{src}" alt="src" />
              {/if}
            </div>
          {/each}
        </Carousel>
      {/if}
    </div>
    <div class="container">
      <h2 class="title">Want to collaborate?</h2>
      <!-- <p class="subtitle">Drop me a line and I'll get back to you as soon as I can</p> -->
      <!-- <br> -->
      <h6>
        <b>Tips</b> -
        <a href="mailto:lnicoletti3@bloomberg.net">lnicoletti3@bloomberg.net</a>
      </h6>
      <h6>
        <b>Other inquiries</b> -
        <a href="mailto:info.leonardonicoletti@gmail.com"
          >info.leonardonicoletti@gmail.com</a
        >
      </h6>
      <br />
      <!-- <div class="columns">
			  <div class="column is-half">
				<form action="https://api.staticforms.xyz/submit" method="post" id="staticform">
				  <input type="hidden" name="accessKey" value="afbd1471-1951-4ab2-be08-fa0dd4037984">
				  <input type="hidden" name="subject" value="Test from jsfiddle">
				  <input type="hidden" name="replyTo" value="info.leonardonicoletti@gmail.com"> 
				  <input type="hidden" name="redirectTo" value="https://www.google.com">
				  <div class="field">
					<label class="label">Name</label>
					<div class="control">
					  <input class="input" type="text" name="name" placeholder="Enter Your Name" required>
					</div>
				  </div>
				  <div class="field">
					<label class="label">Email</label>
					<div class="control">
					  <input class="input" type="email" name="email" placeholder="Enter Your Email" required>
					</div>
				  </div>
				  <div class="field">
					<label class="label">Message</label>
					<div class="control">
					  <textarea class="textarea" name="message" placeholder="Enter Your Message" required></textarea>
					</div>
				  </div>
				  <button class="button is-primary" type="Submit">Submit</button>
				</form>
			  </div>
			</div> -->
    </div>
  </div>
  <!-- {/if} -->
</section>

<style>
  .container {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  img {
    /* width: 40%; */
    /* max-width: 40%; */
    /* margin-left: 40px; */
  }

  .headshot {
    object-fit: contain;
    max-width: 100%;
  }

  @media (max-width: 420px) {
    .headshot {
      margin-top: 20px;
    }
  }

  .flex {
    margin-top: 20px;
    column-gap: 50px;
  }

  h2 {
    text-transform: capitalize;
  }

  .logo {
    max-height: 100px;
    max-width: 180px;
    margin: auto;
  }

  .img-container {
    width: 300px;
    height: 100px;
    align-items: center;
    justify-content: center;
    display: flex;
    padding-left: 15px;
    padding-right: 15px;
  }

  h6 a {
    text-transform: none;
  }

  /* .subtitle {
    opacity: 1
  } */

  /* div.column.is-half {
  width: 50%;
} */
</style>
