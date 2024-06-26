import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-code',
  templateUrl: './error-code.component.html',
  styleUrls: ['./error-code.component.less']
})
export class ErrorCodeComponent {
  @Input() message: string = '';
}
