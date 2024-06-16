import { Component, OnInit } from '@angular/core';
import { LaundryService } from '../laundry.service';
import { ratingData } from '../model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  ratingForm!:FormGroup;
  maxFeedbackLength: number = 200;
  ratings:any[]=[];

  userRating: number = 0;
  maxRating: number = 5;
  stars: number[] = [];
  overAllRating:number=0;
  totalNumberOfRating:number=0


  constructor( private service:LaundryService,private fb:FormBuilder) { 
    this.ratingForm=this.fb.group({
      userName:['',Validators.required],
      userRating:[0,Validators.required],
      userFeedback:['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.fetchRatings();
  }

  fetchRatings(){
    this.service.getRatings().subscribe({
      next:([lastTenRating,overAllRating])=>{
        this.ratings=lastTenRating;
        this.getOverAllRating(overAllRating)
      },
      error:(error)=>{
        console.error("Error in fetching data");
      }
    })
  }

  getStars(rating: number): number[] {
    // Round the rating to the nearest half star
    const roundedRating = Math.round(rating * 2) / 2;
    // Create an array of stars based on the rounded rating
    return Array.from({ length: Math.floor(roundedRating) }, (_, i) => i + 1);
  }

  setRating(rating: number): void {
    this.ratingForm.controls['userRating'].setValue(rating);
  }

  submitRating(): void {
    if (this.ratingForm.valid) {
      console.log('Form submitted:', this.ratingForm.value);
      this.service.submitRating(this.ratingForm.value).subscribe(
        response => {
          console.log('Data submitted successfully', response);
          this.fetchRatings();
        },
        error => {
          console.error('Error submitting data', error);
        }
      );
      this.ratingForm.reset();
      // Handle form submission, e.g., send to server
    } else {
      console.log('Form is invalid');
    }
  }

  getOverAllRating(allRatings:any){
    let length=allRatings?.length;
    this.totalNumberOfRating=length;
    let sum=0;
    allRatings.forEach((element: any) => {
      console.log(element);
      sum+=Number(element.rating);
    });
    this.overAllRating=sum/length;
    console.log(this.overAllRating)
  }

  handleFeedbackInput(event: Event): void {
    const input = event.target as HTMLTextAreaElement;
    if (input!==null && input.value.length > this.maxFeedbackLength) {
      input.value = input.value.slice(0, this.maxFeedbackLength);
      this.ratingForm.controls['userFeedback'].setValue(input.value);
    }
  }
}
