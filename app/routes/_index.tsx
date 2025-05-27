import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "remix2025with0705mui0418" },
    { name: "description", content: "Welcome to remix2025with0705mui0418." },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}
