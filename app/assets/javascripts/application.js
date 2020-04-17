// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery_ujs
//= require jquery
//= require semantic-ui
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

$(document).on('turbolinks:load', function() {
  var i = 0;
  var result = 0;


  $('#yes').on('click',function(){

      result += 1;
      rotate();

  });

  $('#no').on('click',function(){
      if(i < questionArray.length){
          $('#example5').progress('increment');
      }

      rotate();


  });

  $('.start').on('click', function(){
    $('.test_questions').css("display", "block");
    $('.test_answers').css("display", "block");
    $(this).css("display","none");
    $('.progress').css("display","block");
    rotate();
  });

  var questionArray = ["Are you experiencing any problems?","Have you ever had any of the following:- Diabetes, Hypertension etc. ?","Have you traveled anywhere internationally in last 14 days ?", "Have you recently interacted with any covid-19 positive patient ?", "Are you a health care worker ? "];


 var rotate = function(){
   if(i < questionArray.length){
       $('.test_questions').html(questionArray[i]);
       i++;


   }else{

         // alert(result);
         // $('.test_questions').css("display","none");
         $('.test_answers').css("display","none");

         if(result < 1){
           $('.test_questions').html("You are totally safe");
           $('.test_questions').css("background-color","green");
           $('.test_questions').css("padding","5px");
         }else if (result > 1 && result < 3) {
              $('.test_questions').html("Please stay home and be safe. If required consult a doctor");

              $('.test_questions').css("background-color","yellow");
              $('.test_questions').css("padding","5px");
         }else{
            $('.test_questions').html("You may be Corona positive. Go get it checked");
            $('.test_questions').css("background-color","red");
            $('.test_questions').css("padding","5px");
         }


   }



 }


$('.progress').css("display","none");





});
