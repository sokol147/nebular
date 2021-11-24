import { Component, HostBinding } from '@angular/core';
import { NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';

@Component({
  selector: 'npg-toastr-showcase',
  template: `
    <button nbButton (click)="showToast(NbGlobalPhysicalPosition.TOP_RIGHT, 'success')">Top Right</button>
    <button nbButton (click)="showToast(NbGlobalPhysicalPosition.BOTTOM_LEFT, 'info')">Bottom left</button>
  `,
  styles: [
    `
      ::ng-deep nb-layout-column {
        height: 80vw;
      }
    `,
  ],
})
export class ToastrShowcaseComponent {
  private index: number = 0;

  @HostBinding('class')
  classes = 'example-items-rows';

  NbGlobalPhysicalPosition = NbGlobalPhysicalPosition;

  constructor(private toastrService: NbToastrService) {}

  showToast(position, status) {
    this.index += 1;
    this.toastrService.show(status || 'Success', `Toast ${this.index}`, { position, status });
  }
}
