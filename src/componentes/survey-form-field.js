import { LitElement, html} from 'lit';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "/src/index.css"
export class SurveyFormField extends LitElement {
  static properties = {
    label: { type: String },
    fieldId: { type: String },
    inputType: { type: String },
    width: { type: String },
    maxLength: { type: Number },
    message: { type: String },
  };

  constructor() {
    super();
    this.label = '';
    this.fieldId = '';
    this.inputType = 'text';
    this.width = '100%';
    this.maxLength = 0;
    this.message = null;
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
          <div class="col">
            <label for="${this.fieldId}" class="form-label">${this.label}</label>
            <input  type="${this.inputType}" 
                    id="${this.fieldId}" 
                    name="${this.fieldId}"
                    maxlength="${this.maxLength || ''}"
                    @input="${this._handleInput}"
                    class="form-control">
            <div id="passwordHelpBlock" class="form-text">
                ${this.message}
            </div>
          </div>
    `;
  }

  _handleInput(e) {
    this.dispatchEvent(new CustomEvent('input-change', {
      detail: { id: this.fieldId, value: e.target.value },
      bubbles: true,
      composed: true
    }));
  }
}

customElements.define('survey-form-field', SurveyFormField);