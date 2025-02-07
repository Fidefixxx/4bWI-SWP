document.addEventListener("DOMContentLoaded", loadLeagues);

document.getElementById("load").addEventListener("click", function () {
    let list = getInfo();
    if (!list[0]) {
        alert("Bitte eine Liga auswählen!");
        return;
    }

    fetch(`https://api.openligadb.de/getavailableteams/${list[0]}/${list[1]}`)
        .then((result) => result.json())
        .then((data) => {
            getHTMLforTODO(data);
            console.log(data);
        })
        .catch(error => console.error("Fehler beim Abrufen der Teams:", error));
});

function getInfo() {
    let liga = document.getElementById("liga").value;
    let season = document.getElementById("season").value;
    console.log(liga, season);
    return [liga, season];
}

async function loadLeagues() {
    const url = "https://api.openligadb.de/getavailableleagues";

    try {
        const response = await fetch(url);
        const leagues = await response.json();

        let ligaSelect = document.getElementById("liga");
        ligaSelect.innerHTML = "";

        let filteredLeagues = leagues.filter(league =>
            !/test|dummy|demo|sandbox|alt|löschen/i.test(league.leagueName)
        );

        filteredLeagues.forEach(league => {
            let option = document.createElement("option");
            option.value = league.leagueShortcut;
            option.textContent = league.leagueName;
            ligaSelect.appendChild(option);
        });

    } catch (error) {
        console.error("Fehler beim Laden der Ligen:", error);
    }
}

function filterDropdown() {
    let input = document.getElementById("ligaSearch").value.toLowerCase();
    let options = document.getElementById("liga").options;

    for (let i = 0; i < options.length; i++) {
        let text = options[i].text.toLowerCase();
        options[i].style.display = text.includes(input) ? "" : "none";
    }
}

function getHTMLforTODO(data) {
    let html = "<ul style='list-style: none; padding: 0;'>";
    data.forEach(team => {
        html += `
        <li style="display: flex; align-items: center; gap: 10px;">
            <img src="${team.teamIconUrl}" alt="${team.teamName}" 
                style="width:50px; height:auto;">
            ${team.teamName} (${team.shortName})
        </li>
        `;
    });
    html += "</ul>";
    document.getElementById("content").innerHTML = html;
}
