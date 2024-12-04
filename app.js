const navLinks = document.querySelectorAll("header nav a");
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section')
const menuIcon = document.querySelector('#menu-icon')
const navbar = document.querySelector('header nav')


menuIcon.addEventListener('click' ,() =>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
})


const activePage = () => {

    const barsbox = document.querySelector('.bars-box');
    const header = document.querySelector('header');

    header.classList.remove("active");
    setTimeout(() => {
      header.classList.add("active");
    }, 1100);

  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  barsbox.classList.remove('active'); 
  setTimeout( () =>{
  barsbox.classList.add("active"); 
  },1100)


   sections.forEach((section) => {
     section.classList.remove("active");
   });


   menuIcon.classList.remove("bx-x");
   navbar.classList.remove("active");

};

navLinks.forEach((link,index)=>{
    link.addEventListener('click', () =>{
        if(!link.classList.contains('active')) {
            activePage()
            link.classList.add('active');

            setTimeout(()=>{
                sections[index].classList.add('active')
            },1100)
        }
    })
})

logoLink.addEventListener('click', () =>{
    if(!navLinks[0].classList.contains('active')) {
        activePage()
        navLinks[0].classList.add('active')

        setTimeout(() => {
          sections[0].classList.add("active");
        }, 1100);
    }
})

const expertiseBtns = document.querySelectorAll(".expertise-btn");

expertiseBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const expertiseDetails = document.querySelectorAll(".expertise-detail");

    expertiseBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");

    expertiseDetails.forEach((detail) => {
      detail.classList.remove("active");
    });
    expertiseDetails[index].classList.add("active");
  });
});

const arrowRight = document.querySelector(
  ".projects-box .navigation .arrow-right"
);
const arrowLeft = document.querySelector(
  ".projects-box .navigation .arrow-left"
);

let index = 0;

const activeProject = () => {
  const imgSlide = document.querySelector(".project-carousal .img-slide");

  const projectDetails = document.querySelectorAll(".projects-detail");

  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${
    index * 2
  }rem))`;

  projectDetails.forEach((detail) => {
    detail.classList.remove("active");
  });

  projectDetails[index].classList.add("active");
};

arrowRight.addEventListener("click", () => {
  if (index < 3) {
    index++;
    arrowLeft.classList.remove("disabled");
  } else {
    index = 3;
    arrowRight.classList.add("disabled");
  }
  activeProject();
});

arrowLeft.addEventListener("click", () => {
  if (index > 1) {
    index--;
    arrowRight.classList.remove("disabled");
  } else {
    index = 0;
    arrowLeft.classList.add("disabled");
  }
  activeProject();
});
