import { Component, Output, Input, EventEmitter, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  selector: 'taskc',
  templateUrl: './task.component.html',
})
export class TaskComponent {
  // Task
  // Let's assume that user id is 4
  // 1. On click `Get User Data` component should ask parent to fetch value from user service
  // After data was fetched it should be populated into form fields
  // 3. Change buttons background color to #fa6400
  // 4. After clicking on Submit button data should be saved using user service
  // Fields in the form should be requiered
  // 5. Please fetch the posts and show only the posts that belongs to current user
  // 6. Please add search that will filter the posts by including the search term inside the
  // title or body
    
  // Loading state
  isSubmitting = false;
  submitSuccess = false;
  errorMessage: string | null = null;

  @Output() fetchRequested = new EventEmitter<number>();
  @Output() postsRequested = new EventEmitter();
  @Output() saveRequested = new EventEmitter<any>();

  @Input() userData: any = {};
  @Input() postUserData: any;
  @Input() filteredPosts: any;

  @Output() search = new EventEmitter<string>();
  searchTerm = '';

  
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', [Validators.required]),
      userName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
  });
}
  
ngOnChanges(changes: SimpleChanges) {
  if (changes['userData'] && this.userData) {
    if (this.userData) {
      this.userForm.patchValue({
        id: this.userData.id || '',
        name: this.userData.name || '',
        userName: this.userData.username || '',
        email: this.userData.email || ''
      });
    }}
  }

  print() {
    this.fetchRequested.emit(4);
  }

  getPosts(id:number) {
    this.postsRequested.emit(id);
  }

  onSubmit() {
    // Mark all controls as touched to show validation messages
    this.userForm.markAllAsTouched();

    // Return if form is invalid
    if (this.userForm.invalid) {
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = null;

    // Prepare form data
    const formData = {
      id: this.userForm.value.id,
      name: this.userForm.value.name,
      username: this.userForm.value.userName,
      email: this.userForm.value.email
    };
    
    this.saveRequested.emit(formData);
  }

  onSearch() {
    this.search.emit(this.searchTerm);
  }
}
