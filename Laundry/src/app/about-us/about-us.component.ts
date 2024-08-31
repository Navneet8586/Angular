import { Component, OnInit } from '@angular/core';
import { contact } from '../model';
import { services } from '../model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LaundryService } from '../laundry.service';


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

  
  constructor(private fb:FormBuilder,private service:LaundryService) { }

  ngOnInit(): void {
    this.contactForm=this.fb.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
      selectedService:['',Validators.required],
      message:['',[Validators.required,Validators.minLength(30)]]
    })
  }

  call(num:string){
    window.location.href='tel:'+num;
  }
  mailUs(mail:string){
    window.location.href = 'mailto:' + mail;
  }

  submit(){
    console.log(this.contactForm.value);
    this.service.contactUsMail(this.contactForm.value).subscribe(
      response => {
        console.log('Data submitted successfully', response);
        alert('Thank You For Your Valuable FeedBack.');
      },
      error => {
        console.error('Error submitting data', error);
      }
    );
    this.contactForm.reset();
  }

  
  

}
