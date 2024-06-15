import { Component, OnInit } from '@angular/core';
import { contact } from '../model';
import { services } from '../model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  contactForm!:FormGroup;
  contactDetails=contact;
  services=services;
  lat: number = 51.673858;
  lng: number = 7.815982;

  
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.contactForm=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      selectedService:['',Validators.required],
      message:['',Validators.required]
    })
  }

  submit(){
    console.log(this.contactForm.value);
  }

  
  

}
