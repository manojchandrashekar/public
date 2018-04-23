import {Component, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common'
@Component({
  selector: 'lazy',
  template: `
  I am lazy
  `
})
export class LazyComponent{
  
}

@NgModule({
  declarations: [
    LazyComponent
  ],
  entryComponents:[
    LazyComponent
  ],
  imports: [CommonModule],
  providers: [ { provide: 'LAZY_ENTRY_POINT', useValue: LazyComponent } ]
})
export class LazyModule {}
