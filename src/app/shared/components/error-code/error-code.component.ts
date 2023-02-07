import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'error-code',
  templateUrl: './error-code.component.html',
  styleUrls: ['./error-code.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class ErrorCodeComponent {
  @Input() code = '';
  @Input() title = '';
  @Input() message = '';

}
