import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CleaningPage } from './cleaning.page';

describe('CleaningPage', () => {
  let component: CleaningPage;
  let fixture: ComponentFixture<CleaningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleaningPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CleaningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
