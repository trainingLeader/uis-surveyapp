import { LitElement, html, css } from 'lit';

export class RadioGroup extends LitElement {
  static properties = {
    name: { type: String },
    label: { type: String },
    options: { type: Array },
    definicion:{type:String},
    selectedValue: { type: String },
    displayAsTable: { type: Boolean },
  };

  static styles = css`
    :host {
      display: block;
      margin-bottom: 15px;
      font-family: Arial, sans-serif;
    }
    .radio-group-label {
      display: block;
      margin-bottom: 10px;
      font-weight: bold;
      color: #333;
    }
    .radio-options {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .radio-option {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    .radio-input {
      position: absolute;
      opacity: 0;
    }
    .radio-custom {
      width: 20px;
      height: 20px;
      border: 2px solid #007bff;
      border-radius: 50%;
      margin-right: 10px;
      display: inline-block;
      position: relative;
    }
    .radio-custom::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #007bff;
      transition: all 0.2s ease;
    }
    .radio-input:checked + .radio-custom::after {
      transform: translate(-50%, -50%) scale(1);
    }
    .radio-label {
      font-size: 16px;
      color: #333;
    }
    .radio-input:focus + .radio-custom {
      box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.3);
    }
    .radio-input:disabled + .radio-custom {
      border-color: #ccc;
    }
    .radio-input:disabled + .radio-custom + .radio-label {
      color: #ccc;
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
      .radio-options {
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
    this.selectedValue = '';
    this.displayAsTable = false;
    this.definicion = ''
  }

  render = () => {
    return html`
      <div class="radio-group">
        <label class="radio-group-label">${this.label}</label>
        <label class="radio-group-label">${this.definicion}</label>
        ${this.displayAsTable ? this.renderTable() : this.renderOptions()}
      </div>
    `;
  }

  renderOptions = () => {
    const noneOption = this.options.find(option => 
      option.label.toLowerCase().includes('ninguno') || 
      option.label.toLowerCase().includes('ninguno de los anteriores')||
      option.label.toLowerCase().includes('No sabe')
    );
    const isNoneSelected = noneOption && this.selectedValue === noneOption.value;

    return html`
      <div class="radio-options">
        ${this.options.map(option => html`
          <label class="radio-option">
            <input 
              type="radio" 
              name="${this.name}" 
              value="${option.value}" 
              ?checked=${this.selectedValue === option.value}
              ?disabled=${isNoneSelected && option.value !== noneOption.value}
              @click=${this._handleClick}
              class="radio-input"
            >
            <span class="radio-custom"></span>
            <span class="radio-label">${option.label}</span>
          </label>
        `)}
      </div>
    `;
  }

  renderTable = () => {
    const noneOption = this.options.find(option => 
      option.label.toLowerCase().includes('ninguno') || 
      option.label.toLowerCase().includes('ninguno de los anteriores')||
      option.label.toLowerCase().includes('No sabe')
    );
    const isNoneSelected = noneOption && this.selectedValue === noneOption.value;

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
                <label class="radio-option">
                  <input 
                    type="radio" 
                    name="${this.name}" 
                    value="${option.value}" 
                    ?checked=${this.selectedValue === option.value}
                    ?disabled=${isNoneSelected && option.value !== noneOption.value}
                    @click=${this._handleClick}
                    class="radio-input"
                  >
                  <span class="radio-custom"></span>
                </label>
              </td>
            </tr>
          `)}
        </tbody>
      </table>
    `;
  }

  _handleClick = (e) => {
    const clickedValue = e.target.value;
    const noneOption = this.options.find(option => 
      option.label.toLowerCase().includes('ninguno') || 
      option.label.toLowerCase().includes('ninguno de los anteriores')||
      option.label.toLowerCase().includes('No sabe')
    );

    if (this.selectedValue === clickedValue) {
      // Si se hace clic en la opción ya seleccionada, deseleccionarla
      this.selectedValue = '';
    } else {
      // Si se selecciona una nueva opción
      if (noneOption && clickedValue === noneOption.value) {
        // Si se selecciona "Ninguno", deseleccionar las otras opciones
        this.selectedValue = clickedValue;
      } else if (this.selectedValue === noneOption?.value) {
        // Si "Ninguno" estaba seleccionado y se elige otra opción, deseleccionar "Ninguno"
        this.selectedValue = clickedValue;
      } else {
        // Comportamiento normal para otras opciones
        this.selectedValue = clickedValue;
      }
    }

    this.requestUpdate();

    this.dispatchEvent(new CustomEvent('change', {
      detail: { value: this.selectedValue },
      bubbles: true,
      composed: true
    }));
  }
}

customElements.define('radio-group', RadioGroup);