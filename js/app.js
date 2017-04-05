$(document).ready(function(){

    function randomString (nombrecaracteres) {

    	var result = " ";
		var alphabet = "abcdefghijklmnopqrstuvwxyz";
		var round = 0;


    	for (var i = 0; i < nombrecaracteres; i++) {
    		round = Math.floor(Math.random() * alphabet.length  );
    		alphabet.charAt();

    		result+=alphabet.charAt(round);

    	}

    	return result;


    }

		var maChaineAleatoire = randomString(10);




    	for (var i = 0; i < 11; i++) {

    		//console.log(randomString(10));

    	};

		console.log( maChaineAleatoire );


    function randomArray ( absisses, ordonnees ) {
    	
    	var tableau = [];
    	var ligne = [];
    										
    						
	    	for (var i = 0; i < absisses; i++) {
    			for (var j = 0; j < ordonnees ; j++) {
    				ligne.push(randomString(5));
    			}
	    	   	console.log(ligne);
	    		tableau.push(ligne);
	    		ligne = [];				
	    	}

	    	return tableau

    }					


    	var monTableau = randomArray(6,6);

		console.log(monTableau);		       	
    	


    
});



