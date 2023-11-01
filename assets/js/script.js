window.onload = function () {
    let checkbox = document.querySelector(".offLight");
    checkbox.addEventListener('change', e => {
        if(e.target.checked){
            document.body.style.backgroundColor = '#21262d';
            document.body.style.color = '#c9d1d9';
            document.body.style.borderColor = '#b1bac4';

            document.querySelector("header").style.backgroundColor = '#161b22';
            document.querySelector("footer").style.backgroundColor = '#161b22';

        }else{
            document.body.style.backgroundColor = '#f0f6fc';

        }
    });
}