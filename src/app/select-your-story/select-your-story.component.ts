
import { Component, OnInit,AfterViewInit } from '@angular/core';
import { CategoriesService } from '../_services/categories.service';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { Cat } from '../_models/cat';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import { AlertService, UserService } from '../_services';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

@Component({
  selector: 'app-select-your-story',
  templateUrl: './select-your-story.component.html',
  styleUrls: ['./select-your-story.component.css']
})
export class SelectYourStoryComponent implements OnInit {
  private sub: any;
  public writestory: FormGroup;
  loading = false;
  submitted = false;
  token: any;
  public imagePath;
  public getusers:any=[];
  imgURL: any;
  new:any;
 public cats: Cat[]=[] ; 
  allcat:any;
  public message: string; 
  filedatanew:any;
  testUrl="http://universitiesconnect.com/bongoswriters/api_1_0_0/Api";
  users: any[] = [];
  constructor( private formBuilder: FormBuilder,
    private alertService: AlertService,
    private imageService: CategoriesService,
    private userService: UserService,
    private router:Router,
    private http: HttpClient){}

  ngOnInit() {
    this.getCateg();
  }
  getCateg()
  {
     
    this.imageService.getToken().subscribe(
      data => {
          this.loading = true;
        //  alert(this.token);
       this.token=data;
       this.imageService.getAllC(this.token.access_token).pipe(first()).subscribe(cats => {
         let all:any=cats;
        this.allcat = cats;
        this.cats=all.data;
        console.log(this.cats);
  
    });
      
        //  this.alertService.success('Registration successful', true);
        //  this.router.navigate(['/home']);
      },
    );
    
  }

}
