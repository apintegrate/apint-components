import { fn } from '@storybook/test';

import '../apint-card';
import { html } from 'lit-html';

export default {
  title: 'stories/ApintCard',
  tags: ['autodocs'],
  render: (args) => html`<apint-card title="${args.title}" image="${args.image}" description="${args.description}" href="${args.href}" toplefttext="${args.toplefttext}"></apint-card>`,
  args: {
    title: "My test title",
    image: "",
    description: "My test description",
    href: "https://google.com",
    toplefttext: "fds"
  }
};
export const Card1 = {
  args: {
    title: "My test title",
    image: "https://cdn.britannica.com/10/250610-050-BC5CCDAF/Zebra-finch-Taeniopygia-guttata-bird.jpg",
    description: "My test description",
    href: "https://google.com",
    toplefttext: "2 Day(s) ago"
  }
};
export const CardLong = {
  args: {
    title: "My test title",
    image: "https://cdn.britannica.com/10/250610-050-BC5CCDAF/Zebra-finch-Taeniopygia-guttata-bird.jpg",
    description: "My test description My test description My test description My test description My test description My test description My test description My test description My test description My test description My test description",
    href: "https://google.com",
    toplefttext: "fds"
  }
};
