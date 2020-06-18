<body class="bg-none spl-header groups-page">
<?php include 'loginheader.php' ?>

<div class="my-custom-class">
	<div class="container share_story_container pt-60">
        <div class="row bg-white">
	    <div class="d-flex flex-column mb-2 mt-2 col-lg-12">
            <div class="share_story">
                <b class="story_feed"><i class="fas fa-arrow-left"></i>&nbsp;share story</b>
            </div>
            <p class="mt-3 pl-4">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
        </div> 
        
        <div class="col-lg-12">

        <div class="row">
          <div class="col-lg-4 mb-5" data-toggle="modal" data-target="#newgroup">
            <div class="position-relative" (click)="openModal()">
              <div class="img_align d-flex">
               <div class="circlebg rounded-circle">
                    <div class="circle">+</div>
               </div>
               <div class="newgroup">Creat New Group</div></div>
               
            </div>
          </div> 

          <!--main-group start-->
          <div class="col-lg-4 mb-5">
            <div class="position-relative" (click)="openModal()">
              <div class="img_align d-flex">
               <div class="circlebg rounded-circle">
                    <div class="circle">
                      <img src="http://universitiesconnect.com/bongoswriters/images/nature.jpg" alt="bg-img" />
                    </div>
               </div>
               <div class="newgroup list">class 3 Friends</div>
               <div class="group">
                 <img src="http://universitiesconnect.com/bongoswriters/images/nature.jpg" alt="member"/>
                 <img src="assets/four.jpg" alt="member"/>
                 <img src="assets/how_to_work_1.jpg" alt="member"/>
                 <img src="assets/how_to_work_2.jpg" alt="member"/>
                 <img src="assets/how_to_work_3.jpg" alt="member"/>
                 <img src="assets/how_to_work_4.jpg" alt="member"/>
               </div>
               
              </div>
               
            </div>
          </div> 
          <div class="col-lg-4 mb-5">
            <div class="position-relative" (click)="openModal()">
              <div class="img_align d-flex">
               <div class="circlebg rounded-circle">
                    <div class="circle">
                      <img src="assets/default-profile.png" alt="bg-img" />
                    </div>
               </div>
               <div class="newgroup list">class 3 Friends</div>
                <div class="dropdown group-info ">
                  <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-ellipsis-v"></i>
                  </button>
                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">
                      <i class="edit"></i>
                      Edit Group
                    </a>
                    <a class="dropdown-item group-delete" href="#"><i class="delete-info"></i>Delete Group</a>
                  </div>
                </div>

               <div class="group">
                 <img src="http://universitiesconnect.com/bongoswriters/images/nature.jpg" alt="member"/>
                 <img src="assets/four.jpg" alt="member"/>
                 <img src="assets/how_to_work_1.jpg" alt="member"/>
                 <img src="assets/how_to_work_2.jpg" alt="member"/>
                 <img src="assets/how_to_work_3.jpg" alt="member"/>
                 <img src="assets/how_to_work_4.jpg" alt="member"/>
               </div>
               <div class="count">+2 more</div>
              </div>
               
            </div>
          </div>

          
          
           
        </div>

            <div class="d-flex justify-content-between col-lg-12 mt-5 mb-5">
              <button type="button" class="btn btn-warning invite-button" data-target="#invitemember" data-toggle="modal">Invite New Member</button>

              <button type="button" class="btn btn-warning share-story-button">Share</button>

            </div> 

        
        </div>
    </div>
</div>

<div class="modal fade newgroup" id="newgroup" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog " role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Create New Group</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Group Name <sup>*</sup></label>
            <input type="text" class="form-control" id="recipient-name" placeholder="Enter Group Name">
          </div>

          <div class="form-group members-select">
            <label for="selectmembers" class="col-form-label">Add Members <sup>*</sup></label>
            <div class="dropdown members" id="selectmembers">
              <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false">
              Select Members
              </button>
              <div class="dropdown-menu" multiple aria-labelledby="dropdownMenuButton">

                <div class="dropdown-item">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="saisudhakar">
                    <label class="form-check-label" for="saisudhakar">
                      <figure class="user-info group">
                      <img src="assets/how_to_work_4.jpg" alt="user"/>
                      <figcaption >Saisudhakar</figcaption>
                      </figure>
                    </label>
                  </div>
                </div>

                <div class="dropdown-item">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="venky">
                    <label class="form-check-label" for="venky">
                      <figure class="user-info group">
                      <img src="assets/how_to_work_4.jpg" alt="user"/>
                      <figcaption >Venky</figcaption>
                      </figure>
                    </label>
                  </div>
                </div>

                <div class="dropdown-item">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="srija">
                    <label class="form-check-label" for="srija">
                      <figure class="user-info group">
                      <img src="assets/how_to_work_4.jpg" alt="user"/>
                      <figcaption >Srija</figcaption>
                      </figure>
                    </label>
                  </div>
                </div>

                <div class="dropdown-item">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="venu">
                    <label class="form-check-label" for="venu">
                      <figure class="user-info group">
                      <img src="assets/how_to_work_4.jpg" alt="user"/>
                      <figcaption >Venu</figcaption>
                      </figure>
                    </label>
                  </div>
                </div>

                <div class="dropdown-item">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="Bhavani">
                    <label class="form-check-label" for="Bhavani">
                      <figure class="user-info group">
                      <img src="assets/how_to_work_4.jpg" alt="user"/>
                      <figcaption >Bhavani</figcaption>
                      </figure>
                    </label>
                  </div>
                </div>

                <div class="dropdown-item">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="Balakarishana">
                    <label class="form-check-label" for="Balakarishana">
                      <figure class="user-info group">
                      <img src="assets/how_to_work_4.jpg" alt="user"/>
                      <figcaption >Balakarishana</figcaption>
                      </figure>
                    </label>
                  </div>
                </div>

              </div>
            </div>
          </div>

            <div class="added-members">
              <div class="member">
                <figure class="user-info group">
                  <img src="assets/how_to_work_4.jpg" alt="user"/>
                  <figcaption >Balakarishana</figcaption>
                  <button class="close" type="button">&times;</button>
                </figure>
              </div>
            </div>
        
        </form>
      </div>

      <div class="modal-footer justify-content-between">
        
          <div class="mr-2 cancel" data-dismiss="modal">Cancel</div>
          <div class="update"><button class="btn btn-warning gradient-button">Create</button></div>
        
      </div>

    </div>
  </div>
</div>

<!--invite New member-->
<div class="modal fade newgroup" id="invitemember" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>

        <div class="form-group">
            <label for="recipient-name" class="col-form-label">Email Address <sup>*</sup></label>
            <div class="form-control space">
            <div class="added-members">
              <div class="member">
                <figure class="user-info group">
                  <figcaption >Balakarishana</figcaption>
                  <button class="close" type="button">&times;</button>
                </figure>
              </div>
            </div>
            <input type="text" class="input-control" id="recipient-name" placeholder="Enter Email">
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer justify-content-between">
      <div class="mr-2 cancel" data-dismiss="modal">Cancel</div>
          <div class="update"><button class="btn btn-warning gradient-button">Invite</button></div>
      </div>
    </div>
  </div>
</div>

<?php include 'footer.php' ?>
<script>

$(document).mouseup(function (e){

var container = $(".dropdown.members");

if (!container.is(e.target) && container.has(e.target).length === 0){

  container.find('.dropdown-menu').removeClass('show');
  
}
});

$('.dropdown-toggle').on('click',function(){
  $(this).closest('.members-select').find('.dropdown.members .dropdown-menu').toggleClass('show');
});


$('.members-select .dropdown-item').each(function(){
  $(this).on('click',function(){
    var obj = $(this).find('.form-check-label').html();
   // console.log(obj)
   // $('.added-members').append($(this).html())
  })  
});

</script>

