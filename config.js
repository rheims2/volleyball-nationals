// Settings for the NCHVC results viewer.
window.VIEWER_CONFIG = {
  // This is the Nationals copy of the viewer (https://rheims2.github.io/volleyball-nationals/).
  // Its own storage key keeps saved settings apart from the Regionals site (same rheims2.github.io storage).
  storageKey: "nchvc-nationals-viewer-v2",

  // The Home Screen app's name (also set in manifest.webmanifest).
  appName: "Nationals",

  // Your divisions Google Sheet: renames, hides (Show = No) or adds divisions.
  // The Nationals divisions sheet (not the Regionals one, which the Regionals site reads).
  divisionsSheet: "https://docs.google.com/spreadsheets/d/1MTToTWDy3GxF_ThS9EnPtSnV5ijNjKha5nuX1_JMjxc/edit?usp=sharing",

  // Google Sheets API key, used only to build the division list from the NCHVC
  // index (never for scores). It is public by design: keep it restricted to the
  // Sheets API and to this site's address in Google Cloud Console.
  sheetsApiKey: "AIzaSyBO9bvtoXLMAua2DZyNit1WphNDnh9eGwE",

  // The NCHVC bracket index the division list is built from (the 2025 Nationals index until the 2026 one is published).
  // Change it when a new index is published, then rebuild the rows on the setup page (the viewer's address plus #setup).
  indexSheet: "https://docs.google.com/spreadsheets/d/1ONzz5XqL-buAxvHXNHfuTRtDayzaM10Cy7KlOdt5GL0/edit?gid=1891963095#gid=1891963095",

  // The club the My teams tab starts on (a visitor can pick another; blank starts on "Pick your club").
  defaultClub: "Des Moines Eclipse",

  // The club's volunteer sign-up sheet for Nationals, read for the Volunteer buttons on each game.
  // Blank ("") until there is one, so no Volunteer buttons show (the Regionals sheet isn't used here).
  volunteerSheet: "",

  // The volunteer sheet's Apps Script web app (see volunteer-script.gs), which saves sign-ups made on
  // the page. Leave it blank ("") and the Volunteer buttons only show the spots and link to the sheet.
  volunteerScript: ""
};
