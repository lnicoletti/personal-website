<!-- src/routes/__layout.svelte -->
<script context="module">
    //the session object destructured below comes from the hooks.js file above
    export async function load({ session }) {
        return {
            props: {
                //Add the boolean as a property of the __layout.svelte component
                overrideMobile: session.mobile,
            }
        }
    }

    console.log("running")
</script>
<!-- <script>
    import {width, mobile} from '$lib/utils/device';
    //receive whether to override and render as mobile
    export let overrideMobile = true;
    //store this in the shared stores located in '$lib/utils/device'
    $mobile = overrideMobile;

    // $: console.log("mobile", $mobile)
</script> -->
<!-- notice we also bind the inner width of the HTML document to a store -->


<script>
	import { browser } from '$app/environment';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import Nav from './Nav.svelte';
	import HeaderMobile from './HeaderMobile.svelte';
	import NavMobile from './NavMobile.svelte';
	import Sidebar from './Sidebar.svelte';
	import {device, width, mobile} from '$lib/utils/device.js';
	// import {width, mobile} from '$lib/utils/device';
    //receive whether to override and render as mobile
    export let overrideMobile = true;
    //store this in the shared stores located in '$lib/utils/device'
    $mobile = overrideMobile;

	$: small = $device === "tablet"

    // $: console.log("mobile", $mobile)
	import "../app.css";
	import './styles.css';
    import Layout from './__layout.svelte';
	
	
  let open = false
//   $: screenWidth = 1000;
//   $: if (browser){
// 	screenWidth = window.innerWidth;
//     }  
//   $: vWideScreen = screenWidth > 1440;
//   $: laptop = screenWidth >= 1024;
//   $: tablet = screenWidth < 1024;
//   $: mobile = $device === "mobile" //screenWidth < 780;
//   $: vNarrow = screenWidth < 420;


//   $: innerHeight = 0;
//   $: innerWidth = 0;
//   $: outerWidth = 0;
//   $: outerHeight = 0;

  // import welcome from '$lib/images/svelte-welcome.webp';
  // import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>
<!-- <svelte:window
  bind:innerHeight
  bind:innerWidth={screenWidth}
  bind:outerWidth
  bind:outerHeight
/> -->
<!-- <Layout/> -->
<!-- class="bg-white-100 dark:bg-slate-700 border-b border-slate-200 dark:border-slate-900"  -->
<svelte:window bind:innerWidth={$width} />
<!-- <slot></slot> -->
<div >
	<!-- {#if innerWidth !== null && innerWidth !== undefined && innerWidth !== 0} -->
		{#if small}
			<Sidebar bind:open/>
			<NavMobile bind:sidebar={open}/>
			device: {$device}
			width: {$width}
			<!-- browser: {browser} -->

			<main>
				<slot />
			</main>
		{:else}
			<Header />
			<Nav />
			<p>
				<!-- browser: {browser}
				screenwidth: {screenWidth} -->
				device: {$device}
				width: {$width}
				<!-- browser: {browser} -->

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
