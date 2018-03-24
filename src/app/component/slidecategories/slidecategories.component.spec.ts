import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidecategoriesComponent } from './slidecategories.component';

describe('SlidecategoriesComponent', () => {
  let component: SlidecategoriesComponent;
  let fixture: ComponentFixture<SlidecategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidecategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidecategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
