import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ratingData } from './model';

@Injectable({
  providedIn: 'root'
})
export class LaundryService {
  private baseurl='http://localhost:3000';
  private apiUrl = 'http://localhost:3000/api/submit-rating';
  private mailUrl='http://localhost:3000/api/send-email';

  constructor(private http:HttpClient) { }

  sendFormDataViaWhatsapp(formData:any){
    const message=`Name: ${formData.name}%0AEmail:${formData.email}`;
    const url=`https://api.whatsapp.com/send?phone=8005657266&text=${message}`;
    window.open(url,'_blank');
  }

  getRatings():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseurl}/ratings`);
  }

  submitRating(data: { userName: string, userRating: number, userFeedback: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  sendEmail(formData:any):Observable<any>{
    
    const data={to:'jhanavneet8586@gmail.com',subject:'order details for laundry service',text:formData.phone};
    console.log(data);
    return this.http.post<any>(this.mailUrl,data);
  }

}
