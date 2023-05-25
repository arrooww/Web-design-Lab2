function reg()
{
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let gender = document.getElementById("gender").value;
    let dob = document.getElementById("dob").value;

    let raw = localStorage.getItem("users");
    let users = raw ? JSON.parse(raw) : [];

    function isEmailExist(email){
        return users.some((user) => user.email === email);
    }

      if (isEmailExist(email)) {
        alert("Такий email вже зареєстрований");
        return;
      }
      else{
        let newUser = { 
            name: name, 
            email: email, 
            pass: pass,
            gender: gender,
            dob: dob
        };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
    
        

        alert("Ви успішно зареєструвалися");
      }
}  

function log()
{
    let email = document.getElementById("login-email").value;
    let pass = document.getElementById("password").value;

    let raw = localStorage.getItem("users");
    let users = JSON.parse(raw);

    function isEmailExist(email){
        return users.some((user) => user.email === email);
    }

      if (isEmailExist(email)) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                if(users[i].pass === pass){
                  
                    alert("Ви увійшли");
                    
                    sessionStorage.setItem('logged', '1');
                    sessionStorage.setItem('name', users[i].name);
                    sessionStorage.setItem('email', users[i].email);
                    sessionStorage.setItem('gender', users[i].gender);
                    sessionStorage.setItem('dob', users[i].dob);
                }
                else{
                    alert("Невірний пароль");
                    break;
                }
            }
          }
      }
      else{
        alert("Такий email не зареєстрований");
      }
}   

function saveComment() {
  
  var theme = document.getElementById("message-title").value;
  var comment = document.getElementById("message-content").value;

  
  var newComment = {
    theme: theme,
    comment: comment
  };


  var comments = JSON.parse(localStorage.getItem("comments")) || [];


  comments.push(newComment);


  localStorage.setItem("comments", JSON.stringify(comments));

  
  document.getElementById("message-title").value = "";
  document.getElementById("message-content").value = "";


  showComments();
}