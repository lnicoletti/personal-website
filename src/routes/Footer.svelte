<script>
	import { page } from '$app/stores';
	import svelte from '$lib/images/svelte-logo.svg';
	import logo from '$lib/images/logo.gif';
	import github from '$lib/images/github.svg';
	import twitter from '$lib/images/twitter.svg';
	import X from '$lib/images/X.png';
	import linkedin from '$lib/images/linkedin.svg';
	import instagram from '$lib/images/instagram.svg';
	import observable from '$lib/images/observable.svg'

	let socials = [{icon:X, name:"X", url:"https://twitter.com/Leonardonclt"}, {icon:linkedin, name:"linkedin", url:"https://www.linkedin.com/in/leonardonclt/"}, {icon:instagram, name:"instagram", url:"https://www.instagram.com/leonardonclt/?hl=en"}, {icon:observable, name:"observable", url:"https://observablehq.com/@lnicoletti"}, {icon:github, name:"github", url:"https://github.com/lnicoletti"}]

</script>

<container>
<!-- <section> -->
	<footer>
		<div>
		<h3>© 2022 - Leonardo Nicoletti</h3>
		</div>
		<div class="corner">
			<div class="flex">
			{#each socials as social, i}
				<a href={social.url}>
					<img class="social-icon" src={social.icon} alt={social.name} />
				</a>
			{/each}
			</div>
		</div>
		<!-- <div class="hed">
			<span class="logoName">Leonardo Nicoletti</span>
			<div class="logoCont">
			<a href="https://kit.svelte.dev">
				<img class="logo" src={logo} alt="SvelteKit" />
			</a>
			</div>
			<span>Open source applications and visual investigations through data, code, and photography.</span>
		</div> -->

	</footer>
<!-- </section> -->
</container>

<style>

	container {
		width:100%;
		/* text-align: center; */
		display: flex;
		justify-content: center;
	}

	.logo {
		max-width: 20%
	}

	.logoCont {
		/* max-width: 20%; */
		margin-bottom:20px
	}

	h3 {
		text-transform: uppercase;
	}

	.hed {
		display: flex;
		justify-content: center;
		flex-direction: column;
		max-width: 100%;
		margin-top: 30px;
		margin-bottom: 25px;
		text-align: center;
	}
	
	footer {
		display: flex;
		justify-content: space-between;
		/* width: 80%;
		border-right: 1px solid black;
		border-left: 1px solid black;
		border-bottom: 1px solid black; */
		border-top:0px solid black;
		height: 50px;
		justify-content: space-between;
		align-items: center;
		/* background-color: black; */
		/* background-color: var(--color-theme-1); */
		/* color:white */
	}


	section {
		border-bottom: 0px solid black;
	}

	.corner {
		width: 9em;
		/* height: 3em; */
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 80%;
		/* height: 2em; */
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
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
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
