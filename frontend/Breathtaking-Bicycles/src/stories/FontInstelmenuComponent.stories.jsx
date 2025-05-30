
import FontInstelmenuComponent from "../instel-pagina/Instelmenu-components/FontInstelmenuComponent.jsx";
import { action } from '@storybook/addon-actions';
import { useState } from 'react';
import { within, userEvent } from '@storybook/test'

export default {
  title: 'stories/FontInstelmenuComponent',
  component: FontInstelmenuComponent,
};

const Template = (args) => <FontInstelmenuComponent {...args} />;

export const DefaultStandaardFont = Template.bind({});
DefaultStandaardFont.args = {
  disabled: false,
  setSelectedFont: action('Font veranderd naar'),
  selectedFont: 'standard',
};

DefaultStandaardFont.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByText('Standaard'));
};

export const DyslexieFontGeselecteerd = Template.bind({});
DyslexieFontGeselecteerd.args = {
  disabled: false,
  setSelectedFont: action('Font veranderd naar'),
  selectedFont: 'font-OpenDyslexic',
};

DyslexieFontGeselecteerd.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByText('Dyslexie'));
};

export const StatusDisabled = Template.bind({});
StatusDisabled.args = {
  disabled: true,
  setSelectedFont: action('Font veranderd naar'),
  selectedFont: 'standard',
};

StatusDisabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByText('Standaard'));
};

export const InteractieveFontSwitch = () => {
    const [selectedFont, setSelectedFont] = useState("standard");
    const handleFontChange = (font) => {
      setSelectedFont(font);
      action("Font veranderd naar: ")(font);
    };
    
  return (
    <FontInstelmenuComponent
      disabled={false}
      setSelectedFont={handleFontChange}
      selectedFont={selectedFont}
    />
  );
};

InteractieveFontSwitch.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByText('Standaard'));
  await userEvent.click(canvas.getByText('Dyslexie'));
  };

