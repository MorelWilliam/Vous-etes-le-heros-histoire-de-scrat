let chaptersObj = {


    chapitre1 : {
        subtitle : "Le rêve de scrat",
        text : "Scrat à un rêve depuis tout petit, il doit retrouver sa noisette et il décide de le réaliser aujourd'hui. Commencer à chercher vers",
        img : "./Assets/image/scrat_enfant.png",
        options : [{optionText:" la forêt", action :"goToChapter('chapitre9')"},{optionText:" le troupeau de mammouth", action:"goToChapter('chapitre2')"},{optionText:" les glaciers", action:"goToChapter('chapitre4')"}]},
    
    chapitre2 : {
        subtitle : "La rencontre avec Manny",
        text : "Tu trouves Manny et il te dit de te débrouiller tout seul donc",
        img : "./Assets/image/manny_pas_content.jpg",
        options : [{optionText:"Continuer à le suivre", action:"goToChapter('chapitre3')"},{optionText:"Te diriger vers la forêt", action:"goToChapter('chapitre9')"}]},
    
    chapitre3 : {
        subtitle : "Le choix impossible",
        text : "Manny te pousses et tu tombes dans une grotte. Heureusement, tu découvres une femme magnifique et t'aimes mieux finir ta vie avec Scratina qu'avec ta noisette.",
        img : "./Assets/image/scratina_scrat.jpg",
        options : [{optionText:"Fin",action:"goToChapter('chapitre1')"}]},
    
    chapitre4 : {
        subtitle : "La rencontre avec Sid",
        text : "Tu trouves Sid, est-ce que tu",
        img : "./Assets/image/sid_discussion.png",
        video : "./Assets/video/sid_trigger.mp4",
        options : [{optionText:"parles avec lui pour avoir des informations sur la noisette",action:"goToChapter('chapitre5')"},{optionText:"l'ignore et tu pars seul pour accomplir ton objectif",action:"goToChapter('chapitre7')"}]},
    
    
    chapitre5 : {
        subtitle : "La direction de ton rêve",
        text : "Sid te dit d'aller à la fin du glacier, car il pense avoir vu une noisette.",
        img : "./Assets/image/sid_direction.jpg",
        options : [{optionText:"Si te dis d'aller à la fin du glacier, car il pense avoir vu une noisette",action:"goToChapter('chapitre6')"}]},
    
    chapitre6 : {
        subtitle : "La mort de scrat",
        text : "C'était une fausse noisette, tu tombes dans l'eau et tu te noies",
        img : "./Assets/image/scrat_sirene.JPG",
        video : "./Assets/video/mort_scrat.mp4",
        options : [{optionText:"Fin",action:"goToChapter('chapitre1')"}]},
        
    chapitre7 : {
        subtitle : "La découverte d'un poisson.",
        text : "Tu ne trouves aucun signe d'une noisette, mais tu as un poisson",
        img : "./Assets/image/scrat_poisson.jpg",
        options : [{optionText:"continuer",action:"etatFish()"}]},
     
    chapitre8 : {
        subtitle : "Ta nouvelle destination",
        text : "Tu décides d'aller vers les mammouths et peux-être que le poisson te serviras. ",
        img : "./Assets/image/scrat_poisson.jpg",
        options : [{optionText:"Vas vers les mammouths",action:"goToChapter('chapitre1')"}]},
           
    chapitre9 : {
        subtitle : "La rencontre de Diego",
        text : "Tu trouves Diego, il veut un poisson contre la position de la noisett donc tu",
        img : "./Assets/image/diego.jpg",
        options : [{optionText:"vas vers les glaciers pour trouver un poisson",action:"goToChapter('chapitre1')"},{optionText:"lui donnes ton poisson",action:"fishVerif()"}]},            
                    
    chapitre10 : {
        subtitle : "La réalisation de ton rêve",
        text : "Diego te dis l'emplacement de la noisette et tu finis ta vie avec celle-ci!",
        img : "./Assets/image/scrat_noisette.jpg",
        options : [{optionText:"fin",action:"goToChapter('chapitre1')"}]},
    }
    if(localStorage.getItem("chaptersObj")){
        goToChapter(localStorage.getItem("chaptersObj"))
    }else{
        goToChapter(`chapitre1`)
    }
    let body = document.querySelector("body")
    function goToChapter(chapterName)
     {
     localStorage.setItem("chaptersObj", chapterName);

        if(chaptersObj[chapterName]["video"]){
            document.querySelector(".image_rotate").innerHTML= `<video src="${chaptersObj[chapterName]["video"]}" class="affichage_video"  autoplay muted loop>`;
        }
        else{
            document.querySelector(".image_rotate").innerHTML=`<img src=${chaptersObj[chapterName]["img"]} class="scrat_sirene">`;
        };


        console.log(chaptersObj[chapterName]["subtitle"]);
        console.log(chaptersObj[chapterName]["text"]);
        document.querySelector("h1").innerHTML=chaptersObj[chapterName]["subtitle"];
        document.querySelector(".texte").innerHTML=chaptersObj[chapterName]["text"];



        let barre = document.querySelector(".barre");
        barre.innerHTML = "";
        for(element of chaptersObj[chapterName]['options']){


            

            let bouton = document.createElement("button");
            let text = document.createTextNode(element["optionText"]);
            bouton.appendChild(text);
            bouton.setAttribute("onclick",element["action"]);
            bouton.setAttribute("type","button");
            barre.appendChild(bouton);
            let sonBtn = document.querySelector(".son");
            bouton.addEventListener("click", function(){
                const audio = new Audio ("./Assets/son/ice.mp3");
                audio.volume = 0.4;
                if (sonBtn.checked == true){audio.play()};   
                
                body.classList.remove(body.classList[0])
                body.classList.add(chapterName)
                console.log(body.classList)
            
        })
        }
        };

        let fishFounded = false; // poisson pas obtenu par default

        function etatFish(){
            fishFounded = true;
            goToChapter("chapitre8");
            localStorage.setItem("fishFounded",fishFounded)
        }

        function fishVerif(){
            if(fishFounded == true ){goToChapter('chapitre10')}
            if (fishFounded == false){goToChapter('chapitre1')}
            localStorage.setItem("fishFounded",fishFounded)
        }
let resetBtn = document.querySelector(".reset")
function reset (){
    localStorage.clear();  
    goToChapter('chapitre1');
}
resetBtn.addEventListener("click",function(){
    reset()
});




    