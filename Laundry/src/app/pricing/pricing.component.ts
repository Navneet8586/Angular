import { Component, OnInit } from '@angular/core';
import { pricing } from '../model';
import { items } from '../model';
import { WomensWear,MensWear,Carpet,typeToSearch } from '../model';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  womenswear:pricing[]=[]
  menswear:pricing[]=[]
  menswearpage:pricing[]=[]
  carpet:pricing[]=[]
  womensSearchTerm:string='';
  mensSearchTerm='';
  carpetSearchTerm=''

  pageSize=15;
  currentPage=1;
  constructor() { }

  ngOnInit(): void {
      this.womenswear=WomensWear;
      this.menswear=MensWear;
      this.getCurrentPageData();
      this.carpet=Carpet;
  }

  getCurrentPageData(){

    const startIdx=(this.currentPage-1)*this.pageSize;
    const endIdx=startIdx+this.pageSize;
    this.menswearpage=this.menswear.slice(startIdx,endIdx);
  }

  prevPage(){
    if(this.currentPage>1){
      this.currentPage--;
    }
    this.getCurrentPageData();
  }
  nextPage(){
    const totalpages=Math.ceil(this.menswear.length/this.pageSize);
    if(this.currentPage<totalpages){
      this.currentPage++;
    }
    this.getCurrentPageData();
  }

  goToPage(page:number){
    this.currentPage=page;
    this.getCurrentPageData();
  }

  search(){
    console.log("Searched Suucces");
  }

  filterData(type:string){
    if(type==='Womens Wear'){
      const filteredData=WomensWear.filter(item=>item.itemName.toLowerCase().includes(this.womensSearchTerm.toLowerCase())||item.price.toLowerCase().includes(this.womensSearchTerm.toLowerCase()))
      this.womenswear=filteredData;
    } else if(type==='Mens Wear'){
      const filteredData=MensWear.filter(item=>item.itemName.toLowerCase().includes(this.mensSearchTerm.toLowerCase())||item.price.toLowerCase().includes(this.mensSearchTerm.toLowerCase()));
      this.menswearpage=filteredData;
    } else{
      const filteredData=Carpet.filter(item=>item.itemName.toLowerCase().includes(this.carpetSearchTerm.toLowerCase())||item.price.toLowerCase().includes(this.carpetSearchTerm.toLowerCase()));
      this.carpet=filteredData;
    } 
  }

}
