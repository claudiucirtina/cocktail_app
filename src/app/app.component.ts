import {Component, OnInit} from '@angular/core';
import {interval, Observable, Observer, Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cocktailRemake';
  color = 'red';
  public content = "";


  ngOnInit():void {

    const subject = new Observable<number>(subscriber => {

        interval(3000).subscribe(x=> {
          for (let i = 0; i <= 100; i+=5) {
            subscriber.next(i)
          }  })
    });

    subject.subscribe(x=> console.log(x))

  }

  changeColor(color: string):string {
    return this.color = color;
  }
}
