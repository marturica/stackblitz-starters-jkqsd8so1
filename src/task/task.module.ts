import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './components/task.component';
import { TaskContainerComponent } from './containers/task-container.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { taskReducer } from '../store/task.reducer';
import { TASK_STORE_NAME } from '../store/task.selectors';
import { UserService } from '../services/user.service';
import { TaskEffects } from '../store/task.effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TaskComponent, TaskContainerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(TASK_STORE_NAME, taskReducer),
    EffectsModule.forFeature([TaskEffects]),
    HttpClientModule,
  ],
  exports: [TaskComponent, TaskContainerComponent],
  providers: [UserService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TaskModule {}
