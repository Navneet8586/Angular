import { Component, ElementRef, OnInit ,HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  constructor( private elementRef:ElementRef) { }

  ngOnInit(): void {
  }

  scrollToOurServices(){
    console.log("our services");

    const contactUs=this.elementRef.nativeElement.querySelector('#our-services');
    contactUs.scrollIntoView({behaviour:'smooth'})
  }

  scrollToContactUs(){
    console.log("called");

    const contactUs=this.elementRef.nativeElement.querySelector('#contact-us');
    contactUs.scrollIntoView({behaviour:'smooth'})
  }

  moveToTop(){
    window.scroll({top:0,left:0,behavior:'smooth'});
  }

  showContactBtn(){
    const sideBtn=document.getElementById('sideBtn');
    sideBtn?.classList.add('hide');
    const contactBtn=document.getElementById('contactBtn');
    contactBtn?.classList.add('show');
  }

  hideContactBtn(){
    const contactBtn=document.getElementById('contactBtn');
    contactBtn?.classList.remove('show');
    const sideBtn=document.getElementById('sideBtn');
    sideBtn?.classList.remove('hide');    
  }

  @HostListener('window:scroll',[])
  onWindowScroll(){
    const scrollToTop=document.getElementById('moveToTop');
    if(scrollToTop){
      if(window.scrollY>250){
        scrollToTop.classList.add('show');
      } else{
        scrollToTop.classList.remove('show');
      }
    }
  }

}

