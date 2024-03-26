function handleOnLoad() {
    const recipesPage = document.getElementById('recipesPage');
    let html = `
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3">
        <div class="container">
            <a href="./index.html" class="navbar-brand text-light">Shop By Recipe</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=#navmenu>
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navmenu">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-items">
                        <a href="admin.html" class="nav-link text-light">Dashboard</a>
                    </li>
                    <li class="nav-items">
                        <a href="recipe.html" class="nav-link text-light">Recipes</a>
                    </li>
                    <li class="nav-items">
                        <a href="addRecipe.html" class="nav-link text-light">Add Recipe</a>
                    </li>
                    <li class="nav-items">
                        <a href="accountInfo.html" class="nav-link text-light">Settings</a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
    

    `;
    recipesPage.innerHTML = html;
}