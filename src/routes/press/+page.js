/** @type {import('./$types').PageLoad} */
import { dev } from '$app/environment';
import { autoType, csv, descending } from 'd3';
import { browser } from '$app/environment';


// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

  export const load = async ({ fetch, params }) => {
    // if (browser) {
    try {
      const data = await csv('../src/lib/data/press.csv', autoType);

        return {
          articles: data,
        }
    } catch (error) {
        console.error('Error in load function:', error);
        return {
            error: 'Internal Server Error'
        }
    }
  // }
}
  
