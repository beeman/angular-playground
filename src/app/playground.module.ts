import { NgModule } from '@angular/core';
import { ScenarioComponent } from './scenario/scenario.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SANDBOXES } from './shared/tokens';
import { StateService } from './shared/state.service';
import { loadSandboxes } from './load-sandboxes';
import {FocusDirective} from "./shared/focus.directive";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: SANDBOXES, useFactory: loadSandboxes},
    StateService
  ],
  declarations: [AppComponent, ScenarioComponent, FocusDirective],
  bootstrap: [AppComponent]
})
export class PlaygroundModule {
}
