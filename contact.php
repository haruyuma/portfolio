<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
<?php
     mb_language("Japanese");
     mb_internal_encoding("UTF-8");
     $to = $_POST['email'];
     $title = $_POST['subject'];
     $content = $_POST['message'];
     if(mb_send_mail($to, $title, $content)){
       echo "メールを送信しました";
     } else {
       echo "メールの送信に失敗しました";
     };
   ?>
 </body>
 </html>
