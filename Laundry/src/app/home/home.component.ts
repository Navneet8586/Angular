import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private elementRef:ElementRef) { }

  ngOnInit(): void {
  }

  scrollToContactUs(){
    console.log("called");

    const contactUs=this.elementRef.nativeElement.querySelector('#contact-us');
    contactUs.scrollIntoView({behaviour:'smooth'})
  }

}
