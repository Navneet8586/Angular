import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable,forkJoin } from 'rxjs';
import { ratingData } from './model';
import { DatePipe } from '@angular/common';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LaundryService {
  private baseurl=environment.apiEndPoint;

  constructor(private http:HttpClient,private datepipe:DatePipe) { }

  getRatings():Observable<any[]>{
    const lastTenRating= this.http.get<any[]>(`${this.baseurl}/ratings`);
    const overAllRating= this.http.get<any[]>(`${this.baseurl}/overall-ratings`);
    
    return forkJoin([lastTenRating,overAllRating]);

  }

  submitRating(data: { userName: string, userRating: number, userFeedback: string }): Observable<any> {
    return this.http.post<any>(`${this.baseurl}/submit-rating`, data);
  }

  sendEmail(formData: any): Observable<any> {
    const date=this.datepipe.transform(formData.selectedDate,'yyyy-MM-dd');

    const data = {
      to: 'grenocleaners@gmail.com', subject: 'order details for laundry service',

      text: `    
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2 style="color: #333;">Congratulations, You Have Got a New Order</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <tr>
          <th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;">Name</th>
          <th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;">Mobile No</th>
          <th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;">Services</th>
          <th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;">Date</th>
          <th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;">Time Slots</th>
          <th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;">Address</th>
          <th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;">Google Map Link</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">${formData.name}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${formData.phone}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${formData.selectedService}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${date}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${formData.selectedTimeSlot}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${formData.address}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${formData.locationLink}</td>
          
        </tr>
      </table>
      <h3 style="color: #333;">Thanks & Regards</h3>
      <p style="color: #555;">Greno Team🙂</p>
    </div>
         `
    };
    return this.http.post<any>(`${this.baseurl}/send-email`, data);
  }

  contactUsMail(formData: any): Observable<any> {

    const data = {
      to: 'grenocleaners@gmail.com', subject: 'Feedback for offered service',

      text: `    
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2 style="color: #333;">New Feedback...</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <tr>
          <th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;">Name</th>
          <th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;">Mobile No</th>
          <th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;">Email</th>
          <th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;">Services</th>
          <th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4;">Message</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">${formData.name}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${formData.phone}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${formData.email}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${formData.selectedService}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${formData.message}</td>
        </tr>
      </table>
      <h3 style="color: #333;">Thanks & Regards</h3>
      <p style="color: #555;">Greno Team🙂</p>
    </div>
         `
    };
    return this.http.post<any>(`${this.baseurl}/contact-us`, data);
  }

}
