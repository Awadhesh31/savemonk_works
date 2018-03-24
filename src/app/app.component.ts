import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public ngOnInit(){
    $( "#toggle").click(function() {
      $(".menu").toggleClass("closed");
      $(".menu-second").addClass("closed-second");
      $(this).toggleClass("closed");
      $("#wrapper").toggleClass("closed")
    });
    $( "#new_t" ).click(function() {
      $("#toggle").toggleClass("closed");
      $(".menu").toggleClass("closed");
      $(".menu-second").addClass("closed-second");
      $(this).toggleClass("closed");
      $("#wrapper").toggleClass("closed")
    });
    $( "#open_second").click(function() {
      $(".menu-second").toggleClass("closed-second");
    });
    $( "#type_product").click(function(){
      $(".menu-second").addClass("closed-second");
    });
    $("#go_home").click(function() {
      $(".menu").addClass("closed");
      $("#toggle").removeClass("closed");
  });
}
}