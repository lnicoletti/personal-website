<script>
    import { page } from '$app/stores';

</script>

<container>
	<!-- class="bg-white-100 dark:bg-slate-700 border-b border-slate-200 dark:border-slate-900" -->
<nav >
    <!-- <svg viewBox="0 0 2 3" aria-hidden="true">
        <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
    </svg> -->
    <ul>
        <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
            <a href="/">Stories</a>
        </li>
		<span class="dot">&#183</span>
        <li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
            <a href="/about">About</a>
        </li>
		<span class="dot">&#183</span>
        <li aria-current={$page.url.pathname.startsWith('/press') ? 'page' : undefined}>
            <a href="/press">Impact</a>
        </li>
		<span class="dot">&#183</span>
		<li>
            <a href="https://www.instagram.com/leonardonclt/?hl=en" target=__blank>Photography</a>
        </li>
    </ul>
    <!-- <svg viewBox="0 0 2 3" aria-hidden="true">
        <path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
    </svg> -->
</nav>
</container>

<style>

    container {
		width:100%;
		/* text-align: center; */
		display: flex;
		justify-content: center;
	}

	nav {
        /* width: 80%;
		max-width: 1800px ; */
		display: flex;
		/* justify-content: left; */
		justify-content: center;
		/* --background: rgba(255, 255, 255, 0.7); */
        /* border-right: 1px solid black;
		border-left: 1px solid black; */
		border-bottom: 1px solid black;
	}

	@media (max-width: 500px) {
		nav {
			justify-content: space-between;
			border: none
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
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 500;
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
