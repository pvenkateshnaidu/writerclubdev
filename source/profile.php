<body>
<?php include 'header.php' ?>
<div class="my-custom-class">
    <div class="container share_story_container">
        <form  onsubmit="onSubmit()" >
            <div class="row bg-white">
                <div class="d-flex flex-column mb-5 mt-5 col-lg-12">
                    <div class="share_story">
                        <b class="story_feed"><i class="fas fa-arrow-left"></i>&nbsp;My Profile</b>
                    </div>
                </div>
                <div class="col-lg-8 fdm">
                    <div class="mb-4 col-lg-12">       
                        <img src="http://universitiesconnect.com/bongoswriters/images/nature.jpg" class="avatar img-circle  mb-2 profile-pic" height="200">            
                        
                        <label class="image-upload-container btn btn-bwm">                 
                            <input type="file"  accept="image/*" (change)="processFile(imageInput)" class="text-center center-block file-upload">
                            <span class="attach"><i class="fas fa-paperclip mr-2"></i>Change Profile pic</span> 
                        </label>  
                    </div>

                    <div class="d-flex flex-column mb-5">
                        
                        <div class="myprofile">
                        
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                    <label for="inputName">Name*</label>
                                    
                                    <input type="text" formControlName="name" class="form-control" name="name" id="first_name"
                                        title="enter your first name if any.">
                                    </div>
                                    <div class="form-group col-md-6">
                                            <label for="inputLastnickname">Mobile Number*</label>
                                            <input type="text" formControlName="mobile_number"  class="form-control" name="mobile" id="mobile"
                                            title="enter your mobile number if any.">
                                        </div>
                                </div>
                
                            
                
                                <div class="form-group">
                                    <label for="inputEmail4">Email Address</label>
                                <input type="email" formControlName="email"   class="form-control" name="email" id="email"
                                                title="enter your email.">
                                </div>
                
                                <div class="d-flex justify-content-between mt-5">
                                        <div class="mr-2 cancel">Cancel</div>
                                        <div class="update"><button  class="btn btn-warning gradient-button">Update</button></div>
                                </div>
                            
                        </div>
                
                        
                    </div>
                </div>
            </div>
        </form>
    </div>
</div> 
<?php include 'footer.php' ?>
</body>