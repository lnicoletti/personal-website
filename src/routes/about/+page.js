/** @type {import('./$types').PageLoad} */
import { dev } from '$app/environment';
import { autoType, csv, descending, csvParse } from 'd3';
import { browser } from '$app/environment';



// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

// export const load = async ({ fetch, params }) => {
//     if (browser) {
//     try {
//         const awards = await csv('/src/lib/data/awards.csv', autoType);
//         const talks = await csv('/src/lib/data/talks.csv', autoType);

//         return {
//             awards: awards,
//             talks: talks
//         }
//     } catch (error) {
//         console.error('Error in load function:', error);
//         return {
//             error: 'Internal Server Error'
//         }
//     }
// }
// }

export const load = (async ({ fetch, params }) => {
    console.log("slug", params)
    // const result = await fetch("../../src/lib/data/articles.csv", {
      const result = await fetch("https://raw.githubusercontent.com/lnicoletti/personal-website/main/src/lib/data/awards.csv", {
      headers: { "content-type": "text/csv;charset=UTF-8" },
    });

    const result_ = await fetch("https://raw.githubusercontent.com/lnicoletti/personal-website/main/src/lib/data/talks.csv", {
      headers: { "content-type": "text/csv;charset=UTF-8" },
    });
    
    if (!result.ok) {
      throw new Error("Failed to fetch data");
    }
    console.log("result", result)
    const file = await result.text();
    const data = csvParse(file, autoType)

    const file_ = await result_.text();
    const data_ = csvParse(file_, autoType)
    return {
        awards: data,
        talks: data_,
    }

  }) 
  

  
