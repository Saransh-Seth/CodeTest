<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="shortcut icon" href="images/favicon-text.ico" />
  <title>Text Mate</title>
</head>

<!-- External Dependencies -->
<!-- TineMCE -->
<script src="https://cloud.tinymce.com/stable/tinymce.min.js"></script>
<!-- Jquery -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">


<!-- Internal Dependecies -->
<script type="text/javascript" src="task2.js"></script>
<script type="text/javascript" src="chance.js"></script>
<link rel="stylesheet" href="design/task2.css">

<!-- PHP code -->
<?php $choices = array('Lorem Ipsum', 'Dolor Sit', 'Amet Risus'); ?>

<body>
  <!-- Heading -->
  <h1 class="heading">Text Mate</h1>

  <!-- Select for adding value -->
  <select id="select-new">
    <option value="" selected disabled>Add something to editor!</option>
    <?php foreach($choices as $key => $value) { ?>
      <option value="<?php echo $value ?>"><?php echo $value ?></option>
      <?php }?>
    </select>

    <!-- TinyMCE editor -->
    <textarea id="editor">
      Having a good day?<br/>
    </textarea>

  </body>
  </html>
