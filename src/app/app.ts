import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* 
  Register the ArcGIS Map Web Components that are used in the HTML template.
  Without these imports, Angular won't recognize <arcgis-map>, <arcgis-zoom>, etc.
*/
import '@arcgis/map-components/components/arcgis-map';
import '@arcgis/map-components/components/arcgis-zoom';
import '@arcgis/map-components/components/arcgis-legend';

@Component({
  selector: 'app-root',       // Angular component selector
  standalone: true,           // Angular 16+ standalone component style
  templateUrl: './app.html',  // Template file containing our <arcgis-map>
  styleUrl: './app.scss',     // CSS scoped to this component
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // REQUIRED to allow non-Angular custom elements
})
export class App {
  /**
   * Event handler called when <arcgis-map> finishes initializing.
   * Provides access to the underlying MapView via event.detail.view.
   * This is the recommended integration point when using ArcGIS components in frameworks.
   */
  arcgisViewReadyChange(event: CustomEvent) {
    const view = (event as any)?.detail?.view;
    console.log('✅ MapView is ready:', view);

    // At this point, we could add layers, graphics, or interact with the view object.
    // For Tutorial 1, we’re just confirming it works.
  }
}