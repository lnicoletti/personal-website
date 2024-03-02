<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import Nav from './Nav.svelte';
	import HeaderMobile from './HeaderMobile.svelte';
	import NavMobile from './NavMobile.svelte';
	import Sidebar from './Sidebar.svelte';
	import "../app.css";
	import './styles.css';
	
	
	let open = false
  $: vWideScreen = innerWidth > 1440;
  $: laptop = innerWidth >= 1024;
  $: tablet = innerWidth < 1024;
  $: mobile = innerWidth < 780;
  $: vNarrow = innerWidth < 420;

  $: innerHeight = 0;
  $: innerWidth = 0;
  $: outerWidth = 0;
  $: outerHeight = 0;

  // import welcome from '$lib/images/svelte-welcome.webp';
  // import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>
<svelte:window
  bind:innerHeight
  bind:innerWidth
  bind:outerWidth
  bind:outerHeight
/>
<!-- class="bg-white-100 dark:bg-slate-700 border-b border-slate-200 dark:border-slate-900"  -->
<div >
	<!-- {#if !mobile} -->
		<Header />
		<Nav />
	<!-- {:else}
		<Sidebar bind:open/>
		<NavMobile bind:sidebar={open}/>
	{/if} -->

	<main>
		<slot />
	</main>

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
