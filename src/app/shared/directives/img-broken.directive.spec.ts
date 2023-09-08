import { Component, ElementRef } from '@angular/core';
import { ImgBrokenDirective } from './img-broken.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: '<img class="testing-directive" appImgBroken [src]="srcMock">'
})
class TestComponent {
  public srcMock:any = null;
}

describe('ImgBrokenDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[
        ImgBrokenDirective
      ],
      declarations:[
        TestComponent
      ]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const mockElement = new ElementRef('');
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });

  it('should create a instance component', ()=>{
    expect(component).toBeTruthy();
  });

  it('should change the img to a valid img',(done:DoneFn)=>{
    const imgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement;
    component.srcMock = undefined;
    const local = window.location.host;    
    setTimeout(()=>{
      const afterImgSrc = imgElement.src;
      expect(afterImgSrc).toMatch(/\bassets\/img\b/);
      done();
    },3000);
  });
});
