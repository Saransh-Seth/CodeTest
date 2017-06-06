$(document).ready(function(){

  //Initialise TinyMCE editor
  tinymce.init({
    selector: 'textarea', //Target
    height: 500,
    resize: false, //Force stop resize
    toolbar: 'mybutton', //Add custom toolbar butotn
    menubar: false, //Hide menubar

    setup: function (editor) {
      editor.addButton('mybutton', {
        text: 'Insert name', //Button value
        icon: false,
        onclick: function () {
          editor.insertContent('&nbsp;<b>Hello '+chance.name()+'!</b><br/><br/>'); //Add random name to editor
        }
      });
    }
  });

  //select on change event
  $('select').on('change', function() {
    var $body = $(tinymce.activeEditor.getBody());
    $body.find('p:last').append($('<br/><span>You added "'+this.value+'" from the select option!</span><br/>')); //Append select value to editor at the end
  });

});
