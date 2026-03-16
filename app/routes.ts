import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("tech-stack", "routes/tech-stack.tsx"),
  route("projects", "routes/projects.tsx")
] satisfies RouteConfig;
