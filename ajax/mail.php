<?php
$frm = $_POST['frm'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$text = $_POST['text'];
$st1 = $_POST['st1'];
$st2 = $_POST['st2'];
$st3 = $_POST['st3'];
$file = $_POST['file'];
$utm_source = $_POST['utm_source'];
$utm_medium = $_POST['utm_medium'];
$utm_campaign = $_POST['utm_campaign'];
$utm_term = $_POST['utm_term'];
$source_type = $_POST['source_type'];
$source = $_POST['source'];
$position_type = $_POST['position_type'];
$position = $_POST['position'];
$added = $_POST['added'];
$creative = $_POST['creative'];
$matchtype = $_POST['matchtype'];
$location = $_POST['location'];
$url = $_POST['url'];
$title = $_POST['title'];

$subject = 'Камины';	

//$headers= "From: noreply <noreply@noreply.ru>\r\n";
//$headers.= "Reply-To: noreply <noreply@noreply.ru>\r\n";
$headers.= "X-Mailer: PHP/" . phpversion()."\r\n";
$headers.= "MIME-Version: 1.0" . "\r\n";
$headers.= "Content-type: text/plain; charset=utf-8\r\n";

$to = "medlkamin@yandex.ru, ban9z.-.xn----7sbbh2akdncin0b.xn--p1ai@lptracker.ru";

$message = "Форма: $frm\n\n";
$message .= "Имя: $name\n";
$message .= "Телефон: $phone\n\n";
if($frm == 'Остались вопросы?'){
	$message .= "Вопрос: $text\n\n";
}
if($frm == 'Подбор камина'){
	$message .= "Материал изготовления топки: $st1\n";
	$message .= "Форма стекла: $st2\n";
	$message .= "Материал изготовления: $st3\n\n";
}
$message .= "Источник: $utm_source\n";
$message .= "Тип источника: $utm_medium\n";
$message .= "Кампания: $utm_campaign\n";
$message .= "Ключевое слово: $utm_term\n";
$message .= "Тип площадки(поиск или контекст): $source_type\n";
$message .= "Площадка: $source\n";
$message .= "Спецразмещение или гарантия: $position_type\n";
$message .= "Позиция объявления в блоке: $position\n";
$message .= "Показ по дополнительным ролевантным фразам: $added\n";
$message .= "Идентификатор объявления: $creative\n";
$message .= "Тип соответствия ключа(e-точное/p-фразовое/b-широкое): $matchtype\n\n";
$message .= "Гео-положение отправителя: $location\n\n";
$message .= "Ссылка на сайт: $url\n";
$message .= "Заголовок: $title\n";
$message .= "<p>ip: {$_COOKIE["ip"]}</p>";



if($frm == 'Готовые чертежи'){


	$filename = "$file";
	$filepath = "upload/$file";

	$boundary = "--".md5(uniqid(time())); 

	$headers = "X-Mailer: PHP/" . phpversion()."\r\n";
	$headers .= "MIME-Version: 1.0;\r\n"; 
	$headers .="Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";


	$multipart = "--$boundary\r\n"; 
	$multipart .= "Content-Type: text/plain; charset=utf-8\r\n";
	$multipart .= "Content-Transfer-Encoding: base64\r\n";    
	$multipart .= "\r\n";
	$multipart .= chunk_split(base64_encode($message));

	$fp = fopen($filepath,"r"); 
	$file = fread($fp, filesize($filepath)); 
	fclose($fp); 


	$message_part = "\r\n--$boundary\r\n"; 
	$message_part .= "Content-Type: application/octet-stream; name=\"$filename\"\r\n";  
	$message_part .= "Content-Transfer-Encoding: base64\r\n"; 
	$message_part .= "Content-Disposition: attachment; filename=\"$filename\"\r\n"; 
	$message_part .= "\r\n";
	$message_part .= chunk_split(base64_encode($file));
	$message_part .= "\r\n--$boundary\r\n"; 

	$multipart .= $message_part;

	$message = $multipart;
}

mail ($to,$subject,$message,$headers);

$files = glob('upload/*'); 
foreach($files as $file_name){ 
  if(is_file($file_name))
    unlink($file_name); 
}

?>