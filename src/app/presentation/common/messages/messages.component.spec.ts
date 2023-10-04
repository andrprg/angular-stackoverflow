import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { MessagesService } from 'src/app/data/common/messages.service';

import { MessagesComponent } from './messages.component';

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;
  let service: MessagesService;

  const messageServiceSpy = jasmine.createSpyObj('MessagesStoreService', {}, {
    errors$: of(['testing error']),
    warns$: of(['testing warns']),
    messages$: of(['testing messages']),
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [        
        {provide: MessagesService, useValue: messageServiceSpy}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(MessagesService);
    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('должно отображаться сообщение об ошибки', () => {
    const element = fixture.debugElement.nativeElement.querySelector('.errors-container__item');
    expect(element.textContent).toContain('testing error');
  });

  it('должно отображаться предупреждение', () => {
    const element = fixture.debugElement.nativeElement.querySelector('.warns-container__item');
    expect(element.textContent).toContain('testing warns');
  });

  it('должно отображаться сообщение', () => {
    const element = fixture.debugElement.nativeElement.querySelector('.messages-container__item');
    expect(element.textContent).toContain('testing messages');
  });

  it('должно закрыться окно сообщения об ошибки', fakeAsync(() => {
    const elementBefore = fixture.debugElement.query(By.css('.errors-container__close')); 
    spyOn(component, 'onClose');
    elementBefore.triggerEventHandler('click', null);
    tick();
    expect(component.onClose).toHaveBeenCalledOnceWith('error');
  }));

  it('должно закрыться окно предупреждения', fakeAsync(() => {
    const elementBefore = fixture.debugElement.query(By.css('.warns-container__close')); 
    spyOn(component, 'onClose');
    elementBefore.triggerEventHandler('click', null);
    tick();
    expect(component.onClose).toHaveBeenCalledOnceWith('warn');
  }));

  it('должно закрыться окно сообщения', fakeAsync(() => {
    const elementBefore = fixture.debugElement.query(By.css('.messages-container__close')); 
    spyOn(component, 'onClose');
    elementBefore.triggerEventHandler('click', null);
    tick();
    expect(component.onClose).toHaveBeenCalledOnceWith('message');
  }));
});
