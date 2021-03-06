import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  constructor(private route: Router, private auth: AuthService) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    this.auth.setLoggingIn();
    this.route.navigate(['/']);
  }
}
