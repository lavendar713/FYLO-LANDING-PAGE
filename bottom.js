var inp = document.getElementById('get1');
var forms  = document.getElementById('form1');

var	elems               = document.createElement('div');
	elems.id            = 'notify1';
	elems.style.display = 'none';
	forms.appendChild(elems);

    inp.addEventListener('invalid', function(event){
        event.preventDefault();
        if ( ! event.target.validity.valid ) {
            elems.textContent   = 'Please check your email';
            elems.className     = 'error';
            elems.style.display = 'block';
            inp.className    = 'invalid animated shake';
        }
    });

    inp.addEventListener('input', function(event){
        if ( 'block' === elems.style.display ) {
            inp.className = '';
            elems.style.display = 'none';
        }
    });