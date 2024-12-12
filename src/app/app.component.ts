import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
import { getCurrentUser, signIn } from 'aws-amplify/auth'
import { FormsModule } from '@angular/forms';

Amplify.configure(outputs);

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, TodosComponent, AmplifyAuthenticatorModule, FormsModule],
})
export class AppComponent {
  title = 'amplify-angular-template';

  email = "";
  password = "";
    
  constructor(public authenticator: AuthenticatorService) {
    Amplify.configure(outputs);
  }

  async logIn() {
    await signIn({
      username: this.email,
      password: this.password
    })
  }

  async getUser() {
    console.log(getCurrentUser());
  }
}
