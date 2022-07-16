let playgamesbdd = [
    {
        id : "1",
        nom: "Titre du jeu",
        categorie: "Type de jeu",
        description : "TEXT DESCRIPTION ICI !",
        prix: "XXX€",
        image: `../assets/playgames/default.png`
    },
    {
        id : "2",
        nom: "Titre du jeu",
        categorie: "Type de jeu",
        description : "TEXT DESCRIPTION ICI !",
        prix: "XXX€",
        image: `../assets/playgames/default.png`
    },
    {
        id : "3",
        nom: "Titre du jeu",
        categorie: "Type de jeu",
        description : "TEXT DESCRIPTION ICI !",
        prix: "XXX€",
        image: `../assets/playgames/default.png`
    },
    {
        id : "4",
        nom: "Titre du jeu",
        categorie: "Type de jeu",
        description : "TEXT DESCRIPTION ICI !",
        prix: "XXX€",
        image: `../assets/playgames/default.png`
    },
    {
        id : "5",
        nom: "Titre du jeu",
        categorie: "Type de jeu",
        description : "TEXT DESCRIPTION ICI !",
        prix: "XXX€",
        image: `../assets/playgames/default.png`
    },
    {
        id : "6",
        nom: "Titre du jeu",
        categorie: "Type de jeu",
        description : "TEXT DESCRIPTION ICI !",
        prix: "XXX€",
        image: `../assets/playgames/default.png`
    },
    {
        id : "7",
        nom: "Titre du jeu",
        categorie: "Type de jeu",
        description : "TEXT DESCRIPTION ICI !",
        prix: "XXX€",
        image: `../assets/playgames/default.png`
    },
    {
        id : "8",
        nom: "Titre du jeu",
        categorie: "Type de jeu",
        description : "TEXT DESCRIPTION ICI !",
        prix: "XXX€",
        image: `../assets/playgames/default.png`
    },
    {
        id : "9",
        nom: "Titre du jeu",
        categorie: "Type de jeu",
        description : "TEXT DESCRIPTION ICI !",
        prix: "XXX€",
        image: `../assets/playgames/default.png`
    },
    {
        id : "10",
        nom: "Titre du jeu",
        categorie: "Type de jeu",
        description : "TEXT DESCRIPTION ICI !",
        prix: "XXX€",
        image: `../assets/playgames/default.png`
    }
]

let object = ``;

playgamesbdd.forEach(item => 
    object += `
    <div class="object_container" id="${item.id}">
    <h3>${item.nom}</h3>
    <img src="${item.image}" alt="Photo produit"/>
    <div class="objectif_container__infos">
        <p>${item.description}</p>
        <div class="objectif_container__price">
            <p>${item.categorie}</p>
            <p>${item.prix}</p>
        </div>
    </div>
    </div>
    `)

document.getElementById("list_playgames").innerHTML = object; 


// `
// <div class="object_container" id="${object.id}">
// <h3>${object.nom}</h3>
// <img src="${object.image}" alt="Photo produit"/>
// <div class="objectif_container__infos">
//     <p>${object.description}</p>
//     <div class="objectif_container__price">
//         <p>${object.categorie}</p>
//         <p>${object.prix}</p>
//     </div>
// </div>
// </div>
// `;
