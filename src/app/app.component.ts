import { Component } from '@angular/core';
import { ParentUser } from './user/parent-user.interface';
import { ChildUser } from './user/childe-user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  parentUsers: ParentUser[] = [
    // Your array of ParentUser objects here...
  ];

  receivedChildUsers: ChildUser[] = [];

  onChildUsersReceived(childUsers: ChildUser[]) {
    this.receivedChildUsers = childUsers;
  }
}
