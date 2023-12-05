import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInCursoComponent } from './sign-in-curso.component';

describe('SignInCursoComponent', () => {
  let component: SignInCursoComponent;
  let fixture: ComponentFixture<SignInCursoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignInCursoComponent]
    });
    fixture = TestBed.createComponent(SignInCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
