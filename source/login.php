
<body class="bg-none">
<?php include 'header.php' ?>
<div class="container">
    <div class="row justify-content-around mb-3 direction-column">
        <div class="col-sm-6 col-12">
            <img alt="Italian Trulli" class="img-fluid" src="assets/kids-registration.svg">
        </div>
        <div class="col-sm-6 col-12 bd-highlight outer-space">
            <form novalidate="" class="ng-untouched ng-pristine ng-invalid">
                <div class="d-flex justify-content-center bd-highlight mb-3 logo">
                    <img alt="Italian Trulli" class="img-fluid" src="assets/Reg_Bingos_logo.png">
                </div>

                <div class="d-flex flex-column">
                    <h4 class="text-center">Welcome Back</h4>
                    <div class="login_google">
                        <a><img src="assets/google_icon.png">&nbsp;&nbsp;Login with Google</a>
                    </div>
                    <div class="mt-4 register">
                        <div class="form-group">
                            <label for="inputUserName">User Name</label>
                            <input class="form-control" formcontrolname="email" placeholder="Enter Email" type="email">
                            <div class="invalid-feedback"><div>Username is required</div></div>
                        </div>
                        <div class="form-group">
                            <label for="inputUserPassword">Password</label>
                            <span class="forgot_password"><a href="#">Forgot Password?</a></span>
                            <input class="form-control" formcontrolname="password" placeholder="Enter Password" type="password">
                            <div class="invalid-feedback"><div>Password is required</div></div>
                            <span class="fa fa-fw fa-eye field-icon toggle-password"></span>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" id="exampleCheck1" type="checkbox">
                            <label class="form-check-label" for="exampleCheck1">Remember me</label>
                        </div>
                    </div>

                    <div class="d-flex justify-content-center bd-highlight mb-2 mt-2">
                        <button class="btn btn-custom">Login</button>
                    </div>
                    <p class="text-center">Not a member? <span class="login">
                        <a class="btn btn-link" ng-reflect-router-link="/register" href="#/register">Register Here.</a></span>
                    </p>
                </div>
            </form>
        </div>
    </div>
</div>
<?php include 'footer.php' ?>
</body>