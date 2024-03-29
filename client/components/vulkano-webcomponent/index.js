/* eslint-disable import/prefer-default-export */
import { html, css, LitElement } from 'lit';

export class VulkanoWebcomponent extends LitElement {

  // createRenderRoot() {
  //   return this;
  // }

  static styles = css`p {
    color: #444;
    border: 1px solid #999;
    padding: 5px;
  }`;

  static properties = {
    name: { type: String },
  };

  constructor() {
    super();
    this.name = 'native webcomponents';
  }

  render() {
    return html`<p>Bonus: You can use vulkano-webcomponent to have ${this.name}!</p>`;
  }
}

customElements.define('vulkano-webcomponent', VulkanoWebcomponent);
