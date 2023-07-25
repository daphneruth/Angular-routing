import { Component } from '@angular/core';

import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  faLock = faLock
loginForm: any;
onSubmit() {
throw new Error('Method not implemented.');
}

}
