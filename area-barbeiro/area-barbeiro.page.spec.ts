import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AreaBarbeiroPage } from './area-barbeiro.page';

describe('AreaBarbeiroPage', () => {
  let component: AreaBarbeiroPage;
  let fixture: ComponentFixture<AreaBarbeiroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaBarbeiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
