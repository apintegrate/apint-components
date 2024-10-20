import { html, render } from 'lit-html';

export class ApintCard extends HTMLElement {
  constructor() {
    super();
    this.title = "";
    this.image = "";
    this.bylineleft = "";
    this.bylineright = "";
    this.bylinerightimage = ""
    this.description = "";
    this.href = "";
    this.toplefttext = "";
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.update();
  }

  static get observedAttributes() {
    return ['title', 'image', 'bylineleft', 'bylineright', 'bylinerightimage', 'description', 'href', 'toplefttext'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (newValue !== oldValue) {
      this[name] = newValue;
      this.update();
    }
  }

  style() {
    return `
      a {
        text-decoration: none;
      }

      .card {
        display: block;
        color: black;
        background-color: #fff;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px 0px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px;
        padding: 16px 20px;
        transition: box-shadow 0.2s ease 0s;
        width: 246px;
        height: 378px;
        margin: 14px;
        position: relative;
        font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      }

      .card:hover {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;
        cursor: pointer;
      }

      .card_top_detail {
        display: flex;
        color: #444746;
        flex-direction: row;
        font-family: Google Sans, Roboto, Arial, sans-serif;
        font-size: .875rem;
        font-weight: 400;
        letter-spacing: 0;
        line-height: 1.25rem;
        padding: 12px 4px;
        white-space: nowrap;
        width: 100%;
        justify-content: space-between;
      }

      .card_hero {
        display: block;
        border-radius: 7px;
        overflow: hidden;
        width: 100%;
        height: 144px;
        line-height: 0;
        margin: 0 0px;
        object-fit: cover;
      }

      .card_title {
        margin-top: 10px;
        font-size: 18px;
        font-weight: 500;
        max-height: 70px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
      }

      .card_byline {
        margin-top: 2px;
        margin-right: 1px;
        font-size: 13px;
        font-weight: 300;
        color: rgb(0,0,0,.66);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .card_byline_right_image {
        height: 18px;
        position: relative;
        top: 4px;
      }

      .card_description {
        color: #444746;
        font-size: 13px;
        line-height: 20px;
        margin-top: 8px;
        max-height: 80px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
      }

      .card_footer {
        display: flex; 
        width: 90%;
        position: absolute;
        bottom: 10px;
      }

      .likes_box {
        width: 10%;
      }

      .wait {
        cursor: wait;
      }

      .likes_box:hover {
        fill: orange;
        color: orange;
      }

      .likes_number {
        color: gray;
        position: absolute;
        bottom: -2px;
        right: 26px;
      }

      .likes_active {
        fill: rgb(0, 0, 0);
        color: rgb(0, 0, 0);
        /* font-weight: bold; */
      }

      .likes_user {
        /* fill: #3367d6;
        color: #3367d6; */

        fill: #e78300;
        color: #e78300;
      }

      /* .likes_number:hover {
        color: orange;
      } */

      .likes_icon {
        position: absolute;
        bottom: 2px;
        right: 0px;
      }

      /* .likes_icon:hover {
        fill: orange;
      } */

      .tags_box {

        width: 85%;
        display: flex;
        flex-wrap: wrap;
      }

      .tag {
        padding: 2px 8px 2px 8px;
        border-radius: 24px;
        font-size: 14px;
        font-weight: bold;
        color: white;
        margin-right: 6px;
        margin-bottom: 4px;
      }

      .tag_green {
        background-color: rgb(85, 153, 85);
      }

      .tag_red {
        background-color: rgb(240, 74, 74);
      }

      .tag_orange {
        background-color: orange;
      }

      .tag_blue {
        background-color: #3367d6;
      }
    `;
  }

  template() {
    return html`
      <style>
        ${this.style()}
      </style>
      <a href=${this.href} class="card" target="_blank">
        <div class="card_top_detail">
          ${this.toplefttext}
        </div>
        <img src=${this.image} class="card_hero"></img>
        <div class="card_title">
          ${this.title}
        </div>
        <div class="card_byline">
          ${this.bylineleft ? html`<span>${this.bylineleft}</span>` : ""}
          ${this.bylinerightimage ? html`<img src=${this.bylinerightimage} class="card_byline_right_image"></img>` : ""}
          ${this.bylineright ? html`<span>${this.bylineright}</span>` : ""}
        </div>
        <div class="card_description">
          ${this.description}
        </div>
      </a>
    `;
  }

  update() {
    render(this.template(), this.shadowRoot, { host: this });
  }
}

customElements.define('apint-card', ApintCard);
