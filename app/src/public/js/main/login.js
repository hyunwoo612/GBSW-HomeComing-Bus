"use strict";

console.log('hello')
console.log('bye')

$(document).ready(function() {
  $('.input-container input').focus(function() {
    $(this).next('label').css({
      'top': '0',
      'font-size': '12px'
    });
  });

  $('.input-container input').blur(function() {
    if (!$(this).val()) {
      $(this).next('label').css({
        'top': '50%',
        'font-size': '16px'
      });
    }
  });

  $('.input-container input').on('input', function() {
    if ($(this).val()) {
      $(this).next('label').css({
        'top': '0',
        'font-size': '12px'
      });
    } else {
      $(this).next('label').css({
        'top': '50%',
        'font-size': '16px'
      });
    }
  });
});

