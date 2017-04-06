$(document).ready(function(){

    function randomString (nombrecaracteres) {

    	var resultat = " ";
		var alphabet = "abcdefghijklmnopqrstuvwxyz";
		var round = 0;


    	for (var i = 0; i < nombrecaracteres; i++) {
    		round = Math.floor(Math.random() * alphabet.length  );
    		alphabet.charAt();

    		resultat+=alphabet.charAt(round);

    	}

    	return resultat;


    }

		var maChaineAleatoire = randomString(10);




    	for (var i = 0; i < 11; i++) {

    		//console.log(randomString(10));

    	};

		//console.log( maChaineAleatoire );


    function randomArray ( absisses, ordonnees ) {
    	
    	var tableau = [];
    	var ligne = [];
    										
    						
	    	for (var i = 0; i < absisses; i++) {
    			for (var j = 0; j < ordonnees ; j++) {
    				ligne.push(randomString(10));
    			}
	    	   	//console.log(ligne);
	    		tableau.push(ligne);
	    		ligne = [];				
	    	}

	    	return tableau

    }					

    	var monTableau = randomArray(10,10);

		//console.log(monTableau);		       	
    

    function htmlarray (monTableau){

    	var result = "<table class = 'table table-bordered'>";
    	result = result + "<thead>";
    	result = result + "<tr><th>eureka</th>";


    			

    		for (var h = 0 ; h < monTableau.length; h++) {
    			result = result + " <th><input id = 'x"+ [h] +"' type='radio' name='absisses'></th> ";

    		}

    			result = result + "</tr>"


    				result = result + "</thead><tbody>";
    				result = result + "<tr>";
    	
    				for (var i = 0; i < monTableau.length; i++) {
    					result = result + " <td><input id = 'y" + [i] +"' type ='radio' name='ordonnees'></td> ";
    			
    					var change = monTableau[i];
    					for (var j = 0; j < change.length; j++) {
    					result = result + "<td id = '"+[i]+[j]+"'>" + change[j] +"</td>";
    					}

    					result = result + "</tr>";
    				}


    				result = result + "</tbody></table>";

    				return result;

    }
    				var monTableauhtml = htmlarray(monTableau);
    			    console.log(monTableauhtml);
    	
    			/*	var tablalpha=[];

    				var idalpha= $('td').attr('id');
    				tablalpha.push(idalpha);
    					
    				console.log(idalpha);
    				console.log(tablalpha);*/

    	var tableaucoordonnees = [];

    function coordonnees (absisses, ordonnees){

    	var absisses = $("input[name=absisses]:checked").attr("id");
    	var ordonnees = $("input[name=ordonnees]:checked").attr("id");

    	tableaucoordonnees.push(absisses,ordonnees);

    	console.log(tableaucoordonnees);
    
    }


    		var tablalpha = [];

			var tableauHtml=htmlarray(monTableau);
			$('#emplacement').append(tableauHtml);

    		//console.log(tableauHtml);

    		$("#action").click(function(){

    			
    		coordonnees();

    			if (tableaucoordonnees ) {

    			}





    		});




});
