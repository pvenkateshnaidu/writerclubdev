<body class="bg-none">
<?php include 'header.php' ?>
    <div class="container">
        <form [formGroup]="writestory">
            <!-- test-->
            <div class="my-custom-class">
                <div class="container">
                    <div class="row bg-white">
                        
                            <div class="col-lg-4 mt-3">
                                <ul class="nav nav-tabs story_editor" role="tablist">
                                    <ul class="d-flex justify-content-between story_container w-100">
                                        <li>Story Editor</li>
                                        <li><i class="fas fa-eye"></i>&nbsp;Preview</li>
                                    </ul>
                                
                                    <li class="nav-item category">
                                        <a class="nav-link active show" href="#buzz" role="tab" data-toggle="tab">Categories</a>
                                    </li>
                                
                                </ul>

                                <!-- Tab panes -->
                                <div class="tab-content p-3">
                            
                                    <div role="tabpanel" class="tab-pane active" id="buzz">
                                        <div [innerHtml]="htmlToAdd" ></div>  
                                        <ul class="images_container">
                                            
                                            <li *ngFor="let obj of cats" ><input  (change)="onChange(obj.cat_id, $event.target.checked)" type="checkbox"   />
                                                {{obj.cat_name}} <label for="cb1"><img src="{{obj.image_path}}" class="img-fluid" /></label>
                                            </li>
                                        
                                            
                                        </ul>
                                    </div>
                                
                                </div>

                            </div>
                            <div class="col-lg-8 mt-3">

                                <div class="d-flex rightside_con">
                                    <div class="form-group">
                                        <img [src]="imgURL" class="avatar img-circle img-thumbnail" height="200" *ngIf="imgURL">
                                        <h6>Choose Covered Image...</h6>
                                        <div class="image-upload-container">
                                            <input #imageInput  [ngClass]="{ 'is-invalid': submitted && f.image.errors }" formControlName="image"  type="file" accept="image/*" (change)="processFile(imageInput)"
                                                class="form-control text-center center-block file-upload">
                                            <div *ngIf="submitted && f.image.errors" class="invalid-feedback">
                                                <div *ngIf="f.image.errors.required">Image  is required</div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="form-group">
                                        <input type="text" formControlName="name" class="form-control"
                                            placeholder="Story Name *"
                                            [ngClass]="{ 'is-invalid': submitted && f.name.errors }" />
                                        <div *ngIf="submitted && f.name.errors" class="invalid-feedback">
                                            <div *ngIf="f.name.errors.required">First Name is required</div>
                                        </div>
                                    </div>
                                
                                    <div class="form-group">
                                        <ckeditor [editor]="Editor" [config]="editorConfig" [ngClass]="{ 'is-invalid': submitted && f.description.errors }" class="document-editor" formControlName="description"
                                        (ready)="onReady($event)"></ckeditor>
                                        <div *ngIf="submitted && f.description.errors" class="invalid-feedback">
                                            <div *ngIf="f.description.errors.required">Description is required</div>
                                        </div>
                                    </div>

                                    <div class="form-group w-100 d-flex justify-content-end">
                                            <button type="submit"  value="private"  (click)="onSubmit($event)"  class="btn draft">Save as Draft</button> 
                                            <button type="submit"  value="public"  (click)="onSubmit($event)"  class="btn publish">Publish</button>
                                            <img *ngIf="loading" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                    </div>

                                </div>

                                

                            </div>
                        
                    </div>
                </div>
            </div>

        </form>
    </div>
    <?php include 'footer.php' ?>
</body>    
