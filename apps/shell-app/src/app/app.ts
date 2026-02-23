import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnalyticsDashboardComponent } from '@celonis-demo/analytics-dashboard';

@Component({
  imports: [RouterModule, AnalyticsDashboardComponent],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'shell-app';
}
