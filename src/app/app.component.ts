import {Component, OnInit} from '@angular/core';
import {interval, Observable, Observer, Subject} from "rxjs";
import {Cocktail} from "./interfaces/cocktail.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit():void {

  }
}
