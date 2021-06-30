var k = "The respective values are :";
    function Login() {
        var input = document.getElementsByName('array[]');
  
        for (var i = 0; i < input.length; i++) {
            var a = input[i];
            k = k + a.value + " ";
        }
  
        document.getElementById("par").innerHTML = k;
    }