import { Component,ViewEncapsulation, OnInit,AfterViewInit } from '@angular/core';
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

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-write-story',
  templateUrl: './write-story.component.html',
  styleUrls: ['./write-story.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class WriteStoryComponent implements OnInit {
  public Editor = DecoupledEditor;


private sub: any;
  public writestory: FormGroup;
  loading = false;
  submitted = false;
  token: any;
  public imagePath;
  public getusers:any=[];
  imgURL: any;
  new:any;
  htmlToAdd:any;
  cats: Cat[]=[] ; 
  allcat:any;
  public message: string; 
  filedatanew:any;
  testUrl="http://universitiesconnect.com/bongoswriters/api_1_0_0/Api";
  users: any[] = [];
  selectedFile: ImageSnippet;

  constructor( private formBuilder: FormBuilder,
    private alertService: AlertService,
    private imageService: CategoriesService,
    private userService: UserService,
    private router:Router,
    private http: HttpClient){}
  fileData: File = null;
  public formDataPreview?: string;
   
  public onReady( editor ) {
    editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
    );
} 
public editorConfig = {
 
  toolbar: {
    items: [
      'heading',
      '|',
      'bold',
      'italic',
      'link',
      'alignment:left', 'alignment:right', 'alignment:center', 'alignment:justify',
      'bulletedList',
      'numberedList',      
      'blockQuote',
      'undo',
      'redo'
    ]
  },
 
  language: 'en'
};
  ngOnInit() {
    this.loading = false;
    this.writestory = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
     image: ['', [Validators.required]],
 
   //cat_id:this.formBuilder.array([])
    //  share: ['', [Validators.required]],
    });
    this.getCateg();  
  }
  public ngAfterViewInit() {
		this.writestory!.valueChanges
			.subscribe( values => {
				this.formDataPreview = JSON.stringify( values );
			} );
	}
	public reset() {
		this.writestory!.reset();
	}

	public get description() {
		return this.writestory!.controls.description;
	}

  get f() { return this.writestory.controls; }
  onChange(cat:string, isChecked: boolean) {
    const emailFormArray = <FormArray>this.writestory.controls.cat_id;
  
    if(isChecked) {
      emailFormArray.push(new FormControl(cat));
      this.htmlToAdd ='';
    } else {
      let index = emailFormArray.controls.findIndex(x => x.value == cat)
      emailFormArray.removeAt(index);
    }
    console.log(this.writestory.controls.cat_id.value.length)
  }
  onSubmit(event) {
    var target = event.target;
    var idAttr = target.attributes.id;
   // var value = idAttr.nodeValue;
    console.log(target.value)
    this.submitted = true;
   
    // stop here if form is invalid
    if (this.writestory.invalid) {
    
     /* if(!this.writestory.get("name").value)
      {
        alert(this.writestory.get("cat_id").value)
      }else if(!this.writestory.get("description").value){
        alert(":"+this.writestory.get("cat_id").value)
      }else if(!this.writestory.get("image").value)
      {
        alert("image"+this.writestory.get("cat_id").value)
      }else */
      /* if(this.writestory.controls.cat_id.value.length==0)
      {
        this.htmlToAdd = '<span class="errorCat">Please select category</span>';       
        
      } */
    
      
      return;
    }
    this.loading = true;
    this.htmlToAdd ='';
    let  currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const formData = new FormData();
    formData.append('name', this.writestory.get("name").value);
    formData.append('description', this.writestory.get("description").value);
   // formData.append('share', this.writestory.get("share").value);
   formData.append('share', target.value);
    formData.append('file', this.filedatanew);
    formData.append('user_id', currentUser.id );
    //this.writestory.get("cat_id").value
    formData.append('cat_id', '13' );
    console.log(formData);
    this.imageService.createStory(formData).subscribe(
      (res) => {
        this.loading = false;
        this.alertService.success('Your Story Added successful', true);
       this.router.navigate(['/mystories']);
      
      },
      (err) => {
        this.loading = false;
      })

  }
  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
}
processFile(imageInput: any) {

  this.preview(imageInput.files);
  const file: File = imageInput.files[0];
  let reader = new FileReader();
  reader.addEventListener('load', (event: any) => {
    this.selectedFile = new ImageSnippet(event.target.result, file);
   let token="6f25ef8193e3f77676d1f73b8eef9c3c5e7b89e0";
this.filedatanew=this.selectedFile.file;
console.log(this.filedatanew);
    /*this.imageService.uploadImage(this.selectedFile.file,token).subscribe(
      (res) => {
      
      },
      (err) => {
      
      }) */
  });
  reader.readAsDataURL(file);
  
} 
preview(files) {
  if (files.length === 0)
    return;

  var mimeType = files[0].type; 
  if (mimeType.match(/image\/*/) == null) {
    this.message = "Only images are supported.";
    return;
  }

  var reader = new FileReader();
  this.imagePath = files;
  reader.readAsDataURL(files[0]); 
  reader.onload = (_event) => { 
    this.imgURL = reader.result; 
  }
}
getCateg()
{
   
  this.imageService.getToken().subscribe(
    data => {
     //   this.loading = true;
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
