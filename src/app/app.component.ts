import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from './user.service';
import { UserModel } from './user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  formData: UserModel = { firstName: '', lastName: '' };
  alertMessage = '';
  alertClass= ''; // Property to hold the dynamic class

  constructor(private userService: UserService) {}

  submitForm(userForm: NgForm) {
    if (userForm.invalid) {
      this.alertMessage = 'Please fill in both first name and last name.';
      return;
    }

    this.userService.addUser(this.formData).subscribe({
      next: (response) => {
        console.log("User added: "+ response.firstName + " "+ response.lastName);
        this.alertClass = 'alert-success';
        this.alertMessage = 'User saved successfully';
      },
      error: (error) => {
        this.alertClass = 'alert-danger';
        this.alertMessage = error;
      },
      complete: () => {
        userForm.resetForm();
      }
    });
  }
}
