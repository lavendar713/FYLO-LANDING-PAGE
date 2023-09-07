var input = document.getElementById('get');
var form  = document.getElementById('form');

var	elem               = document.createElement('div');
	elem.id            = 'notify';
	elem.style.display = 'none';
	form.appendChild(elem);

    input.addEventListener('invalid', function(event){
        event.preventDefault();
        if ( ! event.target.validity.valid ) {
            elem.textContent   = 'Please check your email';
            elem.className     = 'error';
            elem.style.display = 'block';
            input.className    = 'invalid animated shake';
        }
    });

    input.addEventListener('input', function(event){
        if ( 'block' === elem.style.display ) {
            input.className = '';
            elem.style.display = 'none';
        }
    });

   