import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/introduction.tsx"),
	route("library", "routes/library.tsx"),
	route("editor", "routes/editor.tsx"),
] satisfies RouteConfig;
