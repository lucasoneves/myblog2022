import { Links, LiveReload, Outlet } from "remix";

import globalStyles from "./styles/index.css";

import {
  links as headerLinks
} from "./components/header";

import Header from "./components/header";

export function links() {
  return [
    ...headerLinks(),
    {
      rel: "stylesheet",
      href: globalStyles,
    },
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: So great, it's funny!</title>
        <Links />
      </head>
      <body>
        <Header />

        <main>
          <Outlet />
        </main>
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}
