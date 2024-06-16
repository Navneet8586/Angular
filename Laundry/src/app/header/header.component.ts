import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2 } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { contact } from '../model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isopen:boolean=false;
  contact=contact;

  @Output() contactUsClicked:EventEmitter<void>=new EventEmitter<void>();
  @Output() ourServicesClicked:EventEmitter<void>=new EventEmitter<void>();
 

  constructor( private router:Router,private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {

  }

  private collapseNavbar() {
    const navbar = this.el.nativeElement.querySelector('.navbar-collapse');
    if (navbar && navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  }

  private setActiveLink(target: EventTarget | null) {
    // Remove 'active' class from all nav links
    const links = this.el.nativeElement.querySelectorAll('.nav-link');
    links.forEach((link: HTMLElement) => {
      this.renderer.removeClass(link, 'active');
    });

    // Add 'active' class to the clicked link
    this.renderer.addClass(target as HTMLElement, 'active');
  }
  
  scrollToOurServices(event: Event) {
    this.collapseNavbar()
    this.ourServicesClicked.emit();
    this.router.navigate(['./']);
    event.preventDefault();
    this.setActiveLink(event.target);
  }

  scrollToContactUs(event: Event) {
    this.router.navigate(['./']);
    this.collapseNavbar();
    this.contactUsClicked.emit();
    event.preventDefault();
    this.setActiveLink(event.target);
  }

  moveToTop(event:Event){
    this.collapseNavbar();
    window.scroll({top:0,left:0,behavior:'smooth'});
    this.setActiveLink(event.target);
  }
  pricing(){
    window.scroll({top:0,left:0,behavior:'smooth'});
  }
 
  openNav(){
    this.isopen=!this.isopen;
    console.log(this.isopen);
  }
  closeNav(){
    this.isopen=false;
    console.log(this.isopen);

  }

  callUs(){
    window.location.href='tel:8860562188';
  }
}
