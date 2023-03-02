import { c as create_ssr_component } from "../../chunks/index.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1wgqvc7{text-align:center}ul.svelte-1wgqvc7{width:300px;margin:0 auto;text-align:center}footer.svelte-1wgqvc7{color:blue;position:fixed;bottom:0;left:50%;transform:translateX(-50%)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h1 class="${"svelte-1wgqvc7"}">Miracle&#39;s Blog</h1>

<ul class="${"svelte-1wgqvc7"}"><li><a href="${"/"}">home</a></li>
  <li><a href="${"/articles"}">articles</a></li>
  <li><a href="${"/about"}">About</a></li></ul>

<main>${slots.default ? slots.default({}) : ``}</main>


<footer class="${"svelte-1wgqvc7"}"><a href="${"/"}">wrriten by 2023.03.02</a></footer>`;
});
export {
  Layout as default
};
