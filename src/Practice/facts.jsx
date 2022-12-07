import "./facts.css";

export const Facts = ({ facts, navigate }) => {
  return (
    <article>
      <h1>Most known russian fails in 2022</h1>

      <ul className="fact-list">
        {facts.map((f) => (
          <li key={f.id} className="fact-item">
            <time>{f.date ?? "Pending"}</time>
            {f.name}
            <button
              style={{
                backgroundColor: "transparent",
                border: 0,
                cursor: "pointer",
              }}
              type="button"
              onClick={() => navigate(f.id)}
            >
              ❔
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
};
