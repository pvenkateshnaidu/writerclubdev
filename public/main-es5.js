(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/_directives/alert.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/_directives/alert.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n        <alert></alert>\n</div>\n                <router-outlet></router-outlet>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/blog/blog.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/blog/blog.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n     \n<div class=\"row\">\n        <div class=\"leftcolumn\">\n          <div class=\"card\">\n            <h2>TITLE HEADING</h2>\n            <h5>Title description, Dec 7, 2017</h5>\n            <div class=\"fakeimg\" style=\"height:200px;\">Image</div>\n            <p>Some text..</p>\n            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>\n          </div>\n          <div class=\"card\">\n            <h2>TITLE HEADING</h2>\n            <h5>Title description, Sep 2, 2017</h5>\n            <div class=\"fakeimg\" style=\"height:200px;\">Image</div>\n            <p>Some text..</p>\n            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>\n          </div>\n        </div>\n        <div class=\"rightcolumn\">\n          <div class=\"card\">\n            <h2>About Me</h2>\n            <div class=\"fakeimg\" style=\"height:100px;\">Image</div>\n            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>\n          </div>\n          <div class=\"card\">\n            <h3>Popular Post</h3>\n            <div class=\"fakeimg\">Image</div><br>\n            <div class=\"fakeimg\">Image</div><br>\n            <div class=\"fakeimg\">Image</div>\n          </div>\n          <div class=\"card\">\n            <h3>Follow Me</h3>\n            <p>Some text..</p>\n          </div>\n        </div>\n      </div>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact/contact.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n        <div class=\"row \">\n          <div class=\"col-md-8 mt-5 bg-light rounded\">        \n            <h5 class=\"text-center text-success\"></h5>          \n              <div class=\"form-group input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\n                </div>\n                <input type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"Enter your name\" required>\n              </div>\n              <div class=\"form-group input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fas fa-envelope\"></i></span>\n                </div>\n                <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Enter your email\" required>\n              </div>\n              <div class=\"form-group input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fas fa-at\"></i></span>\n                </div>\n                <input type=\"text\" name=\"subject\" class=\"form-control\" placeholder=\"Enter subject\" required>\n              </div>\n              <div class=\"form-group input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fas fa-comment-alt\"></i></span>\n                </div>\n                <textarea name=\"msg\" id=\"msg\" class=\"form-control\" placeholder=\"Write your message\" cols=\"30\" rows=\"4\" required></textarea>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"submit\" name=\"submit\" id=\"submit\" class=\"btn btn-primary btn-block\" value=\"Send\">\n              </div>\n           \n          </div>\n        </div>\n      </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<footer class=\"page-footer font-small mdb-color pt-4\">\n\n  <!-- Footer Links -->\n  <div class=\"container text-center text-md-left\">\n\n    <!-- Footer links -->\n    <div class=\"row text-center text-md-left mt-3 pb-3 footer-m\">\n      \n      <!-- Grid column -->\n      <div class=\"col-md-2 col-lg-1 mx-auto mt-2\">\n        <a class=\"navbar-brand\" href=\"#\"><img src=\"/assets/Reg_Bingos_logo.png\" style=\"width:80px;\"/></a>\n    </div>\n    <!-- Grid column -->\n\n\n     <!-- Grid column -->\n     <div class=\"col-md-2 col-lg-2 mx-auto mt-3\">\n      <h6 class=\"text-uppercase mb-4 font-weight-normal color\">Company</h6>\n      <ul>\n        <li><a href=\"#!\">About Us</a></li>\n        <li><a href=\"#!\">News</a></li>\n        <li><a href=\"#!\">Faq</a></li>\n        <li> <a href=\"#!\">Contact Us</a></li>\n      </ul>\n    </div>\n    <!-- Grid column -->\n\n    \n\n    <!-- Grid column -->\n    <div class=\"col-md-2 col-lg-2 mx-auto mt-3\">\n      <h6 class=\"text-uppercase mb-4 font-weight-normal color\">Policy</h6>\n      <ul>\n        <li><a href=\"#!\">Terms and Conditions</a></li>\n        <li><a href=\"#!\">Copyright Policy</a></li>\n      </ul>\n    </div>\n    <!-- Grid column -->\n\n    \n\n    <!-- Grid column -->\n    <div class=\"col-md-3 col-lg-2 mx-auto mt-3\">\n      <h6 class=\"text-uppercase mb-4 font-weight-normal color\">Services</h6>\n      <ul>\n        <li><a href=\"#!\">Web Hosting</a></li>\n        <li><a href=\"#!\">Cloud Hosting</a></li>\n        <li><a href=\"#!\">Dedicated Hosting</a></li>\n        <li> <a href=\"#!\">Domain Name</a></li>\n      </ul>\n    </div>\n\n      <!-- Grid column -->\n      <div class=\"col-md-4 col-lg-3 mx-auto mt-3\">\n        <h6 class=\"text-uppercase mb-4 font-weight-normal color\">Contact</h6>\n        <ul>\n          <li><a href=\"#!\"> <i class=\"fas fa-phone mr-3\"></i> 00 285 900 38502</a></li>\n          <li><a href=\"#!\"><i class=\"fas fa-envelope mr-3\"></i> info@gmail.com</a></li>\n          <li><a href=\"#!\"><i class=\"fas fa-map-marker mr-3\"></i> MI, Road 398, Center Office 38, flooor 3</a></li>\n        </ul>\n           <!-- Social buttons -->\n        <div class=\"text-center text-md-left \">\n          <ul class=\"list-unstyled list-inline\">\n            <li class=\"list-inline-item\">\n              <a  href=\"#!\" class=\"btn-floating btn-sm rgba-white-slight mx-1 \">\n                <i class=\"fab fa-facebook-f social\"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a  href=\"#!\" class=\"btn-floating btn-sm rgba-white-slight mx-1\">\n                <i class=\"fab fa-twitter social\"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a  href=\"#!\" class=\"btn-floating btn-sm rgba-white-slight mx-1\">\n                  <i class=\"fab fa-linkedin-in social\"></i>\n               \n              </a>\n            </li>\n            <li class=\"list-inline-item\">\n              <a href=\"#!\" class=\"btn-floating btn-sm rgba-white-slight mx-1\">\n                  <i class=\"fab fa-instagram social\"></i>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <!-- Grid column -->\n\n    </div>\n    <!-- Footer links -->\n\n   \n\n  </div>\n  <!-- Footer Links -->\n\n</footer>\n<!-- Footer -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/groups/groups.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/groups/groups.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n<div class=\"row\">\n    <div class=\"col-md-6\">\n   \n        <form [formGroup]=\"sendEmailForm\" (ngSubmit)=\"send(sendEmailForm.value)\">\n<h2>Invite New Members</h2>\n<label>Email Address</label>\n            <input class=\"form-control\" matInput formControlName=\"toAddress\">  \n\n          <button [disabled]=\"!sendEmailForm.valid\"> Invite Now</button>\n        </form>\n        &nbsp; &nbsp;\n        <h3>Your Members</h3>\n        <div *ngIf=\"loading else loaded\">\n                loading ...\n              </div>\n        <h5 #loaded *ngFor=\"let obj of listemails\" >{{obj.email_id}} <i class=\"fa fa-times\" (click)=\"removeMember(obj.id)\" aria-hidden=\"true\"></i></h5>\n    </div>\n    <div class=\"col-md-6\">\n   \n            <form [formGroup]=\"createGroup\" (ngSubmit)=\"create()\">\n    <h2>Create Group</h2>\n    <label>Group Name</label>\n                <input class=\"form-control\" matInput formControlName=\"name\">  \n               <label>Select Group Members</label>\n                <select formControlName=\"members\" multiple>\n                    <option value=\"{{obj.id}}\" *ngFor=\"let obj of listemails\">{{obj.email_id}}</option>\n                </select>\n                <h2></h2>\n              <button > Create</button>\n            </form>\n            &nbsp; &nbsp;\n            <h3>Your Groups</h3>\n            <div *ngIf=\"loading else loaded\">\n              loading ...\n            </div>\n            <h5  #loaded *ngFor=\"let obj of allgroups\" >{{obj.group_name}} <i class=\"fa fa-times\" (click)=\"removeGroup(obj.group_id)\" aria-hidden=\"true\"></i>\n              <i class=\"fa fa-share-alt\" (click)=\"sendmailGroup(obj.group_id)\" aria-hidden=\"true\"></i>\n            \n            </h5>\n            \n          </div>\n</div>\n</div> -->\n<!-- groups-->\n<div class=\"my-custom-class\">\n\t<div class=\"container-fluid share_story_container\">\n        <div class=\"row\">\n\t    <div class=\"d-flex flex-column mb-5 mt-5 col-lg-12 p-0\">\n            <div class=\"share_story\">\n                <b class=\"story_feed\"><i class=\"fas fa-arrow-left\"></i>&nbsp;My Groups</b>\n            </div>\n            <p class=\"mt-3 pl-4\">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>\n        </div> \n        \n        <div class=\"d-flex flex-row justify-content-between mt-4 col-lg-12\">\n\n            <div class=\"shadow p-3 mb-5 bg-white rounded divselect position-relative\"  (click)=\"openModal()\">\n              <div class=\"position-absolute img_align\">\n               <div class=\"circlebg rounded-circle\">\n                    <div class=\"circle\">+</div>\n               </div>\n               </div>\n               <div class=\"position-absolute newgroup\" >Creat New Group</div>\n            </div>\n<!-- loop start-->\n            <div *ngFor=\"let obj of allgroups\" class=\"shadow p-3 mb-5 bg-white rounded divselect position-relative\">\n                <div class=\"position-absolute img_align\">\n                    <div class=\"circlebg rounded-circle\">\n                        <img src=\"./assets/friends.jpg\" class=\"img1 rounded-circle\">\n                        \n                    </div>\n                </div>\n                <div class=\"position-absolute friends\">\n                    <div class=\"d-flex justify-content-between align-items-center\">\n                        <div>\n                            <i class=\"fa fa-times\" (click)=\"removeGroup(obj.group_id)\" aria-hidden=\"true\"></i>\n                            <div class=\"newgroup imglineheight\">{{obj.group_name}} ({{obj.countt}})</div>\n                            <div class=\"d-flex flex-row justify-content-center\">\n                                \n                                <div *ngFor=\"let i of Arr(+obj.countt).fill(1)\"> \n                                  <img src=\"assets/icon.png\" class=\"circleimg rounded-circle\" title=\"\">\n                                </div>\n                              \n                            </div>\n                        </div> \n                        <div>\n                             <div class=\"custom-control custom-checkbox\">\n                                <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck\" name=\"example1\">\n                                <label class=\"custom-control-label\" for=\"customCheck\">&nbsp;</label>\n                             </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n           \n          \n            </div>\n            <div class=\"d-flex justify-content-between col-lg-12 mt-5\">\n                    <button type=\"button\" class=\"btn btn-secondary invite\" (click)=\"openModal1()\">Invite New Member</button>\n                    <!-- <button type=\"button\" class=\"btn btn-secondary share\">Share</button> -->\n            </div> \n\n        \n        </div>\n    </div>\n</div>\n\n\n\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"myModal\"  [ngStyle]=\"{'display':display}\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Create New Group</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"onCloseHandled()\">&times;</button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\">\n          <alert></alert>\n        <form [formGroup]=\"createGroup\" (ngSubmit)=\"create()\">\n        \n          <label>Group Name</label>\n                      <input class=\"form-control\" matInput formControlName=\"name\">  \n                     <label>Select Group Members</label>\n                      <select formControlName=\"members\" multiple>\n                          <option value=\"{{obj.id}}\" *ngFor=\"let obj of listemails\">{{obj.email_id}}</option>\n                      </select>\n                      <h2></h2>\n                    <button  class=\"closee btn btn-danger\" > Create</button>\n                  </form>\n      </div>\n\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"closee btn btn-danger\" (click)=\"onCloseHandled()\">Close</button>\n      </div>\n\n    </div>\n  </div>\n</div>\n<!-- The Modal -->\n<div class=\"modal\" id=\"myModal1\"  [ngStyle]=\"{'display':display1}\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Invite New Members</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"onCloseHandled()\">&times;</button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\">\n      <alert></alert>\n        <form [formGroup]=\"sendEmailForm\" (ngSubmit)=\"send(sendEmailForm.value)\">\n        \n          <label>Email Address</label>\n                      <input class=\"form-control\" matInput formControlName=\"toAddress\">  \n          \n                    <button class=\" btn btn-danger\" [disabled]=\"!sendEmailForm.valid\"> Invite Now</button>\n                  </form>\n      </div>\n\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\" btn btn-danger\" (click)=\"onCloseHandled()\">Close</button>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!--Navbar -->\n\n    <nav *ngIf=\"!(isLoggedIn$ | async)\" class=\"navbar navbar-expand-lg navbar-dark info-color bg-white ml-4 mr-4\">\n\n  <a class=\"navbar-brand\" [routerLink]=\"['/home']\"><img src=\"/assets/Reg_Bingos_logo.png\"/></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent-4\"\n    aria-controls=\"navbarSupportedContent-4\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent-4\">\n    <ul class=\"d-flex navbar-nav ml-auto\">\n  \n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/home']\" [routerLinkActive]=\"['active']\">Home</a>\n      </li>      \n      <li class=\"nav-item\" >\n        <a class=\"nav-link\" [routerLink]=\"['/storyfeed']\" [routerLinkActive]=\"['active']\">Story Feed</a>\n      </li>\n     <!-- <li class=\"nav-item\" *ngIf=\"isLoggedIn$ | async as isLoggedIn\">\n        <a class=\"nav-link\" [routerLink]=\"['/mystories']\" [routerLinkActive]=\"['active']\">My Stories</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"isLoggedIn$ | async as isLoggedIn\">\n        <a class=\"nav-link\" [routerLink]=\"['/wrtiestory']\" [routerLinkActive]=\"['active']\">Write Story</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"isLoggedIn$ | async as isLoggedIn\">\n        <a class=\"nav-link\" [routerLink]=\"['/groups']\" [routerLinkActive]=\"['active']\">My Groups</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"isLoggedIn$ | async as isLoggedIn\">\n        <a class=\"nav-link\" [routerLink]=\"['/myprofile']\" [routerLinkActive]=\"['active']\">My Profile</a>\n      </li>\n    -->\n\n      <!----<li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/Contact']\">Contact</a>\n      </li>\n    -->\n      \n     \n    </ul>\n  </div>\n  <ul class=\"login_area\" >\n    <li class=\"login_one\">\n    <a class=\"login\" [routerLink]=\"['/login']\" [routerLinkActive]=\"['active']\">Login</a>\n    </li>\n    <li class=\"login_one\">\n    <a class=\"login active\" [routerLink]=\"['/register']\" [routerLinkActive]=\"['active']\">Register</a>\n    </li>\n  </ul>\n</nav>\n<!--Navbar -->\n<nav *ngIf=\"(isLoggedIn$) | async as isLoggedIn\" class=\"mb-1 navbar navbar-expand-lg navbar-dark info-color shadow-sm bg-orange border-bottom ml-4 mr-4\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/home']\"><img src=\"/assets/Reg_Bingos_logo.png\"/></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent-5\"\n    aria-controls=\"navbarSupportedContent-4\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent-5\">\n    <ul class=\"d-flex navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/storyfeed']\" [routerLinkActive]=\"['active']\">Story Feed</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/mystories']\" [routerLinkActive]=\"['active']\">My Stories</a>\n      </li>\n\n    </ul>\n  </div>\n  <ul class=\"login_area\">\n    <li class=\"login_one\">\n    <a class=\"login\" href=\"#\">All Countries</a>\n    </li>\n    <li class=\"login_one\">\n    <a class=\"login \" [routerLink]=\"['/wrtiestory']\" [routerLinkActive]=\"['active']\">Write a Story</a>\n    </li>\n    \n  </ul>\n  <div class=\"user_pic\"><a href=\"#\"><img src=\"{{profilepath}}\"/></a></div>\n  <div class=\"ellipsis-v-icon navbar-nav ml-auto\"><a href=\"\"><i class=\"fas fa-ellipsis-v dropdown-toggle\" data-toggle=\"dropdown\"></i>\n    <div class=\"dropdown-menu dropdown-menu-right\">\n      <a class=\"dropdown-item\" [routerLink]=\"['/myprofile']\" [routerLinkActive]=\"['active']\">My Profile</a>\n      <a class=\"dropdown-item\" [routerLink]=\"['/groups']\" [routerLinkActive]=\"['active']\">My Groups</a>\n      <a class=\"dropdown-item\" [routerLink]=\"['/login']\">Log Out</a>\n    </div>\n  </a></div>\n</nav>\n<!--/.Navbar -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <!-- Top banner -->\n        <div class=\"col-12 position-relative top-banner\">\n            <div class=\"row\"><img src=\"/assets/banner.jpg\" class=\"img-fluid\"/></div>\n            <div class=\"position-absolute d-flex flex-column align-items-center content\">\n                <h2>Explore the world of stories</h2>\n                <p>Read stories from kids all around the new world explore a new world of fictional and non-fictionl stories and write your own beautiful stories.</p>\n                <a  [routerLink]=\"['/login']\" class=\"btn btn-secondary getstart\">Get started!</a>\n            </div>\n        </div>\n        <!-- Map -->\n        <div class=\"d-flex flex-column align-items-center map_container\">\n                <h2>Writers All Around the World</h2>\n                <div id=\"vmap\" style=\"width: 1000px; height: 400px;\"></div>\n        </div>\n         <!-- How it Works -->\n         <div class=\"d-flex flex-column align-items-center how_it_work_container\">\n            <h2>Writers All Around the World</h2>\n            <div class=\"d-flex flex-row justify-content-center flex-wrap pb-5\">\n                <div class=\"col-5\">\n                    <div class=\"img\"><img src=\"/assets/how_to_work_1.jpg\" class=\"img-fluid\"/></div>\n                    <div class=\"oneimg\"><img src=\"/assets/one.jpg\" class=\"img-fluid\"/></div>\n                    <h5>Write a Story in Bongos Writers Club</h5>\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\n                </div>\n\n                <div class=\"col-5\">\n                        <div class=\"img\"><img src=\"/assets/how_to_work_2.jpg\" class=\"img-fluid\"/></div>\n                        <div class=\"oneimg\"><img src=\"/assets/two.jpg\" class=\"img-fluid\"/></div>\n                        <h5>Real World Wide Stories</h5>\n                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n                </div>\n\n                <div class=\"col-5\">\n                        <div class=\"img\"><img src=\"/assets/how_to_work_3.jpg\" class=\"img-fluid\"/></div>\n                        <div class=\"oneimg\"><img src=\"/assets/three.jpg\" class=\"img-fluid\"/></div>\n                        <h5>Read and write on Any Device</h5>\n                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n                </div>\n\n                <div class=\"col-5\">\n                        <div class=\"img\"><img src=\"/assets/how_to_work_3.jpg\" class=\"img-fluid\"/></div>\n                        <div class=\"oneimg\"><img src=\"/assets/four.jpg\" class=\"img-fluid\"/></div>\n                        <h5>Order the Books</h5>\n                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n                </div>\n            </div> \n        </div>\n         <!-- Write Your Heart Out -->\n         <div class=\"d-flex flex-row align-items-center write_your_container\">\n             <div class=\"col-6 pl-5\">\n                 <h5>Write Your Heart Out</h5>\n                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n                 <button type=\"button\" class=\"btn btn-secondary white_button\">Get started!</button>\n             </div>\n             <div class=\"col-6\"><img src=\"/assets/writing_bg.jpg\" class=\"img-fluid\"/></div>\n         </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"continer-fluid\">\n    <div class=\"d-flex justify-content-around bd-highlight mb-3\">\n      <div class=\"p-2 bd-highlight\"><img src=\"/assets/kids-registration.svg\" class=\"img-fluid\" alt=\"Italian Trulli\"></div>\n     \n      <div class=\"col-lg-5 p-2 bd-highlight\">\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"d-flex justify-content-center bd-highlight mb-3 logo\"><img class=\"img-fluid\" src=\"/assets/Reg_Bingos_logo.png\" alt=\"Italian Trulli\"></div>\n        <div class=\"d-flex flex-column\">\n          <h4 class=\"text-center\">Welcome Back</h4>\n          <div class=\"login_google\">\n            <a (click)=\"socialSignIn('google')\">\n              <img src=\"assets/google_icon.png\"/>&nbsp;&nbsp;Login with Google</a>\n            </div>\n          <div class=\"mt-4 register\">\n          \n                  <div class=\"form-group\">\n                      <label for=\"inputUserName\">User Name</label>\n                    \n                      <input type=\"email\" formControlName=\"email\" class=\"form-control\"placeholder=\"Enter Email\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n                      <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.email.errors.required\">Username is required</div>\n                      </div>\n                  </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"inputUserPassword\">Password</label>\n                        <span class=\"forgot_password\"><a href=\"#\">Forgot Password?</a></span>\n                       \n                        <input type=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Enter Password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                        </div>\n                        <span class=\"fa fa-fw fa-eye field-icon toggle-password\"></span>\n                    </div>\n                    <div class=\"form-check\">\n                            <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n                            <label class=\"form-check-label\" for=\"exampleCheck1\">Remember me</label>\n                    </div>\n               \n               \n          </div>\n  \n          \n          <div class=\"d-flex justify-content-center bd-highlight mb-2 mt-2\">\n         \n              <button [disabled]=\"loading\" class=\"btn btn-custom\">Login</button>\n              <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n              \n          </div>\n            <p class=\"text-center\">Not a member? <span class=\"login\"><a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register Here.</a></span></p>\n        </div>\n    </form>\n      </div>\n      \n    </div>\n  </div>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/my-profile/my-profile.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/my-profile/my-profile.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n<div>\n<form [formGroup]=\"myprofile\" (ngSubmit)=\"onSubmit()\" >\n<div class=\"container bootstrap snippet\">\n    <div class=\"row\">\n            \n        <div class=\"col-sm-10\">\n            <h1>User name</h1>\n        </div>\n        <div class=\"text-center\">              \n            <img [src]=\"imgURL\" class=\"avatar img-circle img-thumbnail\" height=\"200\" *ngIf=\"imgURL\">\n            \n        <h6>Upload a different photo...</h6>\n        <label class=\"image-upload-container btn btn-bwm\">                 \n            <input #imageInput\n                type=\"file\"\n                accept=\"image/*\"\n                (change)=\"processFile(imageInput)\" class=\"text-center center-block file-upload\">\n                \n        </label>  \n        </div>\n    </div>\n    <div class=\"row\">\n     \n        \n        <div class=\"col-sm-9\">  \n\n            <div class=\"tab-content\">\n                <div class=\"tab-pane active\" id=\"home\">\n                 \n                   \n                        <div class=\"form-group\">\n\n                            <div class=\"col-xs-6\">\n                                <label for=\"first_name\">\n                                    <h4>Name</h4>\n                                </label>\n                                <input type=\"text\" formControlName=\"name\" class=\"form-control\" name=\"name\" id=\"first_name\"\n                                    placeholder=\"first name\"  title=\"enter your first name if any.\">\n                            </div>\n                        </div>\n                       \n\n                         \n                      \n\n                        <div class=\"form-group\">\n                            <div class=\"col-xs-6\">\n                                <label for=\"mobile\">\n                                    <h4>Mobile</h4>\n                                </label>\n                                <input type=\"text\" formControlName=\"mobile_number\"  class=\"form-control\" name=\"mobile\" id=\"mobile\"\n                                    placeholder=\"enter mobile number\" title=\"enter your mobile number if any.\">\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n\n                            <div class=\"col-xs-6\">\n                                <label for=\"email\">\n                                    <h4>Email</h4>\n                                </label>\n                                <input type=\"email\" formControlName=\"email\"   class=\"form-control\" name=\"email\" id=\"email\"\n                                    placeholder=\"you@email.com\" title=\"enter your email.\">\n                            </div>\n                        </div>\n                      \n                       \n                      \n                        <div class=\"form-group\">\n                            <div class=\"col-xs-12\">\n                                <br>\n                                <button  class=\"btn btn-primary\">Save</button>\n                              \n                            </div>\n                        </div>\n                       \n                  \n\n\n                </div>\n              \n\n            </div>\n           \n        </div>\n      \n\n    </div>\n \n</div>\n</form>\n</div>\n-->\n<!-- My Profile-->\n<div class=\"my-custom-class\">\n        \n    <div class=\"container-fluid share_story_container\">\n            <form [formGroup]=\"myprofile\" (ngSubmit)=\"onSubmit()\" >\n        <div class=\"row\">\n        <div class=\"d-flex flex-column mb-5 mt-5 col-lg-12 p-0\">\n            <div class=\"share_story\">\n                <b class=\"story_feed\"><i class=\"fas fa-arrow-left\"></i>&nbsp;My Profile</b>\n            </div>\n        </div>\n        <div class=\"d-flex w-100 mb-4\">       \n             <img [src]=\"imgURL\" class=\"avatar img-circle img-thumbnail\" height=\"200\" *ngIf=\"imgURL\">            \n            <h6>Upload a photo...</h6>\n            <label class=\"image-upload-container btn btn-bwm\">                 \n                <input #imageInput\n                    type=\"file\"\n                    accept=\"image/*\"\n                    (change)=\"processFile(imageInput)\" class=\"text-center center-block file-upload\">\n                    \n            </label>  \n        </div>\n        <div class=\"d-flex flex-column w-50\">\n            \n            <div class=\"mt-4 myprofile\">\n               \n                    <div class=\"form-row\">\n                        <div class=\"form-group col-md-6\">\n                          <label for=\"inputName\">Name*</label>\n                          \n                          <input type=\"text\" formControlName=\"name\" class=\"form-control\" name=\"name\" id=\"first_name\"\n                            title=\"enter your first name if any.\">\n                        </div>\n                        <div class=\"form-group col-md-6\">\n                                <label for=\"inputLastnickname\">Mobile Number*</label>\n                                <input type=\"text\" formControlName=\"mobile_number\"  class=\"form-control\" name=\"mobile\" id=\"mobile\"\n                                title=\"enter your mobile number if any.\">\n                            </div>\n                    </div>\n    \n                  \n    \n                    <div class=\"form-group\">\n                        <label for=\"inputEmail4\">Email Address</label>\n                       <input type=\"email\" formControlName=\"email\"   class=\"form-control\" name=\"email\" id=\"email\"\n                                    title=\"enter your email.\">\n                    </div>\n    \n                    <div class=\"d-flex justify-content-between mt-5\">\n                            <div class=\"cancel\">Cancel</div>\n                            <div class=\"update\"><button  class=\"btn btn-primary\">Update</button></div>\n                    </div>\n                 \n            </div>\n    \n            \n          </div>\n          \n  \n                   \n              \n\n\n    </div>\n</form>\n</div>\n\n</div> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/my-stories/my-stories.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/my-stories/my-stories.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!-- story feed-->\n<div class=\"my-custom-class\">\n    <div class=\"container-fluid\">\n      <div class=\"d-flex justify-content-between align-items-center mb-5 mt-5\">\n        <div class=\"flex-grow-1 story_feed\"><b>My Stories</b></div>\n        <div class=\"d-flex justify-content-between align-items-center\">\n          <div class=\"mr-3\">Sort By:</div>\n          <div class=\"dropdown mr-3\">\n            <button class=\"btn customdd dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n              aria-haspopup=\"true\" aria-expanded=\"false\">\n              Latest\n\n            </button>\n          \n          </div>\n  \n        </div> \n      </div>\n  \n     \n      <div class=\"d-flex flex-wrap flex-row\">\n          <div *ngIf=\"loading else loaded\">\n              loading ...\n            </div>\n          <div *ngFor=\"let obj of allstories\" class=\"position-relative imgs\" #loaded>\n              <img src=\"{{obj.story_path}}\" class=\"bordercolor1\">\n              <div class=\"img-content img-content-center shadow\">\n                <h5><b>{{obj.story_title}}</b></h5>\n               <div [innerHTML]=\"(obj.story_content | slice:0:150)\"></div>\n                <div class=\"d-flex justify-content-between\">\n                  <div>\n                    <div class=\"user-pic\"><img src=\"{{obj.profile_path}}\"></div>\n                    <div class=\"user_name\">\n                      <p>{{obj.name}}</p>\n                      <p class=\"auther\">Auther</p>\n                    </div>\n                  </div>\n                  <div class=\"read\"><a [routerLink]=\"['/story', obj.story_id]\" >Read more &nbsp;<i class=\"fas fa-chevron-right\"></i></a></div>\n                </div>\n              </div>\n              <div class=\"social_icons d-flex\">\n               \n                <div class=\"share\"><i (click)=\"openModal(obj.story_id)\" class=\"fas fa-share-alt\"></i></div>\n              </div>\n            </div>\n      </div>\n    </div>\n  </div>\n\n\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"myModal\"  [ngStyle]=\"{'display':display}\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Select Below Groups</h4>\n        <button type=\"button\" class=\"close\" (click)=\"onCloseHandled()\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\">\n          <h5  #loaded *ngFor=\"let obj of allgroups\" >{{obj.group_name}} <i class=\"fa fa-share-alt\" style=\"font-size:30px;color:red\" (click)=\"sendmailGroup(obj.group_id,event)\" aria-hidden=\"true\"></i>\n                             \n          </h5>\n          <button [routerLink]=\"['/groups']\" class=\"btn-primary\">Create New Group</button>   \n      </div>\n\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCloseHandled()\">Close</button>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pagenotfound/pagenotfound.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pagenotfound/pagenotfound.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href='https://fonts.googleapis.com/css?family=Anton|Passion+One|PT+Sans+Caption' rel='stylesheet' type='text/css'>\n <!-- Error Page -->\n  <div class=\"error\">\n    <div class=\"container-floud\">\n        <div class=\"col-xs-12 ground-color text-center\">\n            <div class=\"container-error-404\">\n                <div class=\"clip\"><div class=\"shadow\"><span class=\"digit thirdDigit\"></span></div></div>\n                <div class=\"clip\"><div class=\"shadow\"><span class=\"digit secondDigit\"></span></div></div>\n                <div class=\"clip\"><div class=\"shadow\"><span class=\"digit firstDigit\"></span></div></div>\n                <div class=\"msg\">OH!<span class=\"triangle\"></span></div>\n            </div>\n            <h2 class=\"h1\">Sorry! Page not found</h2>\n        </div>\n    </div>\n</div>\n<!-- Error Page -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"continer-fluid\">\n   \n        <div class=\"d-flex justify-content-around bd-highlight mb-3\">\n            <div class=\"p-2 bd-highlight\"><img src=\"./assets/kids-registration.svg\" class=\"img-fluid\"\n                    alt=\"Italian Trulli\"></div>\n            <div class=\"col-lg-5 p-2 bd-highlight\">\n                \n                    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\" >\n                <div class=\"d-flex justify-content-center bd-highlight mb-3 logo\"><img class=\"img-fluid\"\n                        src=\"./assets/Reg_Bingos_logo.png\" alt=\"Italian Trulli\"></div>\n                <div class=\"d-flex flex-column\">\n                    <h4 class=\"text-center\">Register</h4>\n                    <div class=\"mt-4 register\">\n\n                        <div class=\"form-row\">\n                            <div class=\"form-group col-md-6\">\n                                <label for=\"inputName\">Name*</label>\n                                <input type=\"text\" formControlName=\"name\" class=\"form-control\"\n                                    placeholder=\"Enter First Name *\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" />\n                                <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.name.errors.required\">First Name is required</div>\n                                </div>\n                            </div>\n                            <div class=\"form-group col-md-6\">\n                                <label for=\"gender\">Gender*</label>\n                                <select formControlName=\"gender\"   class=\"form-control\" >\n                                    <option value=\"\">Select Gender</option>                                      \n                                      <option value=\"m\" >Male</option>\n                                      <option value=\"f\" >Female</option>\n                                </select>\n                                <div *ngIf=\"submitted && f.gender.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.gender.errors.required\">Gender is required</div>\n                                    </div>\n                              \n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"form-group col-md-6\">\n                                <label for=\"inputdate\">Date of Birth</label>\n                                \n                                <input type=\"text\" formControlName=\"dob\" class=\"form-control\"\n                                    placeholder=\"Date of Birth *\" bsDatepicker\n                                    \n                                    [ngClass]=\"{ 'is-invalid': submitted && f.dob.errors }\" />\n                                <div *ngIf=\"submitted && f.dob.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.dob.errors.required\">Date of Birth is required</div>\n                                </div>\n                                <span class=\"fa fa-fw fa-calendar-alt field-icon toggle-password\"></span>\n\n                            </div>\n                            <div class=\"form-group col-md-6\">\n                                <label for=\"inputState\">Location</label>\n                                <input class=\"form-control\" formControlName=\"country\" ngx-google-places-autocomplete  (onAddressChange)=\"handleAddressChange($event)\"  [ngClass]=\"{ 'is-invalid': submitted && f.country.errors }\"/>\n                                \n                                <div *ngIf=\"submitted && f.country.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.country.errors.required\">Address is required</div>\n                                    </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"inputEmail4\">Email Address</label>\n                            <input type=\"email\" id=\"inputEmail4\" formControlName=\"email\" class=\"form-control\"\n                                placeholder=\"Enter Email Address *\"\n                                [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n                            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                                <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n                            </div>\n\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"inputEmail4\">Mobile Number</label>\n                            <international-phone-number  placeholder=\"Enter phone number\" \n                                formControlName=\"mobile_number\"\n                             [maxlength]=\"20\" [defaultCountry]=\"'us'\" \n                             [required]=\"true\"  name=\"phone_number\"\n                              [allowedCountries]=\"['in', 'ca', 'us']\">\n                            </international-phone-number>\n                         <!--   <input type=\"text\" id=\"\" formControlName=\"mobile_number\" class=\"form-control\"\n                                placeholder=\"Enter Mobile Number *\"\n                                [ngClass]=\"{ 'is-invalid': submitted && f.mobile_number.errors }\" /> -->\n                                <div *ngIf=\"submitted && !f.mobile_number.valid\" class=\"help-block\">Phone number is required and should be valid</div>\n                            \n\n                        </div>\n                        \n\n                        <div class=\"form-row\">\n                            <div class=\"form-group col-md-6\">\n                                <label for=\"inputPassword4\">Password</label>\n\n                                <input type=\"password\" formControlName=\"password\" class=\"form-control\"\n                                    placeholder=\"Enter Password\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                                    <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters\n                                    </div>\n                                </div>\n                                <span class=\"fa fa-fw fa-eye field-icon toggle-password\"></span>\n\n                            </div>\n                            <div class=\"form-group col-md-6\">\n                                <label for=\"inputConfirmPassword\">Confirm Password</label>\n\n                                <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\" />\n                                <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\n                                    <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Passwords must match</div>\n                                    </div>\n                                <span class=\"fa fa-fw fa-eye field-icon toggle-password\"></span>\n                            </div>\n                        </div>\n\n                    </div>\n\n                    <div class=\"d-flex justify-content-center bd-highlight mb-2\">\n                        <button [disabled]=\"loading\" class=\"btn btn-custom\">Register</button>\n                        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n              \n                    </div>\n                    <p class=\"text-center\">Already a member ? <span class=\"login\"><a  [routerLink]=\"['/login']\">Login here.</a></span></p>\n                </div>\n            </form>\n\n            </div>\n\n        </div>\n    \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/select-your-story/select-your-story.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/select-your-story/select-your-story.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-custom-class\">\n        <div class=\"container-fluid share_story_container\">\n            <div class=\"row\">\n                <div class=\"d-flex justify-content-between mb-5 mt-5 col-lg-12 p-0\">\n                    <div>\n                        <div class=\"share_story\">\n                            <b class=\"story_feed\">Slect Your Story Category</b>\n                        </div>\n                        <p class=\"mt-3\">You can select one categories for your story.</p>\n                    </div>\n                    <button type=\"button\" class=\"btn btn-secondary continue\">Get started!</button>\n                </div>\n\n                <div class=\"d-flex flex-wrap justify-content-between\">\n                        <!-- <div *ngFor=\"let obj of cats\" class=\"form-check\">\n                                <input type=\"checkbox\" class=\"form-check-input\" id=\"materialChecked2\" (change)=\"onChange(obj.cat_id, $event.target.checked)\">\n                                <label class=\"form-check-label\" for=\"materialChecked2\">{{obj.cat_name}}</label>\n                                </div> -->\n                    <div  *ngFor=\"let obj of cats\" class=\"mb-3 position-relative\">\n                        <img src=\"{{obj.image_path}}\" class=\"img-fluid rounded\"/>\n                        <div class=\"position-absolute d-flex justify-content-between p-2 w-100 Slect_bg_container\">\n                            <div class=\" d-flex justify-content-between align-items-center w-100\">\n                                <div class=\"comic\">{{obj.cat_name}}</div>\n                                <div>\n                                        <div class=\"custom-control custom-checkbox\">\n                                                <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck\" name=\"example1\">\n                                                <label class=\"custom-control-label\" for=\"customCheck\">&nbsp;</label>\n                                        </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>   \n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/single-story/single-story.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/single-story/single-story.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"my-custom-class\">\n\t<div class=\"container-fluid share_story_container\">\n        <div class=\"row\">\n            <div class=\"d-flex flex-column mb-5 mt-5 col-lg-12 p-0\">\n                <div class=\"share_story\">\n                    <b class=\"story_feed\"><a href=\"javascript:void(0)\" (click)=\"backClicked()\"><i class=\"fas fa-arrow-left\"></i></a>&nbsp;{{story.story_title}}</b>\n                </div>\n            </div>\n            <div class=\"ck-content\" [innerHTML]=\"story.story_content\"></div>\n            <div class=\"d-flex flex-column mb-5 col-lg-8 p-0\">\n                <div><img src=\"{{story.story_path}}\" class=\"rounded\"></div>\n               \n                    \n                <div class=\"d-flex justify-content-between align-items-center mt-3 mb-5\">\n                    <div>\n                      <div class=\"user-pic\"><img src=\"{{story.profile_path}}\" ></div>\n                       <div class=\"user_name\">\n                        <p>{{story.name}}</p>\n                    \n                        <p class=\"auther\">Auther</p>\n                      </div>\n                    </div>\n                    <div>\n                        <div class=\"d-flex justify-content-between align-items-center\">\n                            <div class=\"share\"><i class=\"fas fa-share-alt\"></i></div>\n                            <div >Share Stoy</div>\n                        </div>\n                    </div>\n                </div>\n              <!--  <div class=\"d-flex justify-content-between\">\n                        <button type=\"button\" class=\"btn btn-secondary previous\">Previous Story</button>\n                        <button type=\"button\" class=\"btn btn-secondary next\">Next Story</button>\n                </div> -->\n            </div>\n           \n        </div>\n    </div>\n</div>\n      \n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/story-feed/story-feed.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/story-feed/story-feed.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n\n\n              <div *ngIf=\"loading else loaded\">\n              loading ...\n            </div>\n        \n            <div *ngFor=\"let obj of allstories\" class=\"card mb-4\" #loaded>\n              <img class=\"card-img-top\" src=\"{{obj.story_path}}\" alt=\"Card image cap\">\n              <div class=\"card-body\">\n                <h2 class=\"card-title\">{{obj.story_title}}</h2>\n                <p class=\"card-text\">{{obj.story_content}}</p>\n                <a [routerLink]=\"['/story', obj.story_id]\" class=\"btn btn-primary\">Read </a>\n              </div>\n              <div class=\"card-footer text-muted\">\n                Posted on January 1, 2017 by\n               \n              </div>\n            </div>\n          </div>\n-->\n\n\n<!-- story feed-->\n<div class=\"my-custom-class\">\n  <div class=\"container-fluid\">\n    <div class=\"d-flex justify-content-between align-items-center mb-5 mt-5\">\n      <div class=\"flex-grow-1 story_feed\"><b>Story Feed</b></div>\n      <div class=\"d-flex justify-content-between align-items-center\">\n        <div class=\"mr-3\">Sort By:</div>\n        <div class=\"dropdown mr-3\">\n          <button class=\"btn customdd dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n            aria-haspopup=\"true\" aria-expanded=\"false\">\n            Latest\n            <i class=\"fas fa-chevron-down\"></i>\n          </button>\n         <!-- <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div> -->\n        </div>\n\n      <!--  <div class=\"dropdown ml-auto\">\n          <button class=\"btn customdd dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n            aria-haspopup=\"true\" aria-expanded=\"false\">\n            Categories\n            <i class=\"fas fa-chevron-down\"></i>\n          </button>\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </div> -->\n      </div>\n    </div>\n\n   \n    <div class=\"d-flex flex-wrap flex-row\">\n        <div *ngIf=\"loading else loaded\">\n            loading ...\n          </div>\n        <div *ngFor=\"let obj of allstories\" class=\"position-relative imgs\" #loaded>\n            <img src=\"{{obj.story_path}}\" class=\"bordercolor1\">\n            <div class=\"img-content img-content-center shadow\">\n              <h5><b>{{obj.story_title}}</b></h5>\n              <div [innerHTML]=\"(obj.story_content | slice:0:150)\"></div>\n              <div class=\"d-flex justify-content-between\">\n                <div>\n                  <div class=\"user-pic\"><img src=\"{{obj.profile_path}}\"></div>\n                  <div class=\"user_name\">\n                    <p>{{obj.name}}</p>\n                    <p class=\"auther\">Auther</p>\n                  </div>\n                </div>\n                <div class=\"read\"><a [routerLink]=\"['/story', obj.story_id]\" >Read more &nbsp;<i class=\"fas fa-chevron-right\"></i></a></div>\n              </div>\n            </div>\n            \n          </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/write-story/write-story.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/write-story/write-story.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form [formGroup]=\"writestory\">\n<!-- test-->\n<div class=\"my-custom-class\">\n    <div class=\"container-fluid p-0\">\n        <div class=\"d-flex\">\n            <div class=\"col-lg-4 p-0 bg-white h-100\">\n                <ul class=\"nav nav-tabs story_editor\" role=\"tablist\">\n                    <ul class=\"d-flex justify-content-between story_container w-100\">\n                        <li>Story Editor</li>\n                        <li><i class=\"fas fa-eye\"></i>&nbsp;Preview</li>\n                    </ul>\n                   \n                    <li class=\"nav-item \">\n                        <a class=\"nav-link active show\" href=\"#buzz\" role=\"tab\" data-toggle=\"tab\">Categories</a>\n                    </li>\n                   \n                </ul>\n\n                <!-- Tab panes -->\n                <div class=\"tab-content p-3\">\n               \n                    <div role=\"tabpanel\" class=\"tab-pane active\" id=\"buzz\">\n                          <div [innerHtml]=\"htmlToAdd\" ></div>  \n                        <ul class=\"images_container\">\n                            \n                            <li *ngFor=\"let obj of cats\" ><input  (change)=\"onChange(obj.cat_id, $event.target.checked)\" type=\"checkbox\"   />\n                                {{obj.cat_name}} <label for=\"cb1\"><img src=\"{{obj.image_path}}\" class=\"img-fluid\" /></label>\n                            </li>\n                           \n                            \n                        </ul>\n                    </div>\n                   \n                </div>\n\n            </div>\n            <div class=\"col-lg-7\">\n                <div class=\"d-flex mt-3 rightside_con\">\n                        <div class=\"text-center\">\n                                <img [src]=\"imgURL\" class=\"avatar img-circle img-thumbnail\" height=\"200\" *ngIf=\"imgURL\">\n\n                                <h6>Choose Covered Image...</h6>\n                                <label class=\"image-upload-container btn btn-bwm\">\n                                    <input #imageInput  [ngClass]=\"{ 'is-invalid': submitted && f.image.errors }\" formControlName=\"image\"  type=\"file\" accept=\"image/*\" (change)=\"processFile(imageInput)\"\n                                        class=\"form-control text-center center-block file-upload\">\n                                        <div *ngIf=\"submitted && f.image.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.image.errors.required\">Image  is required</div>\n                                            </div>\n                                </label>\n                                \n                            </div>\n                    <input type=\"text\" formControlName=\"name\" class=\"form-control\"\n                        placeholder=\"Story Name *\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" />\n                    <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.name.errors.required\">First Name is required</div>\n                    </div>\n                    <br>\n                    <div class=\"backg\">\n                       \n                            <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\" class=\"form-control document-editor\" formControlName=\"description\"\n                            data=\"<p>Hello, world!</p>\" (ready)=\"onReady($event)\"></ckeditor>\n                            <div *ngIf=\"submitted && f.description.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.description.errors.required\">Description is required</div>\n                                </div>\n                    </div>\n                    <br>\n                   \n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"bg-white p-4 w-100 shadow mt-4 d-flex justify-content-end button_con\">\n \n    <button type=\"submit\"  value=\"private\"  (click)=\"onSubmit($event)\"  class=\"btn draft\">Save as Draft</button> \n    <button type=\"submit\"  value=\"public\"  (click)=\"onSubmit($event)\"  class=\"btn publish\">Publish</button>\n    <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n</div>\n<!-- end -->\n</form>\n"

/***/ }),

/***/ "./src/app/_directives/alert.component.ts":
/*!************************************************!*\
  !*** ./src/app/_directives/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");



var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }
    ]; };
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'alert',
            template: __webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/index.js!./src/app/_directives/alert.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/_directives/index.ts":
/*!**************************************!*\
  !*** ./src/app/_directives/index.ts ***!
  \**************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./src/app/_directives/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");

/*import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
*/




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.authService.isLoggedIn.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (isLoggedIn) {
            if (localStorage.getItem('currentUser')) {
                // logged in so return true
                return true;
            }
            if (!isLoggedIn) {
                _this.router.navigate(['/login']);
                return false;
            }
            return true;
        }));
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/index.ts":
/*!**********************************!*\
  !*** ./src/app/_guards/index.ts ***!
  \**********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                // this.authenticationService.logout();
                //  location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    ErrorInterceptor.ctorParameters = function () { return [
        { type: _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
    ]; };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/fake-backend.ts":
/*!******************************************!*\
  !*** ./src/app/_helpers/fake-backend.ts ***!
  \******************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var FakeBackendInterceptor = /** @class */ (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        // array in local storage for registered users
        var users = JSON.parse(localStorage.getItem('users')) || [];
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function () {
            // authenticate
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                // find if any user matches login credentials
                var filteredUsers = users.filter(function (user) {
                    return user.username === request.body.username && user.password === request.body.password;
                });
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    var user = filteredUsers[0];
                    var body = {
                        id: user.id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    };
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200, body: body }));
                }
                else {
                    // else return 400 bad request
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ error: { message: 'Username or password is incorrect' } });
                }
            }
            if (request.url.endsWith('/token') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'No Auth') {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200, body: users }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // get users
            if (request.url.endsWith('/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200, body: users }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // get user by id
            if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id_1 = parseInt(urlParts[urlParts.length - 1]);
                    var matchedUsers = users.filter(function (user) { return user.id === id_1; });
                    var user = matchedUsers.length ? matchedUsers[0] : null;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200, body: user }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // register user
            if (request.url.endsWith('/users/register') && request.method === 'POST') {
                // get new user object from post body
                var newUser_1 = request.body;
                // validation
                var duplicateUser = users.filter(function (user) { return user.username === newUser_1.username; }).length;
                if (duplicateUser) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ error: { message: 'Username "' + newUser_1.username + '" is already taken' } });
                }
                // save new user
                newUser_1.id = users.length + 1;
                users.push(newUser_1);
                localStorage.setItem('users', JSON.stringify(users));
                // respond 200 OK
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200 }));
            }
            // delete user
            if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id = parseInt(urlParts[urlParts.length - 1]);
                    for (var i = 0; i < users.length; i++) {
                        var user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }
                    // respond 200 OK
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200 }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // pass through any requests not handled above
            return next.handle(request);
        }))
            // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["materialize"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["dematerialize"])());
    };
    FakeBackendInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());

var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: ErrorInterceptor, JwtInterceptor, FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_0__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"]; });

/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fake-backend */ "./src/app/_helpers/fake-backend.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["FakeBackendInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["fakeBackendProvider"]; });






/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            //   alert(request.url);
            if (request.url.startsWith("http://universitiesconnect.com/")) {
            }
            else {
                request = request.clone({
                    setHeaders: {
                        Authorization: "Bearer " + currentUser.token
                    }
                });
            }
        }
        return next.handle(request);
    };
    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/must-match.validator.ts":
/*!**************************************************!*\
  !*** ./src/app/_helpers/must-match.validator.ts ***!
  \**************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.clear = function () {
        this.subject.next();
    };
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false); // {1}
        this.islogged = false;
    }
    Object.defineProperty(AuthenticationService.prototype, "isLoggedIn", {
        get: function () {
            if (localStorage.getItem('currentUser')) {
                // logged in so return true
                this.loggedIn.next(true);
                return this.loggedIn.asObservable(); // {2}
            }
            else {
                return this.loggedIn.asObservable(); // {2}
            }
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (username, password, token) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        var options = { headers: headers };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].testUrl + "/login?access_token=" + token, { email: username, password: password }, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            _this.res = res;
            //   console.log(res.data.name);
            //let nedata= user.data;
            // login successful if there's a jwt token in the response
            var nedata = { "id": _this.res.data.user_id, "name": _this.res.data.name, "path": _this.res.data.profile_path, "token": "fake-jwt-token" };
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(nedata));
            _this.islogged = true;
            _this.loggedIn.next(true);
            return nedata;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        this.loggedIn.next(false);
        this.islogged = false;
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/categories.service.ts":
/*!*************************************************!*\
  !*** ./src/app/_services/categories.service.ts ***!
  \*************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var CategoriesService = /** @class */ (function () {
    function CategoriesService(http) {
        this.http = http;
        this.testUrl = "http://universitiesconnect.com/bongoswriters/api_1_0_0/Api";
        this.baseUrl = 'http://universitiesconnect.com/php/api';
        this.tokenurl = "http://universitiesconnect.com/bongoswriters/api_1_0_0/token/token";
    }
    CategoriesService.prototype.getCounByStoryCount = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = { headers: headers };
        return this.http.get(this.testUrl + "/getCounByStoryCount?country=" + id, options);
    };
    CategoriesService.prototype.getToken = function () {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('grant_type', "client_credentials")
            .set('client_id', "webmobilez")
            .set('client_secret', "Web$5367");
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        var options = { headers: headers };
        return this.http.post("" + this.tokenurl, body.toString(), options);
    };
    CategoriesService.prototype.getAllC = function (token) {
        return this.http.get(this.testUrl + "/categories?access_token=" + token);
    };
    CategoriesService.prototype.register = function (users, token) {
        //console.log(this.getAllC().subscribe());
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = { headers: headers };
        return this.http.post(this.testUrl + "/registration?access_token=" + token, users, options);
    };
    CategoriesService.prototype.uploadImage = function (image) {
        var formData = new FormData();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        //  'Content-Type': undefined
        //  'Accept': 'application/json',
        //  'Content-Type': 'application/x-www-form-urlencoded'
        // "Content-Type": "multipart/form-data"
        //   'Content-Type': 'image/x-www-form-urlencoded'
        });
        var options = { headers: headers };
        formData.append('image', image);
        return this.http.post(this.testUrl + "/profileUpdate?access_token=", image, options);
    };
    CategoriesService.prototype.createStory = function (image) {
        var formData = new FormData();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        //  'Content-Type': undefined
        //  'Accept': 'application/json',
        //  'Content-Type': 'application/x-www-form-urlencoded'
        // "Content-Type": "multipart/form-data"
        //   'Content-Type': 'image/x-www-form-urlencoded'
        });
        var options = { headers: headers };
        formData.append('image', image);
        return this.http.post(this.testUrl + "/createStory?access_token=", image, options);
    };
    CategoriesService.prototype.getStories = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = { headers: headers };
        return this.http.get(this.testUrl + "/getStories", options);
    };
    CategoriesService.prototype.getStoriesById = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = { headers: headers };
        return this.http.get(this.testUrl + "/getStories?id=" + id, options);
    };
    CategoriesService.prototype.getStory = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = { headers: headers };
        return this.http.get(this.testUrl + "/getStory?id=" + id, options);
    };
    CategoriesService.prototype.createGroupMember = function (email) {
        var formData = new FormData();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            //  'Content-Type': undefined
            //  'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
            // "Content-Type": "multipart/form-data"
            //   'Content-Type': 'image/x-www-form-urlencoded'
        });
        var options = { headers: headers };
        return this.http.post(this.testUrl + "/createGroupMember", email, options);
    };
    CategoriesService.prototype.getGroupMembers = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = { headers: headers };
        return this.http.get(this.testUrl + "/getGroupMembers?id=" + id, options);
    };
    CategoriesService.prototype.createGroupmemberships = function (data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            //  'Content-Type': undefined
            //  'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
            // "Content-Type": "multipart/form-data"
            //   'Content-Type': 'image/x-www-form-urlencoded'
        });
        var options = { headers: headers };
        return this.http.post(this.testUrl + "/createGroupmemberships", data, options);
    };
    CategoriesService.prototype.getAllGroups = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = { headers: headers };
        return this.http.get(this.testUrl + "/getAllGroups?id=" + id, options);
    };
    CategoriesService.prototype.removeMember = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = { headers: headers };
        return this.http.get(this.testUrl + "/removeMember?id=" + id, options);
    };
    CategoriesService.prototype.removeGroup = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = { headers: headers };
        return this.http.get(this.testUrl + "/removeGroup?id=" + id, options);
    };
    CategoriesService.prototype.sendmailGroup = function (id, storyId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = { headers: headers };
        return this.http.get(this.testUrl + "/sendmailGroup?id=" + id + "&sid=" + storyId, options);
    };
    CategoriesService.prototype.getGroupEmails = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = { headers: headers };
        return this.http.get(this.testUrl + "/getGroupEmails?id=" + id, options);
    };
    CategoriesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CategoriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CategoriesService);
    return CategoriesService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AlertService, AuthenticationService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });






/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/users");
    };
    UserService.prototype.getById = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = { headers: headers };
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].testUrl + "/getUser?id=" + id, options);
    };
    UserService.prototype.createStory = function (users, token) {
        //console.log(this.getAllC().subscribe());
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = { headers: headers };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].testUrl + "/createStory?access_token=" + token, users, options);
    };
    UserService.prototype.register = function (users, token) {
        //console.log(this.getAllC().subscribe());
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = { headers: headers };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].testUrl + "/registration?access_token=" + token, users, options);
    };
    UserService.prototype.registergmail = function (users, token) {
        //console.log(this.getAllC().subscribe());
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = { headers: headers };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].testUrl + "/registrationgmail?access_token=" + token, users, options);
    };
    /* register(user: User) {
          return this.http.post(`${environment.apiUrl}/users/register`, user);
      }
  */
    UserService.prototype.update = function (user) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/users/" + user.id, user);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/users/" + id);
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: getAuthServiceConfigs, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_directives */ "./src/app/_directives/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register */ "./src/app/register/index.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _story_feed_story_feed_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./story-feed/story-feed.component */ "./src/app/story-feed/story-feed.component.ts");
/* harmony import */ var _my_stories_my_stories_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./my-stories/my-stories.component */ "./src/app/my-stories/my-stories.component.ts");
/* harmony import */ var _write_story_write_story_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./write-story/write-story.component */ "./src/app/write-story/write-story.component.ts");
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./my-profile/my-profile.component */ "./src/app/my-profile/my-profile.component.ts");
/* harmony import */ var _groups_groups_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./groups/groups.component */ "./src/app/groups/groups.component.ts");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./_services/categories.service */ "./src/app/_services/categories.service.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _single_story_single_story_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./single-story/single-story.component */ "./src/app/single-story/single-story.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var ngx_international_phone_number__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-international-phone-number */ "./node_modules/ngx-international-phone-number/index.js");
/* harmony import */ var _select_your_story_select_your_story_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./select-your-story/select-your-story.component */ "./src/app/select-your-story/select-your-story.component.ts");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_32__);






// used to create fake backend














;









;





// Configs 
function getAuthServiceConfigs() {
    var config = new angular_6_social_login__WEBPACK_IMPORTED_MODULE_32__["AuthServiceConfig"]([
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_32__["GoogleLoginProvider"].PROVIDER_ID,
            //   provider: new GoogleLoginProvider("82023436782-p0l5v30vu06ns6ljkq86614i3k5vjbui.apps.googleusercontent.com")
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_32__["GoogleLoginProvider"]("503235193506-qridplkjaj97eptq18gafsv65ems1ama.apps.googleusercontent.com")
        },
    ]);
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_27__["GooglePlaceModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_8__["routing"],
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_5__["CKEditorModule"],
                ngx_international_phone_number__WEBPACK_IMPORTED_MODULE_30__["InternationalPhoneNumberModule"],
                angular_6_social_login__WEBPACK_IMPORTED_MODULE_32__["SocialLoginModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_25__["BsDatepickerModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _directives__WEBPACK_IMPORTED_MODULE_9__["AlertComponent"],
                _home__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _login__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _select_your_story_select_your_story_component__WEBPACK_IMPORTED_MODULE_31__["SelectYourStoryComponent"],
                _register__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_17__["BlogComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_18__["ContactComponent"],
                _story_feed_story_feed_component__WEBPACK_IMPORTED_MODULE_19__["StoryFeedComponent"],
                _write_story_write_story_component__WEBPACK_IMPORTED_MODULE_21__["WriteStoryComponent"],
                _my_stories_my_stories_component__WEBPACK_IMPORTED_MODULE_20__["MyStoriesComponent"],
                _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_22__["MyProfileComponent"], _groups_groups_component__WEBPACK_IMPORTED_MODULE_23__["GroupsComponent"], _single_story_single_story_component__WEBPACK_IMPORTED_MODULE_28__["SingleStoryComponent"], _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_29__["PagenotfoundComponent"]
            ],
            providers: [
                _guards__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"],
                _services__WEBPACK_IMPORTED_MODULE_11__["AlertService"],
                _services__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"],
                _services_categories_service__WEBPACK_IMPORTED_MODULE_24__["CategoriesService"],
                _services__WEBPACK_IMPORTED_MODULE_11__["UserService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_6__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_6__["ErrorInterceptor"], multi: true },
                {
                    provide: angular_6_social_login__WEBPACK_IMPORTED_MODULE_32__["AuthServiceConfig"],
                    useFactory: getAuthServiceConfigs
                },
                // provider used to create fake backend
                _helpers__WEBPACK_IMPORTED_MODULE_6__["fakeBackendProvider"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _groups_groups_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./groups/groups.component */ "./src/app/groups/groups.component.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-profile/my-profile.component */ "./src/app/my-profile/my-profile.component.ts");
/* harmony import */ var _my_stories_my_stories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-stories/my-stories.component */ "./src/app/my-stories/my-stories.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register */ "./src/app/register/index.ts");
/* harmony import */ var _single_story_single_story_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./single-story/single-story.component */ "./src/app/single-story/single-story.component.ts");
/* harmony import */ var _story_feed_story_feed_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./story-feed/story-feed.component */ "./src/app/story-feed/story-feed.component.ts");
/* harmony import */ var _write_story_write_story_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./write-story/write-story.component */ "./src/app/write-story/write-story.component.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");














var appRoutes = [
    { path: '', component: _home__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], },
    { path: 'login', component: _login__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'register', component: _register__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"] },
    { path: 'Blog', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_1__["BlogComponent"] },
    { path: 'story/:id', component: _single_story_single_story_component__WEBPACK_IMPORTED_MODULE_10__["SingleStoryComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'storyfeed', component: _story_feed_story_feed_component__WEBPACK_IMPORTED_MODULE_11__["StoryFeedComponent"] },
    { path: 'mystories', component: _my_stories_my_stories_component__WEBPACK_IMPORTED_MODULE_7__["MyStoriesComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'wrtiestory', component: _write_story_write_story_component__WEBPACK_IMPORTED_MODULE_12__["WriteStoryComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'myprofile', component: _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_6__["MyProfileComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'groups', component: _groups_groups_component__WEBPACK_IMPORTED_MODULE_3__["GroupsComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'home', redirectTo: '' },
    // otherwise redirect to home
    { path: '**', component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_8__["PagenotfoundComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: true });


/***/ }),

/***/ "./src/app/blog/blog.component.css":
/*!*****************************************!*\
  !*** ./src/app/blog/blog.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  /* Add a gray background color with some padding */\r\n  \r\n  body {\r\n    font-family: Arial;\r\n    padding: 20px;\r\n    background: #f1f1f1;\r\n  }\r\n  \r\n  /* Header/Blog Title */\r\n  \r\n  .header {\r\n    padding: 30px;\r\n    font-size: 40px;\r\n    text-align: center;\r\n    background: white;\r\n  }\r\n  \r\n  /* Create two unequal columns that floats next to each other */\r\n  \r\n  /* Left column */\r\n  \r\n  .leftcolumn {   \r\n    float: left;\r\n    width: 75%;\r\n  }\r\n  \r\n  /* Right column */\r\n  \r\n  .rightcolumn {\r\n    float: left;\r\n    width: 25%;\r\n    padding-left: 20px;\r\n  }\r\n  \r\n  /* Fake image */\r\n  \r\n  .fakeimg {\r\n    background-color: #aaa;\r\n    width: 100%;\r\n    padding: 20px;\r\n  }\r\n  \r\n  /* Add a card effect for articles */\r\n  \r\n  .card {\r\n     background-color: white;\r\n     padding: 20px;\r\n     margin-top: 20px;\r\n  }\r\n  \r\n  /* Clear floats after the columns */\r\n  \r\n  .row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  \r\n  /* Footer */\r\n  \r\n  .footer {\r\n    padding: 20px;\r\n    text-align: center;\r\n    background: #ddd;\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  /* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */\r\n  \r\n  @media screen and (max-width: 800px) {\r\n    .leftcolumn, .rightcolumn {   \r\n      width: 100%;\r\n      padding: 0;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7RUFDeEI7O0VBRUEsa0RBQWtEOztFQUNsRDtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCOztFQUVBLHNCQUFzQjs7RUFDdEI7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0VBRUEsOERBQThEOztFQUM5RCxnQkFBZ0I7O0VBQ2hCO0lBQ0UsV0FBVztJQUNYLFVBQVU7RUFDWjs7RUFFQSxpQkFBaUI7O0VBQ2pCO0lBQ0UsV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7RUFDcEI7O0VBRUEsZUFBZTs7RUFDZjtJQUNFLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsYUFBYTtFQUNmOztFQUVBLG1DQUFtQzs7RUFDbkM7S0FDRyx1QkFBdUI7S0FDdkIsYUFBYTtLQUNiLGdCQUFnQjtFQUNuQjs7RUFFQSxtQ0FBbUM7O0VBQ25DO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0VBQ2I7O0VBRUEsV0FBVzs7RUFDWDtJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjs7RUFFQSwrSUFBK0k7O0VBQy9JO0lBQ0U7TUFDRSxXQUFXO01BQ1gsVUFBVTtJQUNaO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9ibG9nL2Jsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcbiAgLyogQWRkIGEgZ3JheSBiYWNrZ3JvdW5kIGNvbG9yIHdpdGggc29tZSBwYWRkaW5nICovXHJcbiAgYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICB9XHJcbiAgXHJcbiAgLyogSGVhZGVyL0Jsb2cgVGl0bGUgKi9cclxuICAuaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLyogQ3JlYXRlIHR3byB1bmVxdWFsIGNvbHVtbnMgdGhhdCBmbG9hdHMgbmV4dCB0byBlYWNoIG90aGVyICovXHJcbiAgLyogTGVmdCBjb2x1bW4gKi9cclxuICAubGVmdGNvbHVtbiB7ICAgXHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFJpZ2h0IGNvbHVtbiAqL1xyXG4gIC5yaWdodGNvbHVtbiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEZha2UgaW1hZ2UgKi9cclxuICAuZmFrZWltZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBBZGQgYSBjYXJkIGVmZmVjdCBmb3IgYXJ0aWNsZXMgKi9cclxuICAuY2FyZCB7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgcGFkZGluZzogMjBweDtcclxuICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cclxuICAucm93OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuICBcclxuICAvKiBGb290ZXIgKi9cclxuICAuZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSB3aGVuIHRoZSBzY3JlZW4gaXMgbGVzcyB0aGFuIDgwMHB4IHdpZGUsIG1ha2UgdGhlIHR3byBjb2x1bW5zIHN0YWNrIG9uIHRvcCBvZiBlYWNoIG90aGVyIGluc3RlYWQgb2YgbmV4dCB0byBlYWNoIG90aGVyICovXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5sZWZ0Y29sdW1uLCAucmlnaHRjb2x1bW4geyAgIFxyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! raw-loader!./blog.component.html */ "./node_modules/raw-loader/index.js!./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/blog/blog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-m ul {\r\n    padding: 0;\r\n    list-style: none;\r\n    line-height: 38px;\r\n}\r\n.footer-m ul li a {\r\n    color: #30496C;\r\n}\r\n.footer-m .color {\r\n    color: #718EA4;\r\n}\r\n.footer-m .social {\r\n    background-color: #2B4368;\r\n    padding: 4px 5px;\r\n    color: #A9D7E1!important;\r\n    border-radius: 3px;\r\n    transition: all 0.5s ease;\r\n\r\n}\r\n.list-inline-item a {\r\n    margin: 0;\r\n    padding: 0;\r\n   \r\n}\r\n.list-inline-item a:hover  {\r\n    margin: 0;\r\n    padding: 0;\r\n   \r\n}\r\n.footer-m a i {\r\n    color: #FF778D;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQix5QkFBeUI7O0FBRTdCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsVUFBVTs7QUFFZDtBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7O0FBRWQ7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLW0gdWwge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBsaW5lLWhlaWdodDogMzhweDtcclxufVxyXG4uZm9vdGVyLW0gdWwgbGkgYSB7XHJcbiAgICBjb2xvcjogIzMwNDk2QztcclxufVxyXG4uZm9vdGVyLW0gLmNvbG9yIHtcclxuICAgIGNvbG9yOiAjNzE4RUE0O1xyXG59XHJcblxyXG4uZm9vdGVyLW0gLnNvY2lhbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkI0MzY4O1xyXG4gICAgcGFkZGluZzogNHB4IDVweDtcclxuICAgIGNvbG9yOiAjQTlEN0UxIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcblxyXG59XHJcbi5saXN0LWlubGluZS1pdGVtIGEge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgXHJcbn1cclxuXHJcbi5saXN0LWlubGluZS1pdGVtIGE6aG92ZXIgIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgIFxyXG59XHJcblxyXG4uZm9vdGVyLW0gYSBpIHtcclxuICAgIGNvbG9yOiAjRkY3NzhEO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var FooterComponent = /** @class */ (function () {
    function FooterComponent(authService) {
        this.authService = authService;
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.isLoggedIn$ = this.authService.isLoggedIn;
    };
    FooterComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    FooterComponent.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }
    ]; };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/groups/groups.component.css":
/*!*********************************************!*\
  !*** ./src/app/groups/groups.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".share_story_container {\r\n    width: 88%;\r\n  }\r\n  .share_story_container .share_story {\r\n      font-size: 26px;\r\n    \r\n    }\r\n  .share_story_container .divselect {\r\n      width: 324px;\r\n      min-height: 74px;\r\n  }\r\n  .share_story_container  .img1 {\r\n    width: 55px;\r\n    height: 47px;\r\n  \r\n  }\r\n  .share_story_container  .circlebg {\r\n    width: 74px;\r\n    height: 74px;\r\n    background-color: #f1f3f5;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n  \r\n  }\r\n  .share_story_container  .img_align {\r\n    left: -30px;\r\n    top: 0px;\r\n  }\r\n  .share_story_container  .circlebg .circle {\r\n    background-color: #eca837;\r\n    height: 50px;\r\n    width: 50px;\r\n    border-radius: 50%;\r\n    font-size: 42px;\r\n    font-weight: 800;\r\n    line-height: 44px;\r\n  }\r\n  .share_story_container  .newgroup {\r\n  line-height: 37px;\r\n  font-weight: 700;\r\n  font-size: 18px;\r\n  margin-left: 45px;\r\n  \r\n  }\r\n  .share_story_container  img.circleimg{\r\n      height: 30px;\r\n      width: 30px;\r\n      border-radius: 50%;\r\n    }\r\n  .share_story_container .friends {\r\n     \r\n        top: 0px;\r\n        width: 94%;\r\n      }\r\n  .share {\r\n        color: #fff;\r\n        background-color: #F6C14C;\r\n        border-radius: 40px;\r\n        text-decoration: none;\r\n        background-repeat: repeat-y;\r\n        border: 0px;\r\n        outline: 0px;\r\n        width: 251px;\r\n    }\r\n  .share:hover {\r\n        color: #F6C14C;\r\n        background-color: #fff;\r\n       \r\n    }\r\n  .invite {\r\n      color: #F6C14C;\r\n      background-color: #fff;\r\n      border-radius: 40px;\r\n      text-decoration: none;\r\n      background-repeat: repeat-y;\r\n      border: 0px;\r\n      outline: 0px;\r\n      padding: 8px 0px;\r\n      width: 251px;\r\n      margin-left: -30px;\r\n  }\r\n  .invite:hover {\r\n      color: #fff;\r\n      background-color: #F6C14C;\r\n     \r\n  }\r\n  .twomore {\r\n    font-size:12px;\r\n    padding-top: 38px;\r\n    cursor: pointer;\r\n  }\r\n  .live__scroll {\r\n    overflow-x: auto;\r\n    white-space: nowrap;\r\n    width: 180px;\r\n    float: right;\r\n  }\r\n  .live__scroll--box {\r\n    display: inline-block;\r\n    float: none;\r\n  }\r\n  .tution_mate {\r\n    width: 210px;\r\n  }\r\n  .custom-checkbox .custom-control-input:checked~.custom-control-label::before {\r\n    background-color: #2b4368;\r\n  }\r\n  .custom-control-input:checked~.custom-control-label::before {\r\n    color: #fff;\r\n    background-color: #2b4368;\r\n  }\r\n  .closee{\r\n      background: #F6C14C\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBzL2dyb3Vwcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtFQUNaO0VBQ0E7TUFDSSxlQUFlOztJQUVqQjtFQUVEO01BQ0csWUFBWTtNQUNaLGdCQUFnQjtFQUNwQjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7O0VBRWQ7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjs7RUFFcEI7RUFFQTtJQUNFLFdBQVc7SUFDWCxRQUFRO0VBQ1Y7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjtFQUNBO0VBQ0EsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCOztFQUVqQjtFQUlFO01BQ0UsWUFBWTtNQUNaLFdBQVc7TUFDWCxrQkFBa0I7SUFDcEI7RUFHRTs7UUFFRSxRQUFRO1FBQ1IsVUFBVTtNQUNaO0VBRUE7UUFDRSxXQUFXO1FBQ1gseUJBQXlCO1FBQ3pCLG1CQUFtQjtRQUNuQixxQkFBcUI7UUFDckIsMkJBQTJCO1FBQzNCLFdBQVc7UUFDWCxZQUFZO1FBQ1osWUFBWTtJQUNoQjtFQUNBO1FBQ0ksY0FBYztRQUNkLHNCQUFzQjs7SUFFMUI7RUFFQTtNQUNFLGNBQWM7TUFDZCxzQkFBc0I7TUFDdEIsbUJBQW1CO01BQ25CLHFCQUFxQjtNQUNyQiwyQkFBMkI7TUFDM0IsV0FBVztNQUNYLFlBQVk7TUFDWixnQkFBZ0I7TUFDaEIsWUFBWTtNQUNaLGtCQUFrQjtFQUN0QjtFQUNBO01BQ0ksV0FBVztNQUNYLHlCQUF5Qjs7RUFFN0I7RUFDQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjtFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtFQUNkO0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsV0FBVztFQUNiO0VBRUE7SUFDRSxZQUFZO0VBQ2Q7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUVBO0lBQ0UsV0FBVztJQUNYLHlCQUF5QjtFQUMzQjtFQUVBO01BQ0k7RUFDSiIsImZpbGUiOiJzcmMvYXBwL2dyb3Vwcy9ncm91cHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaGFyZV9zdG9yeV9jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDg4JTtcclxuICB9XHJcbiAgLnNoYXJlX3N0b3J5X2NvbnRhaW5lciAuc2hhcmVfc3Rvcnkge1xyXG4gICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBcclxuICAgIH1cclxuICBcclxuICAgLnNoYXJlX3N0b3J5X2NvbnRhaW5lciAuZGl2c2VsZWN0IHtcclxuICAgICAgd2lkdGg6IDMyNHB4O1xyXG4gICAgICBtaW4taGVpZ2h0OiA3NHB4O1xyXG4gIH1cclxuICAuc2hhcmVfc3RvcnlfY29udGFpbmVyICAuaW1nMSB7XHJcbiAgICB3aWR0aDogNTVweDtcclxuICAgIGhlaWdodDogNDdweDtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLnNoYXJlX3N0b3J5X2NvbnRhaW5lciAgLmNpcmNsZWJnIHtcclxuICAgIHdpZHRoOiA3NHB4O1xyXG4gICAgaGVpZ2h0OiA3NHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjNmNTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5zaGFyZV9zdG9yeV9jb250YWluZXIgIC5pbWdfYWxpZ24ge1xyXG4gICAgbGVmdDogLTMwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNoYXJlX3N0b3J5X2NvbnRhaW5lciAgLmNpcmNsZWJnIC5jaXJjbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjYTgzNztcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG4gIH1cclxuICAuc2hhcmVfc3RvcnlfY29udGFpbmVyICAubmV3Z3JvdXAge1xyXG4gIGxpbmUtaGVpZ2h0OiAzN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA0NXB4O1xyXG4gIFxyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAgIC5zaGFyZV9zdG9yeV9jb250YWluZXIgIGltZy5jaXJjbGVpbWd7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuICBcclxuICBcclxuICAgICAgLnNoYXJlX3N0b3J5X2NvbnRhaW5lciAuZnJpZW5kcyB7XHJcbiAgICAgXHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDk0JTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuc2hhcmUge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkMxNEM7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xyXG4gICAgICAgIGJvcmRlcjogMHB4O1xyXG4gICAgICAgIG91dGxpbmU6IDBweDtcclxuICAgICAgICB3aWR0aDogMjUxcHg7XHJcbiAgICB9XHJcbiAgICAuc2hhcmU6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjRjZDMTRDO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICBcclxuICAgIH1cclxuICBcclxuICAgIC5pbnZpdGUge1xyXG4gICAgICBjb2xvcjogI0Y2QzE0QztcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XHJcbiAgICAgIGJvcmRlcjogMHB4O1xyXG4gICAgICBvdXRsaW5lOiAwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDhweCAwcHg7XHJcbiAgICAgIHdpZHRoOiAyNTFweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xyXG4gIH1cclxuICAuaW52aXRlOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkMxNEM7XHJcbiAgICAgXHJcbiAgfVxyXG4gIC50d29tb3JlIHtcclxuICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDM4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5saXZlX19zY3JvbGwge1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5saXZlX19zY3JvbGwtLWJveCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnR1dGlvbl9tYXRlIHtcclxuICAgIHdpZHRoOiAyMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZH4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmI0MzY4O1xyXG4gIH1cclxuICBcclxuICAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZH4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjQzNjg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jbG9zZWV7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNGNkMxNENcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/groups/groups.component.ts":
/*!********************************************!*\
  !*** ./src/app/groups/groups.component.ts ***!
  \********************************************/
/*! exports provided: GroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsComponent", function() { return GroupsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/categories.service */ "./src/app/_services/categories.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var GroupsComponent = /** @class */ (function () {
    function GroupsComponent(fb, alertService, router, http, categoriesService) {
        this.fb = fb;
        this.alertService = alertService;
        this.router = router;
        this.http = http;
        this.categoriesService = categoriesService;
        this.Emails = [];
        this.allgroups = [];
        this.Arr = Array;
        this.num = 2;
        this.loading = false;
        this.submitted = false;
        this.display = 'none';
        this.display1 = 'none';
        this.commaSepEmail = function (control) {
            var emails = control.value.split(',');
            var forbidden = emails.some(function (email) { return _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](email)); });
            console.log(forbidden);
            return forbidden ? { 'toAddress': { value: control.value } } : null;
        };
    }
    GroupsComponent.prototype.ngOnInit = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.getGroupMembers();
        this.sendEmailForm = this.fb.group({
            'toAddress': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.commaSepEmail]],
            "user_id": currentUser.id
        });
        this.createGroup = this.fb.group({
            'name': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            'members': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            "user_id": currentUser.id
        });
        this.getAllGroups();
        // this.getGroupEmail(49);
    };
    GroupsComponent.prototype.openModal = function () {
        this.alertService.clear();
        this.display = 'block';
    };
    GroupsComponent.prototype.openModal1 = function () {
        this.alertService.clear();
        this.display1 = 'block';
    };
    GroupsComponent.prototype.onCloseHandled = function () {
        this.display = 'none';
        this.display1 = 'none';
    };
    GroupsComponent.prototype.send = function (value) {
        console.log(value);
        this.createGroupMembers();
        this.getGroupMembers();
        this.alertService.success('Member INVITED successful', true);
        //.listemails=value.toAddress;
    };
    GroupsComponent.prototype.removeMember = function (id) {
        var _this = this;
        this.loading = true;
        this.categoriesService.removeMember(id).subscribe(function (res) {
            console.log(res);
            _this.loading = false;
            // this.router.navigate(['/myprofile']);
            _this.getGroupMembers();
        }, function (err) {
            _this.loading = false;
        });
    };
    GroupsComponent.prototype.removeGroup = function (id) {
        var _this = this;
        this.loading = true;
        this.categoriesService.removeGroup(id).subscribe(function (res) {
            console.log(res);
            _this.loading = false;
            // this.router.navigate(['/myprofile']);
            _this.getAllGroups();
            _this.alertService.success('Group Deleted successfully', true);
        }, function (err) {
            _this.loading = false;
        });
    };
    /*sendmailGroup(id)
    {
     this.loading=true;
   
     this.categoriesService.sendmailGroup(id).subscribe(
       (res:any) => {
     console.log(res);
     this.loading = false;
        // this.router.navigate(['/myprofile']);
       this.getAllGroups();
       },
       (err) => {
        
        this.loading = false;
       })
    }*/
    GroupsComponent.prototype.createGroupMembers = function () {
        var _this = this;
        // alert(this.id)
        this.loading = true;
        this.categoriesService.createGroupMember(this.sendEmailForm.value).subscribe(function (res) {
            _this.loading = false;
            _this.listemails = res.data[0];
            //  this.router.navigate(['/myprofile']);
        }, function (err) {
            //this.loading = false;
        });
    };
    GroupsComponent.prototype.getGroupMembers = function () {
        var _this = this;
        this.loading = false;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.loading = true;
        this.categoriesService.getGroupMembers(currentUser.id).subscribe(function (res) {
            _this.listemails = res.data;
            console.log(_this.listemails);
            _this.loading = false;
            // this.router.navigate(['/myprofile']);
        }, function (err) {
            _this.listemails = "";
            _this.loading = false;
        });
    };
    GroupsComponent.prototype.create = function () {
        var _this = this;
        // this.submitted = true;
        // stop here if form is invalid
        if (this.createGroup.invalid) {
            return;
        }
        console.log(this.createGroup.value);
        this.loading = true;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.createGroup.controls['user_id'].setValue(currentUser.id);
        this.categoriesService.createGroupmemberships(this.createGroup.value).subscribe(function (res) {
            console.log(res.data);
            _this.loading = false;
            // this.router.navigate(['/myprofile']);
            _this.alertService.success('Group Created successful', true);
            _this.onCloseHandled();
            _this.getAllGroups();
            _this.createGroup.reset();
        }, function (err) {
            _this.loading = false;
        });
    };
    GroupsComponent.prototype.getAllGroups = function () {
        var _this = this;
        this.loading = false;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.loading = true;
        this.categoriesService.getAllGroups(currentUser.id).subscribe(function (res) {
            _this.allgroups = res.data;
            console.log(_this.allgroups);
            _this.loading = false;
            // this.router.navigate(['/myprofile']);
        }, function (err) {
            _this.loading = false;
        });
    };
    GroupsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _services_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"] }
    ]; };
    GroupsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-groups',
            template: __webpack_require__(/*! raw-loader!./groups.component.html */ "./node_modules/raw-loader/index.js!./src/app/groups/groups.component.html"),
            styles: [__webpack_require__(/*! ./groups.component.css */ "./src/app/groups/groups.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _services_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"]])
    ], GroupsComponent);
    return GroupsComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-dark .navbar-brand img {width:51px;}\r\n.bg-white {\r\n    background-color: #fff!important;\r\n}\r\n.border-bottom {\r\n    border-bottom: 1px solid #dee2e6!important;\r\n}\r\n.shadow-sm {\r\n    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;\r\n}\r\n.navbar-dark .navbar-nav .nav-link:hover {\r\n    color:#334A6E;\r\n}\r\n.navbar-dark .navbar-nav .nav-link {\r\n    color:#a2a2a2;\r\n    padding: 0 20px;\r\n}\r\nul.navbar-nav { \r\n    margin:0; \r\n    padding: 0; \r\n    display: table;\r\n  }\r\nli.nav-item { \r\n    display: table-cell; \r\n    position: relative; \r\n    padding: 15px 0;\r\n    text-align: center;\r\n\r\n  }\r\na.nav-link {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    letter-spacing: 0.15em;\r\n    display: inline-block;\r\n    position: relative;\r\n  }\r\na.nav-link:after {    \r\n    content: \"\";\r\n    display: block;\r\n    height: 6px;\r\n    left: 50%;\r\n    position: absolute;\r\n    background: #F6C14C;\r\n    transition: width 0.3s ease 0s, left 0.3s ease 0s;\r\n    width: 0;\r\n    top: -29px;\r\n  }\r\na.nav-link:hover:after { \r\n    width: 100%; \r\n    left: 0; \r\n  }\r\nul.login_area {\r\n    display: flex;\r\n    margin-top: 15px;\r\n    flex-direction: row;\r\n    list-style: none;\r\n    padding-left: 0;\r\n}\r\na.login {\r\n    color: #F6C14C;\r\n    padding: 10px 32px;\r\n    transition: all 0.5s ease;\r\n    border-radius: 20px;\r\n}\r\nli.login_one {\r\n    margin: 0 10px;\r\n}\r\n.navbar{padding: .5rem 2rem;}\r\na.login:hover {\r\n    color: #fff;\r\n    background-color: #F6C14C;\r\n    border-radius: 40px;\r\n    text-decoration: none;\r\n    background-repeat: repeat-y;\r\n   \r\n}\r\na.login.active {\r\n    color: #fff;\r\n    background-color: #F6C14C;\r\n    border-radius: 40px;\r\n    text-decoration: none;\r\n    background-repeat: repeat-y;\r\n   \r\n}\r\n.navbar-dark .navbar-toggler {background-color: #F5A623;}\r\n.bg-orange {\r\n  background-color: #F6C141!important;\r\n}\r\nnav.bg-orange a.nav-link:after {    \r\n  background: #fff;\r\n  top: -29px;\r\n}\r\n.bg-orange .navbar-nav .nav-link {\r\n  color:#fff;\r\n  \r\n}\r\n.bg-orange a.login {\r\n  border: 1px solid #fff;\r\n  color: #fff;\r\n}\r\n.bg-orange a.login:hover {\r\n  color: #F6C141;\r\n  background-color: #fff;\r\n  border: 1px solid #fff;\r\n}\r\n.bg-orange a.login.active {\r\n  color: #F6C141;\r\n  background-color: #fff;\r\n  border: 1px solid #fff;\r\n}\r\na.login img {\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n.user_pic a {\r\nborder: 0px solid;\r\n}\r\n.user_pic img {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n}\r\n.ellipsis-v-icon i {\r\n  font-size: 25px;\r\n  color: #fff;\r\n}\r\n.user_pic {\r\n  padding: 0 20px 0 15px;\r\n}\r\ni.fas.fa-ellipsis-v.dropdown-toggle:after {\r\n  content: \"\";\r\n  border-top: 0px;\r\n  border-left: 0px;\r\n}\r\n.ellipsis-v-icon {\r\n  position: relative;\r\n}\r\na.nav-link.active:after { \r\n  width: 100%; \r\n  left: 0; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdDQUFnQyxVQUFVLENBQUM7QUFDM0M7SUFDSSxnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLDBDQUEwQztBQUM5QztBQUNBO0lBQ0ksdURBQXVEO0FBQzNEO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksUUFBUTtJQUNSLFVBQVU7SUFDVixjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7O0VBRXBCO0FBQ0E7SUFDRSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsa0JBQWtCO0VBQ3BCO0FBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpREFBaUQ7SUFDakQsUUFBUTtJQUNSLFVBQVU7RUFDWjtBQUNBO0lBQ0UsV0FBVztJQUNYLE9BQU87RUFDVDtBQUVBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBLFFBQVEsbUJBQW1CLENBQUM7QUFDNUI7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsMkJBQTJCOztBQUUvQjtBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLDJCQUEyQjs7QUFFL0I7QUFDQSw4QkFBOEIseUJBQXlCLENBQUM7QUFFeEQ7RUFDRSxtQ0FBbUM7QUFDckM7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7QUFFQTtFQUNFLFVBQVU7O0FBRVo7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7QUFFQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsT0FBTztBQUNUIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1kYXJrIC5uYXZiYXItYnJhbmQgaW1nIHt3aWR0aDo1MXB4O31cclxuLmJnLXdoaXRlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYhaW1wb3J0YW50O1xyXG59XHJcbi5ib3JkZXItYm90dG9tIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2IWltcG9ydGFudDtcclxufVxyXG4uc2hhZG93LXNtIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLjEyNXJlbSAuMjVyZW0gcmdiYSgwLDAsMCwuMDc1KSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbms6aG92ZXIge1xyXG4gICAgY29sb3I6IzMzNEE2RTtcclxufVxyXG5cclxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcbiAgICBjb2xvcjojYTJhMmEyO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG59XHJcblxyXG51bC5uYXZiYXItbmF2IHsgXHJcbiAgICBtYXJnaW46MDsgXHJcbiAgICBwYWRkaW5nOiAwOyBcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gIH1cclxuICBsaS5uYXYtaXRlbSB7IFxyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDsgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxyXG4gICAgcGFkZGluZzogMTVweCAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICB9XHJcbiAgYS5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjE1ZW07XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICBhLm5hdi1saW5rOmFmdGVyIHsgICAgXHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6ICNGNkMxNEM7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2UgMHMsIGxlZnQgMC4zcyBlYXNlIDBzO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICB0b3A6IC0yOXB4O1xyXG4gIH1cclxuICBhLm5hdi1saW5rOmhvdmVyOmFmdGVyIHsgXHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBsZWZ0OiAwOyBcclxuICB9XHJcblxyXG4gIHVsLmxvZ2luX2FyZWEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5hLmxvZ2luIHtcclxuICAgIGNvbG9yOiAjRjZDMTRDO1xyXG4gICAgcGFkZGluZzogMTBweCAzMnB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxubGkubG9naW5fb25lIHtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG59XHJcbi5uYXZiYXJ7cGFkZGluZzogLjVyZW0gMnJlbTt9XHJcbmEubG9naW46aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZDMTRDO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcclxuICAgXHJcbn1cclxuXHJcbmEubG9naW4uYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2QzE0QztcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XHJcbiAgIFxyXG59XHJcbi5uYXZiYXItZGFyayAubmF2YmFyLXRvZ2dsZXIge2JhY2tncm91bmQtY29sb3I6ICNGNUE2MjM7fVxyXG5cclxuLmJnLW9yYW5nZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y2QzE0MSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm5hdi5iZy1vcmFuZ2UgYS5uYXYtbGluazphZnRlciB7ICAgIFxyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgdG9wOiAtMjlweDtcclxufVxyXG5cclxuLmJnLW9yYW5nZSAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gIGNvbG9yOiNmZmY7XHJcbiAgXHJcbn1cclxuLmJnLW9yYW5nZSBhLmxvZ2luIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYmctb3JhbmdlIGEubG9naW46aG92ZXIge1xyXG4gIGNvbG9yOiAjRjZDMTQxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxufVxyXG4uYmctb3JhbmdlIGEubG9naW4uYWN0aXZlIHtcclxuICBjb2xvcjogI0Y2QzE0MTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbn1cclxuYS5sb2dpbiBpbWcge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLnVzZXJfcGljIGEge1xyXG5ib3JkZXI6IDBweCBzb2xpZDtcclxufVxyXG5cclxuLnVzZXJfcGljIGltZyB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmVsbGlwc2lzLXYtaWNvbiBpIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn0gXHJcblxyXG4udXNlcl9waWMge1xyXG4gIHBhZGRpbmc6IDAgMjBweCAwIDE1cHg7XHJcbn1cclxuXHJcbmkuZmFzLmZhLWVsbGlwc2lzLXYuZHJvcGRvd24tdG9nZ2xlOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGJvcmRlci10b3A6IDBweDtcclxuICBib3JkZXItbGVmdDogMHB4O1xyXG59XHJcblxyXG4uZWxsaXBzaXMtdi1pY29uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuYS5uYXYtbGluay5hY3RpdmU6YWZ0ZXIgeyBcclxuICB3aWR0aDogMTAwJTsgXHJcbiAgbGVmdDogMDsgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
        this.logout = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        //  console.log(this.logout)
        this.isLoggedIn$ = this.authService.isLoggedIn;
        console.log(this.isLoggedIn$.source);
        this.cuser = JSON.parse(localStorage.getItem('currentUser'));
        if (this.cuser) {
            this.profilepath = this.cuser.path;
            console.log(this.cuser);
        }
        else if (!this.profilepath) {
            this.profilepath = "http://universitiesconnect.com/bongoswriters/images/placeholder.png";
        }
    };
    HeaderComponent.prototype.onLogout = function () {
        this.logout = true;
        this.authService.logout();
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-banner .content {\r\n    left: 216px;\r\n    top: 138px;\r\n    border: 0px solid;\r\n    width: 360px;\r\n}\r\n.top-banner .content h2 {\r\n    color: #2b4368;\r\n    font-weight: 800;\r\n    font-size: 26px;\r\n}\r\n.top-banner .content p {\r\n    line-height: 33px;\r\n    padding-top: 17px;\r\n    text-align: center;\r\n    font-size: 17px;\r\n    color: #5d718c;\r\n}\r\n.getstart {\r\n    color: #fff;\r\n    background-color: #F6C14C;\r\n    border-radius: 40px;\r\n    text-decoration: none;\r\n    background-repeat: repeat-y;\r\n    border: 0px;\r\n    outline: 0px;\r\n    width: 251px;\r\n}\r\n.getstart:hover {\r\n    color: #F6C14C;\r\n    background-color: #fff;\r\n   \r\n}\r\n.map_container{\r\n    background-color: #fff;\r\n    min-height: 400px;\r\n    width: 100%;\r\n}\r\n.map_container h2 {\r\n    color: #2b4368;\r\n    font-weight: 800;\r\n    font-size: 26px;\r\n    padding-top: 25px;\r\n    padding-bottom: 28px;\r\n}\r\n.how_it_work_container{\r\n    background-color: #f1f3f5;\r\n    min-height: 596px;\r\n    width: 100%;\r\n}\r\n.how_it_work_container h2 {\r\n    color: #2b4368;\r\n    font-weight: 800;\r\n    font-size: 26px;\r\n    padding-top: 45px;\r\n    padding-bottom: 45px;\r\n}\r\n.how_it_work_container .img {\r\n    padding: 0px 0 30px 0;\r\n}\r\n.how_it_work_container .oneimg {\r\n    padding: 0px 0 20px 0;\r\n}\r\n.how_it_work_container h5 {\r\n    color: #2b4368;\r\n    font-weight: 800;\r\n    font-size: 16px;\r\n}\r\n.write_your_container{\r\n    background-color: #eca837;\r\n    position: relative;\r\n    width: 100%;\r\n}\r\n.write_your_container h5{\r\n    color: #fff;\r\n    font-weight: 800;\r\n    font-size: 26px;\r\n    padding-bottom: 10px;\r\n\r\n}\r\n.write_your_container p{\r\n    color: #fff;\r\n    padding-bottom: 12px;\r\n\r\n}\r\n.white_button {\r\n    color: #F6C14C;\r\n    background-color: #fff;\r\n    border-radius: 40px;\r\n    text-decoration: none;\r\n    background-repeat: repeat-y;\r\n    border: 0px;\r\n    outline: 0px;\r\n    padding: 8px 0px;\r\n    width: 251px;\r\n}\r\n.white_button:hover {\r\n    color: #fff;\r\n    background-color: #F6C14C;\r\n   \r\n}\r\n.today_pic_book_con{\r\n    background-image:url('/assets/pic_big_bg.jpg');\r\n    width: 100%;\r\n    padding-bottom: 70px;\r\n  }\r\n.today_pic_book_con h2 {\r\n    color: #2b4368;\r\n    font-weight: 800;\r\n    font-size: 26px;\r\n    padding-top: 45px;\r\n    padding-bottom: 45px;\r\n}\r\n.today_pic_book_con .whitebg {\r\n    background-color: #fff;\r\n    padding: 0px 20px 20px 20px ;\r\n    box-shadow:0 0 5px #9999996b;\r\n    line-height: 30px;\r\n    \r\n}\r\n.whitebg h4 {\r\n    padding-top: 25px;\r\n    padding-bottom: 15px;\r\n    font-size: 17px;\r\n    \r\n}\r\n#demo .wild {\r\n    margin-top: 105px;\r\n}\r\n#demo .wild img {\r\n    border:10px solid #fe768c; \r\n    border-top-left-radius: 14px;\r\n    border-bottom-left-radius: 14px;\r\n}\r\nimg.author_pic {\r\n    width: 100%;\r\n}\r\n.whitebg .readmore {\r\n   color:  #F6C14C;\r\n}\r\n.carousel-control-prev-icon,\r\n.carousel-control-next-icon {\r\n  height: 50px;\r\n  width: 50px;\r\n  outline: black;\r\n  background-size: 100%, 100%;\r\n  border-radius: 50%;\r\n  background-image: none;\r\n  background-color: #fff;\r\n}\r\n.carousel-control-next-icon:after\r\n{\r\n  content: '>';\r\n  font-size: 30px;\r\n  color: black;\r\n}\r\n.carousel-control-prev-icon:after {\r\n  content: '<';\r\n  font-size: 30px;\r\n  color: black;\r\n}\r\n.carousel-control-next, .carousel-control-prev {\r\n    width: 4%;\r\n}\r\n.carousel-control-prev-icon, .carousel-control-next-icon {\r\n    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;\r\n}\r\n.footer_custom .imgbg{\r\n    background-image:url('/assets/footer_bg.jpg');\r\n    width: 1300px;\r\n    padding-bottom: 70px;\r\n    height: 322px;\r\n    background-repeat: repeat;\r\n  }\r\n.footer_custom .img_allingment {\r\n    margin-top: -70px;\r\n}\r\n.footer_custom .space-evenly {\r\n    justify-content: space-evenly;\r\n}\r\n.imgbg h4 {\r\n    font-size: 26px;\r\n    font-weight: 800;\r\n    padding-bottom: 12px;\r\n}\r\n.imgbg p {\r\n    padding-bottom: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksY0FBYztJQUNkLHNCQUFzQjs7QUFFMUI7QUFHQTtJQUNJLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsV0FBVztBQUNmO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjtBQUdBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9CQUFvQjs7QUFFeEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxvQkFBb0I7O0FBRXhCO0FBRUE7SUFDSSxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7O0FBRTdCO0FBR0E7SUFDSSw4Q0FBOEM7SUFDOUMsV0FBVztJQUNYLG9CQUFvQjtFQUN0QjtBQUVBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4QjtBQUdBO0lBQ0ksc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUc1Qiw0QkFBNEI7SUFDNUIsaUJBQWlCOztBQUVyQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixlQUFlOztBQUVuQjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLCtCQUErQjtBQUNuQztBQUVBO0lBQ0ksV0FBVztBQUNmO0FBRUE7R0FDRyxlQUFlO0FBQ2xCO0FBRUE7O0VBRUUsWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjO0VBQ2QsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCO0FBRUE7O0VBRUUsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBSUE7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLGtEQUFrRDtBQUN0RDtBQUVBO0lBQ0ksNkNBQTZDO0lBQzdDLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLHlCQUF5QjtFQUMzQjtBQUVGO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtYmFubmVyIC5jb250ZW50IHtcclxuICAgIGxlZnQ6IDIxNnB4O1xyXG4gICAgdG9wOiAxMzhweDtcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkO1xyXG4gICAgd2lkdGg6IDM2MHB4O1xyXG59XHJcbi50b3AtYmFubmVyIC5jb250ZW50IGgyIHtcclxuICAgIGNvbG9yOiAjMmI0MzY4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxufVxyXG4udG9wLWJhbm5lciAuY29udGVudCBwIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gICAgcGFkZGluZy10b3A6IDE3cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogIzVkNzE4YztcclxufVxyXG4uZ2V0c3RhcnQge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZDMTRDO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgb3V0bGluZTogMHB4O1xyXG4gICAgd2lkdGg6IDI1MXB4O1xyXG59XHJcbi5nZXRzdGFydDpob3ZlciB7XHJcbiAgICBjb2xvcjogI0Y2QzE0QztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgIFxyXG59XHJcblxyXG5cclxuLm1hcF9jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hcF9jb250YWluZXIgaDIge1xyXG4gICAgY29sb3I6ICMyYjQzNjg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjhweDtcclxufVxyXG5cclxuLmhvd19pdF93b3JrX2NvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYzZjU7XHJcbiAgICBtaW4taGVpZ2h0OiA1OTZweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLmhvd19pdF93b3JrX2NvbnRhaW5lciBoMiB7XHJcbiAgICBjb2xvcjogIzJiNDM2ODtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0NXB4O1xyXG59XHJcblxyXG4uaG93X2l0X3dvcmtfY29udGFpbmVyIC5pbWcge1xyXG4gICAgcGFkZGluZzogMHB4IDAgMzBweCAwO1xyXG59XHJcblxyXG4uaG93X2l0X3dvcmtfY29udGFpbmVyIC5vbmVpbWcge1xyXG4gICAgcGFkZGluZzogMHB4IDAgMjBweCAwO1xyXG59XHJcblxyXG4uaG93X2l0X3dvcmtfY29udGFpbmVyIGg1IHtcclxuICAgIGNvbG9yOiAjMmI0MzY4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLndyaXRlX3lvdXJfY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjYTgzNztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ud3JpdGVfeW91cl9jb250YWluZXIgaDV7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuXHJcbn1cclxuXHJcbi53cml0ZV95b3VyX2NvbnRhaW5lciBwe1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuXHJcbn1cclxuXHJcbi53aGl0ZV9idXR0b24ge1xyXG4gICAgY29sb3I6ICNGNkMxNEM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgb3V0bGluZTogMHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDBweDtcclxuICAgIHdpZHRoOiAyNTFweDtcclxufVxyXG4ud2hpdGVfYnV0dG9uOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2QzE0QztcclxuICAgXHJcbn1cclxuXHJcblxyXG4udG9kYXlfcGljX2Jvb2tfY29ue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy9hc3NldHMvcGljX2JpZ19iZy5qcGcnKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDcwcHg7XHJcbiAgfVxyXG5cclxuICAudG9kYXlfcGljX2Jvb2tfY29uIGgyIHtcclxuICAgIGNvbG9yOiAjMmI0MzY4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIHBhZGRpbmctdG9wOiA0NXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQ1cHg7XHJcbn1cclxuXHJcblxyXG4udG9kYXlfcGljX2Jvb2tfY29uIC53aGl0ZWJnIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweCAyMHB4IDIwcHggO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDAgNXB4ICM5OTk5OTk2YjtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDVweCAjOTk5OTk5NmI7XHJcbiAgICBib3gtc2hhZG93OjAgMCA1cHggIzk5OTk5OTZiO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBcclxufVxyXG4ud2hpdGViZyBoNCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgXHJcbn0gXHJcblxyXG4jZGVtbyAud2lsZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDVweDtcclxufVxyXG4jZGVtbyAud2lsZCBpbWcge1xyXG4gICAgYm9yZGVyOjEwcHggc29saWQgI2ZlNzY4YzsgXHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTRweDtcclxufVxyXG5cclxuaW1nLmF1dGhvcl9waWMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi53aGl0ZWJnIC5yZWFkbW9yZSB7XHJcbiAgIGNvbG9yOiAgI0Y2QzE0QztcclxufSBcclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbixcclxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgb3V0bGluZTogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlLCAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbjphZnRlclxyXG57XHJcbiAgY29udGVudDogJz4nO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbjphZnRlciB7XHJcbiAgY29udGVudDogJzwnO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcblxyXG5cclxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dCwgLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XHJcbiAgICB3aWR0aDogNCU7XHJcbn1cclxuLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24ge1xyXG4gICAgYm94LXNoYWRvdzogMCAuNXJlbSAxcmVtIHJnYmEoMCwwLDAsLjE1KSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb290ZXJfY3VzdG9tIC5pbWdiZ3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcvYXNzZXRzL2Zvb3Rlcl9iZy5qcGcnKTtcclxuICAgIHdpZHRoOiAxMzAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNzBweDtcclxuICAgIGhlaWdodDogMzIycHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG4gIH1cclxuXHJcbi5mb290ZXJfY3VzdG9tIC5pbWdfYWxsaW5nbWVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtNzBweDtcclxufVxyXG5cclxuLmZvb3Rlcl9jdXN0b20gLnNwYWNlLWV2ZW5seSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuLmltZ2JnIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxuLmltZ2JnIHAge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/categories.service */ "./src/app/_services/categories.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");






var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService, category, authService) {
        this.userService = userService;
        this.category = category;
        this.authService = authService;
        this.loading = false;
        this.users = [];
        this.cats = [];
        this.countrycodes = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    //9945623307
    HomeComponent.prototype.ngOnInit = function () {
        var self = this;
        var code = '';
        this.category.getCounByStoryCount(code).subscribe(function (data) {
            self.value = data;
            function highlightRegionOfCountry(cc) {
                jQuery('#vmap').vectorMap('highlight', cc);
            }
            function unhighlightRegionOfCountry(cc) {
                jQuery('#vmap').vectorMap('unhighlight', cc);
            }
            var sample_data = { "af": "16.63", "al": "11.58", "dz": "158.97", "ao": "85.81", "ag": "1.1", "ar": "351.02", "am": "8.83", "au": "1219.72", "at": "366.26", "az": "52.17", "bs": "7.54", "bh": "21.73", "bd": "105.4", "bb": "3.96", "by": "52.89", "be": "461.33", "bz": "1.43", "bj": "6.49", "bt": "1.4", "bo": "19.18", "ba": "16.2", "bw": "12.5", "br": "2023.53", "bn": "11.96", "bg": "44.84", "bf": "8.67", "bi": "1.47", "kh": "11.36", "cm": "21.88", "ca": "1563.66", "cv": "1.57", "cf": "2.11", "td": "7.59", "cl": "199.18", "cn": "5745.13", "co": "283.11", "km": "0.56", "cd": "12.6", "cg": "11.88", "cr": "35.02", "ci": "22.38", "hr": "59.92", "cy": "22.75", "cz": "195.23", "dk": "304.56", "dj": "1.14", "dm": "0.38", "do": "50.87", "ec": "61.49", "eg": "216.83", "sv": "21.8", "gq": "14.55", "er": "2.25", "ee": "19.22", "et": "30.94", "fj": "3.15", "fi": "231.98", "fr": "2555.44", "ga": "12.56", "gm": "1.04", "ge": "11.23", "de": "3305.9", "gh": "18.06", "gr": "305.01", "gd": "0.65", "gt": "40.77", "gn": "4.34", "gw": "0.83", "gy": "2.2", "ht": "6.5", "hn": "15.34", "hk": "226.49", "hu": "132.28", "is": "12.77", "in": "1430.02", "id": "695.06", "ir": "337.9", "iq": "84.14", "ie": "204.14", "il": "201.25", "it": "2036.69", "jm": "13.74", "jp": "5390.9", "jo": "27.13", "kz": "129.76", "ke": "32.42", "ki": "0.15", "kr": "986.26", "undefined": "5.73", "kw": "117.32", "kg": "4.44", "la": "6.34", "lv": "23.39", "lb": "39.15", "ls": "1.8", "lr": "0.98", "ly": "77.91", "lt": "35.73", "lu": "52.43", "mk": "9.58", "mg": "8.33", "mw": "5.04", "my": "218.95", "mv": "1.43", "ml": "9.08", "mt": "7.8", "mr": "3.49", "mu": "9.43", "mx": "1004.04", "md": "5.36", "mn": "5.81", "me": "3.88", "ma": "91.7", "mz": "10.21", "mm": "35.65", "na": "11.45", "np": "15.11", "nl": "770.31", "nz": "138", "ni": "6.38", "ne": "5.6", "ng": "206.66", "no": "413.51", "om": "53.78", "pk": "174.79", "pa": "27.2", "pg": "8.81", "py": "17.17", "pe": "153.55", "ph": "189.06", "pl": "438.88", "pt": "223.7", "qa": "126.52", "ro": "158.39", "ru": "1476.91", "rw": "5.69", "ws": "0.55", "st": "0.19", "sa": "434.44", "sn": "12.66", "rs": "38.92", "sc": "0.92", "sl": "1.9", "sg": "217.38", "sk": "86.26", "si": "46.44", "sb": "0.67", "za": "354.41", "es": "1374.78", "lk": "48.24", "kn": "0.56", "lc": "1", "vc": "0.58", "sd": "65.93", "sr": "3.3", "sz": "3.17", "se": "444.59", "ch": "522.44", "sy": "59.63", "tw": "426.98", "tj": "5.58", "tz": "22.43", "th": "312.61", "tl": "0.62", "tg": "3.07", "to": "0.3", "tt": "21.2", "tn": "43.86", "tr": "729.05", "tm": 0, "ug": "17.12", "ua": "136.56", "ae": "239.65", "gb": "2258.57", "us": "14624.18", "uy": "40.71", "uz": "37.72", "vu": "0.72", "ve": "285.21", "vn": "101.99", "ye": "30.02", "zm": "15.69", "zw": "5.57" };
            jQuery(document).ready(function () {
                jQuery('#vmap').vectorMap({
                    map: 'world_en',
                    backgroundColor: '#fff',
                    color: '#ffffff',
                    hoverOpacity: 0.7,
                    selectedColor: '#666666',
                    enableZoom: false,
                    showTooltip: true,
                    values: sample_data,
                    scaleColors: ['#C8EEFF', '#006491'],
                    normalizeFunction: 'polynomial',
                    onLabelShow: function (event, label, code) {
                        //  alert(label[0].innerHTML)
                        var countryName = label[0].innerHTML;
                        console.log(code);
                        var content = countryName + "( No Writers)";
                        var countStories = self.value.data[code];
                        if (countStories) {
                            if (countStories > 1) {
                                content = countryName + "( " + countStories + " Writers )";
                            }
                            else {
                                content = countryName + "( " + countStories + " Writer )";
                            }
                        }
                        /*     let countStories=self.value[code];
                             let content;
                             if(countStories>1)
                             {
                                content=countStories+" Stories";
                             }else
                             {
                              content=countStories+" story";
                             }
                             if(countStories==0)
                             {
                                content=" No stories";
                             }
                             console.log(countStories);
                             console.log(countStories["in"]); */
                        var html = ['<table>',
                            '<tr>',
                            '<td>', content, ' </td>',
                            '</tr></table>'
                        ].join("");
                        label[0].innerHTML = html;
                    },
                });
            });
        });
        // console.log(this.countrycodes[0].au)
        //  this.loadAllUsers();
        this.getCateg();
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
    };
    HomeComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function () {
            _this.loadAllUsers();
        });
    };
    HomeComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (users) {
            _this.users = users;
        });
    };
    HomeComponent.prototype.getCateg = function () {
        var _this = this;
        this.category.getToken().subscribe(function (data) {
            _this.loading = true;
            //  alert(this.token);
            _this.token = data;
            _this.category.getAllC(_this.token.access_token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (cats) {
                _this.cats = cats;
            });
            //  this.alertService.success('Registration successful', true);
            //  this.router.navigate(['/home']);
        });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: _services_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"), styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _services_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/index.ts":
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "./src/app/login/index.ts":
/*!********************************!*\
  !*** ./src/app/login/index.ts ***!
  \********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/categories.service */ "./src/app/_services/categories.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__);










var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, userService, socialAuthService, router, authenticationService, category, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.userService = userService;
        this.socialAuthService = socialAuthService;
        this.router = router;
        this.authenticationService = authenticationService;
        this.category = category;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false); // {1}
        this.cats = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        //  this.getCateg();
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/wrtiestory';
    };
    LoginComponent.prototype.socialSignIn = function (socialPlatform) {
        var _this = this;
        var socialPlatformProvider;
        if (socialPlatform == "google") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__["GoogleLoginProvider"].PROVIDER_ID;
        }
        this.islogged = false;
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            console.log(socialPlatform + " sign in data : ", userData);
            // Now sign-in with userData
            // ...
            _this.formData1 = { 'name': userData.name,
                'email': userData.email,
                'path': userData.image };
            _this.userService.registergmail(_this.formData1, 1)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe(function (data) {
                var id = data;
                var nedata = { "id": id.data, "name": userData.name, "path": userData.image, "token": "fake-jwt-token" };
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(nedata));
                _this.loggedIn.next(true);
                _this.islogged = true;
                _this.router.navigateByUrl('/wrtiestory');
            }, function (error) {
                _this.alertService.error(error);
                _this.loading = false;
            });
        });
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.category.getToken().subscribe(function (data) {
            _this.token = data;
            // alert(this.token);
            _this.authenticationService.login(_this.f.email.value, _this.f.password.value, _this.token.access_token)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe(function (data) {
                _this.router.navigate([_this.returnUrl]);
            }, function (error) {
                _this.alertService.error(error);
                _this.loading = false;
            });
        });
    };
    LoginComponent.prototype.getCateg = function () {
        var _this = this;
        this.category.getToken().subscribe(function (data) {
            // alert(this.token);
            _this.token = data;
            _this.category.getAllC(_this.token.access_token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (cats) {
                _this.cats = cats;
            });
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: _services_categories_service__WEBPACK_IMPORTED_MODULE_6__["CategoriesService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html") }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            angular_6_social_login__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"], _services_categories_service__WEBPACK_IMPORTED_MODULE_6__["CategoriesService"],
            _services__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/my-profile/my-profile.component.css":
/*!*****************************************************!*\
  !*** ./src/app/my-profile/my-profile.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LXByb2ZpbGUvbXktcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/my-profile/my-profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/my-profile/my-profile.component.ts ***!
  \****************************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/categories.service */ "./src/app/_services/categories.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");






var ImageSnippet = /** @class */ (function () {
    function ImageSnippet(src, file) {
        this.src = src;
        this.file = file;
    }
    ImageSnippet.ctorParameters = function () { return [
        { type: String },
        { type: File }
    ]; };
    return ImageSnippet;
}());
var MyProfileComponent = /** @class */ (function () {
    function MyProfileComponent(formBuilder, alertService, imageService, userService, http) {
        this.formBuilder = formBuilder;
        this.alertService = alertService;
        this.imageService = imageService;
        this.userService = userService;
        this.http = http;
        this.getusers = [];
        this.new = [];
        this.loading = false;
        this.submitted = false;
        this.testUrl = "http://universitiesconnect.com/bongoswriters/api_1_0_0/Api";
        this.fileData = null;
    }
    MyProfileComponent.prototype.ngOnInit = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.loading = true;
        this.getById();
        this.imgURL = "http://ssl.gstatic.com/accounts/ui/avatar_2x.png";
        this.myprofile = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            mobile_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
        });
        // console.log(this.getusers);
    };
    Object.defineProperty(MyProfileComponent.prototype, "f", {
        get: function () { return this.myprofile.controls; },
        enumerable: true,
        configurable: true
    });
    MyProfileComponent.prototype.fileProgress = function (fileInput) {
        this.fileData = fileInput.target.files[0];
    };
    MyProfileComponent.prototype.processFile = function (imageInput) {
        var _this = this;
        this.preview(imageInput.files);
        var file = imageInput.files[0];
        var reader = new FileReader();
        reader.addEventListener('load', function (event) {
            _this.selectedFile = new ImageSnippet(event.target.result, file);
            var token = "6f25ef8193e3f77676d1f73b8eef9c3c5e7b89e0";
            _this.filedatanew = _this.selectedFile.file;
            console.log(_this.filedatanew);
            /*this.imageService.uploadImage(this.selectedFile.file,token).subscribe(
              (res) => {
              
              },
              (err) => {
              
              }) */
        });
        reader.readAsDataURL(file);
    };
    MyProfileComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.myprofile.invalid) {
            return;
        }
        /* const formData = new FormData();
         formData.append('data', this.myprofile.value);
         formData.append('file', this.fileData);
         let token="6f25ef8193e3f77676d1f73b8eef9c3c5e7b89e0";
         this.http.post(this.testUrl+"/profileUpdate?access_token="+token, this.filedatanew)
           .subscribe(res => {
             console.log(res);
             alert('SUCCESS !!');
           }) */
        var formData = new FormData();
        formData.append("user_id", this.currentUser.id);
        formData.append('name', this.myprofile.get("name").value);
        formData.append('email', this.myprofile.get("email").value);
        formData.append('mobile_number', this.myprofile.get("mobile_number").value);
        formData.append('file', this.filedatanew);
        this.imageService.uploadImage(formData).subscribe(function (res) {
            _this.alertService.success('Updated successful', true);
            // this.router.navigate(['/myprofile']);
        }, function (err) {
        });
    };
    MyProfileComponent.prototype.preview = function (files) {
        var _this = this;
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
        reader.onload = function (_event) {
            _this.imgURL = reader.result;
        };
    };
    MyProfileComponent.prototype.getById = function () {
        var _this = this;
        var id = this.currentUser.id;
        this.userService.getById(id).subscribe(function (res) {
            _this.loading = false;
            _this.getusers = res.data;
            _this.imgURL = _this.getusers.profile_path;
            console.log("exit" + res.data);
            _this.myprofile = _this.formBuilder.group({
                name: [_this.getusers.name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                dob: [_this.getusers.DOB, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                email: [_this.getusers.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
                mobile_number: [_this.getusers.mobile_number, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            });
            //  this.imgURL=this.getusers.profile_path;
            // this.router.navigate(['/myprofile']);
        }, function (err) {
        });
    };
    MyProfileComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
        { type: _services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    MyProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-profile',
            template: __webpack_require__(/*! raw-loader!./my-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/my-profile/my-profile.component.html"),
            styles: [__webpack_require__(/*! ./my-profile.component.css */ "./src/app/my-profile/my-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"],
            _services__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], MyProfileComponent);
    return MyProfileComponent;
}());



/***/ }),

/***/ "./src/app/my-stories/my-stories.component.css":
/*!*****************************************************!*\
  !*** ./src/app/my-stories/my-stories.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n      .customdd {\r\n        background-color: #fff;\r\n        color: #000;\r\n        border-radius: 24px;\r\n        border: 1px solid #afabab;\r\n        outline: none;\r\n        padding: 7px 15px;\r\n        min-width: 128px;\r\n        text-align: left;\r\n      }\r\n\r\n      .img-content {\r\n        background-color: #fff;\r\n        min-height:190px;\r\n      }\r\n\r\n      .img-content-center {\r\n      top: 42px;\r\n      bottom: 50px;\r\n      right: 15px;\r\n      position: absolute;\r\n      width: 353px;\r\n      padding: 10px;\r\n      border-radius: 4px;\r\n    }\r\n\r\n      img.bordercolor1 {\r\n      border: 16px solid #77adff;\r\n    }\r\n\r\n      img.bordercolor2 {\r\n      border: 16px solid #ff778d;\r\n    }\r\n\r\n      img.bordercolor3 {\r\n      border: 16px solid #decf29;\r\n    }\r\n\r\n      img.bordercolor4 {\r\n      border: 16px solid #af7cfc;\r\n    }\r\n\r\n      .position-relative.imgs {\r\n    width: 50%;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n      .imgs img {\r\n    width: 61%;\r\n    border-radius: 10px;\r\n}\r\n\r\n      .user-pic {width: 50px; float: left;}\r\n\r\n      .user-pic img {\r\n  border-radius: 50%;\r\n  height: 40px;\r\n  width: 40px;\r\n  float: left;\r\n}\r\n\r\n      .social_icons {\r\n    position: absolute;\r\n    right: 14px;\r\n    width: 250px;\r\n    bottom: 0px;\r\n    min-height: 34px;\r\n    padding-left: 27px;\r\n    padding-top: 5px;\r\n}\r\n\r\n      .social_icons .share {\r\n    float: right;\r\n    position: absolute;\r\n    right: 0;\r\n    background-color: #e9ecef;\r\n    height: 30px;\r\n    width: 30px;\r\n    text-align: center;\r\n    border-radius: 24px;\r\n    padding-top: 2px;\r\n    border: 1px solid #c2c0c0;\r\n}\r\n\r\n      .social_icons .view {\r\n  color: gray;\r\n}\r\n\r\n      .social_icons .heart {\r\n  color: red;\r\n}\r\n\r\n      .social_icons div {\r\n  margin: 0 10px 0 0;\r\n}\r\n\r\n      .dropdown-toggle::after {\r\n    display: none;\r\n}\r\n\r\n      .dropdown i {\r\n    font-size: 11px;\r\n    float: right;\r\n    padding-top: 6px;\r\n}\r\n\r\n      .story_feed {\r\n  font-size: 26px;\r\n\r\n}\r\n\r\n      .auther {\r\n  color: gray;\r\n\r\n}\r\n\r\n      .read {\r\n    display: flex;\r\n    color: #f5ab28;\r\n    font-size: 13px;\r\n    align-items: center;\r\n    align-content: center;\r\n}\r\n\r\n      .read i {\r\n  font-size: 11px;\r\n  padding-top: 2px;\r\n\r\n}\r\n\r\n      .user_name {\r\n  float: left;\r\n}\r\n\r\n      .user_name p {\r\n    margin-bottom: 4px;\r\n}\r\n\r\n      .user_name p:nth-child(2) {\r\n   font-size: 11px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktc3Rvcmllcy9teS1zdG9yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0Usc0JBQXNCO1FBQ3RCLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIseUJBQXlCO1FBQ3pCLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtNQUNsQjs7TUFFQTtRQUNFLHNCQUFzQjtRQUN0QixnQkFBZ0I7TUFDbEI7O01BRUY7TUFDRSxTQUFTO01BQ1QsWUFBWTtNQUNaLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLGFBQWE7TUFDYixrQkFBa0I7SUFDcEI7O01BRUE7TUFDRSwwQkFBMEI7SUFDNUI7O01BRUE7TUFDRSwwQkFBMEI7SUFDNUI7O01BRUE7TUFDRSwwQkFBMEI7SUFDNUI7O01BRUE7TUFDRSwwQkFBMEI7SUFDNUI7O01BRUo7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztNQUdBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7TUFDQSxXQUFXLFdBQVcsRUFBRSxXQUFXLENBQUM7O01BQ3BDO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztBQUNiOztNQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztNQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCOztNQUVBO0VBQ0UsV0FBVztBQUNiOztNQUVBO0VBQ0UsVUFBVTtBQUNaOztNQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztNQUVBO0lBQ0ksYUFBYTtBQUNqQjs7TUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztNQUVBO0VBQ0UsZUFBZTs7QUFFakI7O01BRUE7RUFDRSxXQUFXOztBQUViOztNQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7TUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7O0FBRWxCOztNQUVBO0VBQ0UsV0FBVztBQUNiOztNQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztNQUVBO0dBQ0csZUFBZTtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL215LXN0b3JpZXMvbXktc3Rvcmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICAgIC5jdXN0b21kZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhZmFiYWI7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiA3cHggMTVweDtcclxuICAgICAgICBtaW4td2lkdGg6IDEyOHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pbWctY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBtaW4taGVpZ2h0OjE5MHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgLmltZy1jb250ZW50LWNlbnRlciB7XHJcbiAgICAgIHRvcDogNDJweDtcclxuICAgICAgYm90dG9tOiA1MHB4O1xyXG4gICAgICByaWdodDogMTVweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMzUzcHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIH1cclxuXHJcbiAgICBpbWcuYm9yZGVyY29sb3IxIHtcclxuICAgICAgYm9yZGVyOiAxNnB4IHNvbGlkICM3N2FkZmY7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nLmJvcmRlcmNvbG9yMiB7XHJcbiAgICAgIGJvcmRlcjogMTZweCBzb2xpZCAjZmY3NzhkO1xyXG4gICAgfVxyXG5cclxuICAgIGltZy5ib3JkZXJjb2xvcjMge1xyXG4gICAgICBib3JkZXI6IDE2cHggc29saWQgI2RlY2YyOTtcclxuICAgIH1cclxuXHJcbiAgICBpbWcuYm9yZGVyY29sb3I0IHtcclxuICAgICAgYm9yZGVyOiAxNnB4IHNvbGlkICNhZjdjZmM7XHJcbiAgICB9XHJcblxyXG4ucG9zaXRpb24tcmVsYXRpdmUuaW1ncyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuXHJcbi5pbWdzIGltZyB7XHJcbiAgICB3aWR0aDogNjElO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4udXNlci1waWMge3dpZHRoOiA1MHB4OyBmbG9hdDogbGVmdDt9XHJcbi51c2VyLXBpYyBpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5zb2NpYWxfaWNvbnMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE0cHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDM0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI3cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcblxyXG4uc29jaWFsX2ljb25zIC5zaGFyZSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MyYzBjMDtcclxufVxyXG5cclxuLnNvY2lhbF9pY29ucyAudmlldyB7XHJcbiAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5zb2NpYWxfaWNvbnMgLmhlYXJ0IHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uc29jaWFsX2ljb25zIGRpdiB7XHJcbiAgbWFyZ2luOiAwIDEwcHggMCAwO1xyXG59XHJcblxyXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZHJvcGRvd24gaSB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG59XHJcblxyXG4uc3RvcnlfZmVlZCB7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG5cclxufVxyXG5cclxuLmF1dGhlciB7XHJcbiAgY29sb3I6IGdyYXk7XHJcblxyXG59XHJcblxyXG4ucmVhZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgY29sb3I6ICNmNWFiMjg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucmVhZCBpIHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgcGFkZGluZy10b3A6IDJweDtcclxuXHJcbn1cclxuXHJcbi51c2VyX25hbWUge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59IFxyXG5cclxuLnVzZXJfbmFtZSBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxufVxyXG5cclxuLnVzZXJfbmFtZSBwOm50aC1jaGlsZCgyKSB7XHJcbiAgIGZvbnQtc2l6ZTogMTFweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/my-stories/my-stories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/my-stories/my-stories.component.ts ***!
  \****************************************************/
/*! exports provided: MyStoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyStoriesComponent", function() { return MyStoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/categories.service */ "./src/app/_services/categories.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");






var MyStoriesComponent = /** @class */ (function () {
    function MyStoriesComponent(categoriesService, userService, router, http) {
        this.categoriesService = categoriesService;
        this.userService = userService;
        this.router = router;
        this.http = http;
        this.allstories = [];
        this.loading = false;
        this.allgroups = [];
        this.display = 'none';
    }
    MyStoriesComponent.prototype.ngOnInit = function () {
        this.getAllStories();
        this.getAllGroups();
    };
    MyStoriesComponent.prototype.openModal = function (event) {
        this.event = event;
        this.display = 'block';
    };
    MyStoriesComponent.prototype.sendmailGroup = function (groupid, storyid) {
        var _this = this;
        this.loading = true;
        this.categoriesService.sendmailGroup(groupid, storyid).subscribe(function (res) {
            console.log(res);
            _this.onCloseHandled();
            _this.loading = false;
            // this.router.navigate(['/myprofile']);
            _this.getAllGroups();
        }, function (err) {
            _this.loading = false;
        });
    };
    MyStoriesComponent.prototype.onCloseHandled = function () {
        this.display = 'none';
    };
    MyStoriesComponent.prototype.getAllStories = function () {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.loading = true;
        this.categoriesService.getStoriesById(currentUser.id).subscribe(function (res) {
            _this.allstories = res.data;
            console.log(_this.allstories);
            _this.loading = false;
            // this.router.navigate(['/myprofile']);
        }, function (err) {
            _this.loading = false;
        });
    };
    MyStoriesComponent.prototype.getAllGroups = function () {
        var _this = this;
        this.loading = false;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.loading = true;
        this.categoriesService.getAllGroups(currentUser.id).subscribe(function (res) {
            _this.allgroups = res.data;
            console.log(_this.allgroups);
            _this.loading = false;
            // this.router.navigate(['/myprofile']);
        }, function (err) {
            _this.loading = false;
        });
    };
    MyStoriesComponent.ctorParameters = function () { return [
        { type: _services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    MyStoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-stories',
            template: __webpack_require__(/*! raw-loader!./my-stories.component.html */ "./node_modules/raw-loader/index.js!./src/app/my-stories/my-stories.component.html"),
            styles: [__webpack_require__(/*! ./my-stories.component.css */ "./src/app/my-stories/my-stories.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"],
            _services__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], MyStoriesComponent);
    return MyStoriesComponent;
}());



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*\r\n{\r\n  font-family: 'PT Sans Caption', sans-serif, 'arial', 'Times New Roman';\r\n}\r\n/* Error Page */\r\n.error .clip .shadow\r\n    {\r\n        height: 180px;  /*Contrall*/\r\n    }\r\n.error .clip:nth-of-type(2) .shadow\r\n    {\r\n        width: 130px;   /*Contrall play with javascript*/ \r\n    }\r\n.error .clip:nth-of-type(1) .shadow, .error .clip:nth-of-type(3) .shadow\r\n    {\r\n        width: 250px; /*Contrall*/\r\n    }\r\n.error .digit\r\n    {\r\n        width: 150px;   /*Contrall*/\r\n        height: 150px;  /*Contrall*/\r\n        line-height: 150px; /*Contrall*/\r\n        font-size: 120px;\r\n        font-weight: bold;\r\n    }\r\n.error h2   /*Contrall*/\r\n    {\r\n        font-size: 32px;\r\n    }\r\n.error .msg /*Contrall*/\r\n    {\r\n        top: -190px;\r\n        left: 30%;\r\n        width: 80px;\r\n        height: 80px;\r\n        line-height: 80px;\r\n        font-size: 32px;\r\n    }\r\n.error span.triangle    /*Contrall*/\r\n    {\r\n        top: 70%;\r\n        right: 0%;\r\n        border-left: 20px solid #535353;\r\n        border-top: 15px solid transparent;\r\n        border-bottom: 15px solid transparent;\r\n    }\r\n.error .container-error-404\r\n    {\r\n      margin-top: 1%;\r\n        position: relative;\r\n        height: 250px;\r\n        padding-top: 40px;\r\n    }\r\n.error .container-error-404 .clip\r\n    {\r\n        display: inline-block;\r\n        -webkit-transform: skew(-45deg);\r\n                transform: skew(-45deg);\r\n    }\r\n.error .clip .shadow\r\n    {\r\n        \r\n        overflow: hidden;\r\n    }\r\n.error .clip:nth-of-type(2) .shadow\r\n    {\r\n        overflow: hidden;\r\n        position: relative;\r\n        box-shadow: inset 20px 0px 20px -15px rgba(150, 150, 150,0.8), 20px 0px 20px -15px rgba(150, 150, 150,0.8);\r\n    }\r\n.error .clip:nth-of-type(3) .shadow:after, .error .clip:nth-of-type(1) .shadow:after\r\n    {\r\n        content: \"\";\r\n        position: absolute;\r\n        right: -8px;\r\n        bottom: 0px;\r\n        z-index: 9999;\r\n        height: 100%;\r\n        width: 10px;\r\n        background: linear-gradient(90deg, transparent, rgba(173,173,173, 0.8), transparent);\r\n        border-radius: 50%;\r\n    }\r\n.error .clip:nth-of-type(3) .shadow:after\r\n    {\r\n        left: -8px;\r\n    }\r\n.error .digit\r\n    {\r\n        position: relative;\r\n        top: 8%;\r\n        color: white;\r\n        background: #A9D7E1 ;\r\n        border-radius: 50%;\r\n        display: inline-block;\r\n        -webkit-transform: skew(45deg);\r\n                transform: skew(45deg);\r\n    }\r\n.error .clip:nth-of-type(2) .digit\r\n    {\r\n        left: -10%;\r\n    }\r\n.error .clip:nth-of-type(1) .digit\r\n    {\r\n        right: -20%;\r\n    }\r\n.error .clip:nth-of-type(3) .digit\r\n    {\r\n        left: -20%;\r\n    }\r\n.error h2\r\n    {\r\n        color: #A2A2A2;\r\n        font-weight: bold;\r\n        padding-bottom: 20px;\r\n    }\r\n.error .msg\r\n    {\r\n        position: relative;\r\n        z-index: 9999;\r\n        display: block;\r\n        background: #535353;\r\n        color: #A2A2A2;\r\n        border-radius: 50%;\r\n        font-style: italic;\r\n    }\r\n.error .triangle\r\n    {\r\n        position: absolute;\r\n        z-index: 999;\r\n        -webkit-transform: rotate(45deg);\r\n                transform: rotate(45deg);\r\n        content: \"\";\r\n        width: 0; \r\n        height: 0; \r\n    }\r\n/* Error Page */\r\n@media(max-width: 767px)\r\n{\r\n    /* Error Page */\r\n            .error .clip .shadow\r\n            {\r\n                height: 100px;  /*Contrall*/\r\n            }\r\n            .error .clip:nth-of-type(2) .shadow\r\n            {\r\n                width: 80px;   /*Contrall play with javascript*/ \r\n            }\r\n            .error .clip:nth-of-type(1) .shadow, .error .clip:nth-of-type(3) .shadow\r\n            {\r\n                width: 100px; /*Contrall*/\r\n            }\r\n            .error .digit\r\n            {\r\n                width: 80px;   /*Contrall*/\r\n                height: 80px;  /*Contrall*/\r\n                line-height: 80px; /*Contrall*/\r\n                font-size: 52px;\r\n            }\r\n            .error h2   /*Contrall*/\r\n            {\r\n                font-size: 24px;\r\n            }\r\n            .error .msg /*Contrall*/\r\n            {\r\n                top: -110px;\r\n                left: 15%;\r\n                width: 40px;\r\n                height: 40px;\r\n                line-height: 40px;\r\n                font-size: 18px;\r\n            }\r\n            .error span.triangle    /*Contrall*/\r\n            {\r\n                top: 70%;\r\n                right: -3%;\r\n                border-left: 10px solid #535353;\r\n                border-top: 8px solid transparent;\r\n                border-bottom: 8px solid transparent;\r\n            }\r\n.error .container-error-404\r\n  {\r\n    height: 150px;\r\n  }\r\n        /* Error Page */\r\n}\r\n/*--------------------------------------------Framework --------------------------------*/\r\n.overlay { position: relative; z-index: 20; }\r\n/*done*/\r\n.ground-color { background: white; }\r\n/*done*/\r\n.item-bg-color { background: #EAEAEA }\r\n/*done*/\r\n/* Padding Section*/\r\n.padding-top { padding-top: 10px; }\r\n/*done*/\r\n.padding-bottom { padding-bottom: 10px; }\r\n/*done*/\r\n.padding-vertical { padding-top: 10px; padding-bottom: 10px; }\r\n.padding-horizontal { padding-left: 10px; padding-right: 10px; }\r\n.padding-all { padding: 10px; }\r\n/*done*/\r\n.no-padding-left { padding-left: 0px; }\r\n/*done*/\r\n.no-padding-right { padding-right: 0px; }\r\n/*done*/\r\n.no-vertical-padding { padding-top: 0px; padding-bottom: 0px; }\r\n.no-horizontal-padding { padding-left: 0px; padding-right: 0px; }\r\n.no-padding { padding: 0px; }\r\n/*done*/\r\n/* Padding Section*/\r\n/* Margin section */\r\n.margin-top { margin-top: 10px; }\r\n/*done*/\r\n.margin-bottom { margin-bottom: 10px; }\r\n/*done*/\r\n.margin-right { margin-right: 10px; }\r\n/*done*/\r\n.margin-left { margin-left: 10px; }\r\n/*done*/\r\n.margin-horizontal { margin-left: 10px; margin-right: 10px; }\r\n/*done*/\r\n.margin-vertical { margin-top: 10px; margin-bottom: 10px; }\r\n/*done*/\r\n.margin-all { margin: 10px; }\r\n/*done*/\r\n.no-margin { margin: 0px; }\r\n/*done*/\r\n.no-vertical-margin { margin-top: 0px; margin-bottom: 0px; }\r\n.no-horizontal-margin { margin-left: 0px; margin-right: 0px; }\r\n.inside-col-shrink { margin: 0px 20px; }\r\n/*done - For the inside sections that has also Title section*/\r\n/* Margin section */\r\nhr\r\n    { margin: 0px; padding: 0px; border-top: 1px dashed #999; }\r\n/*--------------------------------------------FrameWork------------------------*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZW5vdGZvdW5kL3BhZ2Vub3Rmb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLHNFQUFzRTtBQUN4RTtBQUNBLGVBQWU7QUFDWDs7UUFFSSxhQUFhLEdBQUcsV0FBVztJQUMvQjtBQUNBOztRQUVJLFlBQVksSUFBSSxnQ0FBZ0M7SUFDcEQ7QUFDQTs7UUFFSSxZQUFZLEVBQUUsV0FBVztJQUM3QjtBQUNBOztRQUVJLFlBQVksSUFBSSxXQUFXO1FBQzNCLGFBQWEsR0FBRyxXQUFXO1FBQzNCLGtCQUFrQixFQUFFLFdBQVc7UUFDL0IsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjtBQUNBOztRQUVJLGVBQWU7SUFDbkI7QUFDQTs7UUFFSSxXQUFXO1FBQ1gsU0FBUztRQUNULFdBQVc7UUFDWCxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7QUFDQTs7UUFFSSxRQUFRO1FBQ1IsU0FBUztRQUNULCtCQUErQjtRQUMvQixrQ0FBa0M7UUFDbEMscUNBQXFDO0lBQ3pDO0FBR0E7O01BRUUsY0FBYztRQUNaLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsaUJBQWlCO0lBQ3JCO0FBQ0E7O1FBRUkscUJBQXFCO1FBQ3JCLCtCQUF1QjtnQkFBdkIsdUJBQXVCO0lBQzNCO0FBQ0E7OztRQUdJLGdCQUFnQjtJQUNwQjtBQUNBOztRQUVJLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsMEdBQTBHO0lBQzlHO0FBRUE7O1FBRUksV0FBVztRQUNYLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsV0FBVztRQUNYLGFBQWE7UUFDYixZQUFZO1FBQ1osV0FBVztRQUNYLG9GQUFvRjtRQUNwRixrQkFBa0I7SUFDdEI7QUFDQTs7UUFFSSxVQUFVO0lBQ2Q7QUFDQTs7UUFFSSxrQkFBa0I7UUFDbEIsT0FBTztRQUNQLFlBQVk7UUFDWixvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLHFCQUFxQjtRQUNyQiw4QkFBc0I7Z0JBQXRCLHNCQUFzQjtJQUMxQjtBQUNBOztRQUVJLFVBQVU7SUFDZDtBQUNBOztRQUVJLFdBQVc7SUFDZjtBQUFDOztRQUVHLFVBQVU7SUFDZDtBQUNBOztRQUVJLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsb0JBQW9CO0lBQ3hCO0FBQ0E7O1FBRUksa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsa0JBQWtCO0lBQ3RCO0FBQ0E7O1FBRUksa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixnQ0FBd0I7Z0JBQXhCLHdCQUF3QjtRQUN4QixXQUFXO1FBQ1gsUUFBUTtRQUNSLFNBQVM7SUFDYjtBQUVKLGVBQWU7QUFDZjs7SUFFSSxlQUFlO1lBQ1A7O2dCQUVJLGFBQWEsR0FBRyxXQUFXO1lBQy9CO1lBQ0E7O2dCQUVJLFdBQVcsSUFBSSxnQ0FBZ0M7WUFDbkQ7WUFDQTs7Z0JBRUksWUFBWSxFQUFFLFdBQVc7WUFDN0I7WUFDQTs7Z0JBRUksV0FBVyxJQUFJLFdBQVc7Z0JBQzFCLFlBQVksR0FBRyxXQUFXO2dCQUMxQixpQkFBaUIsRUFBRSxXQUFXO2dCQUM5QixlQUFlO1lBQ25CO1lBQ0E7O2dCQUVJLGVBQWU7WUFDbkI7WUFDQTs7Z0JBRUksV0FBVztnQkFDWCxTQUFTO2dCQUNULFdBQVc7Z0JBQ1gsWUFBWTtnQkFDWixpQkFBaUI7Z0JBQ2pCLGVBQWU7WUFDbkI7WUFDQTs7Z0JBRUksUUFBUTtnQkFDUixVQUFVO2dCQUNWLCtCQUErQjtnQkFDL0IsaUNBQWlDO2dCQUNqQyxvQ0FBb0M7WUFDeEM7QUFDWjs7SUFFSSxhQUFhO0VBQ2Y7UUFDTSxlQUFlO0FBQ3ZCO0FBRUEseUZBQXlGO0FBRXpGLFdBQVcsa0JBQWtCLEVBQUUsV0FBVyxFQUFFO0FBQUUsT0FBTztBQUNqRCxnQkFBZ0IsaUJBQWlCLEVBQUU7QUFBRyxPQUFPO0FBQzdDLGlCQUFpQixvQkFBb0I7QUFBRSxPQUFPO0FBRTlDLG1CQUFtQjtBQUNmLGVBQWUsaUJBQWlCLEVBQUU7QUFBRSxPQUFPO0FBQzNDLGtCQUFrQixvQkFBb0IsRUFBRTtBQUFJLE9BQU87QUFDbkQsb0JBQW9CLGlCQUFpQixFQUFFLG9CQUFvQixFQUFFO0FBQzdELHNCQUFzQixrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRTtBQUMvRCxlQUFlLGFBQWEsRUFBRTtBQUFJLE9BQU87QUFFekMsbUJBQW1CLGlCQUFpQixFQUFFO0FBQUssT0FBTztBQUNsRCxvQkFBb0Isa0JBQWtCLEVBQUU7QUFBSSxPQUFPO0FBQ25ELHVCQUF1QixnQkFBZ0IsRUFBRSxtQkFBbUIsRUFBRTtBQUM5RCx5QkFBeUIsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUU7QUFDaEUsY0FBYyxZQUFZLEVBQUU7QUFBSSxPQUFPO0FBQzNDLG1CQUFtQjtBQUVuQixtQkFBbUI7QUFDZixjQUFjLGdCQUFnQixFQUFFO0FBQUksT0FBTztBQUMzQyxpQkFBaUIsbUJBQW1CLEVBQUU7QUFBRSxPQUFPO0FBQy9DLGdCQUFnQixrQkFBa0IsRUFBRTtBQUFFLE9BQU87QUFDN0MsZUFBZSxpQkFBaUIsRUFBRTtBQUFFLE9BQU87QUFDM0MscUJBQXFCLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFO0FBQUUsT0FBTztBQUNyRSxtQkFBbUIsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUU7QUFBRSxPQUFPO0FBQ25FLGNBQWMsWUFBWSxFQUFFO0FBQUksT0FBTztBQUN2QyxhQUFhLFdBQVcsRUFBRTtBQUFJLE9BQU87QUFFckMsc0JBQXNCLGVBQWUsRUFBRSxrQkFBa0IsRUFBRTtBQUMzRCx3QkFBd0IsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUU7QUFFN0QscUJBQXFCLGdCQUFnQixFQUFFO0FBQUssNkRBQTZEO0FBQzdHLG1CQUFtQjtBQUVuQjtNQUNFLFdBQVcsRUFBRSxZQUFZLEVBQUUsMkJBQTJCLEVBQUU7QUFDOUQsZ0ZBQWdGIiwiZmlsZSI6InNyYy9hcHAvcGFnZW5vdGZvdW5kL3BhZ2Vub3Rmb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKlxyXG57XHJcbiAgZm9udC1mYW1pbHk6ICdQVCBTYW5zIENhcHRpb24nLCBzYW5zLXNlcmlmLCAnYXJpYWwnLCAnVGltZXMgTmV3IFJvbWFuJztcclxufVxyXG4vKiBFcnJvciBQYWdlICovXHJcbiAgICAuZXJyb3IgLmNsaXAgLnNoYWRvd1xyXG4gICAge1xyXG4gICAgICAgIGhlaWdodDogMTgwcHg7ICAvKkNvbnRyYWxsKi9cclxuICAgIH1cclxuICAgIC5lcnJvciAuY2xpcDpudGgtb2YtdHlwZSgyKSAuc2hhZG93XHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDEzMHB4OyAgIC8qQ29udHJhbGwgcGxheSB3aXRoIGphdmFzY3JpcHQqLyBcclxuICAgIH1cclxuICAgIC5lcnJvciAuY2xpcDpudGgtb2YtdHlwZSgxKSAuc2hhZG93LCAuZXJyb3IgLmNsaXA6bnRoLW9mLXR5cGUoMykgLnNoYWRvd1xyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDsgLypDb250cmFsbCovXHJcbiAgICB9XHJcbiAgICAuZXJyb3IgLmRpZ2l0XHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4OyAgIC8qQ29udHJhbGwqL1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7ICAvKkNvbnRyYWxsKi9cclxuICAgICAgICBsaW5lLWhlaWdodDogMTUwcHg7IC8qQ29udHJhbGwqL1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAuZXJyb3IgaDIgICAvKkNvbnRyYWxsKi9cclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICB9XHJcbiAgICAuZXJyb3IgLm1zZyAvKkNvbnRyYWxsKi9cclxuICAgIHtcclxuICAgICAgICB0b3A6IC0xOTBweDtcclxuICAgICAgICBsZWZ0OiAzMCU7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIH1cclxuICAgIC5lcnJvciBzcGFuLnRyaWFuZ2xlICAgIC8qQ29udHJhbGwqL1xyXG4gICAge1xyXG4gICAgICAgIHRvcDogNzAlO1xyXG4gICAgICAgIHJpZ2h0OiAwJTtcclxuICAgICAgICBib3JkZXItbGVmdDogMjBweCBzb2xpZCAjNTM1MzUzO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLmVycm9yIC5jb250YWluZXItZXJyb3ItNDA0XHJcbiAgICB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLmVycm9yIC5jb250YWluZXItZXJyb3ItNDA0IC5jbGlwXHJcbiAgICB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2tldygtNDVkZWcpO1xyXG4gICAgfVxyXG4gICAgLmVycm9yIC5jbGlwIC5zaGFkb3dcclxuICAgIHtcclxuICAgICAgICBcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgLmVycm9yIC5jbGlwOm50aC1vZi10eXBlKDIpIC5zaGFkb3dcclxuICAgIHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAyMHB4IDBweCAyMHB4IC0xNXB4IHJnYmEoMTUwLCAxNTAsIDE1MCwwLjgpLCAyMHB4IDBweCAyMHB4IC0xNXB4IHJnYmEoMTUwLCAxNTAsIDE1MCwwLjgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZXJyb3IgLmNsaXA6bnRoLW9mLXR5cGUoMykgLnNoYWRvdzphZnRlciwgLmVycm9yIC5jbGlwOm50aC1vZi10eXBlKDEpIC5zaGFkb3c6YWZ0ZXJcclxuICAgIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogLThweDtcclxuICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50LCByZ2JhKDE3MywxNzMsMTczLCAwLjgpLCB0cmFuc3BhcmVudCk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG4gICAgLmVycm9yIC5jbGlwOm50aC1vZi10eXBlKDMpIC5zaGFkb3c6YWZ0ZXJcclxuICAgIHtcclxuICAgICAgICBsZWZ0OiAtOHB4O1xyXG4gICAgfVxyXG4gICAgLmVycm9yIC5kaWdpdFxyXG4gICAge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IDglO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjQTlEN0UxIDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2tldyg0NWRlZyk7XHJcbiAgICB9XHJcbiAgICAuZXJyb3IgLmNsaXA6bnRoLW9mLXR5cGUoMikgLmRpZ2l0XHJcbiAgICB7XHJcbiAgICAgICAgbGVmdDogLTEwJTtcclxuICAgIH1cclxuICAgIC5lcnJvciAuY2xpcDpudGgtb2YtdHlwZSgxKSAuZGlnaXRcclxuICAgIHtcclxuICAgICAgICByaWdodDogLTIwJTtcclxuICAgIH0uZXJyb3IgLmNsaXA6bnRoLW9mLXR5cGUoMykgLmRpZ2l0XHJcbiAgICB7XHJcbiAgICAgICAgbGVmdDogLTIwJTtcclxuICAgIH0gICAgXHJcbiAgICAuZXJyb3IgaDJcclxuICAgIHtcclxuICAgICAgICBjb2xvcjogI0EyQTJBMjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICAgIC5lcnJvciAubXNnXHJcbiAgICB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzUzNTM1MztcclxuICAgICAgICBjb2xvcjogI0EyQTJBMjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgfVxyXG4gICAgLmVycm9yIC50cmlhbmdsZVxyXG4gICAge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgd2lkdGg6IDA7IFxyXG4gICAgICAgIGhlaWdodDogMDsgXHJcbiAgICB9XHJcblxyXG4vKiBFcnJvciBQYWdlICovXHJcbkBtZWRpYShtYXgtd2lkdGg6IDc2N3B4KVxyXG57XHJcbiAgICAvKiBFcnJvciBQYWdlICovXHJcbiAgICAgICAgICAgIC5lcnJvciAuY2xpcCAuc2hhZG93XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7ICAvKkNvbnRyYWxsKi9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZXJyb3IgLmNsaXA6bnRoLW9mLXR5cGUoMikgLnNoYWRvd1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODBweDsgICAvKkNvbnRyYWxsIHBsYXkgd2l0aCBqYXZhc2NyaXB0Ki8gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmVycm9yIC5jbGlwOm50aC1vZi10eXBlKDEpIC5zaGFkb3csIC5lcnJvciAuY2xpcDpudGgtb2YtdHlwZSgzKSAuc2hhZG93XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDsgLypDb250cmFsbCovXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmVycm9yIC5kaWdpdFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODBweDsgICAvKkNvbnRyYWxsKi9cclxuICAgICAgICAgICAgICAgIGhlaWdodDogODBweDsgIC8qQ29udHJhbGwqL1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDgwcHg7IC8qQ29udHJhbGwqL1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5lcnJvciBoMiAgIC8qQ29udHJhbGwqL1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmVycm9yIC5tc2cgLypDb250cmFsbCovXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRvcDogLTExMHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMTUlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZXJyb3Igc3Bhbi50cmlhbmdsZSAgICAvKkNvbnRyYWxsKi9cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdG9wOiA3MCU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLTMlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgIzUzNTM1MztcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgfVxyXG4uZXJyb3IgLmNvbnRhaW5lci1lcnJvci00MDRcclxuICB7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gIH1cclxuICAgICAgICAvKiBFcnJvciBQYWdlICovXHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1GcmFtZXdvcmsgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLm92ZXJsYXkgeyBwb3NpdGlvbjogcmVsYXRpdmU7IHotaW5kZXg6IDIwOyB9IC8qZG9uZSovXHJcbiAgICAuZ3JvdW5kLWNvbG9yIHsgYmFja2dyb3VuZDogd2hpdGU7IH0gIC8qZG9uZSovXHJcbiAgICAuaXRlbS1iZy1jb2xvciB7IGJhY2tncm91bmQ6ICNFQUVBRUEgfSAvKmRvbmUqL1xyXG4gICAgXHJcbiAgICAvKiBQYWRkaW5nIFNlY3Rpb24qL1xyXG4gICAgICAgIC5wYWRkaW5nLXRvcCB7IHBhZGRpbmctdG9wOiAxMHB4OyB9IC8qZG9uZSovXHJcbiAgICAgICAgLnBhZGRpbmctYm90dG9tIHsgcGFkZGluZy1ib3R0b206IDEwcHg7IH0gICAvKmRvbmUqL1xyXG4gICAgICAgIC5wYWRkaW5nLXZlcnRpY2FsIHsgcGFkZGluZy10b3A6IDEwcHg7IHBhZGRpbmctYm90dG9tOiAxMHB4OyB9XHJcbiAgICAgICAgLnBhZGRpbmctaG9yaXpvbnRhbCB7IHBhZGRpbmctbGVmdDogMTBweDsgcGFkZGluZy1yaWdodDogMTBweDsgfVxyXG4gICAgICAgIC5wYWRkaW5nLWFsbCB7IHBhZGRpbmc6IDEwcHg7IH0gICAvKmRvbmUqL1xyXG5cclxuICAgICAgICAubm8tcGFkZGluZy1sZWZ0IHsgcGFkZGluZy1sZWZ0OiAwcHg7IH0gICAgLypkb25lKi9cclxuICAgICAgICAubm8tcGFkZGluZy1yaWdodCB7IHBhZGRpbmctcmlnaHQ6IDBweDsgfSAgIC8qZG9uZSovXHJcbiAgICAgICAgLm5vLXZlcnRpY2FsLXBhZGRpbmcgeyBwYWRkaW5nLXRvcDogMHB4OyBwYWRkaW5nLWJvdHRvbTogMHB4OyB9XHJcbiAgICAgICAgLm5vLWhvcml6b250YWwtcGFkZGluZyB7IHBhZGRpbmctbGVmdDogMHB4OyBwYWRkaW5nLXJpZ2h0OiAwcHg7IH1cclxuICAgICAgICAubm8tcGFkZGluZyB7IHBhZGRpbmc6IDBweDsgfSAgIC8qZG9uZSovXHJcbiAgICAvKiBQYWRkaW5nIFNlY3Rpb24qL1xyXG5cclxuICAgIC8qIE1hcmdpbiBzZWN0aW9uICovXHJcbiAgICAgICAgLm1hcmdpbi10b3AgeyBtYXJnaW4tdG9wOiAxMHB4OyB9ICAgLypkb25lKi9cclxuICAgICAgICAubWFyZ2luLWJvdHRvbSB7IG1hcmdpbi1ib3R0b206IDEwcHg7IH0gLypkb25lKi9cclxuICAgICAgICAubWFyZ2luLXJpZ2h0IHsgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9IC8qZG9uZSovXHJcbiAgICAgICAgLm1hcmdpbi1sZWZ0IHsgbWFyZ2luLWxlZnQ6IDEwcHg7IH0gLypkb25lKi9cclxuICAgICAgICAubWFyZ2luLWhvcml6b250YWwgeyBtYXJnaW4tbGVmdDogMTBweDsgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9IC8qZG9uZSovXHJcbiAgICAgICAgLm1hcmdpbi12ZXJ0aWNhbCB7IG1hcmdpbi10b3A6IDEwcHg7IG1hcmdpbi1ib3R0b206IDEwcHg7IH0gLypkb25lKi9cclxuICAgICAgICAubWFyZ2luLWFsbCB7IG1hcmdpbjogMTBweDsgfSAgIC8qZG9uZSovXHJcbiAgICAgICAgLm5vLW1hcmdpbiB7IG1hcmdpbjogMHB4OyB9ICAgLypkb25lKi9cclxuXHJcbiAgICAgICAgLm5vLXZlcnRpY2FsLW1hcmdpbiB7IG1hcmdpbi10b3A6IDBweDsgbWFyZ2luLWJvdHRvbTogMHB4OyB9XHJcbiAgICAgICAgLm5vLWhvcml6b250YWwtbWFyZ2luIHsgbWFyZ2luLWxlZnQ6IDBweDsgbWFyZ2luLXJpZ2h0OiAwcHg7IH1cclxuXHJcbiAgICAgICAgLmluc2lkZS1jb2wtc2hyaW5rIHsgbWFyZ2luOiAwcHggMjBweDsgfSAgICAvKmRvbmUgLSBGb3IgdGhlIGluc2lkZSBzZWN0aW9ucyB0aGF0IGhhcyBhbHNvIFRpdGxlIHNlY3Rpb24qLyBcclxuICAgIC8qIE1hcmdpbiBzZWN0aW9uICovXHJcblxyXG4gICAgaHJcclxuICAgIHsgbWFyZ2luOiAwcHg7IHBhZGRpbmc6IDBweDsgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCAjOTk5OyB9XHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1GcmFtZVdvcmstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qLyJdfQ== */"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! raw-loader!./pagenotfound.component.html */ "./node_modules/raw-loader/index.js!./src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/pagenotfound/pagenotfound.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/register/index.ts":
/*!***********************************!*\
  !*** ./src/app/register/index.ts ***!
  \***********************************/
/*! exports provided: Profile, RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component */ "./src/app/register/register.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return _register_component__WEBPACK_IMPORTED_MODULE_0__["Profile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"]; });




/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: Profile, RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/categories.service */ "./src/app/_services/categories.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_helpers/must-match.validator */ "./src/app/_helpers/must-match.validator.ts");








var Profile = /** @class */ (function () {
    function Profile(prId, prName) {
        this.prId = prId;
        this.prName = prName;
    }
    Profile.ctorParameters = function () { return [
        { type: String },
        { type: String }
    ]; };
    return Profile;
}());

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, userService, alertService, category) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.category = category;
        this.allProfiles = [
            new Profile('m', 'Male'),
            new Profile('f', 'Female'),
        ];
        this.loading = false;
        this.submitted = false;
        this.users = [];
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            mobile_number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10)]],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            state: ['Andhrapradesh'],
            zip: ['517644'],
            geolat: [''],
            geolng: [''],
            //  username: ['newtest', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        }, {
            validator: Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_7__["MustMatch"])('password', 'confirmPassword')
        });
    };
    RegisterComponent.prototype.handleAddressChange = function (address) {
        // if(address.photos && address.photos.length > 0){
        //     console.dir(address.photos[0].getUrl({maxHeight:500,maxWidth:500}));
        //  }
        // let x = this.getComponentByType(address,"street_number");
        // this.location=address.formatted_address;
        for (var i = 0; i < address.address_components.length; i++) {
            var addressType = address.address_components[i].types[0];
            // for the country, get the country code (the "short name") also
            if (addressType == "country") {
                this.location = address.address_components[i].short_name;
            }
        }
        console.log(this.location);
        this.geolat = address.geometry.location.lat();
        this.geolng = address.geometry.location.lng();
        console.log(address.geometry.location.lng());
        console.log(address.geometry.location.lat());
        //  console.log(address.geometry.location.toJSON());
        // console.log(address.geometry.viewport.getNorthEast());
        // Do some stuff
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        console.log(this.registerForm.value);
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.category.getToken().subscribe(function (data) {
            //  alert(this.token);
            _this.token = data;
            var newUser = _this.registerForm.value;
            _this.registerForm.get("geolng").setValue(_this.geolng);
            _this.registerForm.get("geolat").setValue(_this.geolat);
            _this.registerForm.get("country").setValue(_this.location);
            _this.userService.register(_this.registerForm.value, _this.token.access_token)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe(function (data) {
                _this.alertService.success('Registration successful', true);
                _this.router.navigate(['/login']);
            }, function (error) {
                _this.alertService.error(error);
                _this.loading = false;
            });
        });
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
        { type: _services_categories_service__WEBPACK_IMPORTED_MODULE_5__["CategoriesService"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html") }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
            _services_categories_service__WEBPACK_IMPORTED_MODULE_5__["CategoriesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/select-your-story/select-your-story.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/select-your-story/select-your-story.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".share_story_container {\n    width: 88%;\n}\n .share_story {\n      font-size: 26px;\n}\n .Slect_bg_container {\n   bottom: 0px;\n}\n .Slect_bg_container .comic {\n    font-size: 26px;\n    font-weight: 800;\n    color: #fff;\n}\n .custom-checkbox .custom-control-input:checked~.custom-control-label::before {\n    background-color: #2b4368;\n  }\n .custom-control-input:checked~.custom-control-label::before {\n    color: #fff;\n    background-color: #2b4368;\n  }\n .continue {\n    color: #fff;\n    background-color: #F6C14C;\n    border-radius: 40px;\n    text-decoration: none;\n    border: 0px;\n    outline: 0px;\n    padding: 0px 50px;\n    height: 44px;\n  }\n .continue:hover {\n    color: #F6C14C;\n    background-color: #fff;\n   \n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZWN0LXlvdXItc3Rvcnkvc2VsZWN0LXlvdXItc3RvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZDtDQUNDO01BQ0ssZUFBZTtBQUNyQjtDQUdBO0dBQ0csV0FBVztBQUNkO0NBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtDQUVBO0lBQ0kseUJBQXlCO0VBQzNCO0NBRUE7SUFDRSxXQUFXO0lBQ1gseUJBQXlCO0VBQzNCO0NBRUE7SUFDRSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtFQUNkO0NBQ0E7SUFDRSxjQUFjO0lBQ2Qsc0JBQXNCOztFQUV4QiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdC15b3VyLXN0b3J5L3NlbGVjdC15b3VyLXN0b3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hhcmVfc3RvcnlfY29udGFpbmVyIHtcbiAgICB3aWR0aDogODglO1xufVxuIC5zaGFyZV9zdG9yeSB7XG4gICAgICBmb250LXNpemU6IDI2cHg7XG59XG5cblxuLlNsZWN0X2JnX2NvbnRhaW5lciB7XG4gICBib3R0b206IDBweDtcbn1cblxuLlNsZWN0X2JnX2NvbnRhaW5lciAuY29taWMge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2Vkfi5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmI0MzY4O1xuICB9XG4gIFxuICAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZH4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiNDM2ODtcbiAgfVxuXG4gIC5jb250aW51ZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2QzE0QztcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBib3JkZXI6IDBweDtcbiAgICBvdXRsaW5lOiAwcHg7XG4gICAgcGFkZGluZzogMHB4IDUwcHg7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICB9XG4gIC5jb250aW51ZTpob3ZlciB7XG4gICAgY29sb3I6ICNGNkMxNEM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgIFxuICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/select-your-story/select-your-story.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/select-your-story/select-your-story.component.ts ***!
  \******************************************************************/
/*! exports provided: SelectYourStoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectYourStoryComponent", function() { return SelectYourStoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/categories.service */ "./src/app/_services/categories.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");








var SelectYourStoryComponent = /** @class */ (function () {
    function SelectYourStoryComponent(formBuilder, alertService, imageService, userService, router, http) {
        this.formBuilder = formBuilder;
        this.alertService = alertService;
        this.imageService = imageService;
        this.userService = userService;
        this.router = router;
        this.http = http;
        this.loading = false;
        this.submitted = false;
        this.getusers = [];
        this.cats = [];
        this.testUrl = "http://universitiesconnect.com/bongoswriters/api_1_0_0/Api";
        this.users = [];
    }
    SelectYourStoryComponent.prototype.ngOnInit = function () {
        this.getCateg();
    };
    SelectYourStoryComponent.prototype.getCateg = function () {
        var _this = this;
        this.imageService.getToken().subscribe(function (data) {
            _this.loading = true;
            //  alert(this.token);
            _this.token = data;
            _this.imageService.getAllC(_this.token.access_token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (cats) {
                var all = cats;
                _this.allcat = cats;
                _this.cats = all.data;
                console.log(_this.cats);
            });
            //  this.alertService.success('Registration successful', true);
            //  this.router.navigate(['/home']);
        });
    };
    SelectYourStoryComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
        { type: _services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    SelectYourStoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select-your-story',
            template: __webpack_require__(/*! raw-loader!./select-your-story.component.html */ "./node_modules/raw-loader/index.js!./src/app/select-your-story/select-your-story.component.html"),
            styles: [__webpack_require__(/*! ./select-your-story.component.css */ "./src/app/select-your-story/select-your-story.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _services__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
            _services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"],
            _services__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SelectYourStoryComponent);
    return SelectYourStoryComponent;
}());



/***/ }),

/***/ "./src/app/single-story/single-story.component.css":
/*!*********************************************************!*\
  !*** ./src/app/single-story/single-story.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".share_story_container {\r\n    width: 88%;\r\n}\r\n  .share_story_container .share_story {\r\n      font-size: 26px;\r\n}\r\n  .user-pic {float: left;}\r\n  .user-pic img {\r\n  border-radius: 50%;\r\n  height: 70px;\r\n  width: 70px;\r\n  float: left;\r\n}\r\n  .auther {\r\n    color: gray;\r\n}\r\n  .user_name {\r\n    float: left;\r\n    padding-left: 14px;\r\n    margin-top: 10px;\r\n  }\r\n  .user_name p {\r\n      margin-bottom: 4px;\r\n  }\r\n  .share {\r\n    background-color: #e9ecef;\r\n    height: 30px;\r\n    width: 30px;\r\n    text-align: center;\r\n    border-radius: 24px;\r\n    padding-top: 2px;\r\n    border: 1px solid #c2c0c0;\r\n    margin-right: 6px;\r\n}\r\n  .next {\r\n    color: #F6C14C;\r\n    border-radius: 40px;\r\n    text-decoration: none;\r\n    background-repeat: repeat-y;\r\n    border: 1px solid #F6C14C;\r\n    outline: 0px;\r\n    background-color: #fff;\r\n    \r\n   \r\n}\r\n  .next:hover {\r\n    color: #F6C14C;\r\n   \r\n}\r\n  .previous {\r\n    color: #000;\r\n    background-color: #fff;\r\n    border-radius: 40px;\r\n    text-decoration: none;\r\n    background-repeat: repeat-y;\r\n    border: 1px solid #afafaf;\r\n    outline: 0px;\r\n    \r\n    \r\n}\r\n  .getstart:hover {\r\n    color: #000;\r\n   \r\n   \r\n}\r\n  a{\r\n    color: #000;\r\n}\r\n  /* ck */\r\n  /*\r\n * CKEditor 5 (v12.3.1) content styles.\r\n * Generated on Mon, 19 Aug 2019 12:01:17 GMT.\r\n * For more information, check out https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/content-styles.html\r\n */\r\n  :root {\r\n    --ck-image-style-spacing: 1.5em;\r\n}\r\n  /* ckeditor5-image/theme/image.css */\r\n  .ck-content .image {\r\n    display: table;\r\n    clear: both;\r\n    text-align: center;\r\n    margin: 1em auto\r\n}\r\n  /* ckeditor5-image/theme/image.css */\r\n  .ck-content .image > img {\r\n    display: block;\r\n    margin: 0 auto;\r\n    max-width: 100%;\r\n    min-width: 50px;\r\n}\r\n  /* ckeditor5-image/theme/imagecaption.css */\r\n  .ck-content .image > figcaption {\r\n    display: table-caption;\r\n    caption-side: bottom;\r\n    word-break: break-word;\r\n    color: hsl(0, 0%, 20%);\r\n    background-color: hsl(0, 0%, 97%);\r\n    padding: .6em;\r\n    font-size: .75em;\r\n    outline-offset: -1px;\r\n}\r\n  /* ckeditor5-image/theme/imageresize.css */\r\n  .ck-content .image.image_resized {\r\n    max-width: 100%;\r\n    display: block;\r\n    box-sizing: border-box\r\n}\r\n  /* ckeditor5-image/theme/imageresize.css */\r\n  .ck-content .image.image_resized img {\r\n    width: 100%;\r\n}\r\n  /* ckeditor5-image/theme/imageresize.css */\r\n  .ck-content .image.image_resized > figcaption {\r\n    display: block;\r\n}\r\n  /* ckeditor5-media-embed/theme/mediaembed.css */\r\n  .ck-content .media {\r\n    clear: both;\r\n    margin: 1em 0;\r\n    display: block;\r\n    min-width: 15em;\r\n}\r\n  /* ckeditor5-table/theme/table.css */\r\n  .ck-content .table {\r\n    margin: 1em auto;\r\n    display: table\r\n}\r\n  /* ckeditor5-table/theme/table.css */\r\n  .ck-content .table table {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n    border: 1px double hsl(0, 0%, 70%)\r\n}\r\n  /* ckeditor5-table/theme/table.css */\r\n  .ck-content .table table td,\r\n.ck-content .table table th {\r\n    min-width: 2em;\r\n    padding: .4em;\r\n    border-color: hsl(0, 0%, 85%);\r\n}\r\n  /* ckeditor5-table/theme/table.css */\r\n  .ck-content .table table td,\r\n.ck-content .table table th {\r\n    min-width: 2em;\r\n    padding: .4em;\r\n    border-color: hsl(0, 0%, 85%);\r\n}\r\n  /* ckeditor5-table/theme/table.css */\r\n  .ck-content .table table th {\r\n    font-weight: bold;\r\n    background: hsl(0, 0%, 98%);\r\n}\r\n  /* ckeditor5-basic-styles/theme/code.css */\r\n  .ck-content code {\r\n    background-color: hsla(0, 0%, 78%, 0.3);\r\n    padding: .15em;\r\n    border-radius: 2px;\r\n}\r\n  /* ckeditor5-image/theme/imagestyle.css */\r\n  .ck-content .image-style-side:not(.image_resized), .ck-content .image-style-align-left:not(.image_resized), .ck-content .image-style-align-center:not(.image_resized), .ck-content .image-style-align-right:not(.image_resized) {\r\n    max-width: 50%;\r\n}\r\n  /* ckeditor5-image/theme/imagestyle.css */\r\n  .ck-content .image-style-side:not(.image_resized), .ck-content .image-style-align-left:not(.image_resized), .ck-content .image-style-align-center:not(.image_resized), .ck-content .image-style-align-right:not(.image_resized) {\r\n    max-width: 50%;\r\n}\r\n  /* ckeditor5-image/theme/imagestyle.css */\r\n  .ck-content .image-style-side:not(.image_resized), .ck-content .image-style-align-left:not(.image_resized), .ck-content .image-style-align-center:not(.image_resized), .ck-content .image-style-align-right:not(.image_resized) {\r\n    max-width: 50%;\r\n}\r\n  /* ckeditor5-image/theme/imagestyle.css */\r\n  .ck-content .image-style-side:not(.image_resized), .ck-content .image-style-align-left:not(.image_resized), .ck-content .image-style-align-center:not(.image_resized), .ck-content .image-style-align-right:not(.image_resized) {\r\n    max-width: 50%;\r\n}\r\n  /* ckeditor5-image/theme/imagestyle.css */\r\n  .ck-content .image-style-side {\r\n    float: right;\r\n    margin-left: var(--ck-image-style-spacing);\r\n}\r\n  /* ckeditor5-image/theme/imagestyle.css */\r\n  .ck-content .image-style-align-left {\r\n    float: left;\r\n    margin-right: var(--ck-image-style-spacing);\r\n}\r\n  /* ckeditor5-image/theme/imagestyle.css */\r\n  .ck-content .image-style-align-center {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n  /* ckeditor5-image/theme/imagestyle.css */\r\n  .ck-content .image-style-align-right {\r\n    float: right;\r\n    margin-left: var(--ck-image-style-spacing);\r\n}\r\n  /* ckeditor5-block-quote/theme/blockquote.css */\r\n  .ck-content blockquote {\r\n    overflow: hidden;\r\n    padding-right: 1.5em;\r\n    padding-left: 1.5em;\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n    font-style: italic;\r\n    border-left: solid 5px hsl(0, 0%, 80%);\r\n}\r\n  /* ckeditor5-block-quote/theme/blockquote.css */\r\n  .ck-content[dir=\"rtl\"] blockquote {\r\n    border-left: 0;\r\n    border-right: solid 5px hsl(0, 0%, 80%);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2luZ2xlLXN0b3J5L3NpbmdsZS1zdG9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkO0VBQ0U7TUFDSSxlQUFlO0FBQ3JCO0VBRUEsV0FBVyxXQUFXLENBQUM7RUFFdkI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0FBQ2I7RUFFQTtJQUNJLFdBQVc7QUFDZjtFQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7RUFFQTtNQUNJLGtCQUFrQjtFQUN0QjtFQUVEO0lBQ0cseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjtFQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osc0JBQXNCOzs7QUFHMUI7RUFFQTtJQUNJLGNBQWM7O0FBRWxCO0VBRUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixZQUFZOzs7QUFHaEI7RUFDQTtJQUNJLFdBQVc7OztBQUdmO0VBQ0E7SUFDSSxXQUFXO0FBQ2Y7RUFDQSxPQUFPO0VBQ1A7Ozs7RUFJRTtFQUVEO0lBQ0csK0JBQStCO0FBQ25DO0VBRUEsb0NBQW9DO0VBQ3BDO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEI7QUFDSjtFQUNBLG9DQUFvQztFQUNwQztJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7QUFDbkI7RUFDQSwyQ0FBMkM7RUFDM0M7SUFDSSxzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCO0VBQ0EsMENBQTBDO0VBQzFDO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZDtBQUNKO0VBQ0EsMENBQTBDO0VBQzFDO0lBQ0ksV0FBVztBQUNmO0VBQ0EsMENBQTBDO0VBQzFDO0lBQ0ksY0FBYztBQUNsQjtFQUNBLCtDQUErQztFQUMvQztJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsY0FBYztJQUNkLGVBQWU7QUFDbkI7RUFDQSxvQ0FBb0M7RUFDcEM7SUFDSSxnQkFBZ0I7SUFDaEI7QUFDSjtFQUNBLG9DQUFvQztFQUNwQztJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakI7QUFDSjtFQUNBLG9DQUFvQztFQUNwQzs7SUFFSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQztFQUNBLG9DQUFvQztFQUNwQzs7SUFFSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQztFQUNBLG9DQUFvQztFQUNwQztJQUNJLGlCQUFpQjtJQUNqQiwyQkFBMkI7QUFDL0I7RUFDQSwwQ0FBMEM7RUFDMUM7SUFDSSx1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtFQUNBLHlDQUF5QztFQUN6QztJQUNJLGNBQWM7QUFDbEI7RUFDQSx5Q0FBeUM7RUFDekM7SUFDSSxjQUFjO0FBQ2xCO0VBQ0EseUNBQXlDO0VBQ3pDO0lBQ0ksY0FBYztBQUNsQjtFQUNBLHlDQUF5QztFQUN6QztJQUNJLGNBQWM7QUFDbEI7RUFDQSx5Q0FBeUM7RUFDekM7SUFDSSxZQUFZO0lBQ1osMENBQTBDO0FBQzlDO0VBQ0EseUNBQXlDO0VBQ3pDO0lBQ0ksV0FBVztJQUNYLDJDQUEyQztBQUMvQztFQUNBLHlDQUF5QztFQUN6QztJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7RUFDQSx5Q0FBeUM7RUFDekM7SUFDSSxZQUFZO0lBQ1osMENBQTBDO0FBQzlDO0VBQ0EsK0NBQStDO0VBQy9DO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsc0NBQXNDO0FBQzFDO0VBQ0EsK0NBQStDO0VBQy9DO0lBQ0ksY0FBYztJQUNkLHVDQUF1QztBQUMzQyIsImZpbGUiOiJzcmMvYXBwL3NpbmdsZS1zdG9yeS9zaW5nbGUtc3RvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaGFyZV9zdG9yeV9jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDg4JTtcclxufVxyXG4gIC5zaGFyZV9zdG9yeV9jb250YWluZXIgLnNoYXJlX3N0b3J5IHtcclxuICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG59XHJcblxyXG4udXNlci1waWMge2Zsb2F0OiBsZWZ0O31cclxuXHJcbi51c2VyLXBpYyBpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5hdXRoZXIge1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi51c2VyX25hbWUge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH0gXHJcbiAgXHJcbiAgLnVzZXJfbmFtZSBwIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gIH1cclxuXHJcbiAuc2hhcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzJjMGMwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbn1cclxuXHJcbi5uZXh0IHtcclxuICAgIGNvbG9yOiAjRjZDMTRDO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGNkMxNEM7XHJcbiAgICBvdXRsaW5lOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgXHJcbiAgIFxyXG59XHJcblxyXG4ubmV4dDpob3ZlciB7XHJcbiAgICBjb2xvcjogI0Y2QzE0QztcclxuICAgXHJcbn1cclxuXHJcbi5wcmV2aW91cyB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FmYWZhZjtcclxuICAgIG91dGxpbmU6IDBweDtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuLmdldHN0YXJ0OmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICBcclxuICAgXHJcbn1cclxuYXtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcbi8qIGNrICovXHJcbi8qXHJcbiAqIENLRWRpdG9yIDUgKHYxMi4zLjEpIGNvbnRlbnQgc3R5bGVzLlxyXG4gKiBHZW5lcmF0ZWQgb24gTW9uLCAxOSBBdWcgMjAxOSAxMjowMToxNyBHTVQuXHJcbiAqIEZvciBtb3JlIGluZm9ybWF0aW9uLCBjaGVjayBvdXQgaHR0cHM6Ly9ja2VkaXRvci5jb20vZG9jcy9ja2VkaXRvcjUvbGF0ZXN0L2J1aWxkcy9ndWlkZXMvaW50ZWdyYXRpb24vY29udGVudC1zdHlsZXMuaHRtbFxyXG4gKi9cclxuXHJcbiA6cm9vdCB7XHJcbiAgICAtLWNrLWltYWdlLXN0eWxlLXNwYWNpbmc6IDEuNWVtO1xyXG59XHJcblxyXG4vKiBja2VkaXRvcjUtaW1hZ2UvdGhlbWUvaW1hZ2UuY3NzICovXHJcbi5jay1jb250ZW50IC5pbWFnZSB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxZW0gYXV0b1xyXG59XHJcbi8qIGNrZWRpdG9yNS1pbWFnZS90aGVtZS9pbWFnZS5jc3MgKi9cclxuLmNrLWNvbnRlbnQgLmltYWdlID4gaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDUwcHg7XHJcbn1cclxuLyogY2tlZGl0b3I1LWltYWdlL3RoZW1lL2ltYWdlY2FwdGlvbi5jc3MgKi9cclxuLmNrLWNvbnRlbnQgLmltYWdlID4gZmlnY2FwdGlvbiB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jYXB0aW9uO1xyXG4gICAgY2FwdGlvbi1zaWRlOiBib3R0b207XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgY29sb3I6IGhzbCgwLCAwJSwgMjAlKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgOTclKTtcclxuICAgIHBhZGRpbmc6IC42ZW07XHJcbiAgICBmb250LXNpemU6IC43NWVtO1xyXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0xcHg7XHJcbn1cclxuLyogY2tlZGl0b3I1LWltYWdlL3RoZW1lL2ltYWdlcmVzaXplLmNzcyAqL1xyXG4uY2stY29udGVudCAuaW1hZ2UuaW1hZ2VfcmVzaXplZCB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3hcclxufVxyXG4vKiBja2VkaXRvcjUtaW1hZ2UvdGhlbWUvaW1hZ2VyZXNpemUuY3NzICovXHJcbi5jay1jb250ZW50IC5pbWFnZS5pbWFnZV9yZXNpemVkIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4vKiBja2VkaXRvcjUtaW1hZ2UvdGhlbWUvaW1hZ2VyZXNpemUuY3NzICovXHJcbi5jay1jb250ZW50IC5pbWFnZS5pbWFnZV9yZXNpemVkID4gZmlnY2FwdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4vKiBja2VkaXRvcjUtbWVkaWEtZW1iZWQvdGhlbWUvbWVkaWFlbWJlZC5jc3MgKi9cclxuLmNrLWNvbnRlbnQgLm1lZGlhIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgbWFyZ2luOiAxZW0gMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWluLXdpZHRoOiAxNWVtO1xyXG59XHJcbi8qIGNrZWRpdG9yNS10YWJsZS90aGVtZS90YWJsZS5jc3MgKi9cclxuLmNrLWNvbnRlbnQgLnRhYmxlIHtcclxuICAgIG1hcmdpbjogMWVtIGF1dG87XHJcbiAgICBkaXNwbGF5OiB0YWJsZVxyXG59XHJcbi8qIGNrZWRpdG9yNS10YWJsZS90aGVtZS90YWJsZS5jc3MgKi9cclxuLmNrLWNvbnRlbnQgLnRhYmxlIHRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIGJvcmRlcjogMXB4IGRvdWJsZSBoc2woMCwgMCUsIDcwJSlcclxufVxyXG4vKiBja2VkaXRvcjUtdGFibGUvdGhlbWUvdGFibGUuY3NzICovXHJcbi5jay1jb250ZW50IC50YWJsZSB0YWJsZSB0ZCxcclxuLmNrLWNvbnRlbnQgLnRhYmxlIHRhYmxlIHRoIHtcclxuICAgIG1pbi13aWR0aDogMmVtO1xyXG4gICAgcGFkZGluZzogLjRlbTtcclxuICAgIGJvcmRlci1jb2xvcjogaHNsKDAsIDAlLCA4NSUpO1xyXG59XHJcbi8qIGNrZWRpdG9yNS10YWJsZS90aGVtZS90YWJsZS5jc3MgKi9cclxuLmNrLWNvbnRlbnQgLnRhYmxlIHRhYmxlIHRkLFxyXG4uY2stY29udGVudCAudGFibGUgdGFibGUgdGgge1xyXG4gICAgbWluLXdpZHRoOiAyZW07XHJcbiAgICBwYWRkaW5nOiAuNGVtO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBoc2woMCwgMCUsIDg1JSk7XHJcbn1cclxuLyogY2tlZGl0b3I1LXRhYmxlL3RoZW1lL3RhYmxlLmNzcyAqL1xyXG4uY2stY29udGVudCAudGFibGUgdGFibGUgdGgge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDk4JSk7XHJcbn1cclxuLyogY2tlZGl0b3I1LWJhc2ljLXN0eWxlcy90aGVtZS9jb2RlLmNzcyAqL1xyXG4uY2stY29udGVudCBjb2RlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDc4JSwgMC4zKTtcclxuICAgIHBhZGRpbmc6IC4xNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcbi8qIGNrZWRpdG9yNS1pbWFnZS90aGVtZS9pbWFnZXN0eWxlLmNzcyAqL1xyXG4uY2stY29udGVudCAuaW1hZ2Utc3R5bGUtc2lkZTpub3QoLmltYWdlX3Jlc2l6ZWQpLCAuY2stY29udGVudCAuaW1hZ2Utc3R5bGUtYWxpZ24tbGVmdDpub3QoLmltYWdlX3Jlc2l6ZWQpLCAuY2stY29udGVudCAuaW1hZ2Utc3R5bGUtYWxpZ24tY2VudGVyOm5vdCguaW1hZ2VfcmVzaXplZCksIC5jay1jb250ZW50IC5pbWFnZS1zdHlsZS1hbGlnbi1yaWdodDpub3QoLmltYWdlX3Jlc2l6ZWQpIHtcclxuICAgIG1heC13aWR0aDogNTAlO1xyXG59XHJcbi8qIGNrZWRpdG9yNS1pbWFnZS90aGVtZS9pbWFnZXN0eWxlLmNzcyAqL1xyXG4uY2stY29udGVudCAuaW1hZ2Utc3R5bGUtc2lkZTpub3QoLmltYWdlX3Jlc2l6ZWQpLCAuY2stY29udGVudCAuaW1hZ2Utc3R5bGUtYWxpZ24tbGVmdDpub3QoLmltYWdlX3Jlc2l6ZWQpLCAuY2stY29udGVudCAuaW1hZ2Utc3R5bGUtYWxpZ24tY2VudGVyOm5vdCguaW1hZ2VfcmVzaXplZCksIC5jay1jb250ZW50IC5pbWFnZS1zdHlsZS1hbGlnbi1yaWdodDpub3QoLmltYWdlX3Jlc2l6ZWQpIHtcclxuICAgIG1heC13aWR0aDogNTAlO1xyXG59XHJcbi8qIGNrZWRpdG9yNS1pbWFnZS90aGVtZS9pbWFnZXN0eWxlLmNzcyAqL1xyXG4uY2stY29udGVudCAuaW1hZ2Utc3R5bGUtc2lkZTpub3QoLmltYWdlX3Jlc2l6ZWQpLCAuY2stY29udGVudCAuaW1hZ2Utc3R5bGUtYWxpZ24tbGVmdDpub3QoLmltYWdlX3Jlc2l6ZWQpLCAuY2stY29udGVudCAuaW1hZ2Utc3R5bGUtYWxpZ24tY2VudGVyOm5vdCguaW1hZ2VfcmVzaXplZCksIC5jay1jb250ZW50IC5pbWFnZS1zdHlsZS1hbGlnbi1yaWdodDpub3QoLmltYWdlX3Jlc2l6ZWQpIHtcclxuICAgIG1heC13aWR0aDogNTAlO1xyXG59XHJcbi8qIGNrZWRpdG9yNS1pbWFnZS90aGVtZS9pbWFnZXN0eWxlLmNzcyAqL1xyXG4uY2stY29udGVudCAuaW1hZ2Utc3R5bGUtc2lkZTpub3QoLmltYWdlX3Jlc2l6ZWQpLCAuY2stY29udGVudCAuaW1hZ2Utc3R5bGUtYWxpZ24tbGVmdDpub3QoLmltYWdlX3Jlc2l6ZWQpLCAuY2stY29udGVudCAuaW1hZ2Utc3R5bGUtYWxpZ24tY2VudGVyOm5vdCguaW1hZ2VfcmVzaXplZCksIC5jay1jb250ZW50IC5pbWFnZS1zdHlsZS1hbGlnbi1yaWdodDpub3QoLmltYWdlX3Jlc2l6ZWQpIHtcclxuICAgIG1heC13aWR0aDogNTAlO1xyXG59XHJcbi8qIGNrZWRpdG9yNS1pbWFnZS90aGVtZS9pbWFnZXN0eWxlLmNzcyAqL1xyXG4uY2stY29udGVudCAuaW1hZ2Utc3R5bGUtc2lkZSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tbGVmdDogdmFyKC0tY2staW1hZ2Utc3R5bGUtc3BhY2luZyk7XHJcbn1cclxuLyogY2tlZGl0b3I1LWltYWdlL3RoZW1lL2ltYWdlc3R5bGUuY3NzICovXHJcbi5jay1jb250ZW50IC5pbWFnZS1zdHlsZS1hbGlnbi1sZWZ0IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1jay1pbWFnZS1zdHlsZS1zcGFjaW5nKTtcclxufVxyXG4vKiBja2VkaXRvcjUtaW1hZ2UvdGhlbWUvaW1hZ2VzdHlsZS5jc3MgKi9cclxuLmNrLWNvbnRlbnQgLmltYWdlLXN0eWxlLWFsaWduLWNlbnRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4vKiBja2VkaXRvcjUtaW1hZ2UvdGhlbWUvaW1hZ2VzdHlsZS5jc3MgKi9cclxuLmNrLWNvbnRlbnQgLmltYWdlLXN0eWxlLWFsaWduLXJpZ2h0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1jay1pbWFnZS1zdHlsZS1zcGFjaW5nKTtcclxufVxyXG4vKiBja2VkaXRvcjUtYmxvY2stcXVvdGUvdGhlbWUvYmxvY2txdW90ZS5jc3MgKi9cclxuLmNrLWNvbnRlbnQgYmxvY2txdW90ZSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZy1yaWdodDogMS41ZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNWVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBib3JkZXItbGVmdDogc29saWQgNXB4IGhzbCgwLCAwJSwgODAlKTtcclxufVxyXG4vKiBja2VkaXRvcjUtYmxvY2stcXVvdGUvdGhlbWUvYmxvY2txdW90ZS5jc3MgKi9cclxuLmNrLWNvbnRlbnRbZGlyPVwicnRsXCJdIGJsb2NrcXVvdGUge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDA7XHJcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDVweCBoc2woMCwgMCUsIDgwJSk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/single-story/single-story.component.ts":
/*!********************************************************!*\
  !*** ./src/app/single-story/single-story.component.ts ***!
  \********************************************************/
/*! exports provided: SingleStoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleStoryComponent", function() { return SingleStoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/categories.service */ "./src/app/_services/categories.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var SingleStoryComponent = /** @class */ (function () {
    function SingleStoryComponent(route, router, userService, categoriesService, _location, http) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.categoriesService = categoriesService;
        this._location = _location;
        this.http = http;
        this.story = [];
        this.loading = false;
    }
    SingleStoryComponent.prototype.ngOnInit = function () {
        // this.backClicked();
        this.id = this.route.snapshot.paramMap.get('id');
        //alert(id)
        this.getStory();
    };
    SingleStoryComponent.prototype.backClicked = function () {
        this._location.back();
    };
    SingleStoryComponent.prototype.getStory = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        // alert(this.id)
        this.loading = true;
        this.categoriesService.getStory(this.id).subscribe(function (res) {
            _this.loading = false;
            _this.story = res.data[0];
            console.log(_this.story);
            // this.router.navigate(['/myprofile']);
        }, function (err) {
        });
    };
    SingleStoryComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: _services_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    SingleStoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single-story',
            template: __webpack_require__(/*! raw-loader!./single-story.component.html */ "./node_modules/raw-loader/index.js!./src/app/single-story/single-story.component.html"),
            styles: [__webpack_require__(/*! ./single-story.component.css */ "./src/app/single-story/single-story.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _services_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SingleStoryComponent);
    return SingleStoryComponent;
}());



/***/ }),

/***/ "./src/app/story-feed/story-feed.component.css":
/*!*****************************************************!*\
  !*** ./src/app/story-feed/story-feed.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n      .customdd {\r\n        background-color: #fff;\r\n        color: #000;\r\n        border-radius: 24px;\r\n        border: 1px solid #afabab;\r\n        outline: none;\r\n        padding: 7px 15px;\r\n        min-width: 128px;\r\n        text-align: left;\r\n      }\r\n\r\n      .img-content {\r\n        background-color: #fff;\r\n        min-height:190px;\r\n      }\r\n\r\n      .img-content-center {\r\n      top: 42px;\r\n      bottom: 50px;\r\n      right: 15px;\r\n      position: absolute;\r\n      width: 353px;\r\n      padding: 10px;\r\n      border-radius: 4px;\r\n    }\r\n\r\n      img.bordercolor1 {\r\n      border: 16px solid #77adff;\r\n    }\r\n\r\n      img.bordercolor2 {\r\n      border: 16px solid #ff778d;\r\n    }\r\n\r\n      img.bordercolor3 {\r\n      border: 16px solid #decf29;\r\n    }\r\n\r\n      img.bordercolor4 {\r\n      border: 16px solid #af7cfc;\r\n    }\r\n\r\n      .position-relative.imgs {\r\n    width: 50%;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n      .imgs img {\r\n    width: 61%;\r\n    border-radius: 10px;\r\n}\r\n\r\n      .user-pic {width: 50px; float: left;}\r\n\r\n      .user-pic img {\r\n  border-radius: 50%;\r\n  height: 40px;\r\n  width: 40px;\r\n  float: left;\r\n}\r\n\r\n      .social_icons {\r\n    position: absolute;\r\n    right: 14px;\r\n    width: 250px;\r\n    bottom: 0px;\r\n    min-height: 34px;\r\n    padding-left: 27px;\r\n    padding-top: 5px;\r\n}\r\n\r\n      .social_icons .share {\r\n    float: right;\r\n    position: absolute;\r\n    right: 0;\r\n    background-color: #e9ecef;\r\n    height: 30px;\r\n    width: 30px;\r\n    text-align: center;\r\n    border-radius: 24px;\r\n    padding-top: 2px;\r\n    border: 1px solid #c2c0c0;\r\n}\r\n\r\n      .social_icons .view {\r\n  color: gray;\r\n}\r\n\r\n      .social_icons .heart {\r\n  color: red;\r\n}\r\n\r\n      .social_icons div {\r\n  margin: 0 10px 0 0;\r\n}\r\n\r\n      .dropdown-toggle::after {\r\n    display: none;\r\n}\r\n\r\n      .dropdown i {\r\n    font-size: 11px;\r\n    float: right;\r\n    padding-top: 6px;\r\n}\r\n\r\n      .story_feed {\r\n  font-size: 26px;\r\n\r\n}\r\n\r\n      .auther {\r\n  color: gray;\r\n\r\n}\r\n\r\n      .read {\r\n    display: flex;\r\n    color: #f5ab28;\r\n    font-size: 13px;\r\n    align-items: center;\r\n    align-content: center;\r\n}\r\n\r\n      .read i {\r\n  font-size: 11px;\r\n  padding-top: 2px;\r\n\r\n}\r\n\r\n      .user_name {\r\n  float: left;\r\n}\r\n\r\n      .user_name p {\r\n    margin-bottom: 4px;\r\n}\r\n\r\n      .user_name p:nth-child(2) {\r\n   font-size: 11px;\r\n}\r\n\r\n      a{\r\n  color: #F6C14C;\r\ntext-decoration: none\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcnktZmVlZC9zdG9yeS1mZWVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0Usc0JBQXNCO1FBQ3RCLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIseUJBQXlCO1FBQ3pCLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtNQUNsQjs7TUFFQTtRQUNFLHNCQUFzQjtRQUN0QixnQkFBZ0I7TUFDbEI7O01BRUY7TUFDRSxTQUFTO01BQ1QsWUFBWTtNQUNaLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLGFBQWE7TUFDYixrQkFBa0I7SUFDcEI7O01BRUE7TUFDRSwwQkFBMEI7SUFDNUI7O01BRUE7TUFDRSwwQkFBMEI7SUFDNUI7O01BRUE7TUFDRSwwQkFBMEI7SUFDNUI7O01BRUE7TUFDRSwwQkFBMEI7SUFDNUI7O01BRUo7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztNQUdBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7TUFDQSxXQUFXLFdBQVcsRUFBRSxXQUFXLENBQUM7O01BQ3BDO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztBQUNiOztNQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztNQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCOztNQUVBO0VBQ0UsV0FBVztBQUNiOztNQUVBO0VBQ0UsVUFBVTtBQUNaOztNQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztNQUVBO0lBQ0ksYUFBYTtBQUNqQjs7TUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztNQUVBO0VBQ0UsZUFBZTs7QUFFakI7O01BRUE7RUFDRSxXQUFXOztBQUViOztNQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7TUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7O0FBRWxCOztNQUVBO0VBQ0UsV0FBVztBQUNiOztNQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztNQUVBO0dBQ0csZUFBZTtBQUNsQjs7TUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFDQSIsImZpbGUiOiJzcmMvYXBwL3N0b3J5LWZlZWQvc3RvcnktZmVlZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICAgIC5jdXN0b21kZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhZmFiYWI7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiA3cHggMTVweDtcclxuICAgICAgICBtaW4td2lkdGg6IDEyOHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pbWctY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBtaW4taGVpZ2h0OjE5MHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgLmltZy1jb250ZW50LWNlbnRlciB7XHJcbiAgICAgIHRvcDogNDJweDtcclxuICAgICAgYm90dG9tOiA1MHB4O1xyXG4gICAgICByaWdodDogMTVweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMzUzcHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIH1cclxuXHJcbiAgICBpbWcuYm9yZGVyY29sb3IxIHtcclxuICAgICAgYm9yZGVyOiAxNnB4IHNvbGlkICM3N2FkZmY7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nLmJvcmRlcmNvbG9yMiB7XHJcbiAgICAgIGJvcmRlcjogMTZweCBzb2xpZCAjZmY3NzhkO1xyXG4gICAgfVxyXG5cclxuICAgIGltZy5ib3JkZXJjb2xvcjMge1xyXG4gICAgICBib3JkZXI6IDE2cHggc29saWQgI2RlY2YyOTtcclxuICAgIH1cclxuXHJcbiAgICBpbWcuYm9yZGVyY29sb3I0IHtcclxuICAgICAgYm9yZGVyOiAxNnB4IHNvbGlkICNhZjdjZmM7XHJcbiAgICB9XHJcblxyXG4ucG9zaXRpb24tcmVsYXRpdmUuaW1ncyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuXHJcbi5pbWdzIGltZyB7XHJcbiAgICB3aWR0aDogNjElO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4udXNlci1waWMge3dpZHRoOiA1MHB4OyBmbG9hdDogbGVmdDt9XHJcbi51c2VyLXBpYyBpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5zb2NpYWxfaWNvbnMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE0cHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDM0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI3cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcblxyXG4uc29jaWFsX2ljb25zIC5zaGFyZSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MyYzBjMDtcclxufVxyXG5cclxuLnNvY2lhbF9pY29ucyAudmlldyB7XHJcbiAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5zb2NpYWxfaWNvbnMgLmhlYXJ0IHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uc29jaWFsX2ljb25zIGRpdiB7XHJcbiAgbWFyZ2luOiAwIDEwcHggMCAwO1xyXG59XHJcblxyXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZHJvcGRvd24gaSB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG59XHJcblxyXG4uc3RvcnlfZmVlZCB7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG5cclxufVxyXG5cclxuLmF1dGhlciB7XHJcbiAgY29sb3I6IGdyYXk7XHJcblxyXG59XHJcblxyXG4ucmVhZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgY29sb3I6ICNmNWFiMjg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucmVhZCBpIHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgcGFkZGluZy10b3A6IDJweDtcclxuXHJcbn1cclxuXHJcbi51c2VyX25hbWUge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59IFxyXG5cclxuLnVzZXJfbmFtZSBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxufVxyXG5cclxuLnVzZXJfbmFtZSBwOm50aC1jaGlsZCgyKSB7XHJcbiAgIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuYXtcclxuICBjb2xvcjogI0Y2QzE0QztcclxudGV4dC1kZWNvcmF0aW9uOiBub25lXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/story-feed/story-feed.component.ts":
/*!****************************************************!*\
  !*** ./src/app/story-feed/story-feed.component.ts ***!
  \****************************************************/
/*! exports provided: StoryFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryFeedComponent", function() { return StoryFeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/categories.service */ "./src/app/_services/categories.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");






var StoryFeedComponent = /** @class */ (function () {
    function StoryFeedComponent(categoriesService, userService, router, http) {
        this.categoriesService = categoriesService;
        this.userService = userService;
        this.router = router;
        this.http = http;
        this.allstories = [];
        this.loading = false;
    }
    StoryFeedComponent.prototype.ngOnInit = function () {
        this.getAllStories();
    };
    StoryFeedComponent.prototype.getAllStories = function () {
        var _this = this;
        this.loading = true;
        this.categoriesService.getStories().subscribe(function (res) {
            _this.allstories = res.data;
            console.log(_this.allstories);
            _this.loading = false;
            // this.router.navigate(['/myprofile']);
        }, function (err) {
        });
    };
    StoryFeedComponent.ctorParameters = function () { return [
        { type: _services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    StoryFeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-story-feed',
            template: __webpack_require__(/*! raw-loader!./story-feed.component.html */ "./node_modules/raw-loader/index.js!./src/app/story-feed/story-feed.component.html"),
            styles: [__webpack_require__(/*! ./story-feed.component.css */ "./src/app/story-feed/story-feed.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"],
            _services__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], StoryFeedComponent);
    return StoryFeedComponent;
}());



/***/ }),

/***/ "./src/app/write-story/write-story.component.css":
/*!*******************************************************!*\
  !*** ./src/app/write-story/write-story.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".share_story_container {\r\n    width: 88%;\r\n}\r\n .share_story {\r\n      font-size: 26px;\r\n}\r\n .Slect_bg_container {\r\n   bottom: 0px;\r\n}\r\n .Slect_bg_container .comic {\r\n    font-size: 26px;\r\n    font-weight: 800;\r\n    color: #fff;\r\n}\r\n .custom-checkbox .custom-control-input:checked~.custom-control-label::before {\r\n    background-color: #2b4368;\r\n  }\r\n .custom-control-input:checked~.custom-control-label::before {\r\n    color: #fff;\r\n    background-color: #2b4368;\r\n  }\r\n .continue {\r\n    color: #fff;\r\n    background-color: #F6C14C;\r\n    border-radius: 40px;\r\n    text-decoration: none;\r\n    border: 0px;\r\n    outline: 0px;\r\n    padding: 0px 50px;\r\n    height: 44px;\r\n  }\r\n .continue:hover {\r\n    color: #F6C14C;\r\n    background-color: #fff;\r\n   \r\n  }\r\n /* story editor */\r\n .story_editor {\r\n  background-color: #2b4368;\r\n  padding-left: 15px;\r\n}\r\n .story_container {\r\n  padding: 32px 15px 32px 0;\r\n  color: #fff;\r\n  list-style: none;\r\n}\r\n .story_container li:nth-child(1){\r\n  font-size: 20px;\r\n  font-weight: 800;\r\n}\r\n a {\r\n  color: #bcbaba;\r\n}\r\n .story_container a.nav-link.active {\r\n  color: #2b4368;\r\n}\r\n .story_editor a.nav-link {\r\n  border: 0px solid;\r\n}\r\n .sections_block_bg {\r\n  background-color: #f1f3f5;\r\n  padding-top: 20px;\r\n  border-radius: 8px;\r\n  width: 191px;\r\n  margin-bottom: 20px;\r\n  text-align: center;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n}\r\n .sections_block_bg p {\r\n  font-weight: 800;\r\n  color: #2b4368;\r\n  padding-top: 20px;\r\n}\r\n /*========Checkbox========*/\r\n .images_container {\r\n  list-style-type: none;\r\n  padding: 0px;\r\n  margin: 0px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n .images_container li {\r\n  display: inline-block;\r\n  width: 46%;\r\n  margin: 2%;\r\n}\r\n input[type=\"checkbox\"][id^=\"cb\"] {\r\n  display: none;\r\n}\r\n .images_container label {\r\n  border: 1px solid #fff;\r\n  display: block;\r\n  position: relative;\r\n  border-radius: 4px;\r\n  \r\n}\r\n .images_container label::before {\r\n  color: white;\r\n  content: \" \";\r\n  display: block;\r\n  border-radius: 50%;\r\n  border: 1px solid #fff;\r\n  position: absolute;\r\n  width: 25px;\r\n  height: 25px;\r\n  text-align: center;\r\n  line-height: 22px;\r\n  bottom: 10px;\r\n  right: 10px;\r\n  z-index: -1;\r\n\r\n}\r\n .images_container label img {\r\n  border-radius: 0px;\r\n\r\n}\r\n .images_container :checked+label {\r\n  border-color: green;\r\n  border: 2px solid green;\r\n}\r\n .images_container :checked+label::before {\r\n  content: \"✓\";\r\n  background-color: green;\r\n\r\n  z-index: 1;\r\n}\r\n .images_container :checked+label img {\r\n  z-index: -1;\r\n}\r\n /*========Rightsie========*/\r\n .rightside_con {\r\n  border: 1px solid #9c9b9b;\r\n  padding:16px;\r\n  border-radius: 8px;\r\n  flex-direction: column;\r\n}\r\n .rightside_con .friend {\r\n  border: 1px solid #9c9b9b;\r\n  padding: 12px;\r\n  margin:0 0 12px 0;\r\n  width: 100%;\r\n  font-size: 20px;\r\n  font-weight: 800;\r\n  border-radius: 4px;\r\n}\r\n .rightside_con .content {\r\n  border: 1px solid #9c9b9b;\r\n  padding: 12px;\r\n  margin:12px 0 0 0;\r\n  width: 100%;\r\n  font-size: 16px;\r\n  border-radius: 4px;\r\n}\r\n .button_con {\r\n  margin-top: -20px!important;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n .publish {\r\n  color: #fff;\r\n  background-color: #F6C14C;\r\n  border-radius: 40px;\r\n  text-decoration: none;\r\n  background-repeat: repeat-y;\r\n  border: 0px;\r\n  outline: 0px;\r\n  padding:8px 30px;\r\n}\r\n .publish:hover {\r\n  color: #F6C14C;\r\n  background-color: #fff;\r\n  border: 1px solid #F6C14C;\r\n\r\n \r\n}\r\n .draft {\r\ncolor: #F6C14C;\r\nbackground-color: #fff;\r\nborder-radius: 40px;\r\ntext-decoration: none;\r\nbackground-repeat: repeat-y;\r\nborder: 0px;\r\noutline: 0px;\r\npadding: 8px 30px;\r\nborder: 1px solid #F6C14C;\r\nmargin-right: 20px;\r\n\r\n}\r\n .draft:hover {\r\ncolor: #fff;\r\nbackground-color: #F6C14C;\r\n\r\n}\r\n .cancel {\r\n  color: #d0cfce;\r\n  background-color: #fff;\r\n  border-radius: 40px;\r\n  text-decoration: none;\r\n  background-repeat: repeat-y;\r\n  border: 0px;\r\n  outline: 0px;\r\n  padding: 8px 30px;\r\n  border: 1px solid #d0cfce;\r\n  margin-right: 20px;\r\n \r\n}\r\n .cancel:hover {\r\n  color: #fff;\r\n  background-color: #F6C14C;\r\n  border: 1px solid #F6C14C;\r\n \r\n}\r\n .backg{\r\n  background: #fff !important;\r\n}\r\n :host ::ng-deep .ck-editor__editable {\r\n  min-height: 200px !important;\r\n}\r\n .document-editor {\r\n  border: 1px solid var(--ck-color-base-border);\r\n  border-radius: var(--ck-border-radius);\r\n\r\n  /* Set vertical boundaries for the document editor. */\r\n  max-height: 700px !important;\r\n\r\n  /* This element is a flex container for easier rendering. */\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n}\r\n .document-editor__toolbar {\r\n  /* Make sure the toolbar container is always above the editable. */\r\n  z-index: 1;\r\n\r\n  /* Create the illusion of the toolbar floating over the editable. */\r\n  box-shadow: 0 0 5px hsla( 0,0%,0%,.2 );\r\n\r\n  /* Use the CKEditor CSS variables to keep the UI consistent. */\r\n  border-bottom: 1px solid var(--ck-color-toolbar-border);\r\n}\r\n /* Adjust the look of the toolbar inside the container. */\r\n .document-editor__toolbar .ck-toolbar {\r\n  border: 0;\r\n  border-radius: 0;\r\n}\r\n /* Make the editable container look like the inside of a native word processor application. */\r\n .document-editor__editable-container {\r\n  padding: calc( 2 * var(--ck-spacing-large) );\r\n  background: var(--ck-color-base-foreground);\r\n\r\n  /* Make it possible to scroll the \"page\" of the edited content. */\r\n  overflow-y: scroll;\r\n}\r\n .document-editor__editable-container .ck-editor__editable {\r\n  /* Set the dimensions of the \"page\". */\r\n  width: 15.8cm;\r\n  min-height: 21cm;\r\n\r\n  /* Keep the \"page\" off the boundaries of the container. */\r\n  padding: 1cm 2cm 2cm;\r\n\r\n  border: 1px hsl( 0,0%,82.7% ) solid;\r\n  border-radius: var(--ck-border-radius);\r\n  background: white;\r\n\r\n  /* The \"page\" should cast a slight shadow (3D illusion). */\r\n  box-shadow: 0 0 5px hsla( 0,0%,0%,.1 );\r\n\r\n  /* Center the \"page\". */\r\n  margin: 0 auto;\r\n}\r\n .document-editor .ck-content,\r\n.document-editor .ck-heading-dropdown .ck-list .ck-button__label {\r\n    font: 16px/1.6 \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n}\r\n /* Adjust the headings dropdown to host some larger heading styles. */\r\n .document-editor .ck-heading-dropdown .ck-list .ck-button__label {\r\n  line-height: calc( 1.7 * var(--ck-line-height-base) * var(--ck-font-size-base) );\r\n  min-width: 6em;\r\n}\r\n /* Scale down all heading previews because they are way too big to be presented in the UI.\r\nPreserve the relative scale, though. */\r\n .document-editor .ck-heading-dropdown .ck-list .ck-button:not(.ck-heading_paragraph) .ck-button__label {\r\n  -webkit-transform: scale(0.8);\r\n          transform: scale(0.8);\r\n  -webkit-transform-origin: left;\r\n          transform-origin: left;\r\n}\r\n /* Set the styles for \"Heading 1\". */\r\n .document-editor .ck-content h2,\r\n.document-editor .ck-heading-dropdown .ck-heading_heading1 .ck-button__label {\r\n  font-size: 2.18em;\r\n  font-weight: normal;\r\n}\r\n .document-editor .ck-content h2 {\r\n  line-height: 1.37em;\r\n  padding-top: .342em;\r\n  margin-bottom: .142em;\r\n}\r\n /* Set the styles for \"Heading 2\". */\r\n .document-editor .ck-content h3,\r\n.document-editor .ck-heading-dropdown .ck-heading_heading2 .ck-button__label {\r\n  font-size: 1.75em;\r\n  font-weight: normal;\r\n  color: hsl( 203, 100%, 50% );\r\n}\r\n .document-editor .ck-heading-dropdown .ck-heading_heading2.ck-on .ck-button__label {\r\n  color: var(--ck-color-list-button-on-text);\r\n}\r\n /* Set the styles for \"Heading 2\". */\r\n .document-editor .ck-content h3 {\r\n  line-height: 1.86em;\r\n  padding-top: .171em;\r\n  margin-bottom: .357em;\r\n}\r\n /* Set the styles for \"Heading 3\". */\r\n .document-editor .ck-content h4,\r\n.document-editor .ck-heading-dropdown .ck-heading_heading3 .ck-button__label {\r\n  font-size: 1.31em;\r\n  font-weight: bold;\r\n}\r\n .document-editor .ck-content h4 {\r\n  line-height: 1.24em;\r\n  padding-top: .286em;\r\n  margin-bottom: .952em;\r\n}\r\n /* Set the styles for \"Paragraph\". */\r\n .document-editor .ck-content p {\r\n  font-size: 1em;\r\n  line-height: 1.63em;\r\n  padding-top: .5em;\r\n  margin-bottom: 1.13em;\r\n}\r\n /* Make the block quoted text serif with some additional spacing. */\r\n .document-editor .ck-content blockquote {\r\n  font-family: Georgia, serif;\r\n  margin-left: calc( 2 * var(--ck-spacing-large) );\r\n  margin-right: calc( 2 * var(--ck-spacing-large) );\r\n}\r\n .document-editor .is-invalid{\r\n  border-color: #dc3545!important;\r\n}\r\n .errorCat{\r\n  border: 1px solid #dc3545;\r\n}\r\n .ck-content{\r\n  min-height: 300px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd3JpdGUtc3Rvcnkvd3JpdGUtc3RvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZDtDQUNDO01BQ0ssZUFBZTtBQUNyQjtDQUdBO0dBQ0csV0FBVztBQUNkO0NBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtDQUVBO0lBQ0kseUJBQXlCO0VBQzNCO0NBRUE7SUFDRSxXQUFXO0lBQ1gseUJBQXlCO0VBQzNCO0NBRUE7SUFDRSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtFQUNkO0NBQ0E7SUFDRSxjQUFjO0lBQ2Qsc0JBQXNCOztFQUV4QjtDQUNGLGlCQUFpQjtDQUNqQjtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7Q0FFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0NBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0NBRUE7RUFDRSxjQUFjO0FBQ2hCO0NBRUE7RUFDRSxjQUFjO0FBQ2hCO0NBRUE7RUFDRSxpQkFBaUI7QUFDbkI7Q0FFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixtQkFBbUI7O0FBRXJCO0NBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtDQUdBLDJCQUEyQjtDQUUzQjtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0FBQ2pCO0NBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFVBQVU7QUFDWjtDQUVBO0VBQ0UsYUFBYTtBQUNmO0NBRUE7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7O0FBRXBCO0NBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXOztBQUViO0NBRUE7RUFDRSxrQkFBa0I7O0FBRXBCO0NBRUE7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0NBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCOztFQUV2QixVQUFVO0FBQ1o7Q0FFQTtFQUNFLFdBQVc7QUFDYjtDQUVBLDJCQUEyQjtDQUMzQjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtDQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0NBSUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtDQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7Q0FDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7Q0FDQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIseUJBQXlCOzs7QUFHM0I7Q0FFQTtBQUNBLGNBQWM7QUFDZCxzQkFBc0I7QUFDdEIsbUJBQW1CO0FBQ25CLHFCQUFxQjtBQUNyQiwyQkFBMkI7QUFDM0IsV0FBVztBQUNYLFlBQVk7QUFDWixpQkFBaUI7QUFDakIseUJBQXlCO0FBQ3pCLGtCQUFrQjs7QUFFbEI7Q0FDQTtBQUNBLFdBQVc7QUFDWCx5QkFBeUI7O0FBRXpCO0NBRUE7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixrQkFBa0I7O0FBRXBCO0NBQ0E7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHlCQUF5Qjs7QUFFM0I7Q0FDQTtFQUNFLDJCQUEyQjtBQUM3QjtDQUNBO0VBQ0UsNEJBQTRCO0FBQzlCO0NBQ0E7RUFDRSw2Q0FBNkM7RUFDN0Msc0NBQXNDOztFQUV0QyxxREFBcUQ7RUFDckQsNEJBQTRCOztFQUU1QiwyREFBMkQ7RUFDM0QsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjtDQUNBO0VBQ0Usa0VBQWtFO0VBQ2xFLFVBQVU7O0VBRVYsbUVBQW1FO0VBQ25FLHNDQUFzQzs7RUFFdEMsOERBQThEO0VBQzlELHVEQUF1RDtBQUN6RDtDQUVBLHlEQUF5RDtDQUN6RDtFQUNFLFNBQVM7RUFDVCxnQkFBZ0I7QUFDbEI7Q0FDQSw2RkFBNkY7Q0FDN0Y7RUFDRSw0Q0FBNEM7RUFDNUMsMkNBQTJDOztFQUUzQyxpRUFBaUU7RUFDakUsa0JBQWtCO0FBQ3BCO0NBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsYUFBYTtFQUNiLGdCQUFnQjs7RUFFaEIseURBQXlEO0VBQ3pELG9CQUFvQjs7RUFFcEIsbUNBQW1DO0VBQ25DLHNDQUFzQztFQUN0QyxpQkFBaUI7O0VBRWpCLDBEQUEwRDtFQUMxRCxzQ0FBc0M7O0VBRXRDLHVCQUF1QjtFQUN2QixjQUFjO0FBQ2hCO0NBQ0E7O0lBRUksNkRBQTZEO0FBQ2pFO0NBQ0EscUVBQXFFO0NBQ3JFO0VBQ0UsZ0ZBQWdGO0VBQ2hGLGNBQWM7QUFDaEI7Q0FFQTtzQ0FDc0M7Q0FDdEM7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCO0VBQ3JCLDhCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7Q0FFQSxvQ0FBb0M7Q0FDcEM7O0VBRUUsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjtDQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7Q0FFQSxvQ0FBb0M7Q0FDcEM7O0VBRUUsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQiw0QkFBNEI7QUFDOUI7Q0FFQTtFQUNFLDBDQUEwQztBQUM1QztDQUVBLG9DQUFvQztDQUNwQztFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCO0NBRUEsb0NBQW9DO0NBQ3BDOztFQUVFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7Q0FFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCO0NBRUEsb0NBQW9DO0NBQ3BDO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCO0NBQ0EsbUVBQW1FO0NBQ25FO0VBQ0UsMkJBQTJCO0VBQzNCLGdEQUFnRDtFQUNoRCxpREFBaUQ7QUFDbkQ7Q0FDQTtFQUNFLCtCQUErQjtBQUNqQztDQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0NBQ0E7RUFDRSw0QkFBNEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC93cml0ZS1zdG9yeS93cml0ZS1zdG9yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNoYXJlX3N0b3J5X2NvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogODglO1xyXG59XHJcbiAuc2hhcmVfc3Rvcnkge1xyXG4gICAgICBmb250LXNpemU6IDI2cHg7XHJcbn1cclxuXHJcblxyXG4uU2xlY3RfYmdfY29udGFpbmVyIHtcclxuICAgYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5TbGVjdF9iZ19jb250YWluZXIgLmNvbWljIHtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZH4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmI0MzY4O1xyXG4gIH1cclxuICBcclxuICAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZH4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjQzNjg7XHJcbiAgfVxyXG5cclxuICAuY29udGludWUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZDMTRDO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgb3V0bGluZTogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgfVxyXG4gIC5jb250aW51ZTpob3ZlciB7XHJcbiAgICBjb2xvcjogI0Y2QzE0QztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgIFxyXG4gIH1cclxuLyogc3RvcnkgZWRpdG9yICovXHJcbi5zdG9yeV9lZGl0b3Ige1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjQzNjg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4uc3RvcnlfY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAzMnB4IDE1cHggMzJweCAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5zdG9yeV9jb250YWluZXIgbGk6bnRoLWNoaWxkKDEpe1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogI2JjYmFiYTtcclxufVxyXG5cclxuLnN0b3J5X2NvbnRhaW5lciBhLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICMyYjQzNjg7XHJcbn1cclxuXHJcbi5zdG9yeV9lZGl0b3IgYS5uYXYtbGluayB7XHJcbiAgYm9yZGVyOiAwcHggc29saWQ7XHJcbn1cclxuXHJcbi5zZWN0aW9uc19ibG9ja19iZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjNmNTtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgd2lkdGg6IDE5MXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4uc2VjdGlvbnNfYmxvY2tfYmcgcCB7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBjb2xvcjogIzJiNDM2ODtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuXHJcbi8qPT09PT09PT1DaGVja2JveD09PT09PT09Ki9cclxuXHJcbi5pbWFnZXNfY29udGFpbmVyIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uaW1hZ2VzX2NvbnRhaW5lciBsaSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA0NiU7XHJcbiAgbWFyZ2luOiAyJTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdW2lkXj1cImNiXCJdIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uaW1hZ2VzX2NvbnRhaW5lciBsYWJlbCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIFxyXG59XHJcblxyXG4uaW1hZ2VzX2NvbnRhaW5lciBsYWJlbDo6YmVmb3JlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIHotaW5kZXg6IC0xO1xyXG5cclxufVxyXG5cclxuLmltYWdlc19jb250YWluZXIgbGFiZWwgaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcblxyXG59XHJcblxyXG4uaW1hZ2VzX2NvbnRhaW5lciA6Y2hlY2tlZCtsYWJlbCB7XHJcbiAgYm9yZGVyLWNvbG9yOiBncmVlbjtcclxuICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcclxufVxyXG5cclxuLmltYWdlc19jb250YWluZXIgOmNoZWNrZWQrbGFiZWw6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLinJNcIjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuXHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmltYWdlc19jb250YWluZXIgOmNoZWNrZWQrbGFiZWwgaW1nIHtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLyo9PT09PT09PVJpZ2h0c2llPT09PT09PT0qL1xyXG4ucmlnaHRzaWRlX2NvbiB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzljOWI5YjtcclxuICBwYWRkaW5nOjE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5yaWdodHNpZGVfY29uIC5mcmllbmQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5YzliOWI7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBtYXJnaW46MCAwIDEycHggMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcblxyXG5cclxuLnJpZ2h0c2lkZV9jb24gLmNvbnRlbnQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5YzliOWI7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBtYXJnaW46MTJweCAwIDAgMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uYnV0dG9uX2NvbiB7XHJcbiAgbWFyZ2luLXRvcDogLTIwcHghaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbi5wdWJsaXNoIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZDMTRDO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcclxuICBib3JkZXI6IDBweDtcclxuICBvdXRsaW5lOiAwcHg7XHJcbiAgcGFkZGluZzo4cHggMzBweDtcclxufVxyXG4ucHVibGlzaDpob3ZlciB7XHJcbiAgY29sb3I6ICNGNkMxNEM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRjZDMTRDO1xyXG5cclxuIFxyXG59XHJcblxyXG4uZHJhZnQge1xyXG5jb2xvcjogI0Y2QzE0QztcclxuYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuYm9yZGVyLXJhZGl1czogNDBweDtcclxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XHJcbmJvcmRlcjogMHB4O1xyXG5vdXRsaW5lOiAwcHg7XHJcbnBhZGRpbmc6IDhweCAzMHB4O1xyXG5ib3JkZXI6IDFweCBzb2xpZCAjRjZDMTRDO1xyXG5tYXJnaW4tcmlnaHQ6IDIwcHg7XHJcblxyXG59XHJcbi5kcmFmdDpob3ZlciB7XHJcbmNvbG9yOiAjZmZmO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjRjZDMTRDO1xyXG5cclxufVxyXG5cclxuLmNhbmNlbCB7XHJcbiAgY29sb3I6ICNkMGNmY2U7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgb3V0bGluZTogMHB4O1xyXG4gIHBhZGRpbmc6IDhweCAzMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMGNmY2U7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gXHJcbn1cclxuLmNhbmNlbDpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y2QzE0QztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRjZDMTRDO1xyXG4gXHJcbn1cclxuLmJhY2tne1xyXG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmNrLWVkaXRvcl9fZWRpdGFibGUge1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRvY3VtZW50LWVkaXRvciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2stY29sb3ItYmFzZS1ib3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWNrLWJvcmRlci1yYWRpdXMpO1xyXG5cclxuICAvKiBTZXQgdmVydGljYWwgYm91bmRhcmllcyBmb3IgdGhlIGRvY3VtZW50IGVkaXRvci4gKi9cclxuICBtYXgtaGVpZ2h0OiA3MDBweCAhaW1wb3J0YW50O1xyXG5cclxuICAvKiBUaGlzIGVsZW1lbnQgaXMgYSBmbGV4IGNvbnRhaW5lciBmb3IgZWFzaWVyIHJlbmRlcmluZy4gKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxufVxyXG4uZG9jdW1lbnQtZWRpdG9yX190b29sYmFyIHtcclxuICAvKiBNYWtlIHN1cmUgdGhlIHRvb2xiYXIgY29udGFpbmVyIGlzIGFsd2F5cyBhYm92ZSB0aGUgZWRpdGFibGUuICovXHJcbiAgei1pbmRleDogMTtcclxuXHJcbiAgLyogQ3JlYXRlIHRoZSBpbGx1c2lvbiBvZiB0aGUgdG9vbGJhciBmbG9hdGluZyBvdmVyIHRoZSBlZGl0YWJsZS4gKi9cclxuICBib3gtc2hhZG93OiAwIDAgNXB4IGhzbGEoIDAsMCUsMCUsLjIgKTtcclxuXHJcbiAgLyogVXNlIHRoZSBDS0VkaXRvciBDU1MgdmFyaWFibGVzIHRvIGtlZXAgdGhlIFVJIGNvbnNpc3RlbnQuICovXHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNrLWNvbG9yLXRvb2xiYXItYm9yZGVyKTtcclxufVxyXG5cclxuLyogQWRqdXN0IHRoZSBsb29rIG9mIHRoZSB0b29sYmFyIGluc2lkZSB0aGUgY29udGFpbmVyLiAqL1xyXG4uZG9jdW1lbnQtZWRpdG9yX190b29sYmFyIC5jay10b29sYmFyIHtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG4vKiBNYWtlIHRoZSBlZGl0YWJsZSBjb250YWluZXIgbG9vayBsaWtlIHRoZSBpbnNpZGUgb2YgYSBuYXRpdmUgd29yZCBwcm9jZXNzb3IgYXBwbGljYXRpb24uICovXHJcbi5kb2N1bWVudC1lZGl0b3JfX2VkaXRhYmxlLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogY2FsYyggMiAqIHZhcigtLWNrLXNwYWNpbmctbGFyZ2UpICk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY2stY29sb3ItYmFzZS1mb3JlZ3JvdW5kKTtcclxuXHJcbiAgLyogTWFrZSBpdCBwb3NzaWJsZSB0byBzY3JvbGwgdGhlIFwicGFnZVwiIG9mIHRoZSBlZGl0ZWQgY29udGVudC4gKi9cclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5kb2N1bWVudC1lZGl0b3JfX2VkaXRhYmxlLWNvbnRhaW5lciAuY2stZWRpdG9yX19lZGl0YWJsZSB7XHJcbiAgLyogU2V0IHRoZSBkaW1lbnNpb25zIG9mIHRoZSBcInBhZ2VcIi4gKi9cclxuICB3aWR0aDogMTUuOGNtO1xyXG4gIG1pbi1oZWlnaHQ6IDIxY207XHJcblxyXG4gIC8qIEtlZXAgdGhlIFwicGFnZVwiIG9mZiB0aGUgYm91bmRhcmllcyBvZiB0aGUgY29udGFpbmVyLiAqL1xyXG4gIHBhZGRpbmc6IDFjbSAyY20gMmNtO1xyXG5cclxuICBib3JkZXI6IDFweCBoc2woIDAsMCUsODIuNyUgKSBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1jay1ib3JkZXItcmFkaXVzKTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHJcbiAgLyogVGhlIFwicGFnZVwiIHNob3VsZCBjYXN0IGEgc2xpZ2h0IHNoYWRvdyAoM0QgaWxsdXNpb24pLiAqL1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggaHNsYSggMCwwJSwwJSwuMSApO1xyXG5cclxuICAvKiBDZW50ZXIgdGhlIFwicGFnZVwiLiAqL1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5kb2N1bWVudC1lZGl0b3IgLmNrLWNvbnRlbnQsXHJcbi5kb2N1bWVudC1lZGl0b3IgLmNrLWhlYWRpbmctZHJvcGRvd24gLmNrLWxpc3QgLmNrLWJ1dHRvbl9fbGFiZWwge1xyXG4gICAgZm9udDogMTZweC8xLjYgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcbi8qIEFkanVzdCB0aGUgaGVhZGluZ3MgZHJvcGRvd24gdG8gaG9zdCBzb21lIGxhcmdlciBoZWFkaW5nIHN0eWxlcy4gKi9cclxuLmRvY3VtZW50LWVkaXRvciAuY2staGVhZGluZy1kcm9wZG93biAuY2stbGlzdCAuY2stYnV0dG9uX19sYWJlbCB7XHJcbiAgbGluZS1oZWlnaHQ6IGNhbGMoIDEuNyAqIHZhcigtLWNrLWxpbmUtaGVpZ2h0LWJhc2UpICogdmFyKC0tY2stZm9udC1zaXplLWJhc2UpICk7XHJcbiAgbWluLXdpZHRoOiA2ZW07XHJcbn1cclxuXHJcbi8qIFNjYWxlIGRvd24gYWxsIGhlYWRpbmcgcHJldmlld3MgYmVjYXVzZSB0aGV5IGFyZSB3YXkgdG9vIGJpZyB0byBiZSBwcmVzZW50ZWQgaW4gdGhlIFVJLlxyXG5QcmVzZXJ2ZSB0aGUgcmVsYXRpdmUgc2NhbGUsIHRob3VnaC4gKi9cclxuLmRvY3VtZW50LWVkaXRvciAuY2staGVhZGluZy1kcm9wZG93biAuY2stbGlzdCAuY2stYnV0dG9uOm5vdCguY2staGVhZGluZ19wYXJhZ3JhcGgpIC5jay1idXR0b25fX2xhYmVsIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxufVxyXG5cclxuLyogU2V0IHRoZSBzdHlsZXMgZm9yIFwiSGVhZGluZyAxXCIuICovXHJcbi5kb2N1bWVudC1lZGl0b3IgLmNrLWNvbnRlbnQgaDIsXHJcbi5kb2N1bWVudC1lZGl0b3IgLmNrLWhlYWRpbmctZHJvcGRvd24gLmNrLWhlYWRpbmdfaGVhZGluZzEgLmNrLWJ1dHRvbl9fbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMi4xOGVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5kb2N1bWVudC1lZGl0b3IgLmNrLWNvbnRlbnQgaDIge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM3ZW07XHJcbiAgcGFkZGluZy10b3A6IC4zNDJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAuMTQyZW07XHJcbn1cclxuXHJcbi8qIFNldCB0aGUgc3R5bGVzIGZvciBcIkhlYWRpbmcgMlwiLiAqL1xyXG4uZG9jdW1lbnQtZWRpdG9yIC5jay1jb250ZW50IGgzLFxyXG4uZG9jdW1lbnQtZWRpdG9yIC5jay1oZWFkaW5nLWRyb3Bkb3duIC5jay1oZWFkaW5nX2hlYWRpbmcyIC5jay1idXR0b25fX2xhYmVsIHtcclxuICBmb250LXNpemU6IDEuNzVlbTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGNvbG9yOiBoc2woIDIwMywgMTAwJSwgNTAlICk7XHJcbn1cclxuXHJcbi5kb2N1bWVudC1lZGl0b3IgLmNrLWhlYWRpbmctZHJvcGRvd24gLmNrLWhlYWRpbmdfaGVhZGluZzIuY2stb24gLmNrLWJ1dHRvbl9fbGFiZWwge1xyXG4gIGNvbG9yOiB2YXIoLS1jay1jb2xvci1saXN0LWJ1dHRvbi1vbi10ZXh0KTtcclxufVxyXG5cclxuLyogU2V0IHRoZSBzdHlsZXMgZm9yIFwiSGVhZGluZyAyXCIuICovXHJcbi5kb2N1bWVudC1lZGl0b3IgLmNrLWNvbnRlbnQgaDMge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjg2ZW07XHJcbiAgcGFkZGluZy10b3A6IC4xNzFlbTtcclxuICBtYXJnaW4tYm90dG9tOiAuMzU3ZW07XHJcbn1cclxuXHJcbi8qIFNldCB0aGUgc3R5bGVzIGZvciBcIkhlYWRpbmcgM1wiLiAqL1xyXG4uZG9jdW1lbnQtZWRpdG9yIC5jay1jb250ZW50IGg0LFxyXG4uZG9jdW1lbnQtZWRpdG9yIC5jay1oZWFkaW5nLWRyb3Bkb3duIC5jay1oZWFkaW5nX2hlYWRpbmczIC5jay1idXR0b25fX2xhYmVsIHtcclxuICBmb250LXNpemU6IDEuMzFlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmRvY3VtZW50LWVkaXRvciAuY2stY29udGVudCBoNCB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjRlbTtcclxuICBwYWRkaW5nLXRvcDogLjI4NmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IC45NTJlbTtcclxufVxyXG5cclxuLyogU2V0IHRoZSBzdHlsZXMgZm9yIFwiUGFyYWdyYXBoXCIuICovXHJcbi5kb2N1bWVudC1lZGl0b3IgLmNrLWNvbnRlbnQgcCB7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjNlbTtcclxuICBwYWRkaW5nLXRvcDogLjVlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxLjEzZW07XHJcbn1cclxuLyogTWFrZSB0aGUgYmxvY2sgcXVvdGVkIHRleHQgc2VyaWYgd2l0aCBzb21lIGFkZGl0aW9uYWwgc3BhY2luZy4gKi9cclxuLmRvY3VtZW50LWVkaXRvciAuY2stY29udGVudCBibG9ja3F1b3RlIHtcclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgc2VyaWY7XHJcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoIDIgKiB2YXIoLS1jay1zcGFjaW5nLWxhcmdlKSApO1xyXG4gIG1hcmdpbi1yaWdodDogY2FsYyggMiAqIHZhcigtLWNrLXNwYWNpbmctbGFyZ2UpICk7XHJcbn1cclxuLmRvY3VtZW50LWVkaXRvciAuaXMtaW52YWxpZHtcclxuICBib3JkZXItY29sb3I6ICNkYzM1NDUhaW1wb3J0YW50O1xyXG59XHJcbi5lcnJvckNhdHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGMzNTQ1O1xyXG59XHJcbi5jay1jb250ZW50e1xyXG4gIG1pbi1oZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/write-story/write-story.component.ts":
/*!******************************************************!*\
  !*** ./src/app/write-story/write-story.component.ts ***!
  \******************************************************/
/*! exports provided: WriteStoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteStoryComponent", function() { return WriteStoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/categories.service */ "./src/app/_services/categories.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-decoupled-document */ "./node_modules/@ckeditor/ckeditor5-build-decoupled-document/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_8__);









var ImageSnippet = /** @class */ (function () {
    function ImageSnippet(src, file) {
        this.src = src;
        this.file = file;
    }
    ImageSnippet.ctorParameters = function () { return [
        { type: String },
        { type: File }
    ]; };
    return ImageSnippet;
}());
var WriteStoryComponent = /** @class */ (function () {
    function WriteStoryComponent(formBuilder, alertService, imageService, userService, router, http) {
        this.formBuilder = formBuilder;
        this.alertService = alertService;
        this.imageService = imageService;
        this.userService = userService;
        this.router = router;
        this.http = http;
        this.Editor = _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_8__;
        this.loading = false;
        this.submitted = false;
        this.getusers = [];
        this.cats = [];
        this.testUrl = "http://universitiesconnect.com/bongoswriters/api_1_0_0/Api";
        this.users = [];
        this.fileData = null;
        this.editorConfig = {
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
    }
    WriteStoryComponent.prototype.onReady = function (editor) {
        editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
    };
    WriteStoryComponent.prototype.ngOnInit = function () {
        this.loading = false;
        this.writestory = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            image: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
        });
        this.getCateg();
    };
    WriteStoryComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.writestory.valueChanges
            .subscribe(function (values) {
            _this.formDataPreview = JSON.stringify(values);
        });
    };
    WriteStoryComponent.prototype.reset = function () {
        this.writestory.reset();
    };
    Object.defineProperty(WriteStoryComponent.prototype, "description", {
        get: function () {
            return this.writestory.controls.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WriteStoryComponent.prototype, "f", {
        get: function () { return this.writestory.controls; },
        enumerable: true,
        configurable: true
    });
    WriteStoryComponent.prototype.onChange = function (cat, isChecked) {
        var emailFormArray = this.writestory.controls.cat_id;
        if (isChecked) {
            emailFormArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](cat));
            this.htmlToAdd = '';
        }
        else {
            var index = emailFormArray.controls.findIndex(function (x) { return x.value == cat; });
            emailFormArray.removeAt(index);
        }
        console.log(this.writestory.controls.cat_id.value.length);
    };
    WriteStoryComponent.prototype.onSubmit = function (event) {
        var _this = this;
        var target = event.target;
        var idAttr = target.attributes.id;
        // var value = idAttr.nodeValue;
        console.log(target.value);
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
        this.htmlToAdd = '';
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var formData = new FormData();
        formData.append('name', this.writestory.get("name").value);
        formData.append('description', this.writestory.get("description").value);
        // formData.append('share', this.writestory.get("share").value);
        formData.append('share', target.value);
        formData.append('file', this.filedatanew);
        formData.append('user_id', currentUser.id);
        //this.writestory.get("cat_id").value
        formData.append('cat_id', '13');
        console.log(formData);
        this.imageService.createStory(formData).subscribe(function (res) {
            _this.loading = false;
            _this.alertService.success('Your Story Added successful', true);
            _this.router.navigate(['/mystories']);
        }, function (err) {
            _this.loading = false;
        });
    };
    WriteStoryComponent.prototype.fileProgress = function (fileInput) {
        this.fileData = fileInput.target.files[0];
    };
    WriteStoryComponent.prototype.processFile = function (imageInput) {
        var _this = this;
        this.preview(imageInput.files);
        var file = imageInput.files[0];
        var reader = new FileReader();
        reader.addEventListener('load', function (event) {
            _this.selectedFile = new ImageSnippet(event.target.result, file);
            var token = "6f25ef8193e3f77676d1f73b8eef9c3c5e7b89e0";
            _this.filedatanew = _this.selectedFile.file;
            console.log(_this.filedatanew);
            /*this.imageService.uploadImage(this.selectedFile.file,token).subscribe(
              (res) => {
              
              },
              (err) => {
              
              }) */
        });
        reader.readAsDataURL(file);
    };
    WriteStoryComponent.prototype.preview = function (files) {
        var _this = this;
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
        reader.onload = function (_event) {
            _this.imgURL = reader.result;
        };
    };
    WriteStoryComponent.prototype.getCateg = function () {
        var _this = this;
        this.imageService.getToken().subscribe(function (data) {
            //   this.loading = true;
            //  alert(this.token);
            _this.token = data;
            _this.imageService.getAllC(_this.token.access_token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (cats) {
                var all = cats;
                _this.allcat = cats;
                _this.cats = all.data;
                console.log(_this.cats);
            });
            //  this.alertService.success('Registration successful', true);
            //  this.router.navigate(['/home']);
        });
    };
    WriteStoryComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
        { type: _services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    WriteStoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-write-story',
            template: __webpack_require__(/*! raw-loader!./write-story.component.html */ "./node_modules/raw-loader/index.js!./src/app/write-story/write-story.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./write-story.component.css */ "./src/app/write-story/write-story.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _services__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
            _services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"],
            _services__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], WriteStoryComponent);
    return WriteStoryComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:4000',
    testUrl: "http://universitiesconnect.com/bongoswriters/api_1_0_0/Api",
    baseUrl: 'http://universitiesconnect.com/php/api',
    tokenurl: "http://universitiesconnect.com/bongoswriters/api_1_0_0/token/token"
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Muhammad\writerclubdev\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map