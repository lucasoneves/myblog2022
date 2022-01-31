import styledUrl from "../../styles/header.css";

export function links() {
    return [
        {
          rel: "stylesheet",
          href: styledUrl,
        }
      ];
}

export default function Header() {
    return (
        <header>
            <h2>Lucas Neves</h2>
            <ul>
                <li>Home</li>
            </ul>
        </header>
    )
}