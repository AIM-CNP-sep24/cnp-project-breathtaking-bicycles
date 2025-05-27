
import FontInstelmenuComponent from "../instel-pagina/Instelmenu-components/FontInstelmenuComponent.jsx";
import { action } from '@storybook/addon-actions';
import { useState } from 'react';

export default {
  title: 'stories/FontInstelmenuComponent',
  component: FontInstelmenuComponent,
};

const Template = (args) => <FontInstelmenuComponent {...args} />;

export const DefaultStandaardFont = Template.bind({});
DefaultStandaardFont.args = {
  disabled: false,
  setFonts: action('Font veranderd naar'),
  selectedFont: 'standard',
};

export const DislexieFontGeselecteerd = Template.bind({});
DislexieFontGeselecteerd.args = {
  disabled: false,
  setFonts: action('Font veranderd naar'),
  selectedFont: 'OpenDyslexic',
};

export const StatusDisabled = Template.bind({});
StatusDisabled.args = {
  disabled: true,
  setFonts: action('Font veranderd naar'),
  selectedFont: 'standard',
};

export const InteractieveFontSwitch = () => {
  const [selectedFont, setSelectedFont] = useState("standard");
  return (
    <FontInstelmenuComponent
      disabled={false}
      setSelectedFont={setSelectedFont}
      selectedFont={selectedFont}
    />
  );
};

