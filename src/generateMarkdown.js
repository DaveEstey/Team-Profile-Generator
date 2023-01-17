const endTeam = [];


function engCard(data) {
  const eng = `
  <div class="card w-64 bg-white shadow-xl m-5">
  <div class="card-body">
    <h3 class="card-title">${data.name}</h3>
    <p> ID: ${data.id}</p>
    <p> EMAIL: ${data.email}</p>
    <p> GITHUB: ${data.github}</p>
  </div>
</div>
`;
  endTeam.push(eng);
  return endTeam
}


function intCard(data) {
  const int =
    `
  <div class="card w-64 bg-white shadow-xl m-5">
  <div class="card-body">
    <h3 class="card-title">${data.name}</h3>
    <p> ID: ${data.id}</p>
    <p> EMAIL: ${data.email}</p>
    <p> SCHOOL: ${data.school}</p>
  </div>
</div>
`;
  endTeam.push(int);
  return endTeam;
}

function manCard(data) {
  const man =
    `
  <div class="card w-64 bg-white shadow-xl m-5">
  <div class="card-body">
    <h3 class="card-title">${data.name}</h3>
    <p> ID: ${data.id}</p>
    <p> EMAIL: ${data.email}</p>
    <p> Office number: ${data.officeNum}</p>
  </div>
</div>
`;
  endTeam.push(man);
  return endTeam;
}

function generateMarkdown(teamCards) {


  teamCards.forEach(element => {
    if (element.getRole() == "Manager") {
      manCard(element);
    } else if (element.getRole() == "Engineer") {
      console.log("eng");
      engCard(element);
    } else intCard(element);

  });
  const html =`
    <!DOCTYPE html>
    <html lang="en" data-theme="luxury">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@2.42.1/dist/full.css"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="stylesheet" href="./Assets/css/style.css" />
        <script defer src="https://cdn.tailwindcss.com"></script>
        <title>Team Profile Generator</title>
      </head>
      <body>
        <header>
          <h2 class="text-4xl">Team Profile Generator</h2>
        </header>
        <main class="container">
          <section class="grid md:grid-cols-4 gap-2 min-h-screen" id="intro">
              <div class="history flex flex-col">
                <div class="form-control">
                </div>
              </div>
              <div class ="flex flex-col justify-center p-10" id="myList">
              </div>
            </section>
            <section class="md:col-span-3 flex flex-wrap bg-base-200 p-5 justify-center" id="content">
            ${endTeam}
           
          </section>
        </main>
      </body>
    </html> `   

  return html;
}

exports.generateMarkdown = generateMarkdown;