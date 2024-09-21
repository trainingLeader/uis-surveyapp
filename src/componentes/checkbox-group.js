import { LitElement, html, css } from 'lit';

export class CheckboxGroup extends LitElement {
  static properties = {
    name: { type: String },
    label: { type: String },
    options: { type: Array },
    selectedValues: { type: Array },
    displayAsTable: { type: Boolean },
    otherValue: { type: String },
  };

  static styles = css`
  :host {
    display: block;
    margin-bottom: 15px;
    font-family: Arial, sans-serif;
  }
  .checkbox-group-label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
    color: #333;
  }
  .checkbox-options {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .checkbox-option {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .checkbox-input {
    position: absolute;
    opacity: 0;
  }
  .checkbox-custom {
    width: 20px;
    height: 20px;
    border: 2px solid #007bff;
    border-radius: 4px;
    margin-right: 10px;
    display: inline-block;
    position: relative;
  }
  .checkbox-custom::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 12px;
    height: 12px;
    background: #007bff;
    transition: all 0.2s ease;
  }
  .checkbox-input:checked + .checkbox-custom::after {
    transform: translate(-50%, -50%) scale(1);
  }
  .checkbox-label {
    font-size: 16px;
    color: #333;
  }
  .checkbox-input:focus + .checkbox-custom {
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.3);
  }
  .checkbox-input:disabled + .checkbox-custom {
    border-color: #ccc;
  }
  .checkbox-input:disabled + .checkbox-custom + .checkbox-label {
    color: #ccc;
  }
  .other-input {
    margin-top: 10px;
    margin-left: 30px;
  }
  .other-input input {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  th, td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #e0e0e0;
  }
  th {
    background-color: #f8f9fa;
    font-weight: bold;
    color: #333;
  }
  tr:last-child td {
    border-bottom: none;
  }
  tr:hover {
    background-color: #f5f5f5;
  }
  @media (max-width: 768px) {
    .checkbox-options {
      flex-direction: column;
    }
    table, thead, tbody, th, td, tr {
      display: block;
    }
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }
    tr {
      border: 1px solid #ccc;
      margin-bottom: 10px;
    }
    td {
      border: none;
      position: relative;
      padding-left: 50%;
    }
    td:before {
      content: attr(data-label);
      position: absolute;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
      font-weight: bold;
    }
  }
`;

  constructor() {
    super();
    this.name = '';
    this.label = '';
    this.options = [];
    this.selectedValues = [];
    this.displayAsTable = false;
    this.otherValue = '';

    // Bind methods to ensure 'this' refers to the class instance
    this.findNoneOption = this.findNoneOption.bind(this);
    this.findOtherOption = this.findOtherOption.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._handleOtherInput = this._handleOtherInput.bind(this);
  }

  render() {
    return html`
      <div class="checkbox-group">
        <label class="checkbox-group-label">${this.label}</label>
        ${this.displayAsTable ? this.renderTable() : this.renderOptions()}
      </div>
    `;
  }

  renderOptions= () =>{
    const noneOption = this.findNoneOption();
    const isNoneSelected = noneOption && this.selectedValues.includes(noneOption.value);
    const otherOption = this.findOtherOption();

    return html`
      <div class="checkbox-options">
        ${this.options.map(option => html`
          <label class="checkbox-option">
            <input 
              type="checkbox" 
              name="${this.name}" 
              value="${option.value}" 
              ?checked=${this.selectedValues.includes(option.value)}
              ?disabled=${isNoneSelected && option.value !== noneOption?.value}
              @change=${this._handleChange}
              class="checkbox-input"
            >
            <span class="checkbox-custom"></span>
            <span class="checkbox-label">${option.label}</span>
          </label>
          ${option === otherOption && this.selectedValues.includes(option.value) ? this.renderOtherInput() : ''}
        `)}
      </div>
    `;
  }

  renderTable= () => {
    const noneOption = this.findNoneOption();
    const isNoneSelected = noneOption && this.selectedValues.includes(noneOption.value);
    const otherOption = this.findOtherOption();

    return html`
      <table>
        <thead>
          <tr>
            <th>Opción</th>
            <th>Selección</th>
          </tr>
        </thead>
        <tbody>
          ${this.options.map(option => html`
            <tr>
              <td data-label="Opción">${option.label}</td>
              <td data-label="Selección">
                <label class="checkbox-option">
                  <input 
                    type="checkbox" 
                    name="${this.name}" 
                    value="${option.value}" 
                    ?checked=${this.selectedValues.includes(option.value)}
                    ?disabled=${isNoneSelected && option.value !== noneOption?.value}
                    @change=${this._handleChange}
                    class="checkbox-input"
                  >
                  <span class="checkbox-custom"></span>
                </label>
              </td>
            </tr>
            ${option === otherOption && this.selectedValues.includes(option.value) ? html`
              <tr>
                <td colspan="2">
                  ${this.renderOtherInput()}
                </td>
              </tr>
            ` : ''}
          `)}
        </tbody>
      </table>
    `;
  }

  renderOtherInput() {
    return html`
      <div class="other-input">
        <input 
          type="text" 
          placeholder="Especifique otro"
          .value=${this.otherValue}
          @input=${this._handleOtherInput}
        >
      </div>
    `;
  }

  findNoneOption= () =>{
    return this.options.find(option => 
      option.label.toLowerCase().includes('ninguno') || 
      option.label.toLowerCase().includes('ninguna') ||
      option.label.toLowerCase().includes('no responde')
    );
  }

  findOtherOption= () =>{
    return this.options.find(option => option.label.toLowerCase().includes('otro'));
  }

  _handleChange(e) {
    const value = e.target.value;
    const isChecked = e.target.checked;
    
    const noneOption = this.findNoneOption();

    if (noneOption && value === noneOption.value && isChecked) {
      this.selectedValues = [value];
      this.otherValue = '';
    } else if (noneOption && this.selectedValues.includes(noneOption.value) && value !== noneOption.value) {
      this.selectedValues = this.selectedValues.filter(v => v !== noneOption.value);
      this.selectedValues.push(value);
    } else {
      if (isChecked) {
        this.selectedValues.push(value);
      } else {
        this.selectedValues = this.selectedValues.filter(v => v !== value);
        if (value.toLowerCase().includes('otro')) {
          this.otherValue = '';
        }
      }
    }

    this.requestUpdate();

    this._dispatchChangeEvent();
  }

  _handleOtherInput(e) {
    this.otherValue = e.target.value;
    this._dispatchChangeEvent();
  }

  _dispatchChangeEvent() {
    this.dispatchEvent(new CustomEvent('change', {
      detail: { 
        values: this.selectedValues,
        otherValue: this.otherValue
      },
      bubbles: true,
      composed: true
    }));
  }
}

customElements.define('checkbox-group', CheckboxGroup);