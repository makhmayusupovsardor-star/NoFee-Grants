import Link from "next/link";
import { grants } from "../data/grants";

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1>NoFee Grants</h1>
        <Link className="btn" href="https://t.me/NoFee_Grants" target="_blank">Telegram</Link>
      </header>

      <div className="section">
        <input
          placeholder="Qidiruv (title, country, tag)..."
          onChange={(e) => {
            const q = e.target.value.toLowerCase();
            const cards = document.querySelectorAll<HTMLElement>("[data-card]");
            cards.forEach((c) => {
              const hay = c.dataset.haystack || "";
              c.style.display = hay.includes(q) ? "" : "none";
            });
          }}
          style={{width:"100%",padding:"12px 14px",borderRadius:10,border:"1px solid #e5e7eb"}}
        />
      </div>

      <div className="grid">
        {grants.map(g => (
          <Link
            key={g.slug}
            href={`/grant/${g.slug}`}
            className="card"
            data-card
            data-haystack={
              (g.title + " " + (g.country||"") + " " + (g.tags||[]).join(" ")).toLowerCase()
            }
          >
            <h3 className="title">{g.title}</h3>
            <div className="subtle">{g.org || "—"}</div>
            <div className="meta">
              {g.country && <span className="badge">{g.country}</span>}
              {g.format && <span className="badge">{g.format}</span>}
              {g.deadline && <span className="badge">Deadline: {g.deadline}</span>}
              {(g.tags||[]).slice(0,3).map(t => <span key={t} className="badge">#{t}</span>)}
            </div>
            <p className="subtle">{g.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
