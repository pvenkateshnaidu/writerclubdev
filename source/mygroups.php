<body>
<?php include 'header.php' ?>
<div class="container">
  <div class="bg-white">
    <div class="col-12">
        <div class="d-flex pt-5 mb-5 flex-buttons">
            <button type="button" class="btn btn-warning mr-3 spl-buttons" data-toggle="modal" data-target="#myModal1" ><span class="added-group"><i class="fa fa-user"></i></span>Invite New Member</button>
            <button type="button" class="btn btn-warning spl-buttons" data-toggle="modal" data-target="#myModal"><span class="added-group"><i class="fa fa-plus"></i></span>Create New Group</button>
           
         </div>
  
      <div class="d-flex flex-column mb-2 mt-2">
          <div class="share_story">
              <b class="story_feed"><i class="fas fa-arrow-left"></i>&nbsp;My Groups</b>
          </div>
          <p class="mt-3">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
      </div>
     
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-md-2">
        <div class="col">
          <div class="card mb-5">
            <div class="card-bg text-center">
              <div class="upload">
                <input type="file" class="file-upload"/>
                <img src="https://loiane.com/assets/images/loiane.jpg" class="card-img-top" alt="...">
                <span class="edit-image"><i class="fa fa-pen"></i></span>
              </div>
              <div class="delete" (click)="DeleteGroup()"><i class="fa fa-trash mr-1"></i>Delete Group</div>
              <h5 class="card-title mt-2">Writers Club Dev</h5>
              <small>Provide Group Subject and optional group icon</small>

            </div>

            <div class="card-body">
              <h3 class="groupinfo mb-3">Group Members <span class="coun badge">05</span></h3>
              <div class="mail-list">
                <label class="mb-3">muvvasaisudhakar@gmail.com</label>
                <label class="mb-3">venkateh.podoli@gmail.com</label>
                <label class="mb-3">saisudhakarm@propertyadviser.in</label>
                <label class="mb-3">johnwrick@hotmail.com</label>
              </div> 
            </div>
          </div>
        </div>
        
      </div>
       

    </div>
  </div>
</div>


<?php include 'footer.php' ?>
<script type="text/javascript" src="js/jquery.js"></script>
<script src="js/bootstrap.min.js"></script>
<!-- The Modal -->
<div class="modal" id="myModal" >
  <div class="modal-dialog modal-sm">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Create New Group</h4>
        <button type="button" class="close" data-dismiss="modal" (click)="onCloseHandled()">&times;</button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
          <alert></alert>
        <form (ngSubmit)="create()">
        
          <label>Group Name</label>
                      <input class="form-control" matInput formControlName="name">  
                     <label>Select Group Members</label>
                      <select formControlName="members" multiple>
                          <option value="{{obj.id}}">Grroup members</option>
                      </select>
                      <h2></h2>
                    <button  class="closee btn btn-warning"> Create</button>
                  </form>
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="closee btn btn-warning" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
<!-- The Modal -->
<div class="modal" id="myModal1" >
  <div class="modal-dialog modal-sm">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Invite New Members</h4>
        <button type="button" class="close" data-dismiss="modal" >&times;</button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
      <alert></alert>
        <form [formGroup]="sendEmailForm" (ngSubmit)="send(sendEmailForm.value)">
        
          <label>Email Address</label>
                      <input class="form-control" matInput formControlName="toAddress">  
          
                    <button class=" btn btn-danger mt-3" [disabled]="!sendEmailForm.valid"> Invite Now</button>
                  </form>
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class=" btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>