import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUnderBuildComponent } from './page-under-build.component';

describe('PageUnderBuildComponent', () => {
  let component: PageUnderBuildComponent;
  let fixture: ComponentFixture<PageUnderBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUnderBuildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUnderBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
