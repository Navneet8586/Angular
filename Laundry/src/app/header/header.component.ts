import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() contactUsClicked:EventEmitter<void>=new EventEmitter<void>();
 

  constructor( private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

  }
  scrollToContactUs(){
    this.router.navigate(['./']);
    this.contactUsClicked.emit();
  }
  

}
