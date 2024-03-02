/** @type {import('./$types').PageLoad} */
import { dev } from '$app/environment';
import { autoType, csv, csvParse, descending } from 'd3';
import { browser } from '$app/environment';


// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const load = (async ({ fetch, params }) => {
  // console.log("slug", params)
  // console.log("base", base+"/src/lib/data/articles.csv")
  // const result = await fetch("../../src/lib/data/articles.csv", {
    // const result = await fetch(base+"/data/articles.csv", {
      const result = await fetch("/data/press.csv", {
      // const result = await fetch("$lib/data/articles.csv", {
    // const result = await fetch("https://raw.githubusercontent.com/lnicoletti/personal-website/main/src/lib/data/articles.csv", {
    headers: { "content-type": "text/csv;charset=UTF-8" },
  });
  
  if (!result.ok) {
    // console.log("base", base+"/src/lib/data/articles.csv")
    throw new Error("Failed to fetch data");
  }
  // console.log("result", result)
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

// export const load = (async ({ fetch, params }) => {
//   console.log("slug", params)
//   // const result = await fetch("../../src/lib/data/articles.csv", {
//     const result = await fetch("https://raw.githubusercontent.com/lnicoletti/personal-website/main/src/lib/data/press.csv", {
//     headers: { "content-type": "text/csv;charset=UTF-8" },
//   });
  
//   if (!result.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   console.log("result", result)
//   const file = await result.text();
//   const data = csvParse(file, autoType)
//   return {
//     articles: data,
//   }
// }) 
  
