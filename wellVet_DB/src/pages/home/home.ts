import { Component, NgZone } from '@angular/core';
import { ModalController, ViewController, NavController, ActionSheetController, Platform } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { BirthdayService } from '../../services/birthday.service';

import { LoginPage } from '../login/login';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username = '';
  email = '';
  
  public birthdays = [];
  
  constructor(private nav: NavController,
			  private platform: Platform,
			  private zone: NgZone,
			  private viewCtrl: ViewController,
			  private modalCtrl: ModalController,
			  private actCtrl: ActionSheetController,
			  private auth: AuthService,
			  private birthdayService: BirthdayService
			 ) {
    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];
  }
  
  ionViewDidLoad() {
        this.platform.ready().then(() => {
            this.birthdayService.initDB();

            this.birthdayService.getAll()
                .then(data => {
                    this.zone.run(() => {
                        this.birthdays = data;
                    });
                })
                .catch(console.error.bind(console));
        });
    }
 
  public logout() {
		this.auth.logout().subscribe(succ => {
			this.showActionsheet("Are you sure you want to log out?")
		});
	}
  
  showDetail(birthday) {
        let modal = this.modalCtrl.create(DetailsPage, { birthday: birthday });
        modal.present();
    }
	
  showActionsheet(title) {
		let action = this.actCtrl.create({
		title: title,
		buttons: [
        {
			text: 'Log Out',
			role: 'destructive',
			handler: data => {
				this.nav.setRoot(LoginPage, {}, {animate: true, direction: 'back'})
			}
        },
		{
			text: 'Cancel',
			role: 'cancel',
			handler: data => {
				console.log('Cancel clicked');
			}
		}
		]
    });
    action.present();
  }
}