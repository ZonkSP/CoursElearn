import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  /* show modal login/register */
  private viewModalObservable : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public observableView = this.viewModalObservable.asObservable();
  
  public get getShowModal() : boolean{
    return this.viewModalObservable.getValue();
  }

  public set setShowModal(v : boolean) {
    this.viewModalObservable.next(v);
  }
  /* show modal login/register */
  
}
