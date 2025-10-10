<script>
  /** @type {import('./$types').PageData} */
  import { onMount } from "svelte";
  import Carousel from "svelte-carousel";
  import { browser } from "$app/environment";
  import { autoType, csv, descending, timeFormat } from "d3";
  // import articles from '$lib/data/articles.csv';

  export let data;
  // export let talks;

  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  }

  $: console.log("awards", data.awards);

  let awards = [];
  let talks = [];

  // $: if (browser) {
  $: awards = data.awards;
  $: talks = data.talks;
  // }

  $: awardYears = awards.map(award => award.year).filter(onlyUnique);
  $: talkYears = talks.map(award => award.year).filter(onlyUnique);

  // $: console.log("years", awardYears);

  // 	let bio = `Through effective science communication and visual storytelling, I believe that complex societal issues can be demystified and made accessible to the general public.<br><br>

  // Currently, I am a data visualization reporter at Bloomberg. Previously, I was a research affiliate at the MIT Senseable City Lab and the TU Delft Computational Urban Science and Policy Lab (CUSP). I also worked as a freelance Data Visualization Designer, and Documentary Photographer.<br><br>

  // In the past, I have worked with organizations from both the public sector and private sector to create visual narratives around topics such as the representation of women subjects in news headlines, urban ecological health, the impact of COVID-19 on urban mobility, and accessibility to essential infrastructure across urban communities.`

  //   let bio = `<h2 class="title">Hi there! I'm Leonardo.</h2>

  //   <p class="subtitle">I'm a data visualization reporter at Bloomberg. I use data, code, and photography to tell socially relevant stories.</p><br>

  // <p>Previously, I was a research affiliate at the MIT Senseable City Lab and the TU Delft Computational Urban Science and Policy Lab (CUSP).<br><br>

  // My work has been cited by <a href="https://video.ethz.ch/events/2023/computation/69bf7949-817b-4947-9251-47cfaf0f5416.html" target=__blank>renowned academics</a>, popular <a href="https://www.nytimes.com/2023/07/04/arts/design/black-artists-bias-ai.html" target=__blank>media</a> <a href="https://nypost.com/2023/06/09/ai-tool-stable-diffusion-amplifies-race-and-gender-stereotypes/" target=__blank>outlets</a>, and recently it has been used to develop one of the United Nations' <a href="https://dashboards.sdgindex.org/map/indicators/urban-population-with-access-to-points-of-interest-within-a-15min-walk" target=__blank>Sustainable Development Indicators</a>.</p>`;

  let bio = `
    <p class="subtitle">Leonardo is an award-winning data-journalist at <a href="https://www.bloomberg.com/authors/AV8suZVL6jY/leonardo-nicoletti" target=__blank>Bloomberg News</a>. He works with data and visual storytelling to report on issues at the intersection of technology and society.</p><br>

    <p>Leonardo’s work on <a href="https://www.bloomberg.com/graphics/2023-generative-ai-bias/" target=__blank>Generative AI Bias</a> has been cited in reference to AI-policy recommendations at the <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4576667" target=__blank>local level</a>, as well as in official policy frameworks about AI risk from <a href="https://assets.publishing.service.gov.uk/media/653bc393d10f3500139a6ac5/future-risks-of-frontier-ai-annex-a.pdf" target=__blank>national</a> <a href="https://airc.nist.gov/docs/NIST.AI.600-1.GenAI-Profile.ipd.pdf" target=__blank>governments</a>, international bodies such as the <a href="https://www.ohchr.org/sites/default/files/documents/issues/business/b-tech/taxonomy-GenAI-Human-Rights-Harms.pdf" target=__blank>United Nations</a> and <a href="https://www.imf.org/-/media/Files/Publications/FTN063/2023/English/FTNEA2023006.ashx" target=__blank>IMF</a>, and NGOs like <a href="https://www.amnestyusa.org/wp-content/uploads/2023/12/Amnesty-VCGenAi-Report-V5.pdf" target=__blank>Amnesty International</a>. His work is referenced by tech executives of major companies like <a href="https://www.youtube.com/live/oNP6W8bl0XI?si=rr9Qvo1iOoKIswy0&t=35504" target=__blank>Microsoft</a>, taught in <a href="https://online.umich.edu/series/responsible-generative-ai/" target=__blank>university curriculums</a> and <a href="https://books.google.com/books?id=J2HgEAAAQBAJ&q=bloomberg#v=snippet&q=bloomberg&f=false" target=__blank>books</a> about AI, <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=koWtlJoAAAAJ&citation_for_view=koWtlJoAAAAJ:IjCSPb-OGe4C" target=__blank>cited</a> by <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=koWtlJoAAAAJ&citation_for_view=koWtlJoAAAAJ:IjCSPb-OGe4C" target=__blank>dozens</a> academic research papers, and used as a main reference for AI-best practices at numerous institutions like <a href="https://www.ibm.com/topics/ai-bias" target=__blank>IBM</a> and the <a href="https://mitsloanedtech.mit.edu/ai/teach/getting-started/" target=__blank>Massachusetts Institute of Technology</a>.
    <br><br>

    Leonardo is a 2025 recipient of the <a href="https://www.prnewswire.com/news-releases/winners-of-the-2025-gerald-loeb-awards-announced-by-ucla-anderson-at-new-york-city-event-302580552.html" target=__blank>Gerald Loeb Award</a>, among the highest honors in journalism, for his work on the hidden impacts of Artificial Intelligence. He is also a 2024 recipient of the <a href="https://www.sigmaawards.org/meet-the-winners-of-the-sigmas-2024-for-data-journalism/" target=__blank>Sigma Award</a>, which recognizes the best data journalism from around the world, for his work on Generative AI Bias.</p>
    `;

  let hed = `
   <p class="subtitle">Leonardo is an award-winning journalist at <a href="https://www.bloomberg.com/authors/AV8suZVL6jY/leonardo-nicoletti" target=__blank>Bloomberg News</a>. He works with data, code, and visual storytelling to report on issues at the intersection of technology and society.</p>
  `;

  let subhed = `
    <p>In 2023, 2024, and 2025, Leonardo published a series of data-driven investigations uncovering the hidden impacts of widespread AI adoption, with alarming consequences, including Generative AI's tendency to <a href="https://www.bloomberg.com/graphics/2023-generative-ai-bias/" target=__blank>excacerbate gender and racial biases</a>, AI's <a href="https://www.bloomberg.com/graphics/2024-ai-data-centers-power-grids/" target=__blank>disproportionate strain on global power grids</a>, AI's <a href="https://www.bloomberg.com/graphics/2024-ai-power-home-appliances/" target=__blank>worsening of power quality in people's homes</a>, AI's <a href="https://www.bloomberg.com/graphics/2025-ai-impacts-data-centers-water-data/?srnd=undefined" target=__blank>threat to water stressed communities</a>, and AI's <a href="https://www.bloomberg.com/graphics/2025-ai-data-centers-electricity-prices/" target=__blank>upward pressure on customers' electricity prices</a>.<br><br>

    <p>Leonardo’s work on AI has been cited in reference to AI-policy recommendations at the <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4576667" target=__blank>local level</a>, as well as in official policy frameworks about AI risk from <a href="https://assets.publishing.service.gov.uk/media/653bc393d10f3500139a6ac5/future-risks-of-frontier-ai-annex-a.pdf" target=__blank>national</a> <a href="https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf" target=__blank>governments</a>, international bodies such as the <a href="https://www.ohchr.org/sites/default/files/documents/issues/business/b-tech/taxonomy-GenAI-Human-Rights-Harms.pdf" target=__blank>United Nations</a> and <a href="https://www.imf.org/-/media/Files/Publications/FTN063/2023/English/FTNEA2023006.ashx" target=__blank>IMF</a>, and NGOs like <a href="https://www.amnestyusa.org/wp-content/uploads/2023/12/Amnesty-VCGenAi-Report-V5.pdf" target=__blank>Amnesty International</a>. His work is referenced by tech executives of major companies like <a href="https://www.youtube.com/live/oNP6W8bl0XI?si=rr9Qvo1iOoKIswy0&t=35504" target=__blank>Microsoft</a>, taught in <a href="https://online.umich.edu/series/responsible-generative-ai/" target=__blank>university curriculums</a> and <a href="https://books.google.com/books?id=J2HgEAAAQBAJ&q=bloomberg#v=snippet&q=bloomberg&f=false" target=__blank>books</a> <a href="https://books.google.com/books?id=Oqo4EQAAQBAJ&q=bloomberg#v=snippet&q=bloomberg&f=false" target=__blank>about AI</a>, <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=koWtlJoAAAAJ&citation_for_view=koWtlJoAAAAJ:IjCSPb-OGe4C" target=__blank>cited</a> by <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=koWtlJoAAAAJ&citation_for_view=koWtlJoAAAAJ:IjCSPb-OGe4C" target=__blank>hundreds</a> of academic research papers, and used as a main reference for AI-best practices at numerous institutions like <a href="https://www.ibm.com/topics/ai-bias" target=__blank>IBM</a> and the <a href="https://mitsloanedtech.mit.edu/ai/teach/getting-started/" target=__blank>Massachusetts Institute of Technology</a>.
    <br><br>

    <p>In 2025, Leonardo also investigated US president Trump's <a href="https://www.bloomberg.com/graphics/2025-trump-token-memecoin-crypto-finance/" target=__blank>cryptocurrency ventures</a> and uncovered potential <a href="https://www.bloomberg.com/graphics/2025-trump-memecoin-foreign-crypto-traders/" target=__blank>foreign ties</a> through large scale data analysis. This work was immediately referenced in <a href="https://youtu.be/mR_q9llV-70?si=fwMY7FIqbD-TxYbK&t=799" target=__blank>Senate hearings</a> about the corruption of US Foreign Policy, <a href="https://x.com/SenAdamSchiff/status/1920118462506033463" target=__blank>cited</a> by <a href="https://x.com/SenBlumenthal/status/1920223879793942764" target=__blank>high-ranking</a> <a href="https://x.com/chrismurphyct/status/1920169884568178728?s=46" target=__blank>politicians</a>, and used as evidence in <a href="https://casten.house.gov/imo/media/doc/trump_memecoin_dinner_letter_final.pdf" target=__blank>a congressional letter</a> requesting an immediate investigation to determine whether the Trump crypto dinner violates the federal bribery statute or the Foreign Emoluments Clause of the U.S. Constitution. <br><br>

    Leonardo is a 2025 recipient of the <a href="https://www.prnewswire.com/news-releases/winners-of-the-2025-gerald-loeb-awards-announced-by-ucla-anderson-at-new-york-city-event-302580552.html" target=__blank>Gerald Loeb Awards</a>, the highest honors in business journalism, for his investigative work on the hidden impacts of Artificial Intelligence. He is also a 2024 recipient of the <a href="https://awards.journalists.org/entries/uncovering-bias-in-two-leading-ai-systems/" target=__blank>Online Journalism Awards (OJAs)</a>, recognizing Excellence in Technology Reporting, and the <a href="https://www.sigmaawards.org/meet-the-winners-of-the-sigmas-2024-for-data-journalism/" target=__blank>Sigma Award</a>, recognizing the best data journalism from around the world, for his work on Generative AI Bias.</p>
  `;

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
      <!-- <div class={"flex"}>
        <div>
          {@html bio}
        </div>
        <div>
          <img
            class="headshot"
            src="/images/headshot_new.jpg"
            alt="thumb"
          />
        </div>
      </div> -->
      <div class={"flex"}>
        <div>
          <img class="pixel-art" src="/images/headshot_new.jpg" alt="thumb" />
        </div>
        <div class="hed">
          {@html hed}
        </div>
      </div>
      <div>
        {@html subhed}
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
      {#each awardYears as year}
        <h6 class="title">{year}</h6>
        <div class="year-container">
        {#each awards.filter(award => award.year === year) as data, i}
          <h6>
            <a class="achievement" href={data.link} target="__blank"
            >{data.name}</a
          >
          <span class="meta">- {data.award}</span>
        </h6>
        {/each}
        </div>
      {/each}
      <br />
      <h2 class="title">Talks</h2>
      {#each talkYears as year}
        <h6 class="title">{year}</h6>
        <div class="year-container">
        {#each talks.filter(talk => talk.year === year) as data, i}
        <!-- {#each talks.sort((a, b) => descending(a.year, b.year)) as data, i} -->
        <h6>
          <a class="achievement" href={data.link} target="__blank"
            >{data.name}</a
          >
          <span class="meta">- {data.role}</span>
        </h6>
        {/each}
        </div>
      {/each}
      <br>
    <!-- </div> -->
    <!-- <div class="container">
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
    </div> -->
    <!-- <div class="container"> -->
      <h2 class="title">Get in touch/tips/leaks</h2>
      <!-- <p class="subtitle">Drop me a line and I'll get back to you as soon as I can</p> -->
      <!-- <br> -->
      <h6>
        <span class="achievement">Email</span> -
        <span class="meta"><a href="mailto:lnicoletti3@bloomberg.net">lnicoletti3 at bloomberg.net</a></span>
      </h6>
      <h6>
        <span class="achievement">Signal</span> -
        <span class="meta"><a href="tel:+13477315549">+1(347)-731-5549</a></span>
      </h6>
      <h6>
        <span class="achievement">Other inquiries</span> -
        <span class="meta"><a href="mailto:info.leonardonicoletti@gmail.com"
          >info.leonardonicoletti at gmail.com</a
        ></span>
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

  .hed {
    /* max-width: 40%; */
  }

  .container {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .year-container {
    margin-left: 40px;
  }

  .achievement {
    font-weight: 500;
    font-family: var(--font-reg);
    font-size: 1rem;
  }

  img {
    /* width: 40%; */
    /* max-width: 40%; */
    /* margin-left: 40px; */
  }

  .headshot {
    object-fit: contain;
    width: 100%;
    max-width: 300px;
  }

  .pixel-art {
    width: 500px;
    object-fit: contain;
    /* width: 100%; */
  }

  .flex {
    display: flex;
    margin-top: 20px;
    column-gap: 50px;
    /* only for pixel art */
    margin-bottom: 40px;
    align-items: center;
    column-gap: 20px;
  }

  /* .flex > * {
    flex-basis: 100%;
  } */

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

  /* @media (max-width: 420px) {
    .headshot {
      margin-top: 20px;
    }
  } */

  @media (max-width: 500px) {
    .headshot {
      margin-top: 20px;
    }

    /* remove below for pixel art */
    /* .flex {
      display: block;
    } */

    /* add below for pixel art */
    .flex {
      column-gap: 10px;
      margin-bottom: 20px;
      margin-top:0px;
    }

    .pixel-art {
    width: 420px;
    /* width: 100%; */
  }

  .achievement {
    font-size: 0.9rem;
  }
  }
</style>
