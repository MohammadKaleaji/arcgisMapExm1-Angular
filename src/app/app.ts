import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Register the web components you are using
import '@arcgis/map-components/components/arcgis-map';
import '@arcgis/map-components/components/arcgis-zoom';
import '@arcgis/map-components/components/arcgis-legend';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class App {
  arcgisViewReadyChange(event: CustomEvent) {
    const view = (event as any)?.detail?.view;
    console.log('✅ MapView is ready:', view);
  }
}
