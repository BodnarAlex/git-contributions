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
                console.log(item.classList[1]);
                switch (item.classList[1]) {
                    case 'stage1':
                        item.classList.remove('stage1');
                        item.classList.add('stage2');
                        break;
                    case 'stage2':
                        item.classList.remove('stage2');
                        item.classList.add('stage3');
                        break;
                    case 'stage3':
                        item.classList.remove('stage3');
                        item.classList.add('stage4');
                        break;
                    case 'stage4':
                        item.classList.remove('stage4');
                        break;
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