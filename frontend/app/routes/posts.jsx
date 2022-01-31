import { Outlet } from "remix";
import styledUrl from "../styles/posts.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styledUrl,
    }
  ];
}

export default function JokesRoute() {
  return (
    <div>
      <h1>J🤪KES</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
