function handleOnLoad(){
 const recipePage = document.getElementById('recipePage')
 let html = ` <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3">
 <div class="container">
      <a href="index.html" class="navbar-brand text-light ">Shop By Recipe</a>

     <button class="navbar-toggler" type="button" data-bs-toggle="collapse"data-bs-target=#navmenu>
         <span class="navbar-toggler-icon"></span>
     </button>

      <div class="collapse navbar-collapse" id="navmenu">
         <ul class="navbar-nav ms-auto">
             <li class="nav-items ">
                 <a href="recipe.html" class="nav-link text-light ">Recipes</a>
             </li>
             <li class="nav-items">
                 <a href="admin.html" class="nav-link text-light ">Admin TEST</a>
             </li>
             <li class="nav-items">
                 <a href="login.html" class="nav-link text-light ">Sign Up / Login</a>
             </li>
         </ul>
      </div>
     </div>

</nav>
<div class = "container">
 <div class = "meal-box">
   <div class = "meal-search">
     <h2 class = "title">Find Meals For Your Ingredients</h2>
     <div class = "meal-search-box">
       <input type = "text" class = "search-control" placeholder="Enter an ingredient" id = "search-input">
       <button type = "submit" class = "search-btn btn" id = "search-btn">
       </button>
     </div>
   </div>
   <div class = "meal-result">
     <h2 class = "title">Your Search Results:</h2>
     <div id= "meal">  
     </div>
   </div>
   <div class = "meal-details">
     <button type = "button" class = "btn recipe-close-btn" id = "recipe-close-btn">
     </button>
       
     </div>
   </div>
 </div>
</div>
<footer class="p-5 bg-dark text-white text-center position-relative">
 <div class="container">
   <p class="lead">Copyright &copy; CrimsonTech Creations </p>
   <a class="position-absolute bottom-0 end-0 p-5">
     <i class="bi bi-arrow-up-circle h1"></i>
   </a>
 </div>
</footer>
`
recipePage.innerHTML = html;

}


