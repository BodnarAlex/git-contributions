window.onload = function () {
    let checkbox = document.querySelector(".offLight");
    let mounths = document.querySelector("#months");
    let block = document.querySelector("#block_item");

    let mounth_array = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    checkbox.addEventListener('change', e => {
        if (e.target.checked) {
            document.documentElement.style.setProperty('--back', '#21262d');
            document.documentElement.style.setProperty('--border', '#b1bac4');
            document.documentElement.style.setProperty('--header', '#161b22');
            document.documentElement.style.setProperty('--text', '#c9d1d9');
        } else {
            document.documentElement.style.setProperty('--back', '#f6f8fa');
            document.documentElement.style.setProperty('--border', '#c9d1d9');
            document.documentElement.style.setProperty('--header', '#c9d1d9');
            document.documentElement.style.setProperty('--text', '#1F2328');
        }
    });

    addMounth();
    addDays();

    document.querySelectorAll(".item").forEach((item, index) => { // here
        item.addEventListener('click', arrow => {
            let len = item.classList.length;
            console.log(len);
            if (len == 1) {
                item.classList.add('stage1');
            } else {
                console.log('len>1');

                let newClass = item.classList[1];
                item.classList.remove(newClass);

                if(newClass != 'stage4'){
                    let newNumber = Number(newClass[5])+1;
                    console.log(newNumber);

                    item.classList.add('stage' + newNumber);

                }

            }
        })
    })


    //(item => item.classList.add('stage4'));

    function addMounth() {
        for (let i = 0; i < 12; i++) {
            let div = document.createElement('div');
            div.innerHTML = mounth_array[i];
            mounths.append(div);
        }
    }

    function addDays() {
        for (let i = 0; i < 371; i++) {
            let div = document.createElement('div');
            div.className = 'item';
            block.append(div);
        }
    }
}