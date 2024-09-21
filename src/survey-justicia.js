import { LitElement, css, html } from 'lit';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import '/src/componentes/survey-form-field.js';
import '/src/componentes/code-input-field.js';
import '/src/componentes/radio-group.js';
import '/src/componentes/checkbox-group.js';
import '/src/componentes/headers/header-sup.js';
export class SurveyJusticia extends LitElement {

  static properties = {
    authorized: { type: String },
    ageGroup: { type: String },
    ethnicity: { type: String },
    educationLevel: { type: String },
    residenceTime: { type: String },
    residenceZone: { type: String },
    culturalBarriers: { type: String },
    genderBarriers: { type: String },
    culturalBarrierTypes: { type: Array },
    genderBarrierTypes: { type: Array },
    culturalBarrierOther: { type: String },
    genderBarrierOther: { type: String },
    securityBarriers: { type: String },
    securityBarrierTypes: { type: Array },
    securityBarrierOther: { type: String },
    disabilityBarriers: { type: String },
    disabilityBarrierTypes: { type: Array },
    disabilityBarrierOther: { type: String },
    economicBarriers: { type: String },
    economicBarrierTypes: { type: Array },
    economicBarrierOther: { type: String },
    geographicBarriers: { type: String },
    geographicBarrierTypes: { type: Array },
    geographicBarrierOther: { type: String },
    institutionalBarriers: { type: String },
    institutionalBarrierTypes: { type: Array },
    institutionalBarrierOther: { type: String },
    technologicalBarriers: { type: String },
    technologicalBarrierTypes: { type: Array },
    technologicalBarrierOther: { type: String },
    personalExperiences: { type: Object },
  };
  constructor() {
    super();
    this.authorized = null;
    this.ageGroup = null;
    this.ethnicity = '';
    this.educationLevel = '';
    this.residenceTime = '';
    this.residenceZone = '';
    this.culturalBarriers = '';
    this.genderBarriers = '';
    this.culturalBarrierTypes = [];
    this.genderBarrierTypes = [];
    this.culturalBarrierOther = '';
    this.genderBarrierOther = '';
    this.securityBarriers = '';
    this.securityBarrierTypes = [];
    this.securityBarrierOther = '';
    this.disabilityBarriers = '';
    this.disabilityBarrierTypes = [];
    this.disabilityBarrierOther = '';
    this.economicBarriers = '';
    this.economicBarrierTypes = [];
    this.economicBarrierOther = '';
    this.geographicBarriers = '';
    this.geographicBarrierTypes = [];
    this.geographicBarrierOther = '';
    this.institutionalBarriers = '';
    this.institutionalBarrierTypes = [];
    this.institutionalBarrierOther = '';
    this.technologicalBarriers = '';
    this.technologicalBarrierTypes = [];
    this.technologicalBarrierOther = '';
    this.personalExperiences = {
      family: [],
      consumer: [],
      publicService: [],
      work: [],
      debt: [],
      housing: [],
    };
  }
  static styles = css`
    /* ... (previous styles) */
    .experience-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }
    .experience-table th,
    .experience-table td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }
    .experience-table th {
      background-color: #f2f2f2;
    }
    .checkbox-container {
      display: flex;
      justify-content: center;
    }
  `;
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
    <div class = "container mb-3">
    <header-sup></header-sup>
    <div class="header">
        <h3>Capítulo 1. Características sociodemográficas del encuestado</h3>
      </div>
      <div class="subheader">
        <p>El objetivo de este capítulo es obtener información sobre los aspectos sociodemográficos del ciudadano</p>
    </div>
    <form class="row g-3">
      <survey-form-field label="P1. Nombre completo del encuestado:" field-id="nombre-completo"></survey-form-field>
      <survey-form-field label="P2. Número de celular:" field-id="numero-celular"></survey-form-field>
      <survey-form-field label="P3. Nombre departamento" field-id="nombre-departamento"></survey-form-field>
      <code-input-field label="P4. Código departamento" field-id="codigo-departamento" digits="2"></code-input-field>
      <survey-form-field label="P5. Nombre municipio" field-id="nombre-municipio"></survey-form-field>
      <code-input-field label="P6. Código municipio" field-id="codigo-municipio" digits="3"></code-input-field>
              <radio-group
                  name="autoriza"
                  label="P7. ¿Nos autoriza a realizarle la encuesta?"
                  .options=${[
                    { value: '7.4.1', label: 'Sí' },
                    { value: '7.4.2', label: 'No' }
                  ]}
                  .selectedValue=${this.authorized}
                  @change=${this._handleAuthorization}
                ></radio-group>
                ${this.authorized === '7.4.1' ? html`
                  <radio-group
                  name="edad"
                  label="P8. ¿Cuál es su edad?"
                  .options=${[
                    { value: '8.4.1', label: 'Entre 18 a 25 años' },
                    { value: '8.4.2', label: 'Entre 26 a 35 años' },
                    { value: '8.4.3', label: 'Entre 36 a 45 años' },
                    { value: '8.4.4', label: 'Entre 46 a 55 años' },
                    { value: '8.4.5', label: 'Mayor de 56 años' }
                  ]}
                  .selectedValue=${this.ageGroup}
                  @change=${this._handleAgeGroup}
                  .displayAsTable=${true}
              ></radio-group>
              <radio-group
                name="ethnicity"
                label="P9. ¿De acuerdo con su cultura, pueblo o rasgos físicos... usted se reconoce como:"
                .options=${[
                  { value: '9.4.1', label: 'Indígena' },
                  { value: '9.4.2', label: 'Gitano / ROM' },
                  { value: '9.4.3', label: 'Raizal del archipiélago de San Andrés y Providencia' },
                  { value: '9.4.4', label: 'Palenquero de San Basilio' },
                  { value: '9.4.5', label: 'Negro, mulato, afrodescendiente o afrocolombiano' },
                  { value: '9.4.6', label: 'Ninguno de los anteriores' }
                ]}
                .selectedValue=${this.ethnicity}
                @change=${this._handleEthnicity}
                .displayAsTable=${true}
              ></radio-group>
              <radio-group
                name="educationLevel"
                label="P10. ¿Cuál es su nivel educativo más alto alcanzado?"
                .options=${[
                  { value: '10.4.1', label: 'Ninguno' },
                  { value: '10.4.2', label: 'Preescolar' },
                  { value: '10.4.3', label: 'Básica primaria (1-5)' },
                  { value: '10.4.4', label: 'Básica secundaria (6-9)' },
                  { value: '10.4.5', label: 'Media (10-13)' },
                  { value: '10.4.6', label: 'Técnico' },
                  { value: '10.4.7', label: 'Tecnólogo' },
                  { value: '10.4.8', label: 'Profesional' },
                  { value: '10.4.9', label: 'Especialista' },
                  { value: '10.4.10', label: 'Magister' },
                  { value: '10.4.11', label: 'Doctorado' },
                  { value: '10.4.12', label: 'No sabe / No informa' }
                ]}
                .selectedValue=${this.educationLevel}
                @change=${this._handleEducationLevel}
                .displayAsTable=${true}
              ></radio-group>

              <radio-group
                name="residenceTime"
                label="P11. ¿Cuánto tiempo lleva... viviendo en el municipio de ........?"
                .options=${[
                  { value: '11.4.1', label: 'Menos de 1 año' },
                  { value: '11.4.2', label: 'Entre 1 y menos de 5 años' },
                  { value: '11.4.3', label: 'Entre 5 y menos de 10 años' },
                  { value: '11.4.4', label: '10 años y más' }
                ]}
                .selectedValue=${this.residenceTime}
                @change=${this._handleResidenceTime}
              ></radio-group>

              <radio-group
                name="residenceZone"
                label="P12. ¿Actualmente en qué zona del municipio vive?"
                .options=${[
                  { value: '12.4.1', label: 'Urbana' },
                  { value: '12.4.2', label: 'Rural' }
                ]}
                .selectedValue=${this.residenceZone}
                @change=${this._handleResidenceZone}
              ></radio-group>
              <radio-group
              name="identity"
              label="P13. ¿Usted se reconoce como:"
              .options=${[
                { value: '13.4.1', label: 'Campesino - campesina' },
                { value: '13.4.2', label: 'Miembro de la comunidad LGTBIQ+' },
                { value: '13.4.3', label: 'Migrante' }
              ]}
              .selectedValue=${this.identity}
              @change=${this._handleIdentity}
            ></radio-group>

            <radio-group
              name="sex"
              label="P14. Sexo:"
              .options=${[
                { value: '14.4.1', label: 'Hombre' },
                { value: '14.4.2', label: 'Mujer' }
              ]}
              .selectedValue=${this.sex}
              @change=${this._handleSex}
            ></radio-group>
            <div class="header">
              <h3>Capítulo 2.  Barreras de acceso a la justicia</h3>
            </div>
            <div class="subheader">
              <p>El objetivo de este capítulo es la identificación de las barreras de acceso a la justicia en el territorio.</p>
            </div>
            <h6>P15. Del siguiente listado, ¿Cuáles considera usted que son las principales barreras de acceso a la justicia que se presentan en este municipio?</h6>
          
            <radio-group
              name="cultural-barriers"
              label="1. Culturales y lingüísticas"
              definicion="Definición. Obstáculos o dificultades para la satisfacción de necesidades jurídicas en razón de la pertenencia a grupos culturales o lingüísticos minoritarios. "
              .options=${[
                { value: '15.4.1.1', label: 'Sí' },
                { value: '15.4.1.2', label: 'No' }
              ]}
              .selectedValue=${this.culturalBarriers}
              @change=${this._handleCulturalBarriers}
            ></radio-group>
            ${this.culturalBarriers === '15.4.1.1' ? html`
              <div class="sub-question">
                <checkbox-group
                  name="cultural-barrier-types"
                  label="P16. ¿Cuáles de las siguientes subcategorías de barreras de acceso a la justicia se presentan en el municipio?"
                  .options=${[
                    { value: '16.4.1.1', label: '1.1 Atención inadecuada por razón de la condición cultural o lingüística.' },
                    { value: '16.4.1.2', label: '1.2 Falta de información, rutas de atención y asistencia legal de fácil comprensión o disponible en lenguas minoritarias.' },
                    { value: '16.4.1.3', label: '1.3 Falta de articulación y coordinación entre la justicia propia afro y la jurisdicción ordinaria.' },
                    { value: '16.4.1.4', label: '1.4 Falta de articulación y coordinación entre la Justicia Especial Indígena y la jurisdicción ordinaria.' },
                    { value: '16.4.1.5', label: '1.5 Falta de asistencia de traductores o intérpretes dentro de los procedimientos o trámites legales.' },
                    { value: '16.4.1.6', label: '1.6 Otro' }
                  ]}
                  .selectedValues=${this.culturalBarrierTypes}
                  .otherValue=${this.culturalBarrierOther}
                  @change=${this._handleCulturalBarrierTypes}
                ></checkbox-group>
              </div>
            ` : ''}
            <radio-group
              name="gender-barriers"
              label="2. De Género"
              definicion = "Definición. Obstáculos o dificultades para la satisfacción de necesidades jurídicas, en razón del sexo, la identidad de género, orientación sexual o expresión de género."
              .options=${[
                { value: '15.4.2.1', label: 'Sí' },
                { value: '15.4.2.2', label: 'No' }
              ]}
            .selectedValue=${this.genderBarriers}
            @change=${this._handleGenderBarriers}
          ></radio-group>

          ${this.genderBarriers === '15.4.2.1' ? html`
            <div class="sub-question">
              <checkbox-group
                name="gender-barrier-types"
                label="P16. ¿Cuáles de las siguientes subcategorías de barreras de acceso a la justicia se presentan en el municipio?"
                .options=${[
                  { value: '16.4.2.1', label: '2.1 Falta de atención o atención inadecuada o desestimación de los conflictos en razón del sexo, identidad de género, orientación sexual o expresión de género.' },
                  { value: '16.4.2.2', label: '2.2 Falta de asistencia o representación legal adecuada por razón del sexo, identidad de género, orientación sexual o expresión de género.' },
                  { value: '16.4.2.3', label: '2.3 No accede a los servicios de justicia por sentir o presumir que será discriminado en razón de su sexo, identidad de género, orientación sexual o expresión de género.' },
                  { value: '16.4.2.4', label: '2.4 Miedo a denunciar o a continuar con los trámites y procedimientos en razón a amenazas o violencias basadas en género.' },
                  { value: '16.4.2.5', label: '2.5 Otro' }
                ]}
                .selectedValues=${this.genderBarrierTypes}
                .otherValue=${this.genderBarrierOther}
                @change=${this._handleGenderBarrierTypes}
              ></checkbox-group>

            </div>
          ` : ''}
          <radio-group
            name="security-barriers"
            label="3. De seguridad, orden público o asociadas al conflicto armado"
            .options=${[
              { value: '15.4.3.1', label: 'Sí' },
              { value: '15.4.3.2', label: 'No' }
            ]}
            .selectedValue=${this.securityBarriers}
            @change=${this._handleSecurityBarriers}
          ></radio-group>

          <p class="definition">
            Definición: Obstáculos o dificultades para la satisfacción de una necesidad jurídica debido a la percepción de peligro frente la vida o la integridad personal.
          </p>

          ${this.securityBarriers === '15.4.3.1' ? html`
            <div class="sub-question">
              <checkbox-group
                name="security-barrier-types"
                label="P16. ¿Cuáles de las siguientes subcategorías de barreras de acceso a la justicia se presentan en el municipio?"
                .options=${[
                  { value: '16.4.3.1', label: '3.1 Miedo a denunciar o a continuar con los trámites y procedimientos por amenazas o control territorial de grupos armados.' },
                  { value: '16.4.3.2', label: '3.2 Justicias paralelas' },
                  { value: '16.4.3.3', label: '3.3 Afectación en la prestación de servicios de justicia por violencia contra operadores (p. ej. Cierre de oficinas, traslados de despachos).' },
                  { value: '16.4.3.4', label: '3.4 Otro' }
                ]}
                .selectedValues=${this.securityBarrierTypes}
                .otherValue=${this.securityBarrierOther}
                @change=${this._handleSecurityBarrierTypes}
              ></checkbox-group>
            </div>
          ` : ''}
          <radio-group
            name="disability-barriers"
            label="4. Discapacidad"
            .options=${[
              { value: '15.4.4.1', label: 'Sí' },
              { value: '15.4.4.2', label: 'No' }
            ]}
            .selectedValue=${this.disabilityBarriers}
            @change=${this._handleDisabilityBarriers}
          ></radio-group>

          <p class="definition">
            Definición: Obstáculos o dificultades para la satisfacción de necesidades jurídicas en razón de la condición de discapacidad de las personas.
          </p>

          ${this.disabilityBarriers === '15.4.4.1' ? html`
            <div class="sub-question">
              <checkbox-group
                name="disability-barrier-types"
                label="P16. ¿Cuáles de las siguientes subcategorías de barreras de acceso a la justicia se presentan en el municipio?"
                .options=${[
                  { value: '16.4.4.1', label: '4.1 Falta de medios de transporte adecuados para llegar hasta donde se prestan los servicios de justicia (Vehículos accesibles, sillas de ruedas).' },
                  { value: '16.4.4.2', label: '4.2 Falta de intérpretes o de asistencia adecuada (para personas con dificultades para ver o escuchar).' },
                  { value: '16.4.4.3', label: '4.3 Falta de edificaciones o infraestructura accesible para personas con discapacidad (ausencia de rampas, pasillos estrechos).' },
                  { value: '16.4.4.4', label: '4.4 Otro' }
                ]}
                .selectedValues=${this.disabilityBarrierTypes}
                .otherValue=${this.disabilityBarrierOther}
                @change=${this._handleDisabilityBarrierTypes}
              ></checkbox-group>
            </div>
          ` : ''}
          <radio-group
          name="economic-barriers"
          label="5. Económicas"
          .options=${[
            { value: '15.4.5.1', label: 'Sí' },
            { value: '15.4.5.2', label: 'No' }
          ]}
          .selectedValue=${this.economicBarriers}
          @change=${this._handleEconomicBarriers}
        ></radio-group>

        <p class="definition">
          Definición: Se refiere a las dificultades de las personas para asumir los costos que implica el acceso a los servicios de justicia o los obstáculos que enfrentan al encontrarse en situación de marginalidad económica.
        </p>

        ${this.economicBarriers === '15.4.5.1' ? html`
          <div class="sub-question">
            <checkbox-group
              name="economic-barrier-types"
              label="P16. ¿Cuáles de las siguientes subcategorías de barreras de acceso a la justicia se presentan en el municipio?"
              .options=${[
                { value: '16.4.5.1', label: '5.1 Falta de recursos para contratar un abogado.' },
                { value: '16.4.5.2', label: '5.2 Falta de abogados o defensores de oficio en el lugar.' },
                { value: '16.4.5.3', label: '5.3 Falta de recursos para trasladarse al lugar donde se prestan servicios de justicia.' },
                { value: '16.4.5.4', label: '5.4 Falta de recursos para la conectividad.' },
                { value: '16.4.5.5', label: '5.5 Falta de recursos para la atención de gastos procesales y pre procesales (p. ej. dictámenes periciales, transporte de testigos o contacto con los mismos, investigadores).' },
                { value: '16.4.5.6', label: '5.6 Altos costos de oportunidad (tiempo que tiene que dedicarse) para atender el trámite, proceso o procedimiento.' },
                { value: '16.4.5.7', label: '5.7 Otro' }
              ]}
              .selectedValues=${this.economicBarrierTypes}
              .otherValue=${this.economicBarrierOther}
              @change=${this._handleEconomicBarrierTypes}
            ></checkbox-group>
          </div>
        ` : ''}

        <radio-group
          name="geographic-barriers"
          label="6. Geográficas"
          .options=${[
            { value: '15.4.6.1', label: 'Sí' },
            { value: '15.4.6.2', label: 'No' }
          ]}
          .selectedValue=${this.geographicBarriers}
          @change=${this._handleGeographicBarriers}
        ></radio-group>

        <p class="definition">
          Definición: Obstáculos o dificultades para la satisfacción de necesidades jurídicas en razón de la ubicación geográfica, las distancias, medios y vías de comunicación o transporte.
        </p>

        ${this.geographicBarriers === '15.4.6.1' ? html`
          <div class="sub-question">
            <checkbox-group
              name="geographic-barrier-types"
              label="P16. ¿Cuáles de las siguientes subcategorías de barreras de acceso a la justicia se presentan en el municipio?"
              .options=${[
                { value: '16.4.6.1', label: '6.1 Falta de presencia de operadores de justicia en zonas rurales.' },
                { value: '16.4.6.2', label: '6.2 Falta de infraestructura vial o de oferta de transporte para movilizarse a donde se prestan servicios de justicia.' },
                { value: '16.4.6.3', label: '6.3 Dificultades para acceder a los operadores de justicia en razón de la distancia que debe recorrerse o de las condiciones geográficas (p. ej. accidentes geográficos).' },
                { value: '16.4.6.4', label: '6.4 Otro' }
              ]}
              .selectedValues=${this.geographicBarrierTypes}
              .otherValue=${this.geographicBarrierOther}
              @change=${this._handleGeographicBarrierTypes}
            ></checkbox-group>
          </div>
        ` : ''}
        <radio-group
            name="institutional-barriers"
            label="7. Institucionales"
            .options=${[
              { value: '15.4.7.1', label: 'Sí' },
              { value: '15.4.7.2', label: 'No' }
            ]}
            .selectedValue=${this.institutionalBarriers}
            @change=${this._handleInstitutionalBarriers}
          ></radio-group>

          <p class="definition">
            Definición: Se refieren a dificultades en el acceso en razón a la estructura, políticas, procesos y dinámicas de los sistemas de justicia.
          </p>

          ${this.institutionalBarriers === '15.4.7.1' ? html`
            <div class="sub-question">
              <checkbox-group
                name="institutional-barrier-types"
                label="P16. ¿Cuáles de las siguientes subcategorías de barreras de acceso a la justicia se presentan en el municipio?"
                .options=${[
                  { value: '16.4.7.1', label: '7.1 Lentitud y larga duración de los trámites y procesos de los servicios de justicia.' },
                  { value: '16.4.7.2', label: '7.2 Incumplimiento de acuerdos o sentencias.' },
                  { value: '16.4.7.3', label: '7.3 Excesivos trámites y formalidades, procesos demasiado complejos.' },
                  { value: '16.4.7.4', label: '7.4 Desconfianza en los operadores de justicia y en la institucionalidad en general.' },
                  { value: '16.4.7.5', label: '7.5 Percepción de impunidad en el sistema de justicia.' },
                  { value: '16.4.7.6', label: '7.6 Falta de implementación o promoción de los Métodos de Resolución de Conflictos.' },
                  { value: '16.4.7.7', label: '7.7 Falta de articulación y coordinación entre actores y operadores de justicia.' },
                  { value: '16.4.7.8', label: '7.8 Desconocimiento de derechos, deberes y de los diversos mecanismos de acceso a la justicia.' },
                  { value: '16.4.7.9', label: '7.9 Alta rotación de servidores en el sector justicia.' },
                  { value: '16.4.7.10', label: '7.10 Falta de conocimientos o competencias de los actores y operadores de justicia.' },
                  { value: '16.4.7.11', label: '7.11 Falta de recursos físicos y humanos para atender de forma oportuna y suficiente las necesidades jurídicas.' },
                  { value: '16.4.7.12', label: '7.12 Otro' }
                ]}
                .selectedValues=${this.institutionalBarrierTypes}
                .otherValue=${this.institutionalBarrierOther}
                @change=${this._handleInstitutionalBarrierTypes}
              ></checkbox-group>
            </div>
          ` : ''}

          <radio-group
            name="technological-barriers"
            label="8. Tecnológicas"
            .options=${[
              { value: '15.4.8.1', label: 'Sí' },
              { value: '15.4.8.2', label: 'No' }
            ]}
            .selectedValue=${this.technologicalBarriers}
            @change=${this._handleTechnologicalBarriers}
          ></radio-group>

          <p class="definition">
            Definición: Dificultades en el acceso a la justicia por la falta de equipos, sistemas tecnológicos, redes o infraestructura de conectividad.
          </p>

          ${this.technologicalBarriers === '15.4.8.1' ? html`
            <div class="sub-question">
              <checkbox-group
                name="technological-barrier-types"
                label="P16. ¿Cuáles de las siguientes subcategorías de barreras de acceso a la justicia se presentan en el municipio?"
                .options=${[
                  { value: '16.4.8.1', label: '8.1 Falta de equipos o infraestructura tecnológica a disposición de los actores y operadores de justicia.' },
                  { value: '16.4.8.2', label: '8.2 Las personas no cuentan con equipos o sistemas que les permitan acceder en línea a los servicios de justicia.' },
                  { value: '16.4.8.3', label: '8.3 Deficiente conectividad en zonas rurales (veredas o corregimientos).' },
                  { value: '16.4.8.4', label: '8.4 Deficiente conectividad en el casco urbano de los municipios o distritos.' },
                  { value: '16.4.8.5', label: '8.5 Otro' }
                ]}
                .selectedValues=${this.technologicalBarrierTypes}
                .otherValue=${this.technologicalBarrierOther}
                @change=${this._handleTechnologicalBarrierTypes}
              ></checkbox-group>
            </div>
          ` : ''}
          <div class="header">
            <h3>Capítulo 3.  Conflictividades</h3>
          </div>
          <div class="subheader">
            <p>El objetivo de este capítulo es identificar los problemas / desacuerdos / conflictos y disputas que con mayor frecuencia atiende el sistema de justicia local, así como conocer sobre las Rutas y/o protocolos de atención.</p>
          </div>
          <h6>P17. Del siguiente listado de problemas / desacuerdos / conflictos y disputas ¿Para cada caso puede decirme si usted ha experimentado personalmente alguno de esos problemas entre enero 2020 hasta junio de 2024? Por favor solo incluya los problemas que experimentó usted mismo, no los que le ocurrieron a sus familiares, a sus amigos, a su negocio, o a su empleador, ni las situaciones en las que usted representó o ayudó a alguien con un problema. Y por favor sólo mencione los problemas una vez:</h6>

          <table class="experience-table">
          <thead>
            <tr>
              <th>Problema</th>
              <th>Sí</th>
              <th>No</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Problemas relacionados con familiares como separación o divorcio, cuotas de alimentos, herencias o sucesiones, paternidad / maternidad, cuidado de personas que más lo requieren y gastos del hogar.</td>
              <td>
                <input type="radio" name="family" value="17.4.1.1" @change=${this._handleExperienceChange} ?checked=${this.personalExperiences.family === '17.4.1.1'}>
              </td>
              <td>
                <input type="radio" name="family" value="17.4.1.2" @change=${this._handleExperienceChange} ?checked=${this.personalExperiences.family === '17.4.1.2'}>
              </td>
            </tr>
            <tr>
              <td>Problemas relacionados con el consumo de un producto, bien o servicio (telefonía celular, televisión por cable, internet, transporte, alimentos, electrodomésticos y servicios técnicos o profesionales). Se excluyen los servicios públicos domiciliarios.</td>
              <td>
                <input type="radio" name="consumer" value="17.4.2.1" @change=${this._handleExperienceChange} ?checked=${this.personalExperiences.consumer === '17.4.2.1'}>
              </td>
              <td>
                <input type="radio" name="consumer" value="17.4.2.2" @change=${this._handleExperienceChange} ?checked=${this.personalExperiences.consumer === '17.4.2.2'}>
              </td>
            </tr>
            <tr>
              <td>Problemas relacionados con la prestación de un servicio público domiciliario como agua, luz, gas, alcantarillado o basuras.</td>
              <td>
                <input type="radio" name="publicService" value="17.4.3.1" @change=${this._handleExperienceChange} ?checked=${this.personalExperiences.publicService === '17.4.3.1'}>
              </td>
              <td>
                <input type="radio" name="publicService" value="17.4.3.2" @change=${this._handleExperienceChange} ?checked=${this.personalExperiences.publicService === '17.4.3.2'}>
              </td>
            </tr>
            <tr>
              <td>Problemas relacionados con su trabajo o empleo, como falta de pago de salarios, reconocimiento o formalización de la relación laboral, cambio en las condiciones laborales, despido, acoso.</td>
              <td>
                <input type="radio" name="work" value="17.4.4.1" @change=${this._handleExperienceChange} ?checked=${this.personalExperiences.work === '17.4.4.1'}>
              </td>
              <td>
                <input type="radio" name="work" value="17.4.4.2" @change=${this._handleExperienceChange} ?checked=${this.personalExperiences.work === '17.4.4.2'}>
              </td>
            </tr>
            <tr>
              <td>Problemas relacionados con deudas contraídas con el sector financiero, solidario o particulares, respecto a intereses elevados, hipotecas, embargos, quiebras, reportes a centrales de riesgo, deudas educativas.</td>
              <td>
                <input type="radio" name="debt" value="17.4.5.1" @change=${this._handleExperienceChange} ?checked=${this.personalExperiences.debt === '17.4.5.1'}>
              </td>
              <td>
                <input type="radio" name="debt" value="17.4.5.2" @change=${this._handleExperienceChange} ?checked=${this.personalExperiences.debt === '17.4.5.2'}>
              </td>
            </tr>
            <tr>
              <td>Problemas relacionados con la vivienda en la que habita o de la que es dueño, o problemas con vecinos por ruidos, malos olores, mascotas, chismes y otros.</td>
              <td>
                <input type="radio" name="housing" value="17.4.6.1" @change=${this._handleExperienceChange} ?checked=${this.personalExperiences.housing === '17.4.6.1'}>
              </td>
              <td>
                <input type="radio" name="housing" value="17.4.6.2" @change=${this._handleExperienceChange} ?checked=${this.personalExperiences.housing === '17.4.6.2'}>
              </td>
            </tr>
          </tbody>
        </table>
    ` : ''}

    ${this.authorized === '7.4.2' ? html`
      <div class="alert alert-warning">
        Agradezca y finalice la encuesta. Colocar la novedad en A5.
      </div>
    ` : ''}

    </form>
    
    </div>
    `
  }
  _handleExperienceChange(e) {
    const { name, value, checked } = e.target;
    let updatedExperiences = [...this.personalExperiences[name]];
    
    if (checked) {
      if (!updatedExperiences.includes(value)) {
        updatedExperiences.push(value);
      }
    } else {
      updatedExperiences = updatedExperiences.filter(v => v !== value);
    }

    this.personalExperiences = {
      ...this.personalExperiences,
      [name]: updatedExperiences
    };
  }
  _handleInstitutionalBarriers(e) {
    this.institutionalBarriers = e.detail.value;
    if (this.institutionalBarriers !== '15.4.7.1') {
      this.institutionalBarrierTypes = [];
      this.institutionalBarrierOther = '';
    }
  }

  _handleInstitutionalBarrierTypes(e) {
    this.institutionalBarrierTypes = e.detail.values;
    this.institutionalBarrierOther = e.detail.otherValue;
  }

  _handleTechnologicalBarriers(e) {
    this.technologicalBarriers = e.detail.value;
    if (this.technologicalBarriers !== '15.4.8.1') {
      this.technologicalBarrierTypes = [];
      this.technologicalBarrierOther = '';
    }
  }

  _handleTechnologicalBarrierTypes(e) {
    this.technologicalBarrierTypes = e.detail.values;
    this.technologicalBarrierOther = e.detail.otherValue;
  }
  _handleEconomicBarriers(e) {
    this.economicBarriers = e.detail.value;
    if (this.economicBarriers !== '15.4.5.1') {
      this.economicBarrierTypes = [];
      this.economicBarrierOther = '';
    }
  }

  _handleEconomicBarrierTypes(e) {
    this.economicBarrierTypes = e.detail.values;
    this.economicBarrierOther = e.detail.otherValue;
  }

  _handleGeographicBarriers(e) {
    this.geographicBarriers = e.detail.value;
    if (this.geographicBarriers !== '15.4.6.1') {
      this.geographicBarrierTypes = [];
      this.geographicBarrierOther = '';
    }
  }

  _handleGeographicBarrierTypes(e) {
    this.geographicBarrierTypes = e.detail.values;
    this.geographicBarrierOther = e.detail.otherValue;
  }
  _handleDisabilityBarriers(e) {
    this.disabilityBarriers = e.detail.value;
    if (this.disabilityBarriers !== '15.4.4.1') {
      this.disabilityBarrierTypes = [];
      this.disabilityBarrierOther = '';
    }
  }

  _handleDisabilityBarrierTypes(e) {
    this.disabilityBarrierTypes = e.detail.values;
    this.disabilityBarrierOther = e.detail.otherValue;
  }
  _handleSecurityBarriers(e) {
    this.securityBarriers = e.detail.value;
    if (this.securityBarriers !== '15.4.3.1') {
      this.securityBarrierTypes = [];
      this.securityBarrierOther = '';
    }
  }

  _handleSecurityBarrierTypes(e) {
    this.securityBarrierTypes = e.detail.values;
    this.securityBarrierOther = e.detail.otherValue;
  }

  _handleCulturalBarriers(e) {
    this.culturalBarriers = e.detail.value;
    if (this.culturalBarriers !== '15.4.1.1') {
      this.culturalBarrierTypes = [];
      this.culturalBarrierOther = '';
    }
  }

  _handleGenderBarriers(e) {
    this.genderBarriers = e.detail.value;
    if (this.genderBarriers !== '15.4.2.1') {
      this.genderBarrierTypes = [];
      this.genderBarrierOther = '';
    }
  }

  _handleCulturalBarrierTypes(e) {
    this.culturalBarrierTypes = e.detail.values;
    this.culturalBarrierOther = e.detail.otherValue;
  }

  _handleGenderBarrierTypes(e) {
    this.genderBarrierTypes = e.detail.values;
    this.genderBarrierOther = e.detail.otherValue;
  }
  _handleAuthorization(e) {
    this.authorized = e.detail.value;
  }

  _handleAgeGroup = (e) => {
    this.ageGroup = e.detail.value;
  }

  _handleEthnicity = (e) => {
    this.ethnicity = e.detail.value;
  }

  _handleEducationLevel = (e) => {
    this.educationLevel = e.detail.value;
  }

  _handleResidenceTime = (e) => {
    this.residenceTime = e.detail.value;
  }

  _handleResidenceZone = (e) => {
    this.residenceZone = e.detail.value;
  }
  _handleResidenceZone = (e) => {
    this.residenceZone = e.detail.value;
  }

  _handleIdentity = (e) => {
    this.identity = e.detail.value;
  }

  _handleSex = (e) => {
    this.sex = e.detail.value;
  }
}

window.customElements.define('survey-justicia', SurveyJusticia)
