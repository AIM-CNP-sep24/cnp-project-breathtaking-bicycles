import { fn } from '@storybook/test';

import Textfield from '../translate-components/textfield';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Translate/Textfield',
  component: Textfield,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  }
};

export const Visual =  {};