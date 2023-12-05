import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { cursos } from '../interfaces/cursos.interface';
import { Enrollment } from '../interfaces/enrollment.interface';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  
  constructor(private http : HttpClient) { }

  public cursos : cursos[] = [];
  public cursosStudent : Enrollment[] = [];

  fetchCursosFromApi( searchTerm : string) : Observable<any>{
    return this.http.get(`http://localhost:8080/api/cursos?searchTerm=${searchTerm}`);
  }

  selectCursoFromApi( cursoID : number ) : Observable<any>{
    return this.http.get(`http://localhost:8080/api/cursos/${cursoID}`);
  }

  fetchCursosUserStudentFromApi() : Observable<any>{
    return this.http.get(`http://localhost:8080/api/enroll`, 
    {
      headers: {
        "Authorization" : window.localStorage.getItem("token") ?? "",
      }
    });
  }

  signInCurso( idCurso : number) : Observable<any>{
    const token = window.localStorage.getItem("token") ?? "";
    const headers = new HttpHeaders({
      "Authorization": token
    });

    return this.http.post(`http://localhost:8080/api/enroll/${idCurso}`, {}, { headers });
  }

  signOutCurso( idCurso : number) : Observable<any>{
    const token = window.localStorage.getItem("token") ?? "";
    const headers = new HttpHeaders({
      "Authorization": token
    });

    return this.http.delete(`http://localhost:8080/api/enroll/${idCurso}`, {headers});
  }

  createCurso( curso : cursos) : Observable<any>{
    const token = window.localStorage.getItem("token") ?? "";
    const headers = new HttpHeaders({
      "Authorization": token
    });

    return this.http.post(`http://localhost:8080/api/addCurso`, curso,{headers});
  }

  public getSelectedCurso() : cursos {
    return this.cursos[this.getCurso];
  }

  public getStudentCurso() : Enrollment | undefined {
    const selectCurso = this.cursosStudent.find(enrollment => enrollment.course.id === this.getCurso);
    return selectCurso;
  }

  /* show one course */
  private slCurso : BehaviorSubject<number> = new BehaviorSubject<number>(1);
  public observableView = this.slCurso.asObservable();
  
  public get getCurso() : number{
    return this.slCurso.getValue();
  }

  public set changeCurso(v : number) {
    this.slCurso.next(v);
  }
  /* show one course */

}
