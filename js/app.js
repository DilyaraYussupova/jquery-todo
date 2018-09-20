$(function() {
   // All DOM code goes in here so that that the DOM is fully
   // loaded before we start manipulating it

   // Element references
   var $textbox = $('input');
   $textbox.focus();
   var $submitBtn = $('main > button');
   var $ul = $('ul');

   $submitBtn.on('click', function(e) {
      var todoText = $textbox.val();
      var $li = $(`<li>${todoText}<button>X</button></li>`); // String Template Literals
      // var $li = $('<li>' + todotext + '</li>'); // old style way (not recommended)
      $ul.append($li);
      $textbox.val('');
      $textbox.focus();
   });
 
   $ul.on('click', 'li > button', function(e) {
    $(this).closest('li').css('text-decoration', 'line-through');
    });
});