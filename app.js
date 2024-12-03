const expertiseBtns = document.querySelectorAll(".expertise-btn");

expertiseBtns.forEach((btn,index) =>{
    btn.addEventListener('click', () =>{

        const expertiseDetails = document.querySelectorAll(".expertise-detail");


        expertiseBtns.forEach(btn=>{
            btn.classList.remove('active')
        })
        btn.classList.add('active')

         expertiseDetails.forEach((detail) => {
           detail.classList.remove("active");
         });
         expertiseDetails[index].classList.add('active')
    })
})