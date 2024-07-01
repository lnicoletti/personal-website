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
<script>
    import {width, mobile} from '$lib/utils/device';
    //receive whether to override and render as mobile
    export let overrideMobile = true;
    //store this in the shared stores located in '$lib/utils/device'
    $mobile = overrideMobile;

    // $: console.log("mobile", $mobile)
</script>
<!-- notice we also bind the inner width of the HTML document to a store -->
<svelte:window bind:innerWidth={$width} />
<slot></slot>