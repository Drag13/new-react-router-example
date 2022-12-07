export const Fact = ({ fact }) => {
  return (
    <article>
      <h1>
        {fact.date}:{fact.name}
      </h1>
      <p>{fact.description}</p>
    </article>
  );
};
