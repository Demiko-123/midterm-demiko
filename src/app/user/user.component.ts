import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ParentUser } from './parent-user.interface';
import { ChildUser } from './childe-user.interface';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-user',
  template: `
    <h1>Array from parent component</h1>
    <div *ngFor="let user of users">
      {{ user.Id }} - {{ user.Firstname }} {{ user.Lastname }} - {{ user.DateOfBirth }} - {{ user.PhoneNumber }} - {{ user.Email }}
    </div>

    <h1>Array from child component</h1>
    <div *ngFor="let childUser of childUsers">
      {{ childUser.Id }} - {{ childUser.Firstname }} {{ childUser.Lastname }} - {{ childUser.DateOfBirth }} - {{ childUser.PhoneNumber }} - {{ childUser.Email }}
    </div>

    <h2>Add New Child User</h2>
    <form (submit)="addNewChildUser()">
      <label for="childFirstname">Firstname:</label>
      <input type="text" id="childFirstname" [(ngModel)]="newChildUser.Firstname" name="childFirstname" required>

      <label for="childLastname">Lastname:</label>
      <input type="text" id="childLastname" [(ngModel)]="newChildUser.Lastname" name="childLastname" required>

      <label for="childDateOfBirth">Date of Birth:</label>
      <input type="date" id="childDateOfBirth" [(ngModel)]="newChildUser.DateOfBirth" name="childDateOfBirth" required>

      <label for="childPhoneNumber">Phone Number:</label>
      <input type="text" id="childPhoneNumber" [(ngModel)]="newChildUser.PhoneNumber" name="childPhoneNumber" required>

      <label for="childEmail">Email:</label>
      <input type="email" id="childEmail" [(ngModel)]="newChildUser.Email" name="childEmail" required>

      <button type="submit">Add User</button>
    </form>
  `
})
export class UserComponent {
  @Input() users: ParentUser[] = [];
  @Output() childUsersEvent = new EventEmitter<ChildUser[]>();

  childUsers: ChildUser[] = [
   
  ];

  newChildUser: ChildUser = {
    Id: 0,
    Firstname: '',
    Lastname: '',
    DateOfBirth: new Date(),
    PhoneNumber: '',
    Email: ''
  };

  ngOnInit() {
    this.childUsersEvent.emit(this.childUsers);
  }

  addNewChildUser() {
    this.newChildUser.Id = this.childUsers.length + 1;
    this.childUsers.push({ ...this.newChildUser });
    this.childUsersEvent.emit(this.childUsers);
    this.newChildUser = { Id: 0, Firstname: '', Lastname: '', DateOfBirth: new Date(), PhoneNumber: '', Email: '' };
  }
}
