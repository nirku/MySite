$(function(){
    $(".nav-link").click(function(e){
      e.preventDefault();
      $('html,body').scrollTo(this.hash,this.hash); 
    });
  });
   $(document).scroll(function() {
      $('nav').toggle($(this).scrollTop()>1000)
   });​