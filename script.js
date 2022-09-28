let chaptersObj = {


    chapitre1 : {
        subtitle : "Le rêve de scrat",
        text : "Scrat à un rêve depuis tout petit, il doit retrouver sa noisette et il décide de le réaliser aujourd'hui. Commencer à chercher vers",
        img : "./assets/scrat_enfant.png",
        options : {option1: {optionText:" la forêt", action :"goToChapter('chapitre9')"},
                   option2: {optionText:" le troupeau de mammouth", action:"goToChapter('chapitre2')"},
                   option3: {optionText:" les glaciers", action:"goToChapter('chapitre2')"},},},
    
    chapitre2 : {
        subtitle : "La rencontre avec Manny",
        text : "Tu trouves Manny et il te dit de te débrouiller tout seul donc",
        img : "./assets/manny_pas_content.jpg",
        options : {option1:{optionText:"Continuer à le suivre", action:"goToChapter('chapitre3')"},
                   option2:{optionText:"Te diriger vers la forêt", action:"goToChapter('chapitre9')"},},},
    
    chapitre3 : {
        subtitle : "Le choix impossible",
        text : "Manny te pousses et tu tombes dans une grotte. Heureusement, tu découvres une femme magnifique et t'aimes mieux finir ta vie avec Scratina qu'avec ta noisette.",
        img : "./assets/scratina_scrat.jpg",
        options : {option1:{optionText:"Fin",action:"goToChapter('chapitre1')"},},},
    
    chapitre4 : {
        subtitle : "La rencontre avec Sid",
        text : "Tu trouves Sid, est-ce que tu",
        img : "./assets/sid_discussion.png",
        options : {option1:{optionText:"parles avec lui pour avoir des informations sur la noisette",action:"goToChapter('chapitre5')"},
                   option2:{optionText:"l'ignore et tu pars seul pour accomplir ton objectif",action:"goToChapter('chapitre7')"},},},
    
    
    chapitre5 : {
        subtitle : "La direction de ton rêve",
        text : "Sid te dit d'aller à la fin du glacier, car il pense avoir vu une noisette.",
        img : "./assets/sid_direction.png",
        options : {option1:{optionText:"Si te dis d'aller à la fin du glacier, car il pense avoir vu une noisette",action:"goToChapter('chapitre6')"},},},
    
    chapitre6 : {
        subtitle : "La mort de scrat",
        text : "C'était une fausse noisette, tu tombes dans l'eau et tu te noies",
        img : "./assets/scrat_sirene.JPG",
        options : {option1:{optionText:"Fin",action:"goToChapter('chapitre1')"},},},
        
    chapitre7 : {
        subtitle : "La découverte d'un poisson.",
        text : "Tu ne trouves aucun signe d'une noisette, mais tu as un poisson",
        img : "./assets/scrat_poisson.jpg",
        options : {option1:{optionText:"continuer",action:"goToChapter('chapitre8')"},},},
     
    chapitre8 : {
        subtitle : "Ta nouvelle destination",
        text : "Tu décides d'aller vers les mammouths et peux-être que le poisson te serviras. ",
        img : "./assets/scrat_poisson.jpg",
        options : {option1:{optionText:"Vas vers les mammouths",action:"goToChapter('chapitre1')"},},},
           
    chapitre9 : {
        subtitle : "La rencontre de Diego",
        text : "Tu trouves Diego, il veut un poisson contre la position de la noisett donc tu",
        img : "./assets/diego.jpg",
        options : {option1:{optionText:"vas vers les glaciers pour trouver un poisson",action:"goToChapter('chapitre1')"},
                   option2:{optionText:"lui donnes ton poisson",action:"goToChapter('chapitre10')"},},},
                    
    chapitre10 : {
        subtitle : "La réalisation de ton rêve",
        text : "Diego te dis l'emplacement de la noisette et tu finis ta vie avec celle-ci!",
        img : "./assets/scrat_noisette.jpg",
        options : {option1:{optionText:"fin",action:"goToChapter('chapitre1')"},},}
    
    };
    
    function goToChapter(chapterName) {
        console.log(chaptersObj[chapterName]["subtitle"]);
        console.log(chaptersObj[chapterName]["text"]);};
    
    
    