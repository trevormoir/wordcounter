import { useState, useEffect } from 'react';

export const Joke = () => {
    const [fact, setFact] = useState("");

  useEffect(() => {
    async function fetchFact() {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const json = await response.json();
      setFact(json.value);
    }
    fetchFact();
  }, []);

  return (
    <section className="joke">
        <p>
            <span data-testid="jokeHeadling">{fact}</span>
            <div className="text-center pt-8"> - api.chucknorris.io - </div>
        </p>
    </section>
  )
}
