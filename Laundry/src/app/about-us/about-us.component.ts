import { Component, OnInit } from '@angular/core';
import { contact } from '../model';
import { services } from '../model';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  contactDetails=contact;
  services=services;

  
  constructor() { }

  ngOnInit(): void {
  }

  lat: number = 51.673858;
  lng: number = 7.815982;

  
  

}
