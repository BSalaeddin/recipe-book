import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCIMNS2WpPN9U5uQAmErVlK_Ed1uITPaEw",
      authDomain: "ng-recipe-book-c0f34.firebaseapp.com"
    });
  }
}
