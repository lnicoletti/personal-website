<script>
    import { browser } from '$app/environment';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
	export let open = false

    $: if (browser) {
     open ? document.body.style.overflow='hidden' : document.body.style.overflow='auto'
    }
    $: console.log($page)
</script>

<aside class="absolute w-full h-full bg-white border-r-2 shadow-lg" class:open>
	 <ul>
        <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
            <h2 class={$page.url.pathname === '/' ? "active" : "inactive"}><a href="/" on:click={()=>{open=false}}>Visual Stories</a></h2>
        </li>
        <li aria-current={$page.url.pathname.startsWith('/photography') ? 'page' : undefined}>
            <h2 class={$page.url.pathname.startsWith('/photography') ? "active" : "inactive"}><a href="/photography" on:click={()=>{open=false}}>Photography</a></h2>
        </li>
        <!-- <li aria-current={$page.url.pathname.startsWith('/publications') ? 'page' : undefined}>
            <a href="/publications" on:click={()=>{open=false}}>Publications</a>
        </li> -->
        <li aria-current={$page.url.pathname.startsWith('/press') ? 'page' : undefined}>
            <h2 class={$page.url.pathname.startsWith('/press') ? "active" : "inactive"}><a href="/press" on:click={()=>{open=false}}>Press</a></h2>
        </li>
        <li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
            <h2 class={$page.url.pathname === '/about' ? "active" : "inactive"}><a href="/about" on:click={()=>{open=false}}>About</a></h2>
        </li>
    </ul>
</aside>

<style>
	aside {
		left: -100%;
        top: 87px;
		transition: left 0.3s ease-in-out;
        text-align: center;
        vertical-align: middle;
        z-index: 1;
        /* position: sticky; */
	}
	
	.open {
		left: 0;
	}

    ul {
        margin-top: 10vh;
        font-size: 1rem;

    }

    li {
        height: 20vh;
    }

    a {
		/* display: flex; */
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		/* color: var(--color-text-light); */
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

    .inactive {
	font-size: 1rem;
    font-weight: 500;
	
    }
</style>