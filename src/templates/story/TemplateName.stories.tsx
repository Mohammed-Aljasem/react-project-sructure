import { ComponentStory, ComponentMeta } from '@storybook/react';
import TemplateName from './TemplateName';

export default {
  title: 'Example/TemplateName',
  component: TemplateName,
} as ComponentMeta<typeof TemplateName>;

export const Default = () => <TemplateName />;

Default.story = {
  name: 'default',
};

const Template: ComponentStory<typeof TemplateName> = (args) => (
  <TemplateName {...args} />
);
