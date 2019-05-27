function OnSubmitClick(){
  if(document.getElementById("form_name").value=="" && document.getElementById("form_email").value=="" && document.getElementById("form_message").value==""){
    alert("氏名、メールアドレス、メッセージが未入力です");
  }else if(document.getElementById("form_name").value=="" && document.getElementById("form_email").value==""){
    alert("氏名、メールアドレスが未入力です");
  }else if(document.getElementById("form_name").value=="" && document.getElementById("form_message").value==""){
    alert("氏名、メッセージが未入力です");
  }else if(document.getElementById("form_email").value=="" && document.getElementById("form_message").value==""){
    alert("メールアドレス、メッセージが未入力です");
  }else if(document.getElementById("form_name").value==""){
    alert("氏名が未入力です");
  }else if(document.getElementById("form_email").value==""){
    alert("メールアドレスが未入力です");
  }else if(document.getElementById("form_message").value==""){
    alert("メッセージが未入力です");
  }
}
