import { html, render } from 'lit-html';

export class ApintCounter extends HTMLElement {
  constructor() {
    super();
    this.count = 0;
    this.attachShadow({ mode: 'open' });
  }

  // component attributes
  static get observedAttributes() {
    return ['count'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue !== oldValue) {
      this[name] = newValue;
      this.update();
    }
  }

  connectedCallback() {
    this.update();
  }

  inc() {
    this.count++;
    this.update();
  }

  dec() {
    this.count--;
    this.update();
  }

  style() {
    return `
      * {
        font-size: 200%;
        font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      }

      span {
        width: 4rem;
        display: inline-block;
        text-align: center;
      }

      button {
        width: 64px;
        height: 64px;
        border: none;
        border-radius: 10px;
        background-color: seagreen;
        color: white;
      }
    `;
  }

  template() {
    return html`
      <style>
        ${this.style()}
      </style>
      <button @click="${this.dec}">-</button>
      <span>${this.count}</span>
      <button @click="${this.inc}">+</button>
    `;
  }

  update() {
    render(this.template(), this.shadowRoot, { host: this });
  }
}

customElements.define('apint-counter', ApintCounter);
