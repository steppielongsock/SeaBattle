// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require turbolinks
//= require_tree .


$(document).ready(function(){
  //+++++++++++TO DO +++++++++++++++
  // Need to refactor this so all ships can use this one draggable right now I'm keeping one for each ship
  $( "#destroyer").draggable( { grid: [35, 35] } );
  $( "#submarine").draggable( { grid: [35, 35] } );
  $( "#cruiser").draggable( { grid: [35, 35] } );
  $( "#battleship").draggable( { grid: [35, 35] } );
  $( "#carrier").draggable( { grid: [35, 35] } );
} );