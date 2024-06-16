import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { timeSlotFilter } from '../model';
import { LaundryService } from '../laundry.service';

@Component({
  selector: 'app-pickup-drop',
  templateUrl: './pickup-drop.component.html',
  styleUrls: ['./pickup-drop.component.css']
})
export class PickupDropComponent implements OnInit {
  pickupDrop!: FormGroup;
  timeslotflag=false;

  services=['Laundry','Dry Cleaning','Steam Ironing','Sofa Cleaning','Carpet Cleaning','Shoe Spa','Polishing'];
  copyslot=['10:00-11:00','11:00-12:00','12:00-01:00','01:00-02:00','02:00-03:00','03:00-04:00','04:00-05:00','05:00-06:00','06:00-07:00','07:00-08:00'];
  timeSlots=['10:00-11:00','11:00-12:00','12:00-01:00','01:00-02:00','02:00-03:00','03:00-04:00','04:00-05:00','05:00-06:00','06:00-07:00','07:00-08:00'];
  timeSlotFilter:timeSlotFilter[]=[];

  constructor(private formBuilder:FormBuilder,private laundryService:LaundryService) { 
    
  }

  ngOnInit(): void {
    this.pickupDrop=this.formBuilder.group({
      name:['',Validators.required],
      phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      selectedService:['',Validators.required],
      selectedDate:['',Validators.required],
      selectedTimeSlot:['',Validators.required]
    })
  }
  callNow(){
    window.location.href='tel:8005657266';
    
  }

  onDateSelected(event:any){
    let date=new Date();
    const enteredDate=new Date(event.value);
    console.log(event.value.toDateString()===date.toDateString());
    if(event.value.toDateString()===date.toDateString()){
      let p=new Date(date.getTime()+2*60*60*1000);
      let value=10;
      for(let i=0;i<this.timeSlots.length;i++){
        let newElement:timeSlotFilter={idx:i,value:value};
         this.timeSlotFilter.push(newElement);
         value++;
      }
      let idx=this.timeSlotFilter.find(obj=>obj.value===p.getHours());
      if(idx===undefined){
        this.timeSlots.splice(0,this.timeSlots.length);
       } else{
        this.timeSlots.splice(0,idx.idx);
      }
    } else if(enteredDate<date){
      this.timeSlots.splice(0,this.timeSlots.length);
      const timeSlotElement=document.getElementById('timeSlot');
      if(timeSlotElement){
        timeSlotElement.innerText="Please select valid Date";
      }
    } else{
      this.timeSlots=this.copyslot;
    }
    
    
  }

  onSubmit(){
    console.log(this.pickupDrop.value);
    this.laundryService.sendEmail(this.pickupDrop.value).subscribe(
      response => {
        console.log('Data submitted successfully', response);
      },
      error => {
        console.error('Error submitting data', error);
      }
    );
    // this.laundryService.sendEmail(this.pickupDrop.value);
    // this.laundryService.sendFormDataViaWhatsapp(this.pickupDrop.value);
    this.pickupDrop.reset();
  }

}
