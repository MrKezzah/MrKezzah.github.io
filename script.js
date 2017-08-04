// $("#ex1").mouseenter(function(){
//   $(this).stop(false,false).animate({  width: "270px", height: "180px", color: "#00FFFF", marginRight: "25px", borderTopColor: "#FF00B2"});
//   // alert("This is working");
//   if (this == $("#ex1")) {
//     $(this).stop(false,false).animate({ color: "#00FFFF", textShadow: "0px 0px 35px #008282", marginRight: "25px", boxShadow: "0px 0px 70px #A40073, inset 0px 0px 35px #A40073", borderColor: "#FF00B2"});
//     alert("This is working");
//   }
//
// });
//
// $("#ex1").mouseleave(function(){
//   $(this).stop(false,false).animate({  width: "250px", height: "166px"});
// });

$("#disclaimer").mouseenter(function(){
  $(".bubble").stop(false,false).animate({ opacity: "1"});
});

$("#disclaimer").mouseleave(function(){
  $(".bubble").stop(false,false).animate({ opacity: "0"});
});
