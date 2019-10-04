import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TopBarComponent } from './top-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkWithHref } from '@angular/router';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('TopBarComponent', () => {
  let component: TopBarComponent;
  let fixture: ComponentFixture<TopBarComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopBarComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarComponent);
    component = fixture.componentInstance;

    router = TestBed.get(Router);
    spyOn(router, 'navigateByUrl');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a link to /', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de => {
      return de.properties['href'] === '/';
    });
    expect(index).toBeGreaterThan(-1);
  });

  it('should have a link to /receipt', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex(de => {
      return de.properties['href'] === '/receipt';
    });
    expect(index).toBeGreaterThan(-1);
  });

  it('should trigger the navigation to /', async(() => {
    const link = fixture.debugElement.nativeElement.querySelector('#cartLink');
    link.click();
    expect(router.navigateByUrl).toHaveBeenCalled();
  }));

  it('should trigger the navigation to /receipt', async(() => {
    const link = fixture.debugElement.nativeElement.querySelector('#outputLink');
    link.click();
    expect(router.navigateByUrl).toHaveBeenCalled();
  }));
});
