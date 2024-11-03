import lume from "lume/mod.ts";
import robots from "lume/plugins/robots.ts";
import esbuild from "lume/plugins/esbuild.ts";
import sourceMaps from "lume/plugins/source_maps.ts";
import favicon from "lume/plugins/favicon.ts";

const site = lume({
    src: "./src",
    components: {
        cssFile: "/components.css",
        jsFile: "/components.js",
    },
});

site.copy("assets", "assets");

site.use(esbuild({
    extensions: [".ts"],
    options: {
        plugins: [],
        bundle: true,
        format: "esm",
        minify: false,
        keepNames: true,
        platform: "browser",
        target: "esnext",
        treeShaking: true,
        outdir: "./app",
        outbase: ".",
    },
}));

// Use the source maps plugin to generate the .map files
site.use(sourceMaps(/* Options */));

// Explicit allow access to Google and Bing
site.use(robots({
    allow: ["Googlebot", "Bingbot", "DuckDuckBot"],
    disallow: "*",
}));

site.use(favicon({
    input: "/favicon.png",
}));

export default site;
