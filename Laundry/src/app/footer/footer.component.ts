import { Component, OnInit } from '@angular/core';
import { contact } from '../model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  contact=contact;

  constructor() { }

  ngOnInit(): void {
  }
  call(num:string){
    window.location.href='tel:'+num;
  }
  mailUs(mail:string){
    window.location.href = 'mailto:' + mail;
  }
  openWhatsApp() {
    const whatsappUrl=`https://wa.me/+91${contact.NUMBER}`;
    window.open(whatsappUrl,'_blank');
  }

}
