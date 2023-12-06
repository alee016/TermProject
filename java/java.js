let endangeredSpecies = [
    { name: "Javan Rhino", population: 75 },
    { name: "Amur Leopard", population: 100 },
    { name: "Sunda Island Tiger", population: 600 },
    { name: "Mountain Gorillas", population: 1000 },
    { name: "Tapanuli Orangutan", population: "Around 800" }
];

let data = `
    <table>
        <thead>
            <tr>
                <th>Endangered Species</th>
                <th>Population</th>
            </tr>
        </thead>
        <tbody>`;

endangeredSpecies.forEach(species => {
    data += `
            <tr>
                <td>${species.name}</td>
                <td>${species.population}</td>
            </tr>`;
});

data += `
        </tbody>
    </table>`;

document.getElementById("container").innerHTML = data;