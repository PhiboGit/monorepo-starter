import { useEffect, useState } from 'react';

import reactLogo from '@/assets/react.svg';
import viteLogo from '@/assets/vite.svg';
import { ModeToggle } from '@/components/theme/mode-toggle';
import { Button } from '@/components/ui/button';

const Vite = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('App mounted', count);
  }, [count]);

  return (
    <>
      <div className="flex justify-center">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ModeToggle />
    </>
  );
};

export { Vite };