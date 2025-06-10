/** @type { import('@storybook/react').Preview } */
import '../src/index.css';
import { initialize, mswLoader, mswDecorator } from 'msw-storybook-addon';

initialize({
  serviceWorker: {
    url: './mockServiceWorker.js'
  }
});

export const decorators = [mswDecorator];

const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  loaders: [mswLoader],
};

export default preview;