import { isEven, items as itemsData } from '@monorepo/shared';
import { useEffect, useState } from 'react';

type ShopItem = {
  name: string;
  price: number;
};

const Shop = () => {
  const [items, setItems] = useState<ShopItem[]>([]);

  useEffect(() => {
    fetch('/api/items')
      .then((res) => res.json())
      .then((data) => {
        setItems(data as ShopItem[]);
      })
      .catch((err: unknown) => {
        console.error(err);
      });
  }, []);

  function renderItems() {
    return items.map((item, i) => {
      return (
        <div key={i}>
          <h3>{item.name}</h3>
          <p>Price: {item.price}</p>
        </div>
      );
    });
  }

  return (
    <main>
      <h1>Example webshop</h1>
      {JSON.stringify(isEven(6))}
      <h2>Items from shared</h2>
      <pre>{JSON.stringify(itemsData)}</pre>
      <h2>Items from API</h2>
      {renderItems()}
    </main>
  );
};

export { Shop };
