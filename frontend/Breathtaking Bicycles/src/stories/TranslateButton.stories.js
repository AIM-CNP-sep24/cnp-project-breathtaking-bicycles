import { fn } from '@storybook/test';

import TranslateButton from '../translate-components/TranslateButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Translate/TranslateButton',
  component: TranslateButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: { onClick: fn() },
};

export const Primary =  {};
