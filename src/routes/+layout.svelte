<script>
	import { browser } from '$app/environment';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import Nav from './Nav.svelte';
	import HeaderMobile from './HeaderMobile.svelte';
	import NavMobile from './NavMobile.svelte';
	import Sidebar from './Sidebar.svelte';
	import "../app.css";
	import './styles.css';
	
	
  let open = false
  let screenWidth;
  $: if (browser){
	screenWidth = window.innerWidth;
    }  
  $: vWideScreen = screenWidth > 1440;
  $: laptop = screenWidth >= 1024;
  $: tablet = screenWidth < 1024;
  $: mobile = screenWidth < 780;
  $: vNarrow = screenWidth < 420;

  $: innerHeight = 0;
//   $: innerWidth = 0;
  $: outerWidth = 0;
  $: outerHeight = 0;

  // import welcome from '$lib/images/svelte-welcome.webp';
  // import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>
<svelte:window
  bind:innerHeight
  bind:innerWidth={screenWidth}
  bind:outerWidth
  bind:outerHeight
/>
<!-- class="bg-white-100 dark:bg-slate-700 border-b border-slate-200 dark:border-slate-900"  -->
<div >
	<!-- {#if innerWidth !== null && innerWidth !== undefined && innerWidth !== 0} -->
		{#if mobile}
			<Sidebar bind:open/>
			<NavMobile bind:sidebar={open}/>
			<main>
				<slot />
			</main>
		{:else}
			<Header />
			<Nav />
			<p>
				browser: {browser}
				screenwidth: {screenWidth}
			</p>
			<main>
				<slot />
			</main>
		{/if}
	<!-- {/if} -->

	

	<!-- <footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer> -->

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		/* padding: 1rem; */
		/* width: 100%; */
		/* max-width: 64rem; */
		/* margin-left: 10%;
		margin-right: 10%; */
		box-sizing: border-box;
		
		align-items: center;
	}

	/* section {
		border-right: 1px solid black;
		border-left: 1px solid black;
		border-bottom: 1px solid black;
		width: 80%;
		flex: 1;
	} */

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
