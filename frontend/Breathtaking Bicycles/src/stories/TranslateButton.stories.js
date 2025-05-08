import { fn } from '@storybook/test';

import TranslateButton from '../translate-components/TranslateButton';

export default {
  title: 'Translate/TranslateButton',
  component: TranslateButton,
  parameters: {
    layout: 'centered',
  },
  args: { onClick: fn() },
};

export const Visual =  {};
