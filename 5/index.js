function getpoeprofil() {
  let nomducompte = document.getElementById("nom-du-compte").value;

  $.ajax({
    url: "https://www.pathofexile.com/character-window/get-characters",
    data: {
      accountName: nomducompte,
    },
    success: function (response) {
      console.log(response);
      const tableBody = document.getElementById("table-body");

      for (let i = 0; i < response.length; i++) {
        const character = response[i];

        const row = document.createElement("tr");

        const nameColumn = document.createElement("td");
        nameColumn.textContent = character.name;
        row.appendChild(nameColumn);

        const leagueColumn = document.createElement("td");
        leagueColumn.textContent = character.league;
        row.appendChild(leagueColumn);

        const classColumn = document.createElement("td");
        classColumn.textContent = character.class;
        row.appendChild(classColumn);

        const levelColumn = document.createElement("td");
        levelColumn.textContent = character.level;
        row.appendChild(levelColumn);

        tableBody.appendChild(row);
      }
    },
    error: function (xhr, status, error) {
      console.error(error);
    },
  });
}
