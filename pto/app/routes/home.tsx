import type { Route } from "./+types/home";
import * as React from "react";
import Calendar18 from "~/components/calendar-18";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <Calendar18 />
    </div>
  );
}
