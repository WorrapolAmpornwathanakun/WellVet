import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Loading, ModalController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';

import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  registerCredentials = { email: '', password: '' };
 
  constructor(private nav: NavController,
			  private navParams: NavParams,
			  private auth: AuthService, 
			  private alertCtrl: AlertController, 
			  private loadingCtrl: LoadingController,
			  private modalCtrl: ModalController) { }
 
  public createAccount() {
    this.nav.push(RegisterPage);
  }
 
  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {        
        this.nav.setRoot(HomePage);
      } else {
        this.showError("Username or password was entered incorrectly.");
      }
    },
      error => {
        this.showError(error);
      });
  }
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
 
  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Login Failed!',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}