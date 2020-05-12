const navSlide = () => {
        const trey = document.querySelector('.trey');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        trey.addEventListener('click', ()=>{
                nav.classList.toggle('nav-activated');

                navLinks.forEach((link, index) =>{
                        if(link.style.animation){
                                link.style.animation = '';
                        } else{
                                link.style.animation = `fadein 0.5s ease forwards ${index / 7 + 1}s`;
                        }
                });

                trey.classList.toggle('toggle');
        });

        document.addEventListener('scrollTop', ()=>{

                navLinks.forEach((link, index)=>{
                        if(link.style.animation){
                                link.style.animation = '';
                        } else{
                                link.style.animation = `fadedown 0.5s ease ${index / 7 + 1}s`;
                        }
                });
        });
}

navSlide();
