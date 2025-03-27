import 'zone.js/dist/zone';
import {
  Component,
  importProvidersFrom,
  Provider,
  EnvironmentProviders,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { TaskModule } from './task/task.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  provideFASTDesignSystem,
  allComponents,
} from '@microsoft/fast-components';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, TaskModule],
  template: `
    <task-container-c></task-container-c>
  `,
})
export class App {}

provideFASTDesignSystem().register(allComponents);

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(StoreModule.forRoot({}), EffectsModule.forRoot([])),
  ],
});
