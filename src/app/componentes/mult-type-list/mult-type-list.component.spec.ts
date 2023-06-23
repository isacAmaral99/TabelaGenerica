import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultTypeListComponent } from './mult-type-list.component';

describe('MultTypeListComponent', () => {
  let component: MultTypeListComponent;
  let fixture: ComponentFixture<MultTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultTypeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
