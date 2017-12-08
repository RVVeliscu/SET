
var MyObj = new Array({email : "0user", password : "0parola"});
var pozitie = MyObj.length;

window.onload = function setare(){
  if( localStorage.getItem('myObj') != null )
    MyObj = JSON.parse( localStorage.getItem('myObj') );

  if(MyObj != null)
    pozitie = MyObj.length;
  else
    pozitie = -1;
}

function sparol() {
  var parola = document.getElementById('pass').value;
  var user = document.getElementById('email').value;
  var ok = true;

  for (var i = 0; i < MyObj.length; i++)
    if( MyObj[i].email == user && MyObj[i].password == parola )
      ok = false;

  if(ok)
    MyObj.push({email : user, password : parola});

  MyObj.sort(function (a, b) {
    if( a.email < b.email )
      return -1;
    return 1;
  });

  var MyJson = JSON.stringify(MyObj);

  localStorage.setItem('myObj', MyJson);

}
