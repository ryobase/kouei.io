/*!
 * Minimal theme switcher
 *
 * Pico.css - https://picocss.com
 * Copyright 2019-2024 - Licensed under MIT
 */

const themeSwitcher = {
    // Config
    _scheme: "auto",
    buttonsTarget: ".toggler[data-theme-switcher]",
    buttonAttribute: "data-theme-switcher",
    rootAttribute: "data-theme",
    localStorageKey: "picoPreferredColorScheme",

    // Init
    init() {
        this.scheme = this.schemeFromLocalStorage;
        this.initSwitchers();
    },

    // Get color scheme from local storage
    get schemeFromLocalStorage() {
        return globalThis.localStorage?.getItem(this.localStorageKey) ??
            this.preferredColorScheme;
    },

    // Preferred color scheme
    get preferredColorScheme() {
        return globalThis.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    },

    // Init switchers
    initSwitchers() {
        const buttons = document.querySelectorAll(this.buttonsTarget);

        buttons.forEach((button: Element) => {
            // check the box if on
            if (this.scheme === "dark") {
                button.setAttribute("checked", "false");
            }

            button.addEventListener(
                "click",
                () => {
                    // get current scheme
                    let scheme = "light";
                    let attr = "true";

                    if (this.scheme === "light") {
                        scheme = "dark";
                        attr = "false";
                    }

                    button.setAttribute("checked", attr);

                    // Set scheme
                    this.scheme = scheme;
                },
                false,
            );
        });
    },

    // Set scheme
    set scheme(scheme) {
        switch (scheme) {
            case "dark":
            case "light":
                this._scheme = scheme;
                break;
        }

        this.applyScheme();
        this.schemeToLocalStorage();
    },

    // Get scheme
    get scheme() {
        return this._scheme;
    },

    // Apply scheme
    applyScheme() {
        document.querySelector("html")?.setAttribute(
            this.rootAttribute,
            this.scheme,
        );
    },

    // Store scheme to local storage
    schemeToLocalStorage() {
        globalThis.localStorage?.setItem(this.localStorageKey, this.scheme);
    },
};

export default themeSwitcher;
