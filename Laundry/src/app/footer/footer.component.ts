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

}
