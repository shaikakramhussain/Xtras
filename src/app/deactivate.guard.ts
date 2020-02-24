import { Injectable, Component } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { PendingissuesComponent } from './dashboard/pendingissues/pendingissues.component';

export interface  CanComponentDeactivate{
  confirm1():boolean;
}


@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(
    component: CanComponentDeactivate,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
return component.confirm1();
      }
  }
 