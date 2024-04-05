import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      color: #222;
    }

    p{
      border: 1px solid #333;
      padding: 3px;
    }
  `;

  // Declare reactive properties
  @property()
  name?: string = 'TypeScript';

  // Render the UI as a function of component state
  render() {
    return html`<p>
      This is a webcomponent written in ${this.name}! <br>
      You can edit this in client/components/sample-greeting/main.ts.
    </p>`;
  }
}
