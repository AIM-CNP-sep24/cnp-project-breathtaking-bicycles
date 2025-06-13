# Instructies Applicatie

## Benodigdheden
- Docker
- Database IDE (bijvoorbeeld Microsoft SQL studio of Azure SQL Studio)
- Normale IDE (bijvoorbeeld Visual Studio Code of IntelliJ Idea)

## Database opzetten

Om de database op te zetten moet je eerst het volgende command runnen in een terminal binnen de volgende mappenstructuur: "cnp-project-breathtaking-bicycles/backend/breathtakingbicycles/src/main/resources/db".

``` Docker compose up ```

Dit is namelijk waar de docker-compose.yml staat. In dit bestand staan 2 opties voor de database structuur, die is afhankelijk van welk operating systeem je gebruikt. Zorg er dus voor dat je de goeie code op de lijn "image:" hebt staan. 

Als je dit hebt uitgevoerd wordt de database server gecreëerd.

Om toegang te krijgen tot de database moet je een connectie maken via een Database IDE, zoals MSSQL Studio. 

De verbinding maak je door de volgende gegevens in te vullen:
- Connection type: Microsoft SQL Server
- Server: localhost, 1433
- Authentication type: SQL Login
- Username: sa
- Password: Blaziken123

Om de database aan te maken voer je de volgende bestanden uit:

1. createDB.sql
2. insertDB.sql

Deze bestanden zijn te vinden in dezelfde map als de docker-compose.yml die je eerder hebt gebruikt. 

Voor 'createDB.sql' is het belangrijk om eerst de eerste regel alleen uit te voeren ("CREATE DATABASE breathtakingbicycles"). Dit kan door de regel te selecteren met je muis en vervolgens op F5 of 'Run' te klikken, doe dit vervolgens ook met de tweede regel ("USE DATABASE breathtakingbicycles"). Hierna kun je de rest van de regels selecteren en uitvoeren. 

Zorg bij 'insertDB.sql' ervoor dat je de goeie database hebt geselecteerd voor je de bestanden uitvoert. 

Nu is de database ingesteld.

## Backend runnen

De backend runnen is best wel simpel. Open de folder "cnp-project-breathtaking-bicycles/backend/breathtakingbicycles" in een IDE (Ik raad sterk aan om hier IntelliJ IDEA voor te gebruiken). 

Aangezien dit project is gemaakt met Maven is het belangrijk dat alle Maven-onderdelen up-to-date zijn, dit kun je checken door op de rechterzijbalk te klikken op het 'M' logootje, en vervolgens op de draaiende pijlen. Dit zorgt ervoor dat alle onderdelen opnieuw worden geladen. Als dit logo hier niet staat, betekend dit dat je in de verkeerde map zit. Check dus goed of je echt in de bovenstaande map zit.

Navigeer vervolgens naar het bestand: 'BreathtakingbicyclesApplication', en klik op de groene pijl links naast de klasse naam. 

Als het goed is zou die deze automatisch op moeten pakken en verschijnt deze naam ook rechtsbovenin de IDE links naast de groene pijl. Door op deze pijl te klikken runt de applicatie ook. 

//todo images van backend erin zetten

Nu staat de backend aan.

## LibreTranslate API runnen

Om de LibreTranslate API te kunne gebruiken hoef je maar 2 regels code uit te voeren:

``` 1: docker pull libretranslate/libretranslate```

``` 2: docker run -ti --rm -p 5000:5000 libretranslate/libretranslate ```

Deze eerste lijn zorgt ervoor dat de API wordt opgehaald naar een docker container, en de tweede lijn zet hem aan op de juiste poort. 

## Frontend runnen

Om de frontend te runnen navigeer je naar de volgende folder in een IDE (Ik zou hier Visual Studio Code aanraden): "cnp-project-breathtaking-bicycles/frontend/breathtaking-bicycles"

Klik met je rechtermuisknop op de map breathtaking-bicycles, en klik op "Open Integrated Terminal".

run vervolgens de volgende 2 regels aan code in de terminal:

``` 1: npm install ```

``` 2: npm run dev ```

De eerste regel zorgt ervoor dat alle packages en libraries worden gedownload en up-to-date zijn. 
De tweede regel start de applicatie. 

Als alles goed is gegaan krijg je te zien dat de frontend draait op de poort: 'localhost:5173'.

Als je Storybook zou willen runnen om tests te zien, zou dit kunnen door in de terminal het volgende te runnen:

``` npm run storybook ```

Het is wel belangrijk om te weten dat als je 

```npm run dev ``` 

uitvoert, het niet meer mogelijk is om commands te geven in die terminal, dan moet je dus een nieuwe terminal venster openen op dezelfde manier als de vorige. 

## Afsluiting

Dit is alles wat je nodig hebt om onze applicatie te kunnen runnen. 

