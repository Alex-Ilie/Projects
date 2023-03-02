(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            screen.value += value;

        console.log(screen.value);

           })
        });

        equal.addEventListener('click', function(e) {
            if (screen.value ===''){
                screen.value = "Enter value";
            } else {
                let result = eval(screen.value);
                screen.value = result;
            }
        })

        clear.addEventListener('click', function(e) {
            screen.value = "";
        })
           
        console.log(screen.value);

})();