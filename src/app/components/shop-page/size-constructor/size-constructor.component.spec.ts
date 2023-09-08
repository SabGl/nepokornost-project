import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeConstructorComponent } from './size-constructor.component';

describe('SizeConstructorComponent', () => {
  let component: SizeConstructorComponent;
  let fixture: ComponentFixture<SizeConstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizeConstructorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SizeConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
