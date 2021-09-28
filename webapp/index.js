$(document).ready(function(){

	/*var acidityf = $("#FixedAcidity").val();
		var acidityv = $("#VolatileAcidity").val();
		var acid = $("#CitricAcid").val();
		var sugar = $("#ResidualSugar").val();
		var chlorides = $("#Chlorides").val();
		var free_sulfur = $("#FreeSulfurDioxide").val();
		var total_sulfur = $("#TotalSulfurDioxide").val();
		var density = $("#Density").val();
		var ph = $("#pH").val();
		var sulphates = $("#Sulphates").val();
		var alchol = $("#Alchol").val();
		console.log(alchol)

		var par = {  'fixed_acidity':  			acidityf
					,'volatile_acidity':  		acidityv
					,'citric_acid':             acid
					,'residual_sugar':          sugar
					,'chlorides':               chlorides
					,'free sulfur_dioxide':     free_sulfur
					,'total_sulfur dioxide':    total_sulfur
					,'density':                 density
					,'pH':                      ph
					,'sulphates':               sulphates
					,'alchol':                  alchol
				}
		console.log(par)

*/

	//$("#buttonPrediction").onClick(function(){

	$( "#buttonPrediction" ).on( "click", function() {
  
		var acidityf = $("#FixedAcidity").val();
		var acidityv = $("#VolatileAcidity").val();
		var acid = $("#CitricAcid").val();
		var sugar = $("#ResidualSugar").val();
		var chlorides = $("#Chlorides").val();
		var free_sulfur = $("#FreeSulfurDioxide").val();
		var total_sulfur = $("#TotalSulfurDioxide").val();
		var density = $("#Density").val();
		var ph = $("#pH").val();
		var sulphates = $("#Sulphates").val();
		var alchol = $("#Alchol").val();
		console.log(alchol)

		var par = {  'fixed_acidity':  			acidityf
					,'volatile_acidity':  		acidityv
					,'citric_acid':             acid
					,'residual_sugar':          sugar
					,'chlorides':               chlorides
					,'free sulfur_dioxide':     free_sulfur
					,'total_sulfur dioxide':    total_sulfur
					,'density':                 density
					,'pH':                      ph
					,'sulphates':               sulphates
					,'alchol':                  alchol
				}

		console.log(par)
		console.log('bottone ok')
		//$("#idContainerPrediction").html('pippo')

		var url = "http://localhost:8080/predict"

		
		$.ajax({
		  // definisco il tipo della chiamata
		  type: "GET",
		  // specifico la URL della risorsa da contattare
		  url: url,
		  // passo dei dati alla risorsa remota
		  data: par,
		  // definisco il formato della risposta
		  dataType: "json",
		  // imposto un'azione per il caso di successo
		  success: function(risposta){
		    var paragrafo1 = $("<span>").html("Wine quality  ")
		    var paragrafo2 = $("<span>").html(risposta.prediction)
		    var paragrafo3 = $("<p>").html(" ")
		    var riga = $("<hr>")

		    $("#idContainerPrediction").append(paragrafo1)
		    $("#idContainerPrediction").append(paragrafo2)
		    $("#idContainerPrediction").append(paragrafo3)
		    $("#idContainerPrediction").append(riga)

		  },
		  // ed una per il caso di fallimento
		  error: function(){
		    alert("Chiamata fallita!!!");
		    console.log('chiamata fallita!!');
		  }
		})

		/*$.ajax({
  			url: "http://localhost:8080/predict?fixed_acidity=7.0&volatile_acidity=0.7&citric_acid=0&residual_sugar=1.9&chlorides=0.076&free sulfur_dioxide=11&total_sulfur dioxide=34&density=0.9978&pH=3.51&sulphates=0.56&alcohol=9.4",
  			//data: par,
  			success: function(jsonResponse){console.log(jsonResponse)},
  			dataType: 'json'
		});
		//definisciEventi()*/
	})
})


/*


var par = {  'fixed_acidity':7.0
					,'volatile_acidity':0.7
					,'citric_acid':0
					,'residual_sugar':1.9
					,'chlorides':0.076
					,'free sulfur_dioxide':11
					,'total_sulfur dioxide':34
					,'density':0.9979
					,'pH':3.51
					,'sulphates':0.56
					,'alchol':9.4}






$.ajax({
		  // definisco il tipo della chiamata
		  type: "GET",
		  // specifico la URL della risorsa da contattare
		  url: "http://localhost:8080/predict",
		  // passo dei dati alla risorsa remota
		  data: "par",
		  // definisco il formato della risposta
		  dataType: "json",
		  // imposto un'azione per il caso di successo
		  success: function(risposta){
		    console.log(risposta);
		    
		  },
		  // ed una per il caso di fallimento
		  error: function(){
		    alert("Chiamata fallita!!!");
		    console.log('chiamata fallita!!');
		  }
		})


















definisciEventi = function(){
	// seleziona il testo
	console.log($('#algoritmo option:selected').text())
	if ($('#algoritmo option:selected').text() == 'Gradient Boosting Machine'){
		console.log($('#algoritmo option:selected').text())
		var bgm = $.get("/predict-servlet", function(jsonResponse){
			gbmEvento(jsonResponse)
		})
	}  
}*/
/*
gbmEvento = function(jsonResponse){
	$("#idContainerPrediction").html("")
	var titolo = $('<div>').attr({'id': 'titolo'})
	$("#idContainerPrediction").append(titolo)
	$('#titolo').html('Prediction with Gradient Boosting Machine algorithm')
	//creare html con apposite predizioni in base al json
	for (el in jsonResponse){}
}

glmEvento = function(jsonResponse){
	$("#idContainerPrediction").html("")
	$('#titolo').html('Prediction with Generalized Linear Model algorithm')
	//creare html con apposite predizioni in base al json
	for (el in jsonResponse){}
}

naiveBayesEvento = function(jsonResponse){
	$("#idContainerPrediction").html("")
	$('#titolo').html('Prediction with Naïve Bayes algorithm')
	//creare html con apposite predizioni in base al json
	for (el in jsonResponse){}
}

modelComparisonEvento = function(jsonResponse){
	$("#idContainerPrediction").html("")
	$('#titolo').html('Model Comparison')
	var riga = $('<div>').attr({'class': 'row'})
	riga.append($('<div>').attr({'class': 'col-4', 'id':'gbm'}))
	riga.append($('<div>').attr({'class': 'col-4', 'id':'glm'}))
	riga.append($('<div>').attr({'class': 'col-4', 'id':'naiveBayes'}))
	$("#idContainerPrediction").append(riga)
	//creare html con apposite predizioni in base al json
	for (el in jsonResponse){}
}*/