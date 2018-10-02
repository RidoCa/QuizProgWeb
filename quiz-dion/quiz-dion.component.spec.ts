import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizDionComponent } from './quiz-dion.component';

describe('QuizDionComponent', () => {
  let component: QuizDionComponent;
  let fixture: ComponentFixture<QuizDionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizDionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizDionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
