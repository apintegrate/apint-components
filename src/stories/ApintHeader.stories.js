import { fn } from '@storybook/test';

import '../apint-header';
import { html } from 'lit-html';

export default {
  title: 'stories/ApintHeader',
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/web-components/vue/writing-docs/autodocs
  tags: ['autodocs'],
  render: (args) => html`<apint-header supportuser=${args.supportuser} user=${args.user}></apint-header>`,
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
};
export const LoggedIn = {
  args: {
    supportuser: true,
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut = {
  args: {
    supportuser: true
  }
};

export const NoUserSupported = {
  args: {
    supportuser: false
  }
};