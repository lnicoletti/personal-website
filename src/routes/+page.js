// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

// // import * as db from '$lib/server/database';
// import { csv } from 'd3';

// // /** @type {import('./$types').PageServerLoad} */
// export async function load({ params }) {
//     return {
//         data: await csv('$lib/data/articles.csv')
//     };
// }
