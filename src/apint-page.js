import { html, render } from 'lit-html';
import "./apint-header"
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

export class ApintPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.update();
  }

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
    this.update();
  }

  style() {
    return `
      .page {
        margin: 0 auto;
        padding: 14px 20px;
        max-width: 944px;
        color: #333;
        font-size: 14px;
        line-height: 24px;
        font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      }

      .page h2 {
        display: inline-block;
        vertical-align: top;
        font-weight: 700;
        font-size: 32px;
        line-height: 1;
        width: 100%;
        margin-left: 10px;
      }

      .page .container_wrap {
        display: flex;
        flex-flow: row wrap;
        margin: 4px 4px 14px 4px;
        width: 100%;
      }

      .page p {
        margin: 1em 0;
      }

      .page a {
        color: #1ea7fd;
        text-decoration: none;
      }

      .page ul {
        margin: 1em 0;
        padding-left: 30px;
      }

      .page li {
        margin-bottom: 8px;
      }

      .page .tip {
        display: inline-block;
        vertical-align: top;
        margin-right: 10px;
        border-radius: 1em;
        background: #e7fdd8;
        padding: 4px 12px;
        color: #66bf3c;
        font-weight: 700;
        font-size: 11px;
        line-height: 12px;
      }

      .page .tip-wrapper {
        margin-top: 40px;
        margin-bottom: 40px;
        font-size: 13px;
        line-height: 20px;
      }

      .page .tip-wrapper svg {
        display: inline-block;
        vertical-align: top;
        margin-top: 3px;
        margin-right: 4px;
        width: 12px;
        height: 12px;
      }

      .page .tip-wrapper svg path {
        fill: #1ea7fd;
      }

    `;
  }

  template() {
    return html`
      <style>
        ${this.style()}
      </style>
      <article>
        
        <apint-header></apint-header>

        <section class="page">
          ${unsafeHTML(this.getHTML())}
        </section>
      </article>
    `;
  }

  update() {
    render(this.template(), this.shadowRoot, { host: this });
  }
}

customElements.define('apint-page', ApintPage);
