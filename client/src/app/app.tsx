import './app.css';

import { ThemeProvider } from '@/components/theme/theme-provider';
import { Shop } from '@/features/api-test/shop';
import { Vite } from '@/features/vite-demo/vite';

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Vite />
      <Shop />
    </ThemeProvider>
  );
}

export default App;
