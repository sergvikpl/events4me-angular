import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from '../../auth.service';

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required]), // Validators.email
      password: new FormControl(null, [Validators.required])
    })
  }

  onSubmit() {
    this.form.disable()

    const user = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.auth.login(user).subscribe(
      () => {
        console.log('Login success')
      },
      (error) => {
        console.warn('Login faild', error)
        this.form.enable()
      }
    )
  }

}
