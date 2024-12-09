import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Componente } from './interfaces/interfaces';
import { DataService } from './services/data.service';
@Component({
selector: 'app-root',
templateUrl: 'app.component.html',
styleUrls: ['app.component.scss'],
})
export class AppComponent {
  componente: Observable<Componente[]>;

  ngOnInit() {
    this.componente = this.dataService.getMenuOpts();

  }

  constructor(private dataService: DataService) {

  }

  initializeApp() {
    this.componente = this.dataService.getMenuOpts();
  }

}
