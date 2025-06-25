import { useEffect, useState } from 'react';
import { startCounting } from './utils/fonctionTest';

function App() {
  const [products, setProducts] = useState([]);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  useEffect(() => {
    const intervalId = startCounting(setSeconds);
    return () => clearInterval(intervalId); // Nettoyage à la fermeture
  }, []);

  return (
    <>
      <h1>Catalogue produits</h1>
      <p>Temps écoulé : {seconds} seconde{seconds !== 1 && 's'}</p>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name} — {p.price}€
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;