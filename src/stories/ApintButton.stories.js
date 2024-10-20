import { fn } from '@storybook/test';

import '../apint-button';
import { html } from 'lit-html';

export default {
  title: 'stories/ApintButton',
  tags: ['autodocs'],
  render: (args) => html`<apint-button type="${args.type}">Button</apint-button>`,
  args: {
    type: "secondary"
  }
};
export const Primary = {
  args: {
    type: "primary"
  }
};
export const Secondary = {
  args: {
    type: "secondary"
  }
};