import { LitElement, html, css, unsafeCSS } from 'lit-element';
import linkStyle from './link.css';

class Link extends LitElement {
  static get properties() {
    return {
      href: { type: String },
      target: { type: String }
    };
  }

  render() {
    return html`
      <a href="${this.href}" target="${this.target}">
        <slot></slot>
      </a>
    `;
  }
}

customElements.define('greg-link', Link);