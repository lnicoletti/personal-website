<script>
	import { page } from "$app/stores";
	import svelte from "$lib/images/svelte-logo.svg";
	import logo from "$lib/images/logo.gif";
	import github from "$lib/images/github.svg";
	import twitter from "$lib/images/twitter.svg";
	import linkedin from "$lib/images/linkedin.svg";
	import instagram from "$lib/images/instagram.svg";
	import observable from "$lib/images/observable.svg";
	import Theme from "$lib/Theme.svelte";
	import Counter from "./Counter.svelte";

	let socials = [
		{
			icon: twitter,
			name: "twitter",
			url: "https://twitter.com/Leonardonclt",
		},
		{
			icon: linkedin,
			name: "linkedin",
			url: "https://www.linkedin.com/in/leonardonclt/",
		},
		{
			icon: instagram,
			name: "instagram",
			url: "https://www.instagram.com/leonardonclt/?hl=en",
		},
		{
			icon: observable,
			name: "observable",
			url: "https://observablehq.com/@lnicoletti",
		},
		{ icon: github, name: "github", url: "https://github.com/lnicoletti" },
	];
</script>

<!-- class="bg-white-100 dark:bg-slate-700 border-slate-200 dark:border-slate-900" -->

<container>
	<header>
		<div class="corner">
			<!-- <a href="https://kit.svelte.dev">
			<img src={svelte} alt="SvelteKit" />
		</a> -->
			<!-- <input type="checkbox" id="theme-toggle" />
		<label for="theme-toggle" /> -->
			<!-- <div class="flex items-center">
			<Theme />
		</div> -->
		</div>

		<div class="hed">
			<h3 class="logoName">Leonardo Nicoletti.</h3>
			<div class="logoCont">
				<a href="/">
					<img class="logo" src={logo} alt="logo" />
				</a>
			</div>
			<h3 class="dek">
				Open source applications and visual investigations through data,
				code, and photography.
			</h3>
		</div>

		<!-- <nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Visual Stories</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/photography') ? 'page' : undefined}>
				<a href="/photography">Photography</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/publications') ? 'page' : undefined}>
				<a href="/publications">Publications</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/press') ? 'page' : undefined}>
				<a href="/press">Press</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Sverdle</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav> -->

		<div class="corner">
			<!-- <div class="flex">
		{#each socials as social, i}
			<a href={social.url}>
				<img class="social-icon" src={social.icon} alt={social.name} />
			</a>
		{/each}
		</div> -->
		</div>
	</header>
</container>

<style lang="postcss">
	/* #theme-toggle {
        @apply invisible;
    }

    #theme-toggle + label {
        @apply inline-block cursor-pointer h-9 w-9 fixed top-2 rounded-full duration-300 content-[''];
    }

    #theme-toggle:not(:checked) + label {
        @apply bg-amber-400;
    }

    #theme-toggle:checked + label {
        @apply bg-transparent;
        box-shadow: inset -18px -16px 1px 1px #ddd;
    } */

	container {
		width: 100%;
		/* text-align: center; */
		display: flex;
		justify-content: center;
	}

	.logo {
		/* width: 20%; */
		max-width: 156px;
		min-width: 50px;
		margin: auto;
	}

	.logoCont {
		/* max-width: 20%; */
		margin-bottom: 20px;
	}

	.hed {
		display: flex;
		justify-content: center;
		flex-direction: column;
		max-width: 100%;
		margin-top: 10px;
		margin-bottom: 25px;
		text-align: center;
	}

	
	header {
		display: flex;
		justify-content: space-between;
		/* width: 80%;
		max-width: 1800px; */
		/* border-right: 1px solid black;
		border-left: 1px solid black; */
		border-bottom: 1px solid black;
		/* border-top: 10px solid var(--color-theme-1); */
		/* border-top: 10px solid black; */
	}

	/* .social-icon {
		margin:15px
	} */

	.corner {
		width: 7em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
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

	li[aria-current="page"]::before {
		--size: 6px;
		content: "";
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

	/* h4 {} */

	.highlight {
		font-weight: 700;
		/* background-color: grey;
		padding:3px */
	}

	@media (max-width: 500px) {
		.corner {
			display: none;
		}
		.logoName {
			display: none;
		}

		.logoCont {
			/* max-width: 20%; */
			margin-bottom: 0px;
		}

		.hed {
			justify-content: center;
			flex-direction: row;
			align-items: center;
			column-gap: 40px;
			max-width: 100%;
			margin-top: 10px;
			margin-bottom: 0px;
			text-align: left;
		}

		header {
			border: none;
		}
	}

	.dek {
			opacity:0.5
		}

</style>
