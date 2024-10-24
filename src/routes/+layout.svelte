<script>
	import { browser } from "$app/environment";
	import Header from "./Header.svelte";
	import Footer from "./Footer.svelte";
	import Nav from "./Nav.svelte";
	import HeaderMobile from "./HeaderMobile.svelte";
	import NavMobile from "./NavMobile.svelte";
	import Sidebar from "./Sidebar.svelte";
	import { device, width } from "$lib/utils/device.js";
	import "../app.css";
	import "./styles.css";
	import Layout from "./__layout.svelte";
	import ThemeToggle from './ThemeToggle.svelte';

	let open = false;
	$: screenWidth = 1000;
	$: if (browser) {
		screenWidth = window.innerWidth;
	}
	$: vWideScreen = screenWidth > 1440;
	$: laptop = screenWidth >= 1024;
	$: tablet = screenWidth < 1024;
	//   $: mobile = $device === "mobile" //screenWidth < 780;
	$: mobile = false;
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
<Layout />
<!-- class="bg-white-100 dark:bg-slate-700 border-b border-slate-200 dark:border-slate-900"  -->
<div>
	<!-- {#if innerWidth !== null && innerWidth !== undefined && innerWidth !== 0} -->
	{#if mobile}
		<!-- <Sidebar bind:open/>
			<NavMobile bind:sidebar={open}/> -->
		<!-- device: {$device}
			width: {screenWidth}
			browser: {browser} -->

		<main>
			<Sidebar bind:open />
			<NavMobile bind:sidebar={open} />
			<slot />
		</main>
	{:else}
		<!-- <Header />
			<Nav /> -->
		<p>
			<!-- browser: {browser}
				screenwidth: {screenWidth} -->
			<!-- device: {$device}
				width: {screenWidth}
				browser: {browser} -->
		</p>
		<main>
			<div class="header-container">
				<Header />
				<Nav />
			</div>
			<slot />
		</main>
	{/if}
	<!-- {/if} -->

	<!-- <footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer> -->

	<Footer />
</div>

<!-- <ThemeToggle /> -->

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.header-container {
		width:100%
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

	@media (max-width: 500px) {
		.header-container {
			box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.28);
			position:sticky;
			top: 0px;
			background: white;
			z-index: 1000;
		}
	}

	/* Dark mode styles */
	:global(body.dark-mode) {
		background-color: #1a1a1a;
		color: #f0f0f0;
	}

	:global(.dark-mode header) {
		background-color: #2c2c2c;
	}

	:global(.dark-mode footer) {
		background-color: #2c2c2c;
	}

	:global(.dark-mode .chat-container) {
		background-color: #2c2c2c;
	}

	:global(.dark-mode .message) {
		background-color: #3a3a3a;
	}

	:global(.dark-mode .user-message) {
		background-color: #4a4a4a;
	}

	:global(.dark-mode input[type="text"]) {
		background-color: #3a3a3a;
		color: #f0f0f0;
	}

	:global(.dark-mode button) {
		background-color: #4a4a4a;
		color: #f0f0f0;
	}
</style>
