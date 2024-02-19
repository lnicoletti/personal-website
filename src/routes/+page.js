/** @type {import('./$types').PageLoad} */
import { dev } from '$app/environment';
import { autoType, csv, descending, csvParse } from 'd3';
import { browser } from '$app/environment';
import { assets, base, resolveRoute } from '$app/paths';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;


// export const load = async ({ fetch, params }) => {
//   // if (browser) {
//   try {
//     const data = await csv('/src/lib/data/articles.csv', autoType);
//     console.log("data", data)

//       return {
//         articles: data,
//       }
//   } catch (error) {
//       console.error('Error in load function:', error);
//       return {
//           error: 'Internal Server Error'
//       }
//   }
// // }
// }

export const load = (async ({ fetch, params }) => {
  // console.log("slug", params)
  console.log("base", base+"/src/lib/data/articles.csv")
  // const result = await fetch("../../src/lib/data/articles.csv", {
    const result = await fetch(base+"/src/lib/data/articles.csv", {
    // const result = await fetch("https://raw.githubusercontent.com/lnicoletti/personal-website/main/src/lib/data/articles.csv", {
    headers: { "content-type": "text/csv;charset=UTF-8" },
  });
  
  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }
  console.log("result", result)
  const file = await result.text();
  const data = csvParse(file, autoType)
  return {
    articles: data,
  }
  // await new Promise((resolve, reject) => {
  //   Papa.parse(fileContent, {
  //     header: true,
  //     dynamicTyping: true,
  //     complete: (parseResult) => {
  //       console.log(parseResult);
  //       // handle errors etc.
  //       resolve();
  //     },
  //   });
  // });
}) 
  
