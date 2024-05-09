import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LaundryService {

  constructor() { }

  sendFormDataViaWhatsapp(formData:any){
    const message=`Name: ${formData.name}%0AEmail:${formData.email}`;
    const url=`https://api.whatsapp.com/send?phone=8005657266&text=${message}`;
    window.open(url,'_blank');
  }
}
