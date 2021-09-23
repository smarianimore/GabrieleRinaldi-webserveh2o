# Gabriele Rinaldi project

Internship + thesis about serving H2O models through webapps

To test the javalin webserver from command line type (you MUST have curl installed):
`curl -X GET http://localhost:8080/predict?fixed_acidity=7.0&volatile_acidity=0.7&citric_acid=0&residual_sugar=1.9&chlorides=0.076&free sulfur_dioxide=11&total_sulfur dioxide=34&density=0.9978&pH=3.51&sulphates=0.56&alcohol=9.4`

## Overview

Al repository trovi due cartelle:

  - `h20-medium-tutorial` è il progetto gradle con la web app (o meglio, il solo webserver) in grado di fornire le predizioni da un mojo H2O
  - `medium-tutorial` contiene invece lo script python e i dati necessari per creare il modello predittivo usato (quello che tu facesti tramite interfaccia web H2Oflow

Per eseguire il tutto dovrebbe essere sufficiente:

  1. Aprire un terminale e andare nella cartella `medium-tutorial`
  2. Installare le dipendenze python (in particolare, il package `h2o`) col comando: `python3 -m pip install -r requirements.txt`
  3. Eseguire lo script python `build_model.py` per creare il modello
  4. Da terminale andare nell’altra cartella (`h2o-medium-tutorial)
  5. Compilare il progetto java col comando `gradle build` (questo installa automaticamente le dipendenze richieste, in particolare del server web javalin)
  6. Eseguire la classe `ModelEndpoint`
  7. Testarne il funzionamento digitando da terminale: `curl -X GET http://localhost:8080/predict?fixed_acidity=7.0&volatile_acidity=0.7&citric_acid=0&residual_sugar=1.9&chlorides=0.076&free sulfur_dioxide=11&total_sulfur dioxide=34&density=0.9978&pH=3.51&sulphates=0.56&alcohol=9.4` (tutto su una sola riga, copi e incolli)

Il comando di cui al punto 7 non è altro che il modo di fare chiamate HTTP via terminale (tramite programma curl): prima del punto interrogativo c’è l’indirizzo del server web, e dopo i parametri (query string, forse ne avete parlato in TIW) che servono al modello per fare la predizione.
