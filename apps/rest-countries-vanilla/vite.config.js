import { defineConfig } from "vite";

export default defineConfig({
	resolve: {
		alias: {
			"@": new URL("./src", import.meta.url).pathname,
			"@css": new URL("./src/css", import.meta.url).pathname,
			"@js": new URL("./src/js", import.meta.url).pathname,
			"@components": new URL("./src/components", import.meta.url).pathname,
		},
	},
});
