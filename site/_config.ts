import lume from "lume/mod.ts";
import robots from "lume/plugins/robots.ts";

const site = lume({
    src: "./src",
    components: {
        cssFile: "/components.css",
        jsFile: "/components.js",
    },
});

site.copy("assets", "assets");

// Explicit allow access to Google and Bing
site.use(robots({
    allow: ["Googlebot", "Bingbot", "DuckDuckBot"],
    disallow: "*",
}));

export default site;
