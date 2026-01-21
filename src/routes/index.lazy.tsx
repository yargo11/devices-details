import { createLazyFileRoute } from "@tanstack/react-router";
import { HomePage } from "../pages/Home.page";

export const Route = createLazyFileRoute("/")({
  component: HomePage,
});
