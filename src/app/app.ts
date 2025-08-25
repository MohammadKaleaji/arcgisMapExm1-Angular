import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import "@arcgis/map-components/components/arcgis-map";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Set the schema here
})
export class App {
  arcgisViewReadyChange(event: CustomEvent) {
    // The view is ready, add additional functionality below
  }
}
