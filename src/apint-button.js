import { html, render } from 'lit-html';

export class ApintButton extends HTMLElement {
  constructor() {
    super();
    this.type = "secondary";
    this.size = "medium";
    this.onClick = undefined;
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.update();
  }

  static get observedAttributes() {
    return ['type', 'size', 'onClick'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
    this.update();
  }

  style() {
    return `
      .button {
        display: inline-block;
        cursor: pointer;
        border: 0;
        margin-left: 14px;
        border-radius: 3em;
        font-weight: 700;
        line-height: 1;
        font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      }
      .button--primary {
        background-color: #1ea7fd;
        color: white;
      }
      .button--secondary {
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
        background-color: transparent;
        color: #333;
      }
      .button--small {
        padding: 10px 16px;
        font-size: 12px;
      }
      .button--medium {
        padding: 11px 20px;
        font-size: 14px;
      }
      .button--large {
        padding: 12px 24px;
        font-size: 16px;
      }

    `;
  }

  template() {
    return html`
      <style>
        ${this.style()}
      </style>
      <button
        type="button"
        class=${['button', `button--${this.size || 'medium'}`, "button--" + this.type].join(' ')}
        @click=${this.onClick}
      >
        ${this.textContent}
      </button>
    `;
  }

  update() {
    render(this.template(), this.shadowRoot, { host: this });
  }
}

customElements.define('apint-button', ApintButton);
