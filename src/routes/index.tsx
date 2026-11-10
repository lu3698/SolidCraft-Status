import { createFileRoute } from "@tanstack/react-router";
import { Monitor } from "@/components/monitor";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <Monitor />;
}
