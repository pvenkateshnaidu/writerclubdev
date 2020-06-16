<body>
<?php include 'header.php' ?>
<div class="my-custom-class">
    <div class="container">
             <!-- Top banner -->
             <div class="col-12 position-relative top-banner">
            <div class="row"><img src="assets/WorldwideStorytellers_HomeBanner-01.jpg" class="img-fluid"/></div>
            <!-- <div class="position-absolute d-flex flex-column align-items-center content">
                <h2 class="heading">Explore the world of stories</h2>
                <p>Read stories from kids all around the new world explore a new world of fictional and non-fictionl stories and write your own beautiful stories.</p>
                <a  [routerLink]="['/login']" class="btn btn-secondary getstart">Get started!</a>
            </div> -->
        </div>
        <!-- Map -->
        <div class="d-flex flex-column align-items-center map_container">
                <h2 class="heading">Writers All Around the World</h2>
        <div id="vmap" style="width:100%; height: 400px;"></div>
        
        <!-- How it Works -->
        <div class="d-flex flex-column align-items-center how_it_work_container col-12">
            <h2 class="heading">Writers All Around the World</h2>
                <div class="d-flex flex-row justify-content-center flex-wrap pb-5">
                    <div class="row justify-content-center">
                        <div class="col-sm-5 col-12">
                        
                                <div class="img"><img src="assets/how_to_work_1.jpg" class="img-fluid"/></div>
                                <div class="oneimg"><img src="assets/one.jpg" class="img-fluid"/></div>
                                <h5>Write a Story in Bongos Writers Club</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            
                        </div>

                        <div class="col-sm-5 col-12">
                            
                                <div class="img"><img src="assets/how_to_work_2.jpg" class="img-fluid"/></div>
                                <div class="oneimg"><img src="assets/two.jpg" class="img-fluid"/></div>
                                <h5>Real World Wide Stories</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            
                        </div>

                        <div class="col-sm-5 col-12">
                            
                                <div class="img"><img src="assets/how_to_work_3.jpg" class="img-fluid"/></div>
                                <div class="oneimg"><img src="assets/three.jpg" class="img-fluid"/></div>
                                <h5>Read and write on Any Device</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            
                        </div>

                        <div class="col-sm-5 col-12">
                        
                                <div class="img"><img src="assets/how_to_work_3.jpg" class="img-fluid"/></div>
                                <div class="oneimg"><img src="assets/four.jpg" class="img-fluid"/></div>
                                <h5>Order the Books</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            
                        </div>
                    </div>
                </div> 
        </div>
        <!-- Write Your Heart Out -->
        <div class="d-flex flex-row align-items-center write_your_container col-12">
            <div class="row">
                <div class="col-sm-5 col-12 pl-5 ho">
                    <h5 class="heading">Write Your Heart Out</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <button type="button" class="btn btn-secondary white_button">Get started!</button>
                </div>
                <!-- <div class="col-6"><img src="/assets/writing_bg.jpg" class="img-fluid"/></div> -->
            </div>
        </div>
    </div>
</div>
<?php include 'footer.php' ?>
<script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/jquery.vmap.min.js"></script>
    <script type="text/javascript" src="js/jquery.vmap.world.js" charset="utf-8"></script>
    <script type="text/javascript" src="js/jquery.vmap.sampledata.js"></script>
    <script>
      $(document).ready(function () {
        $('#vmap').vectorMap({
          map: 'world_en',
          backgroundColor: '#fff',
          color: '#ffffff',
          hoverOpacity: 0.7,
          selectedColor: '#666666',
          enableZoom: false,
          showTooltip: true,
          scaleColors: ['#C8EEFF', '#006491'],
          values: sample_data,
          normalizeFunction: 'polynomial'
        });
      });
    </script>
</body>