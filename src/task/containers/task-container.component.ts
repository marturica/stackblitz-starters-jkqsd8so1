import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'task-container-c',
  templateUrl: './task-container.component.html',
})
export class TaskContainerComponent {
  /* Task */
  /* This component should fetch User data from user service and provide it into child component*/
  /* This component should call user service to save new User data */
  userData: any;
  userId: number | null = null;
  postUserData: any;
  loading = false;
  error: string | null = null;
  submitSuccess = false;
  allPosts: any[] = [];
  filteredPosts: any[] = [];

  constructor(private userService: UserService) {}
  ngOnInit() {
    this.loadPostData();
  }

  onSearch(searchTerm: string) {
    if (!searchTerm) {
      this.filteredPosts = [...this.allPosts];
      return;
    }

    const term = searchTerm.toLowerCase();
    this.filteredPosts = this.allPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(term) ||
        post.body.toLowerCase().includes(term)
    );
  }

  loadUserData(userId: number) {
    this.userService.getUserDetails(userId).subscribe({
      next: (data) => {
        this.userData = data;
        this.loading = false;
        console.error('API ok:', data);
      },
      error: (err) => {
        this.error = 'Failed to load post';
        this.loading = false;
        console.error('API error:', err);
      },
    });
  }

  loadPostData(userId: number = 0) {
    this.userService.getPosts().subscribe({
      next: (data) => {
        if(userId) this.postUserData = data.filter((item) => item.id === userId);  
        else {this.allPosts = data;
        this.filteredPosts = this.allPosts
        this.loading = false;}
        console.error('POSTS ok:', data);
      },
      error: (err) => {
        this.error = 'Failed to load post';
        this.loading = false;
        console.error('API error:', err);
      },
    });
  }

  saveUserData(user: User) {
    this.userService.saveUserDetails(user).subscribe({
      next: (response) => {
        this.submitSuccess = true;
        this.loading = false;
        //this.userForm.reset();
        console.log('post ok', response);
      },
      error: (error) => {
        this.error = error.message || 'Failed to submit form';
        this.loading = false;
        console.log('error', error);
      },
    });
  }
}
