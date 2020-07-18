import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarCSSService {

  private ActiveComponent: BehaviorSubject<string>;
  private CompletedComponent: BehaviorSubject<string>;

  constructor() {
    this.ActiveComponent = new BehaviorSubject<string>('student');
    this.CompletedComponent = new BehaviorSubject<string>('');
  }

  getActiveComponentValue(): Observable<string> {
    return this.ActiveComponent.asObservable();
  }
  setActiveComponentValue(newValue): void {
    this.ActiveComponent.next(newValue);
  }
  getCompletedComponentValue(): Observable<string> {
    return this.CompletedComponent.asObservable();
  }
  setCompletedComponentValue(newValue): void {
    this.CompletedComponent.next(newValue);
  }
}