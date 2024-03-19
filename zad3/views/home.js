function renderPage() {
    return `
      <!DOCTYPE html>
      <html lang="pl">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Home</title>
      </head>
      <body>
          <form action="/student" method="POST">
              <input type="text" name="name" placeholder="Imię" required><br>
              <input type="text" name="lastname" placeholder="Nazwisko" required><br>
              <input type="number" name="age" placeholder="Wiek" required><br>
              <select name="gender">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
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