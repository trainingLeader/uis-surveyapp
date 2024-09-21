import { LitElement, html, css } from 'lit';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
class CodeInputField extends LitElement {
  static properties = {
    label: { type: String },
    fieldId: { type: String },
    digits: { type: Number }
  };

  constructor() {
    super();
    this.label = '';
    this.fieldId = '';
    this.digits = 2;
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
        <div class="row ">
        <label for="${this.fieldId}" class="col-sm-2 col-form-label">${this.label}</label>
        <div class="col-sm-8">
          <div class="row code-inputs">
            ${Array(this.digits).fill(0).map((_, index) => html`
              <div class="col-2">
                <input type="text" class="form-control text-center" id="${this.fieldId}-${index}" name="${this.fieldId}" maxlength="1">
              </div>
            `)}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('code-input-field', CodeInputField);