import { createLazyFileRoute } from "@tanstack/react-router";
import { AboutPage } from "../pages/About.page";

export const Route = createLazyFileRoute("/about")({
  component: AboutPage,
});
