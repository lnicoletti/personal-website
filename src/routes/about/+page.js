/** @type {import('./$types').PageLoad} */
import { dev } from '$app/environment';
import { autoType, csv, descending } from 'd3';


// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export const load = async ({ fetch }) => {
    try {
        const awards = await csv('src/lib/data/awards.csv', autoType);
        const talks = await csv('src/lib/data/talks.csv', autoType);

        return {
            awards: awards,
            talks: talks
        }
    } catch (error) {
        console.error('Error in load function:', error);
        return {
            error: 'Internal Server Error'
        }
    }
}

  
