import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuntimeApiKeyComponent } from './runtime-api-key.component';

describe('RuntimeApiKeyComponent', () => {
  let component: RuntimeApiKeyComponent;
  let fixture: ComponentFixture<RuntimeApiKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuntimeApiKeyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuntimeApiKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
