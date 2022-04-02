import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UIServicesService } from 'src/app/services/uiservices.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../interfaces/interfaces';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal') slides: IonSlides;

  loginUser = {
    email: 'admin@gmail.com',
    password: '12345'
  };

  registerUser: Usuario = {
    email: 'prueba1@gmail.com',
    password: '12345',
    nombre: 'prueba1',
    avatar: 'av-1.png'
  };

  constructor(
    private usuarioService: UsuarioService,
    private uiService: UIServicesService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.slides.lockSwipes(true);
    }, 500);
  }

  async login(fLogin: NgForm) {
    if (fLogin.invalid) { return; }
    const valido = await this.usuarioService.login(this.loginUser.email, this.loginUser.password);
    if (valido) {
      this.navCtrl.navigateRoot('/main/tabs/tab1', { animated: true });
    }
    else {
      this.uiService.alertaInformativa('Usuario y contraseña no son correctos');
    }
  }

  async registro(fRegistro: NgForm) {
    if (fRegistro.invalid) { return; }
    const valido = await this.usuarioService.registro(this.registerUser);
    if (valido) {
      this.navCtrl.navigateRoot('/main/tabs/tab1', { animated: true });
    }
    else {
      this.uiService.alertaInformativa('Ese correo electronico ya existe');
    }
  }

  mostrarRegistro() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }

  mostrarLogin() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }
}
