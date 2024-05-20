import { Component, OnInit } from '@angular/core';
import { LaundryService } from '../laundry.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  ratings:any[]=[];

  userRating: number = 0;
  maxRating: number = 5;
  stars: number[] = [];


  constructor( private service:LaundryService) { 
    for (let i = 0; i < this.maxRating; i++) {
      this.stars.push(i + 1);
    }
  }

  ngOnInit(): void {
    this.fetchRatings();
  }

  fetchRatings(){
    this.service.getRatings().subscribe((data:any[])=>{
      this.ratings=data;
      console.log(this.ratings[0]);
    },(error)=>{
      console.log(error);
    })
  }

  getStars(rating: number): number[] {
    // Round the rating to the nearest half star
    const roundedRating = Math.round(rating * 2) / 2;
    // Create an array of stars based on the rounded rating
    return Array.from({ length: Math.floor(roundedRating) }, (_, i) => i + 1);
  }

  



}
