let portfolio = [
    {
        title:"WordPress",
        year:"one",
        message:"one",
        link:"equipgroup.co",
        imageSrc:"bg-equip.jpg",
        category:"WordPress",
        entry:"fade-up"

    },    {
        title:"Design",
        year:"one",
        message:"one",
        imageSrc:"thinking-lifehack.jpg",
        imageSrc:"home.jpg",
        link:"designs.html",
        category:"design",
        entry:"fade-down"
    },    {
        title:"Design",
        year:"one",
        message:"one",
        link:"unrivaled-white-design.html",
        imageSrc:"hero-white.jpg",
        category:"design",
        entry:"fade-up"

    },    {
        title:"Note-Taker",
        year:"one",
        message:"one",
        imageSrc:"note-taker-app.jpg",
        link:"https://everisto-fungo.github.io/Note-Taker/",
        category:"web app",
        entry:"fade-down"

    },    {
        title:"To-Do-App",
        year:"one",
        message:"one",
        imageSrc:"to-do-app.jpg",
        link:"https://everisto-fungo.github.io/To-Do-App/",
        category:"WEb App",
        entry:"fade-up"

    },  
    
    {
        title:"Website",
        year:"one",
        message:"one",
        link:"https://everisto-fungo.github.io/Ministry-Programs",
        imageSrc:"my-fam.jpg",
        category:"static",
        entry:"fade-up"

    },
]

// portfolio filter
let filters ={
    category:"",
}



// render portfolio
let renderProjects= function (portfolio,filters) {
    let portfolioInnerDiv = document.querySelector(".portflio-inner-div")
    portfolioInnerDiv.innerHTML=``
    // check the menu slector
    
 const searchFilteredprojects= portfolio.filter(function (project) {

        return project.category.toLowerCase().includes(filters.category.toLowerCase()) 
    })


    searchFilteredprojects.forEach(project => {
     
        let inside = document.createElement("div")
        inside.classList=` containing  p-2 m-0 ${project.category}  `
    
        let width =window.visualViewport.width 

if (width< 500) {
    portfolio.forEach(project=>{
        inside.classList=` containing p-0 p-2 mr-0 ${project.category} 
        aos-init aos-animate`
        
    })
} else {
                  inside.setAttribute("data-aos",`${project.entry}`)
  
}
        
        
        portfolioInnerDiv.appendChild(inside)
        let content = document.createElement("div")
        content.classList=`content ${project.category} `
        inside.appendChild(content)
        content.innerHTML=`  <div class="content-overlay" ></div>
        <img class="content-image" src="${project.imageSrc}">
       <div class="content-details fadeIn-bottom">
           <h6 class="content-title">${project.title}</h6>
       <a class="content-text go-live-anchor" href="${project.link}"  target="_blank">Go Live</a>
       </div> `

       

    });

}

document.querySelector("#filter-by").addEventListener("input", (e) =>{
   filters.category=e.target.value
   renderProjects(portfolio,filters)
})

console.log(renderProjects(portfolio,filters))

