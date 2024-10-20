import { fn } from '@storybook/test';

import '../apint-page';
import '../apint-card';
import { html } from 'lit-html';

export default {
  title: 'stories/ApintPage',
  tags: ['autodocs'],
  render: (args) => html`<apint-page>
    <h2>Test</h2>
    <p>test test test </p>
    
    <ul>
      <li>test</li>
      <li>test</li>
      <li>test</li>
    </ul>
  </apint-page>`,
  args: {}
};
export const Primary = {
  args: {}
};

export const Cards = {
  render: (args) => html`
    <apint-page>
      <section class="container_wrap">
        <h2>Birds</h2>
        <apint-card title="${args.title}" image="${args.image}" description="${args.description}" href="${args.href}" toplefttext="${args.toplefttext}"></apint-card>
        <apint-card title="${args.title}" image="${args.image}" description="${args.description}" href="${args.href}" toplefttext="${args.toplefttext}"></apint-card>
        <apint-card title="${args.title}" image="${args.image}" description="${args.description}" href="${args.href}" toplefttext="${args.toplefttext}"></apint-card>
        <apint-card title="${args.title}" image="${args.image}" description="${args.description}" href="${args.href}" toplefttext="${args.toplefttext}"></apint-card>
      </section>
    </apint-page>
  `,
  args: {
    title: "My test title",
    image: "https://cdn.britannica.com/10/250610-050-BC5CCDAF/Zebra-finch-Taeniopygia-guttata-bird.jpg",
    description: "My test description",
    href: "https://google.com",
    toplefttext: "2 Day(s) ago"
  }
};