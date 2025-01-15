# TPPR2001- AI Integrated Web Programming -EKSAMEN

## Beskrivelse

**FRAM** er en bærekraftig matleveringstjeneste i Norge som kobler kunder med ferske, 
høykvalitetsprodukter direkte fra lokale gårder. 
Tjenesten vektlegger bærekraft og støtter lokal landbruk ved å tilby en
intuitiv og brukervennlig nettbutikk for å bla gjennom og bestille dagligvarer.

Dette prosjektet implementerer en interaktiv og responsiv nettbutikk basert 
på en designspesifikasjon. Nettbutikken inkluderer funksjoner som produktsider, 
en AI-drevet chatbot for kundeservice og et integrert kart som viser partnergård.

---

## Funksjoner

- **Forside:**
  - Oversikt over tjenesten med et brukervennlig design.
  - Fremhever populære, sesongbaserte produkter.
- **Produktside:**
  - Viser en oversikt over sesongens produkter med detaljerte beskrivelser.
  - Interaktivt kart basert på Leaflet for å vise lokasjonene til samarbeidspartnere.
- **AI-drevet Chatbot:**
  - Gir øyeblikkelig støtte og svarer på kundespørsmål via OpenAI API.
- **Kontaktskjema:**
  - Lar brukere enkelt ta kontakt med spørsmål eller tilbakemeldinger.
- **Responsivt Design:**
  - Optimalisert for mobil, nettbrett og desktop.
- **Tilgjengelighet:**
  - Oppfyller WCAG 2.1 nivå AA med full tastaturnavigasjon og ARIA-attributter.
- **Footer:**
- Footeren på nettsiden er designet for å gi brukerne en enkel og oversiktlig avslutning på hver side. 
    Footeren inneholder selskapets logo "FRAM" og et skjema til brukerne slik at de kan holde seg oppdatert gjennom et nyhetsbrev.
    Jeg vet at Footer ikke er helt riktig, men jeg klarte ikke å få det riktig...
---

## Teknologier Brukt

- **Frontend:**
  - HTML5, CSS3, JavaScript
  - Leaflet.js for kartintegrasjon
- **Backend-integrasjon:**
  - OpenAI API for chatbot-funksjonalitet
  - Asynkront JavaScript (Promises og async/await) for API-interaksjoner
- **Verktøy:**
  - Figma for designspesifikasjoner
  - GitHub for versjonskontroll og samarbeid
  - Chrome DevTools for debugging og ytelsesanalyse
  - Lighthouse for testing av tilgjengelighet og ytelse

---

## Sett opp OpenAI API-nøkkel:**
   - Gå til [OpenAI sin nettside](https://platform.openai.com/) 
   og opprett en konto hvis du ikke allerede har en.
   - Logg inn og naviger til "API Keys"-seksjonen i dashbordet ditt.
   - Generer en ny API-nøkkel og kopier den.
   - Åpne `script.js`-filen i en tekstredigerer.
   - Finn følgende linje i filen:
     ```javascript
     'Authorization': `Bearer YOUR_API_KEY`
     ```
   - Bytt ut `YOUR_API_KEY` med den kopierte nøkkelen din:
     ```javascript
     'Authorization': `Bearer din-api-nøkkel`
     ```
   - **Viktig:** Del aldri din API-nøkkel offentlig, 
   og ikke inkluder den i repositoryet hvis det er offentlig. 
   - Lagre filen og start prosjektet ved å åpne `index.html`

## Utfordringer og Løsninger

### JavaScript og API-integrasjon
Som nybegynner i JavaScript var det krevende å forstå DOM-manipulasjon og event listeners. 
Gjennom eksperimentering fikk jeg implementert funksjoner som:
- Produktgenerering basert på popularitet.
- En handlekurv som oppdateres i sanntid.

API-integrasjonen for OpenAI og Leaflet krevde mange forsøk, men til slutt klarte jeg å implementere:
- En fungerende chatbot som gir brukerne enkle svar.
- Et kart som viser lokasjonen til partnergården.

### Designimplementering fra Figma
I starten baserte jeg arbeidet mitt på PDF-en fra ZIP-filen, 
siden jeg ikke forstod at det var mulig å bruke den interaktive Figma-filen. 
Det var først helt på slutten av prosjektet at jeg oppdaget dette, 
noe som førte til at jeg ikke hadde tid til å justere alle detaljer i henhold til Figma-filen. 

### Arbeid med GitHub
Jeg hadde begrenset erfaring med GitHub og gjorde flere feil, 
inkludert å kopiere filer manuelt etter mange timers arbeid. Men tror jeg fikk det til på slutten.

### Chatbot-implementasjon
Å få chatboten til å fungere med OpenAI API var den mest komplekse delen av prosjektet. 
Etter mange forsøk fikk jeg en løsning som gir brukerne enkle, men relevante svar.

### Fremtidige Forbedringer
- Forbedre kodekvaliteten:
    Refaktorere koden for å gjøre den mer strukturert og lesbar.
    Legge til flere kommentarer og bedre organisering av filstrukturen.
- Utvidet funksjonalitet:
    Gjøre chatboten mer robust ved å støtte flere spørsmålstyper og gi bedre kontekstbaserte svar.
    Legge til flere partnergårder på kartet med mer interaktiv informasjon.
- Optimalisering av design og ytelse:
    Finjustere designet for å sikre fullstendig samsvar med Figma-spesifikasjonen.
    Optimalisere bilder og minimere CSS/JS-filer for raskere lastetider.
- Robust feilhåndtering:
    Implementere bedre feilhåndtering for API-kall og gi brukerne tydeligere feilmeldinger ved problemer.
- Testing og tilbakemeldinger:
    Utføre grundigere testing på ulike enheter og nettlesere.
    Inkludere tilbakemeldinger fra brukere for å identifisere svakheter og forbedringsområder.


### Referanser
- Walker, D. (1985). Reflection and learning: Key perspectives. 
I D. Boud, R. Keogh, & D. Walker (Red.), Reflection: Turning experience into learning (s. 52–68). Routledge.
- OpenAI. (u.å.). OpenAI API documentation. Hentet 15. januar 2025, fra https://platform.openai.com/docs/
- Leaflet. (u.å.). Leaflet documentation. Hentet 15. januar 2025, fra https://leafletjs.com/
- Mozilla Developer Network. (u.å.). MDN Web Docs. Hentet 15. januar 2025, fra https://developer.mozilla.org/en-US/
- WHATWG. (u.å.). HTML Living Standard. Hentet 15. januar 2025, fra https://html.spec.whatwg.org/
- W3Schools. (u.å.). HTML, CSS, JavaScript tutorials. Hentet 15. januar 2025, fra https://www.w3schools.com/