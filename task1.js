$(document).ready(function(){

  //Initialise the canvas
  var lc = LC.init(document.getElementsByClassName('literally core')[0]);
  $('input[type=file]').change(function () {
    // get the file name, possibly with path (depends on browser)
    var filename = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();

    // Use a regular expression to trim everything before final dot
    var extension = $('input[type=file]').val().replace(/^.*\./, '');

    // Iff there is no dot anywhere in filename, we would have extension == filename,
    // so we account for this possibility now
    if (extension == $('input[type=file]').val()) {
      extension = '';
    } else {
      // if there is an extension, we convert to lower case
      // (N.B. this conversion will not effect the value of the extension
      // on the file upload.)
      extension = extension.toLowerCase();
    }

    switch (extension) {
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
      case 'svg':
      var backgroundImage = new Image();
      reader.onload = function( event ) {
        // do stuff
        backgroundImage.src = reader.result;
      };
      reader.readAsDataURL( filename );
      lc.saveShape(LC.createShape('Image', {x: 0, y: 0, width: 952, height: 200, image: backgroundImage}));
      break;

      default:
      // Dont allow upload if not image
      alert("Uploaded file is not an image!");
      $('input[type=file]').val('');
    }
  });



  lc.respondToSizeChange();

  //Initialise tools for canvas
  var tools = [
    {
      name: 'pencil',
      el: document.getElementById('tool-pencil'),
      tool: new LC.tools.Pencil(lc)
    },
  ];

  var activateTool = function(t) {
    lc.setTool(t.tool);

    tools.forEach(function(t2) {
      if (t == t2) {
        t2.el.style.backgroundColor = 'transperant';
      } else {
        t2.el.style.backgroundColor = 'transparent';
      }
    });
  };

  tools.forEach(function(t) {
    t.el.style.cursor = "pointer";
    t.el.onclick = function(e) {
      e.preventDefault();
      activateTool(t);
    };
  });
  activateTool(tools[0]);


  //For base64 saving of file
  //There is one error here if we try to save with background image uploaded it will give an error as this is insecure
  $('#tool-save').click(function(e){
    e.preventDefault();
    var svgString = lc.getSVGString();
    window.open("data:image/svg+xml;base64," + btoa(svgString));
  });
});
