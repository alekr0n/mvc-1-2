function renderPage(data) {
    let content = 'No data available';
    if (data && data.name) {
      content = `
        <h1>Profil Studencki</h1>
        <p>Imię: ${data.name}</p>
        <p>Nazwisko: ${data.lastname}</p>
        <p>Wiek: ${data.age}</p>
        <p>Płeć: ${data.gender}</p>
        <p>Numer albumu: ${data.code}</p>
        <p>Kierunek studiów: ${data.studyField}</p>
      `;
    }
    return `
      <!DOCTYPE html>
      <html lang="pl">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Profil Studencki</title>
      </head>
      <body>
          ${content}
      </body>
      </html>
    `;
  }
  
  module.exports = { renderPage };