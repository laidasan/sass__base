; (() => {
    const $prc = document.querySelector('.prc')



    function debounce(func, delay) {
        let timeout;
        let thisdelay = delay || 100;

        return function () {
            let context = this;
            let args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                func.apply(context, args);
            }, thisdelay)
        }
    }

    function prcClick(e) {
        let target = e.target;
        // console.log(target)
        if (target.matches('.prc__content__title')) {
            console.log('click')
            target.nextElementSibling.classList.toggle('open');
        }
    }

    $prc.addEventListener('click', prcClick)

    

    window.addEventListener('resize', debounce(() => {
        console.log(window.innerWidth)  
        console.log('resize')
        if (window.innerWidth >= 600) {$prc.removeEventListener('click',prcClick)} else {$prc.addEventListener('click', prcClick)}
    },300))

})()