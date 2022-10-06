import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/shareReplay';
import { Subscription, Subject } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular 5';
  sub3: Subscription;
  sub2: Subscription;
  sub4: Subscription;
  observable: Observable<any>;
  observer = new Subject();
  i = 0;

  private init$: Observable<any>;

  public ngOnInit() {
    console.log('Reprise ');
    this.i = 0;
    this.observable = new Observable((observer) => {
      console.log('Reprise ');
      setInterval(() => {
        this.i += 1;
        console.log(' next ', i);
        this.observer.next(this.i);
      }, 1000);
    });

    /*   this.sub3 = this.observable.subscribe(
      (value: any) => {
        if (value % 3 == 0) {
          console.log(`sub3 % 3 : ${value}`);
        } else {
          // console.log('BBBB rien % 3', value);
        }
      },
      (error) => {
        console.log('Error: ', error);
      }
    ); */
    this.sub2 = this.observer.subscribe(
      (value: any) => {
        if (value % 4 == 0) {
          console.log(`sub2 % 4 : ${value}`);
        } else {
          // console.log('BBBB rien % 3', value);
        }
      },
      (error) => {
        console.log('Error: ', error);
      }
    );
    this.sub4 = this.observer.subscribe(
      (value: any) => {
        if (value % 5 == 0) {
          console.log(`sub4 % 4 : ${value}`);
        } else {
          // console.log('BBBB rien % 3', value);
        }
      },
      (error) => {
        console.log('Error: ', error);
      }
    );
    //this.sub3.unsubscribe();
    //this.sub3.closed = true;
    var t = window.setTimeout(() => {
      console.log('FIN -------------------------------------------', this.i);
      this.sub4.unsubscribe();
      this.sub2.unsubscribe();
      //this.sub3.unsubscribe();
    }, 8000);
  }
}
