window.onload = function () {
    let checkbox = document.querySelector(".offLight");
    checkbox.addEventListener('change', e => {
        if(e.target.checked){
            document.body.style.backgroundColor = '#21262d';

        }else{
            document.body.style.backgroundColor = '#f0f6fc';

        }
    });
}