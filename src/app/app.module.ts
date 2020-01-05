import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { PersistenceService } from './services/persistence.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: (persistenceService: PersistenceService) => () => persistenceService.connect(),
    deps: [PersistenceService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
