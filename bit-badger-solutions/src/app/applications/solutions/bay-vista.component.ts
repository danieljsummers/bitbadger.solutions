import { Component, Input } from '@angular/core'

import { AppDetailComponent } from './app-detail.component'
import { App } from '../application.types'

@Component({
  selector: 'app-bay-vista',
  templateUrl: './bay-vista.component.html'
})
export class BayVistaComponent extends AppDetailComponent {

  @Input() app: App

  process: boolean = false
  
  constructor() {
    super()
  }

  showHide(what: string) {
    if (what === 'process') {
      this.process = !this.process
    }
  }

}
