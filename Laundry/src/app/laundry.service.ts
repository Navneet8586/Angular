import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaundryService {
  private baseurl='http://localhost:3000';

  constructor(private http:HttpClient) { }

  sendFormDataViaWhatsapp(formData:any){
    const message=`Name: ${formData.name}%0AEmail:${formData.email}`;
    const url=`https://api.whatsapp.com/send?phone=8005657266&text=${message}`;
    window.open(url,'_blank');
  }

  getRatings():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseurl}/ratings`);
  }


}
