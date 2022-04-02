import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, RouterStateSnapshot, UrlSegment, UrlTree, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuardGuard implements CanLoad {

  constructor(
    private usuarioService: UsuarioService
  ){}

  canLoad(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.usuarioService.validaToken();
  }

  /* canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return false;
  } */
}
