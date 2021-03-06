import { Observable } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service';
import {Component, OnInit, HostListener,Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
 mobile = false;
 user = true;
 scrWidth:any;

 
 logoutFunction(){
  //this.getScreenSize(event);
  let overlay = document.querySelector('.overlay');
    let show = document.querySelector('.navbar-collapse');
    let body = this.document.querySelector('body');

    show.classList.remove('show');
    overlay.classList.remove('show');
    body.style.overflow ='auto';
 }



 @HostListener('window:resize',['$event'])
 getScreenSize(event){
  
this.scrWidth = window.innerWidth;
  if(this.scrWidth < 992){
    this.mobile = true;
    this.user = false;

  }else{
    this.mobile = false;
    this.user = true;
    this.logoutFunction()
  }
 }
 @HostListener('window:load', ['$event'])
 getLoad(event){
  this.getScreenSize(event);


 }

  @HostListener('window:scroll', ['$event'])
    scrollHandler(event) {
      let number = window.scrollY;
      let nav = document.querySelector('.navbar ');

      if(number > 75){
       nav.classList.add('fixed-top');

        //console.log("Scroll Event");
      }else{
        nav.classList.remove('fixed-top')
      }
    
    }
    
profilepath:string;
  isLoggedIn$: Observable<boolean>;
  logout =false;
  window:any;
cuser:any;
  constructor(public authService: AuthenticationService, @Inject(DOCUMENT) private document:Document) { 
 

  }


  
  hideBodyScroll(event){
    
    let show = document.querySelector('.navbar-collapse');
    let overlay = document.querySelector('.overlay');
   
      if(show.classList.contains("show")){
        this.document.body.style.overflow ='auto'; 
        overlay.classList.remove('show');
      }else{
        this.document.body.style.overflow ='hidden'; 
        overlay.classList.add('show');
      }

  }

  hideoverlay(){
    let overlay = document.querySelector('.overlay');
    let show = document.querySelector('.navbar-collapse');
    let body = this.document.querySelector('body');

    show.classList.remove('show');
    overlay.classList.remove('show');
    // show.classList.add('collapsing');
    body.style.overflow ='auto';
  
  }



  ngOnInit() {


    
  //  console.log(this.logout)
    this.isLoggedIn$ = this.authService.isLoggedIn;
    console.log(this.isLoggedIn$.source);
    this.cuser= JSON.parse(localStorage.getItem('currentUser'));
    if(this.cuser)
    {
     
this.profilepath=this.cuser.path;
console.log(this.cuser);
    }else if(!this.profilepath)
    {
      this.profilepath="http://universitiesconnect.com/bongoswriters/images/placeholder.png";
    }
  }

  onLogout() {
    this.logout=true;
    this.authService.logout();   
  }


}