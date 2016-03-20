<?php
$uploaddir = getcwd().DIRECTORY_SEPARATOR.'upload'.DIRECTORY_SEPARATOR;
$uploadfile = $uploaddir.basename($_FILES['file']['name']);

if(is_uploaded_file($_FILES["file"]["tmp_name"]))
   {
     
move_uploaded_file($_FILES['file']['tmp_name'], $uploadfile);
echo basename($_FILES['file']['name']);
   } else {
      echo("Ошибка загрузки");
}
?>