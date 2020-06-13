
<body class="bg-none">
    <?php include 'header.php' ?>
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <div class="container">
        <div class=" justify-content-around mb-3  row direction-column">
            <div class="p-2 bd-highlight col-sm-6 col-12"><img src="assets/kids-registration.svg" class="img-fluid"
                    alt="Italian Trulli"></div>
            <div class="col-lg-5  bd-highlight">
                
                <form [formGroup]="registerForm" onsubmit="onSubmit()">
                    <div class="d-flex justify-content-center mb-3 logo">
                        <img class="img-fluid" src="assets/Reg_Bingos_logo.png" alt="Italian Trulli">
                    </div>
                    <div class="d-flex flex-column">
                        <h4 class="text-center">Register</h4>
                        <div class="mt-4 register">

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputName">Name*</label>
                                <input type="text" formControlName="name" class="form-control"
                                    placeholder="Enter First Name *"
                                    />
                                    
                                    <div class="invalid-feedback">First Name is required</div>
                                   
                            </div>
                            <div class="form-group col-md-6">
                                <label for="gender">Gender*</label>
                                <select formControlName="gender"   class="form-control" >
                                    <option value="">Select Gender</option>                                      
                                      <option value="m" >Male</option>
                                      <option value="f" >Female</option>
                                </select>
                                <div class="invalid-feedback">Gender is required</div>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputdate">Date of Birth</label>
                                
                                <input type="text" id="dob" formControlName="dob" class="form-control"
                                    placeholder="Date of Birth *"/>
                                <div class="invalid-feedback">Date of Birth is required</div>
                                <span class="fa fa-fw fa-calendar-alt field-icon toggle-password"></span>
                            </div>

                            <div class="form-group col-md-6">
                                <label for="inputState">Location</label>
                                <input class="form-control" formControlName="country"  placeholder="Enter Location"/>
                                <div class="invalid-feedback">Address is required</div>
                            </div>

                        </div>

                        <div class="form-group">
                            <label for="inputEmail4">Email Address</label>
                            <input type="email" id="inputEmail4" formControlName="email" class="form-control"                placeholder="Enter Email Address *"/>
                            <div class="invalid-feedback">Email must be a valid email address</div>
                        </div>

                        <div class="form-group">
                            <label for="inputEmail4">Mobile Number</label>
                            <!-- <input  placeholder="Enter phone number" 
                                formControlName="mobile_number"
                             [maxlength]="20" [defaultCountry]="'us'" 
                             [required]="true"  name="phone_number"
                              [allowedCountries]="['in', 'ca', 'us']">
                            </input> -->
                            <input id="phone" name="phone" type="tel" placeholder="Enter Mobile Number*" class="form-control">
                            <div class="invalid-feedback">Phone number is required and should be valid</div>
                            

                        </div>
                        

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Password</label>

                                <input type="password" formControlName="password" class="form-control"
                                    placeholder="Enter Password" class="invalid-feedback" />
                                    <div class="invalid-feedback">Password is required</div>
                                    <div class="invalid-feedback">Password must be at least 6 characters
                                    </div>
                                
                                <span class="fa fa-fw fa-eye field-icon toggle-password"></span>

                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputConfirmPassword">Confirm Password</label>

                                <input type="password" formControlName="confirmPassword" class="form-control"/>
                                <div  class="invalid-feedback">
                                    <div class="invalid-feedback">Confirm Password is required</div>
                                    <div class="invalid-feedback">Passwords must match</div>
                                    </div>
                                <span class="fa fa-fw fa-eye field-icon toggle-password"></span>
                            </div>
                        </div>

                    </div>

                    <div class="d-flex justify-content-center bd-highlight mb-2">
                        <button  class="btn btn-custom">Register</button>
                        <img class="loading" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
              
                    </div>
                    <p class="text-center">Already a member ? <span class="login"><a href="#!login">Login here.</a></span></p>
                </div>
            </form>

            </div>

        </div>
    </div>

    <?php include 'footer.php' ?>
    <script src="js/jquery.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script>
  $( function() {
    $( "#dob" ).datepicker();
  } );
  </script>
</body>