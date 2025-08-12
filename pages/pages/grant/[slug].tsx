import { useRouter } from "next/router";
import Link from "next/link";
import { grants } from "../../data/grants";

export default function GrantDetail() {
  const { query } = useRouter();
  const grant = grants.find(g => g.slug === query.slug);
  if (!grant) return <div className="container">Topilmadi.</div>;

  return (
    <div className="container">
      <header className="header">
        <Link href="/" className="btn">← Back</Link>
        <Link className="btn primary" href={grant.apply_url || grant.official_url || "#"} target="_blank">Apply</Link>
      </header>

      <h1 style={{marginBottom:8}}>{grant.title}</h1>
      <div className="subtle">{grant.org}</div>

      <div className="meta" style={{marginTop:12}}>
        {grant.country && <span className="badge">{grant.country}</span>}
        {grant.format && <span className="badge">{grant.format}</span>}
        {grant.age && <span className="badge">Age: {grant.age}</span>}
        {grant.deadline && <span className="badge">Deadline: {grant.deadline}</span>}
        {grant.fee && <span className="badge">{grant.fee}</span>}
      </div>

      <hr/>

      {grant.summary && (
        <div className="section">
          <h3>About</h3>
          <p>{grant.summary}</p>
        </div>
      )}

      {grant.coverage && grant.coverage.length>0 && (
        <div className="section">
          <h3>Benefits / Coverage</h3>
          <ul>{grant.coverage.map((x,i)=><li key={i}>{x}</li>)}</ul>
        </div>
      )}

      {grant.eligibility && grant.eligibility.length>0 && (
        <div className="section">
          <h3>Eligibility</h3>
          <ul>{grant.eligibility.map((x,i)=><li key={i}>{x}</li>)}</ul>
        </div>
      )}

      {grant.documents && grant.documents.length>0 && (
        <div className="section">
          <h3>Required Documents</h3>
          <ul>{grant.documents.map((x,i)=><li key={i}>{x}</li>)}</ul>
        </div>
      )}

      {grant.how_to_apply && grant.how_to_apply.length>0 && (
        <div className="section">
          <h3>How to apply</h3>
          <ol>{grant.how_to_apply.map((x,i)=><li key={i}>{x}</li>)}</ol>
        </div>
      )}

      <div className="section">
        {grant.official_url && <Link className="btn" href={grant.official_url} target="_blank">Official page</Link>}
      </div>
    </div>
  );
}
