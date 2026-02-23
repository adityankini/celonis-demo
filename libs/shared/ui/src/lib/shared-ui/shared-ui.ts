import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-celonis-button',
  standalone: true,
  template: `<button style="background: #002eab; color: white; padding: 10px;">{{label}}</button>`,
})
export class CelonisButtonComponent {
  @Input() label = 'Celonis Button';
}