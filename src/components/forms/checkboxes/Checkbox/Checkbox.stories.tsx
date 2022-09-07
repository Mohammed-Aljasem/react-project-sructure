import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from './Checkbox';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const Default = () => <Checkbox />;

Default.story = {
  name: 'default',
};

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);
