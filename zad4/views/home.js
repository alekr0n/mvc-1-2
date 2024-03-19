function renderPage() {
    return `
      <!DOCTYPE html>
      <html lang="pl">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Formularz</title>
      </head>
      <body>
          <form method="POST" action="/student">
              <input type="text" name="name" placeholder="Imię" required><br>
              <input type="text" name="lastname" placeholder="Nazwisko" required><br>
              <input type="number" name="age" placeholder="Wiek" required><br>
              <select name="gender">
                  <option value="male">Mężczyzna</option>
                  <option value="female">Kobieta</option>
                  <option value="other">Inne</option>
              </select><br>
              <input type="number" name="code" placeholder="Numer albumu" required><br>
              <input type="text" name="studyField" placeholder="Kierunek studiów" required><br>
              <button type="submit">Wyślij</button>
          </form>
      </body>
      </html>
    `;
  }
  module.exports = { renderPage };