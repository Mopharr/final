var k = "The respective values are :";
		function Geeks() {
			var input = document.getElementsByName('array[]');

			for (var i = 0; i < input.length; i++) {
				var a = input[i];
				k = k + a.value + " ";
			}

			document.getElementById("par").innerHTML = k;
			document.getElementById("po").innerHTML = "Output";
            console.log(k);
		}

// var wrapper = document.querySelector('.form-main'),
//     form = wrapper.querySelector('form'),
//     submitInput = form[0].querySelector('input[type="submit"]')

// function login(event) {
//     // event.preventDefault()

//     var formData = new FormData(form[0]);

//     console.log(formData.get('cname') + ' - ' + formData.get('mname') + ' - ' +
//     formData.get('pname') + ' - ' + formData.get('pp'));
// }
//     submitInput.addEventListener('click', login, false);