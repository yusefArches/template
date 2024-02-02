const navEL = document.querySelector('.navbar');
        window.addEventListener('scroll', 
        function changeNavBack() {
            if (window.scrollY >= 56) {
                navEL.classList.add('navbar-scroll');
            } if(window.scrollY < 56 ) {
                navEL.classList.remove('navbar-scroll');
            }
        })