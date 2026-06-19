function SummaryCards() {
  const cards = [
    { title: "Signals", value: 24 },
    { title: "Incidents", value: 18 },
    { title: "Escalations", value: 6 },
    { title: "Replay", value: 12 },
    { title: "Runtime Health", value: "98%" }
  ];

  return (
    <div className="cards-container">
      {cards.map((card) => (
        <div className="card" key={card.title}>
          <h3>{card.title}</h3>
          <h2>{card.value}</h2>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;