import { Component, isDevMode } from '@angular/core';
import { UserService } from '@UW/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng14';
  users;

  constructor(private userSvc: UserService) {
    this.users = this.userSvc.getUser();
    this.title = isDevMode() ? 'App in dev mode works.' : 'App is prod mode works.'
  }

  theClicked(message: string) {
    console.log(message)
  }
}
