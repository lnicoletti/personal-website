<script>
    import { page } from '$app/stores';
	import logo from '$lib/images/logo.gif';
	import Hamburger from './Hamburger.svelte'
	
	export let sidebar = false

</script>

<container>
	<!-- class="bg-white-100 dark:bg-slate-700 border-b border-slate-200 dark:border-slate-900" -->
<nav >
    <div class="hed">
		<div class="logoCont">
			<a href="/">
				<img class="logo" src={logo} alt="logo" />
			</a>
			<h7 class="logoName">Leonardo Nicoletti.</h7>
		</div>
	</div>
	<Hamburger bind:open={sidebar}/>
</nav>
</container>

<style>

    container {
		width:100%;
		/* text-align: center; */
		display: flex;
		justify-content: center;
		/* position: sticky; */
		height: 90px;
	}

	.logoCont {
		margin-top: 5px
	}

	nav {
        /* width: 80%;
		max-width: 1800px ; */
		display: flex;
		/* justify-content: left; */
		/* justify-content: center; */
		justify-content: space-between;
		/* --background: rgba(255, 255, 255, 0.7); */
        /* border-right: 1px solid black;
		border-left: 1px solid black; */
		/* border-bottom: 5px solid black; */
	}

	container {
		box-shadow: 0 0 5px 1px rgba(0,0,0,0.28);
	}

	.logo {
		/* width: 20%; */
		max-width: 100px;
		min-width: 50px;
		/* margin: auto; */
	}

	@media (max-width: 400px) {
	.logo {
		max-width: 80px;
		/* margin-top: ; */
	}
	container {
		height: 78px;
	}
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		/* background: var(--background); */
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	/* li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	} */

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		/* padding: 0 0.5rem; */
		color: var(--color-text);
		font-weight: 00;
		/* font-size: 0.8rem; */
		text-transform: uppercase;
		/* text-transform: capitalize; */
		/* letter-spacing: 0.1em; */
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		/* color: var(--color-theme-1); */
		font-weight: 700;
	}
</style>
