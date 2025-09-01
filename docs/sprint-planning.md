# Your Tribe for Life

## Sprint Planning (Maandag)

*In de workshop S13W1-01-kickoff-ytfl wordt stap voor stap uitgelegd wat je moet doen.*

De eerste dag na de zomer gaan we hard aan de slag! Je gaat met een team van drie personen een squadpage op basis van Directus en Sveltekit maken.

### Opdrachten tijdens de workshop

Jullie gaan met een nieuw team samenwerken. Om heldere afspraken te kunnen maken is het belangrijk direct serieus te beginnen en van elkaar te weten wat sterke kanten en leervragen zijn. Als dit bekend is kan het werk goed verdeeld worden en komt iedereen aan diens leervragen toe.

#### Persoonlijke leervragen (individueel)

- [ ] Formuleer twee of drie leervragen als uitgangspunt voor deze sprint.
- [ ] Vraag klas- of oud teamgenoten om hulp als je er niet uitkomt.

*Protip: Denk aan de gedragscriteria én aan technische uitdaging.*

#### Teamafspraken (als team)

- [ ] Lees de [instructies voor de squadpage leertaak](INSTRUCTIONS.md) en de sprint planning (dit bestand) allemaal zorgvuldig door
- [ ] Vul met elkaar de uitgebreide versie van het [teamcanvas](https://theteamcanvas.com/) in en zorg dat iedereen op de hoogte is van elkaars *personal goals* (leervragen)
- [ ] Maak afspraken over samenwerking, je houdt je in ieder geval aan de [FDND Code Conventies](https://docs.fdnd.nl/conventies.html).
- [ ] Leg bovenstaande zaken vast in CONTRIBUTING.md

*ProTip: Verwerk sterke kanten en jouw leervragen en maak heldere afspraken!*

### Voorgestelde aanpak squadpage
Semester 3 bereid je voor op de beroepspraktijk. Om die reden werken we serieuzer waarbij we gericht zijn op de werkwijze die je straks in je stagebedrijf of bij FDND-Agency ook gaat hanteren. Hoe meer je de voorgestelde werkwijze omarmt, hoe makkelijker je straks in een bedrijf mee kunt draaien.

#### Analyseren

1. Lees de hele leertaak goed door voor je verder gaat
2. Houdt een brainstorm over mogelijke oplossingen en noteer alle ideeën
3. Doe een *content inventory*, lees hiervoor het artikel ‘Content Inventory and Auditing 101’ van de Nielsen Norman Group. (zie bronnen).
3. Richt één repository in waarin jullie gaan werken en zet issues aan (laat de wiki en discussions uit). Koppel het automatisch opnemen van nieuwe issues in het projectboard, lees hiervoor het artikel ‘Adding items automatically’ van de GitHub documentatie (zie bronnen). Invite alle teamleden en ken de juiste rechten toe.
4. Maak keuzes en leg deze vast door issues in te schieten. *NB: Niet een issue met alle keuzes maar losse issues per item!*
5. Werk verder aan de hand van issues door telkens een issue op te pakken en alles wat ermee te maken heeft bij deze issue vast te leggen.

#### Ontwerpen
Maak en bespreek (delen van) jouw ontwerp en haal daarbij breed (teamleden, peers en docenten) feedback op in de vorm van issues in GitHub.

*NB: Het is fijn als je screenshots van versies van het ontwerp opneemt in de issue-threads zodat de ontstaansgeschiedenis van het definitieve ontwerp navolgbaar wordt. Neem ook links of screenshots van inspiratiebronnen op.*

1. Werk je ideeën uit in een ontwerp, bijvoorbeeld in Figma.
2. Haal feedback op jouw ontwerp op en noteer zinvolle inzichten/opmerkingen in heldere losse issues en adresseer deze stuk voor stuk.
4. Itereer (begin weer bij stap 1)
— na een aantal iteraties —
5. Breek het ontwerp op in kleine behapbare delen en maak daar issues voor aan in het projectboard

#### Bouwen
Je gaat systematisch werken aan het project door middel van issues. Je doet niets zonder dat er een issue voor is. Als je iets te binnen schiet wat niet perse bij je huidige taak hoort ga je het niet snel doen maar schiet je een nieuwe issue in. Je sluit alleen een issue als deze door iemand anders bekeken (reviewed!) is. *ProTip: Werk met feature-branches en pull-requests*

Door alleen issues te sluiten als er iemand naar gekeken heeft voorkom je heel veel bugs. In het bedrijfsleven kijkt er vaak een senior frontender of tech-lead naar jouw pull-requests voor ze geaccepteerd worden.

1. Pak een issue uit Todo op door deze toe te wijzen
2. Verplaats de issue naar In Progress
3. Doe onderzoek naar de mogelijke oplossing, neem bronnen en inzichten op in de issue
4. Implementeer de gevonden oplossing
5. Documenteer de stappen en belangrijkste algoritmes
6. Itereer (begin weer bij stap 2)
— na een aantal iteraties —
7. Documenteer de laatste inzichten en sluit de issue en verplaats deze naar Done

#### Integreren
Omdat we met een framework werken kan hosting niet via GitHub pages opgelost worden. Gelukkig zijn er standaardoplossingen voor een aantal veelgebruikte hostingoplossingen, bijvoorbeeld Netlify.

1. Zet je project live door gebruik te maken Netlify (zie bronnen in de leertaak).

#### Testen
Voor de gebruiker is testen de belangrijkste fase uit de DLC. Dit is waar je erachter komt of jouw website lekker werkt op alle browsers en platformen en of gebruikers jouw interface snappen.

1. Test jouw project op zo veel mogelijk manieren
  - usertest (iig. op klasgenoten en je familie)
  - lighthouse test (voor automated performance en usability)
  - handmatige tests (iig. de tabtest maar ook uitschakelen van JS of CSS)
  - browsertest (chrome, safari, firefox, edge)
  - devicetest (oude en nieuwe mobieltjes, tablets, laptops)

