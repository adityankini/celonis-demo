import { Component } from '@angular/core';
import { CelonisButtonComponent } from '@celonis-demo/shared-ui';

@Component({
  selector: 'lib-analytics-dashboard',
  standalone: true,
  imports: [CelonisButtonComponent],
  template: `
    <h1>Analytics Dashboard</h1>
    <lib-celonis-button label="Run Process Mining"></lib-celonis-button>
  `,
})
export class AnalyticsDashboardComponent {}