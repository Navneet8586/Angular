import { Component, OnInit ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogMessages,dialog } from '../model';

@Component({
  selector: 'app-thank-you-dialog',
  templateUrl: './thank-you-dialog.component.html',
  styleUrls: ['./thank-you-dialog.component.css']
})
export class ThankYouDialogComponent implements OnInit {
  

  constructor(
     @Inject(MAT_DIALOG_DATA) public data:{title:string,message:string}
     ) { }

  ngOnInit(): void {

    
  }

}
