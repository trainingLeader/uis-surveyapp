import { LitElement, html, css } from 'lit';

class HeaderSup extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      max-width: 100%;
      margin: 0 auto;
    }
    .header {
      background-color: #00008B;
      color: white;
      padding: 20px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .header p {
      margin: 5px 0;
      font-size: 16px;
    }
    .instructions {
      background-color: #D3D3D3;
      padding: 15px;
      margin-top: 10px;
    }
    .instructions h2 {
      margin-top: 0;
      font-size: 18px;
    }
    .instructions ul {
      margin: 0;
      padding-left: 20px;
    }
    .intro {
      margin-top: 15px;
      font-size: 14px;
      line-height: 1.5;
    }
  `;

  render() {
    return html`
      <div class="header">
        <h1>ENCUESTA SOBRE NECESIDADES JURÍDICAS</h1>
        <p>Versión 4.0 – 23 de mayo de 2024</p>
        <p>APROBADA</p>
      </div>
      <div class="instructions">
        <h2>Instrucciones generales para el/la encuestador/a</h2>
        <ul>
          <li>Las instrucciones que están en letra cursiva son para el encuestador, NO se deben leer al entrevistado.</li>
          <li>Si se imprime el cuestionario, se debe utilizar hojas tamaño oficio, verificando que los cortes de página sean iguales al formato original.</li>
          <li>Antes de aplicar el cuestionario es necesario leer todas las instrucciones que se encuentran en el instructivo de diligenciamiento.</li>
          <li>Las siglas RU significa respuesta única y RM significa respuesta múltiple.</li>
        </ul>
      </div>
      <div class="intro">
        <p>El Ministerio de Justicia y del Derecho viene adelantando, la asistencia técnica para promover la implementación y operación de la estrategia Sistemas Locales de Justicia a nivel municipal. El objetivo de esta encuesta es contribuir a la lectura del territorio a través de la identificación de las barreras de acceso a la justicia y las conflictividades.</p>
        <p>Por lo anterior, solicitamos su valiosa colaboración contestando la siguiente encuesta. La información que usted nos suministre será utilizada únicamente con fines estadísticos y sus resultados se mostrarán de manera agregada en el documento denominado: "Lectura territorial y diagnóstico de conflictividades", e insumo fundamental para la construcción del Plan estratégico del Sistema Local de Justicia del municipio.</p>
        <p>Agradecemos de antemano su colaboración.</p>
      </div>
    `;
  }
}

customElements.define('header-sup', HeaderSup);