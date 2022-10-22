let imgs = Array.from(document.querySelectorAll(".cardImg"));
let contBtn =Array.from($(".smallCont"));
let photoSource;
let index;
let contIndex;
$(window).scroll(function(){
    let secondSectionPlace = $("#about").offset().top;
    let place = $(window).scrollTop();
    if( place >= secondSectionPlace)
    {
        $(".navbar-brand").addClass("text-white");
        $(".navbar .nav-link").addClass("text-white");
        $(".navbar").addClass("bg-dark");
        $(".navbar").removeClass("bg-transparent");
        $(".fa-bars").removeClass("text-black");
        $(".fa-bars").addClass("text-white");
    }
    else
    {
        $(".navbar-brand").addClass("text-black");
        $(".navbar-brand").removeClass("text-white");
        $(".navbar .nav-link").addClass("text-black");
        $(".navbar").addClass("bg-transparent");
        $(".navbar").removeClass("bg-dark");
        $(".fa-bars").removeClass("text-white");
        $(".fa-bars").addClass("text-black");
    }
});
$("#works .nav-item").eq(0).click(function()
{
    $("#carusel").html(
      `
      <div class="  col-lg-6 col-xl-4 mb-3">
      <div class="father position-relative overflow-hidden">
        <img src="img/1.jpg" class="img-fluid" alt="">
        <div class="floatingDiv position-absolute d-flex justify-content-center align-items-center">
          <div class="icon rounded-circle ">
            <i class="fa fa-chain-broken fa-2x pt-2" ></i>
          </div>
          <div class="icon rounded-circle  ">
            <i class="fa fa-search-plus fa-2x pt-2 ps-2"></i>
          </div>
        </div>
      </div>
    </div>
  
    <div class="  col-lg-6 col-xl-4 mb-3">
      <div class="father position-relative overflow-hidden">
        <img src="img/2.jpg" class="img-fluid" alt="">
        <div class="floatingDiv position-absolute d-flex justify-content-center align-items-center">
          <div class="icon rounded-circle">
            <i class="fa fa-chain-broken fa-2x pt-2" ></i>
          </div>
          <div class="icon rounded-circle ">
            <i class="fa fa-search-plus  fa-2x pt-2 ps-2 "></i>
          </div>
        </div>
      </div>
    </div>
  
    <div class="  col-lg-6 col-xl-4 mb-3">
      <div class="father position-relative overflow-hidden">
        <img src="img/32.jpg" class="img-fluid" alt="">
        <div class="floatingDiv position-absolute d-flex justify-content-center align-items-center">
          <div class="icon rounded-circle ">
            <i class="fa fa-chain-broken fa-2x pt-2" ></i>
          </div>
          <div class="icon rounded-circle  ">
            <i class="fa fa-search-plus fa-2x pt-2 ps-2 "></i>
          </div>
        </div>
      </div>
    </div>
  
    <div class="  col-lg-6 col-xl-4 mb-3">
      <div class="father position-relative overflow-hidden">
        <img src="img/42.jpg" class="img-fluid" alt="">
        <div class="floatingDiv position-absolute d-flex justify-content-center align-items-center">
          <div class="icon rounded-circle ">
            <i class="fa fa-chain-broken fa-2x pt-2" ></i>
          </div>
          <div class="icon rounded-circle  ">
            <i class="fa fa-search-plus fa-2x pt-2 ps-2 "></i>
          </div>
        </div>
      </div>
    </div>
  
  
    <div class="  col-lg-6 col-xl-4 mb-3">
      <div class="father position-relative overflow-hidden">
        <img src="img/5.jpg" class="img-fluid" alt="">
        <div class="floatingDiv position-absolute d-flex justify-content-center align-items-center">
          <div class="icon rounded-circle ">
            <i class="fa fa-chain-broken fa-2x pt-2" ></i>
          </div>
          <div class="icon rounded-circle ">
            <i class="fa fa-search-plus fa-2x pt-2 ps-2"></i>
          </div>
        </div>
      </div>
    </div>
  
    <div class="  col-lg-6 col-xl-4 mb-3">
      <div class="father position-relative overflow-hidden">
        <img src="img/6.jpg" class="img-fluid" alt="">
        <div class="floatingDiv position-absolute d-flex justify-content-center align-items-center">
            <div class="icon rounded-circle">
              <i class="fa fa-chain-broken fa-2x pt-2" ></i>
            </div>
            <div class="icon rounded-circle">
              <i class="fa fa-search-plus fa-2x pt-2 ps-2 "></i>
            </div>
        </div>
      </div>
    </div>
      `

         );
    cards();     
});
$("#works .nav-item").eq(1).click(function(){
    $("#carusel").html(` <div class="  col-lg-6 col-xl-4 mb-3">
    <div class="father position-relative overflow-hidden">
      <img src="img/42.jpg" class="img-fluid cardImg" alt="">
      <div class="floatingDiv position-absolute d-flex justify-content-center align-items-center">
      <div class="icon rounded-circle ">
      <i class="fa fa-chain-broken fa-2x pt-2" ></i>
    </div>
    <div class="icon rounded-circle  ">
      <i class="fa fa-search-plus fa-2x pt-2 ps-2"></i>
    </div>
      </div>
    </div>
  </div>

  <div class="  col-lg-6 col-xl-4 mb-3">
    <div class="father position-relative overflow-hidden">
      <img src="img/6.jpg" class="img-fluid cardImg" alt="">
            <div class="floatingDiv position-absolute d-flex justify-content-center align-items-center">
            <div class="icon rounded-circle ">
            <i class="fa fa-chain-broken fa-2x pt-2" ></i>
          </div>
          <div class="icon rounded-circle  ">
            <i class="fa fa-search-plus fa-2x pt-2 ps-2"></i>
          </div>
      </div>
    </div>
  </div>`)
  cards();     
});
$("#works .nav-item").eq(2).click(function(){
    $("#carusel").html(` <div class="  col-lg-6 col-xl-4 mb-3">
    <div class="father position-relative overflow-hidden"">
      <img src="img/2.jpg" class="img-fluid cardImg" alt="">
            <div class="floatingDiv position-absolute d-flex justify-content-center align-items-center">
            <div class="icon rounded-circle ">
            <i class="fa fa-chain-broken fa-2x pt-2" ></i>
          </div>
          <div class="icon rounded-circle  ">
            <i class="fa fa-search-plus fa-2x pt-2 ps-2"></i>
          </div>
      </div>
    </div>
  </div>

  <div class="  col-lg-6 col-xl-4 mb-3">
    <div class="father position-relative overflow-hidden">
      <img src="img/5.jpg" class="img-fluid cardImg" alt="">
            <div class="floatingDiv position-absolute d-flex justify-content-center align-items-center">
            <div class="icon rounded-circle ">
            <i class="fa fa-chain-broken fa-2x pt-2" ></i>
          </div>
          <div class="icon rounded-circle  ">
            <i class="fa fa-search-plus fa-2x pt-2 ps-2"></i>
          </div>
      </div>
    </div>
  </div>`)
  cards();     
});
$("#works .nav-item").eq(3).click(function(){
    $("#carusel").html(` <div class="  col-lg-6 col-xl-4 mb-3">
    <div class="father position-relative overflow-hidden">
      <img src="img/1.jpg" class="img-fluid cardImg" alt="">
            <div class="floatingDiv position-absolute d-flex justify-content-center align-items-center">
            <div class="icon rounded-circle ">
            <i class="fa fa-chain-broken fa-2x pt-2" ></i>
          </div>
          <div class="icon rounded-circle  ">
            <i class="fa fa-search-plus fa-2x pt-2 ps-2"></i>
          </div>
      </div>
    </div>
  </div>

  <div class="  col-lg-6 col-xl-4 mb-3">
  <div class="father position-relative overflow-hidden">
    <img src="img/32.jpg" class="img-fluid cardImg" alt="">
    <div class="floatingDiv position-absolute d-flex justify-content-center align-items-center">
    <div class="icon rounded-circle ">
    <i class="fa fa-chain-broken fa-2x pt-2" ></i>
  </div>
  <div class="icon rounded-circle  ">
    <i class="fa fa-search-plus fa-2x pt-2 ps-2"></i>
  </div>
  </div>
  </div>
</div>

  <div class="  col-lg-6 col-xl-4 mb-3">
    <div class="father position-relative overflow-hidden">
      <img src="img/5.jpg" class="img-fluid cardImg" alt="">
      <div class="floatingDiv position-absolute d-flex justify-content-center align-items-center">
      <div class="icon rounded-circle ">
      <i class="fa fa-chain-broken fa-2x pt-2" ></i>
    </div>
    <div class="icon rounded-circle  ">
      <i class="fa fa-search-plus fa-2x pt-2 ps-2"></i>
    </div>
      </div>
    </div>
  </div>`)
  cards();     
});
function close(){
  $(".fa-xmark").click(function(){
    $(".popUp").removeClass("d-flex");
    $(".popUp").addClass("d-none");
  });
}
close();
function cards ()
{
  $(".fa-search-plus").click(function(eInfo){
  $(".popUp").addClass("d-flex");
  $(".popUp").removeClass("d-none");
  photoSource = $(eInfo.target).parent().parent().siblings()[0];
  $(".photo").html(`<img src="${photoSource.src}" alt="" class="img-fluid">`);
})
}

function goRight()
{
  index = imgs.indexOf(photoSource); 
  $(".fa-chevron-right").click(function(){
    if(index>=imgs.length-1)
    {
      index = -1;
    }
    $(".photo").html(`<img src="${imgs[++index].src}" alt="" class="img-fluid">`);
  })
}
function goLeft()
{
  index = imgs.indexOf(photoSource); 
  $(".fa-chevron-left").click(function(){
    if(index<=0)
    {
      index = imgs.length;
    }
    $(".photo").html(`<img src="${imgs[--index].src}" alt="" class="img-fluid">`);
  })
}
function goRightKey()
{
  index = imgs.indexOf(photoSource); 
  $("body").keydown(function(eInfo){
    if(eInfo.key=="ArrowRight")
    {
      if(index>=imgs.length-1)
      {
        index = -1;
      }
      $(".photo").html(`<img src="${imgs[++index].src}" alt="" class="img-fluid">`);
    
    }
  })
}
function goLeftKey()
{
  index = imgs.indexOf(photoSource); 
  $("body").keydown(function(eInfo){
    if(eInfo.key=="ArrowLeft")
    {
      if(index<=0)
      {
        index = imgs.length;
      }
      $(".photo").html(`<img src="${imgs[--index].src}" alt="" class="img-fluid">`);
    
    }
  })
}
goLeftKey()
goRightKey()
goRight();
goLeft();
cards();

$(".contBtn button").click(function(eInfo)
{
  contIndex = contBtn.indexOf(eInfo.target);
  let x = -$(".card").innerWidth()*contIndex;
  $(".allCards").css({"transform" : `translateX(${x+12}px)`})
})
$(".transOne").click(function()
{
  $(".allCards").css({"transform" : `translateX(${-$(".card").outerWidth(true)-60}px)`})
});
$(".transTwo").click(function(){
  $(".allCards").css({"transform" : `translateX(0px)`})
})






