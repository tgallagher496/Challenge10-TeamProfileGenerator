function generateHTML(cards){
    return `

    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <title>TeamProfileGenerator</title>
  </head>
  <body>
    <div class="h-100 text-center text-white p-3 bg-danger border rounded-3">
      <h2>Team</h2>
    </div>
    <div class="container">

        <div class="row">

${cards}

        </div>
        </body>
      </html>
      

    
    
    `

}

module.exports = generateHTML