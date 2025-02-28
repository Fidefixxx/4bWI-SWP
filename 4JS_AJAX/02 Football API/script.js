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
            getHTMLforTeam(data);
            console.log(data);
        })
        .catch(error => console.error("Fehler beim Abrufen der Teams:", error));
});

function getInfo() {
    let liga = document.getElementById("liga").value;
    let season = document.getElementById("season").value;
    console.log(liga, season);
    return [liga, season];
};

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
};

function filterDropdown() {
    let input = document.getElementById("ligaSearch").value.toLowerCase();
    let options = document.getElementById("liga").options;

    for (let i = 0; i < options.length; i++) {
        let text = options[i].text.toLowerCase();
        options[i].style.display = text.includes(input) ? "" : "none";
    }
};
function openTeam(teamname){
    let link = 'https://www.google.com/search?q='+teamname;
    window.open(link); 
};
document.getElementById("content").addEventListener("click", (event) => {
    console.log(event.target.getAttribute("teamname"))
    openTeam(event.target.getAttribute("teamname"))
});
function getHTMLforTeam(data) {
    let index = 0;
    let html = "<table class='border border-separate border-spacing-1'><tr class='border'><th class='border'>Logo</th><th class='border'>Team</th><th class='border'>Name</th></tr>";
    data.forEach(team => {
        html += `
        <tr class='border'>
            <td class='border'>
                <img teamname="${team.teamName}" src="${team.teamIconUrl}" alt="${team.teamName}"style="width:50px; height:auto;">
            </td>
            <td class='border px-3'>${team.teamName}</td>
            <td class='border px-5'>${team.shortName}</td>
        </tr>
        `;
        index++;
    });
    html += "</ul>";
    
    document.getElementById("content").innerHTML = html;
}
