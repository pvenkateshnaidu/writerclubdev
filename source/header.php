<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Writers_club</title>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="css/styles.css" />
    <link href="fonts/all.min.css" rel="stylesheet"> <!--load all styles -->
</head>
<div class="container">
    <div  class="spacer">
        <nav  class="navbar navbar-expand-lg navbar-dark info-color bg-white">
            <div  class="overlay"></div>
            <a  class="navbar-brand"  href="#/home">
            <img src="assets/Reg_Bingos_logo.png" />
            </a>
            <button  aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-target="#navbarSupportedContent-4" data-toggle="collapse" type="button">
                <span  class="navbar-toggler-icon"></span>
            </button>
            <div  class="collapse navbar-collapse" id="navbarSupportedContent-4">
                <ul  class="d-flex navbar-nav ml-auto">
                    <li  class="nav-item"><a  class="nav-link"  href="#/home">Home</a></li>
                    <li  class="nav-item"><a  class="nav-link" href="#/storyfeed">Story Feed</a></li>
                    <li  class="login_one nav-item"><a  class="login active" href="#/login">Login</a></li>
                    <li  class="login_one nav-item login-spl"><a  class="login active" href="#/register">Register</a></li>
                </ul>
            </div>
        </nav>
    </div>
</div>
<script type="text/javascript" src="js/jquery.js"></script>
<script src="js/bootstrap.min.js"></script>
<script>
   
    $(window).on('scroll',function(){
        var y = window.scrollY;
        if(y > 75){
          $('.navbar.navbar-expand-lg').addClass('fixed-top');
        }else{
          $('.navbar.navbar-expand-lg').removeClass('fixed-top');
        }
    })
    $('.nav-item').on('click',function(){
        $('.nav-item .nav-link').removeClass('active');
        $(this).find('.nav-link').addClass('active');
    });

    $('.navbar-toggler').on('click',function(){
        $('.overlay').toggleClass('show');
        setTimeout(() => {
            if($('.overlay').hasClass('show')){
                $('body').addClass('overflow-hide');
            }else{
                $('body').removeClass('overflow-hide');
            }
        }, 300);      
    });

    $('.overlay').on('click',function(){
       $(this).removeClass('show');
        $('.collapse').removeClass('show');
        $('body').removeClass('overflow-hide');
    });


   
   
</script>