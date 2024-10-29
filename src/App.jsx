import { useState, useEffect } from "react";


const quotesArray = [
  { content: "Why so serious?", author: "The Joker" },
  { content: "You either die a hero, or you live long enough to see yourself become the villain.", author: "Harvey Dent" },
  { content: "It’s not who I am underneath, but what I do that defines me.", author: "Batman" },
  { content: "Some men just want to watch the world burn.", author: "Alfred Pennyworth" },
  { content: "The night is darkest just before the dawn. And I promise you, the dawn is coming.", author: "Harvey Dent" },
  { content: "Madness, as you know, is like gravity. All it takes is a little push.", author: "The Joker" },
  { content: "Sometimes the truth isn’t good enough. Sometimes people deserve more.", author: "Batman" },
  { content: "You’re just a freak, like me!", author: "The Joker" },
  { content: "Endure, Master Wayne. Take it. They'll hate you for it, but that's the point of Batman.", author: "Alfred Pennyworth" },
  { content: "I believe whatever doesn’t kill you simply makes you… stranger.", author: "The Joker" },
  { content: "Introduce a little anarchy, upset the established order, and everything becomes chaos.", author: "The Joker" },
  { content: "I’m not a monster. I’m just ahead of the curve.", author: "The Joker" },
  { content: "You crossed the line first, sir. You squeezed them, you hammered them to the point of desperation.", author: "The Joker" },
  { content: "Gotham needs its true hero.", author: "Batman" },
  { content: "A hero can be anyone. Even a man doing something as simple and reassuring as putting a coat around a young boy's shoulders.", author: "Batman" },
  { content: "If you’re good at something, never do it for free.", author: "The Joker" },
  { content: "You thought we could be decent men in an indecent time.", author: "Harvey Dent" },
  { content: "You have nothing, nothing to threaten me with. Nothing to do with all your strength.", author: "The Joker" },
  { content: "It's not about money. It's about sending a message.", author: "The Joker" },
  { content: "People need dramatic examples to shake them out of apathy.", author: "Bruce Wayne" }
];

const QuoteApp = () => {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    setQuote(quotesArray[randomIndex]);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Random Quote</h1>
      <p style={{ fontSize: "24px", fontStyle: "italic" }}>{quote.content}</p>
      <h4 style={{ marginTop: "10px" }}>- {quote.author}</h4>
    </div>
  );
};

export default QuoteApp;
