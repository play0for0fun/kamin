<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$kvart = $_POST['kvart'];
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

$subject = 'тема пиьсма заказа';	

$headers= "From: noreply <noreply@noreply.ru>\r\n";
$headers.= "Reply-To: noreply <noreply@noreply.ru>\r\n";
$headers.= "X-Mailer: PHP/" . phpversion()."\r\n";
$headers.= "MIME-Version: 1.0" . "\r\n";
$headers.= "Content-type: text/plain; charset=utf-8\r\n";

$to = "triowork@i.ua";

if(isset($_POST['kvart'])){$message .= "Выбор квартиры: $kvart\n\n";}
$message .= "Имя: $name\n";
$message .= "Email: $email\n";
$message .= "Телефон: $phone\n\n";
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
$message .= "Тип соответствия ключа(e-точное/p-фразовое/b-широкое): $matchtype";

mail ($to,$subject,$message,$headers);


$subject2 = "тема пиьма клиенту"; 

$message2 ="текст письма клиенту"; 

$filename = "Как назовешь.xls";
$filepath = "price.xls";

$filename1 = "Так поплывет.doc";
$filepath1 = "predlojenie.doc";

$user_email = "OT_KOGO@priwlo.pismo";

$boundary = "--".md5(uniqid(time())); 
$mailheaders = "MIME-Version: 1.0;\r\n"; 
$mailheaders .="Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n"; 
$mailheaders .= "From: $user_email <$user_email>\r\n"; 
$mailheaders .= "Reply-To: $user_email\r\n"; 
$multipart = "--$boundary\r\n"; 
$multipart .= "Content-Type: text/html; charset=utf-8\r\n";
$multipart .= "Content-Transfer-Encoding: base64\r\n";    
$multipart .= "\r\n";
$multipart .= chunk_split(base64_encode($message2));

$fp = fopen($filepath,"r"); 
$file = fread($fp, filesize($filepath)); 
fclose($fp); 
$fp1 = fopen($filepath1,"r");       
$file1 = fread($fp1, filesize($filepath1)); 
fclose($fp1);

$message_part = "\r\n--$boundary\r\n"; 
$message_part .= "Content-Type: application/octet-stream; name=\"$filename\"\r\n";  
$message_part .= "Content-Transfer-Encoding: base64\r\n"; 
$message_part .= "Content-Disposition: attachment; filename=\"$filename\"\r\n"; 
$message_part .= "\r\n";
$message_part .= chunk_split(base64_encode($file));
$message_part .= "\r\n--$boundary\r\n"; 
$message_part .= "Content-Type: application/octet-stream; name=\"$filename1\"\r\n";  
$message_part .= "Content-Transfer-Encoding: base64\r\n"; 
$message_part .= "Content-Disposition: attachment; filename=\"$filename1\"\r\n"; 
$message_part .= "\r\n";
$message_part .= chunk_split(base64_encode($file1));
$message_part .= "\r\n--$boundary\r\n"; 

$multipart .= $message_part;
if(strlen($email) > 0) {mail($email,$subject2,$multipart,$mailheaders);}
?>