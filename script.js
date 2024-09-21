let spanNodes = document.querySelectorAll("span.word");
let definitions = {
    "landform": "A natural physical structure part of the landscape, such as a mountain, cliff, or canyon.",
    "habitable": "A region or planet suitable for life. As far as the government has told us, Earth is the only known habitable planet.",
    "system": "A complex thing with many entities that work to make something larger. An example is the <span class='word' onclick='showDef(\"atmosphere\")'>atmosphere</span>, which has many gases involved that make a protective layer around a planet.",
    "rocky planet": "A planet with a surface composed of solid rock and metal. There are four rocky planets in our solar system: Mercury, Venus, Earth, and Mars.",
    "geologic process": "A series of actions that cause a physical change to occur to a planet. Some examples include tectonic movement, lithification [see <i>A rock found on Mars</i>], erosion, and volcanic activity.",
    "atmosphere": "A layer of gases surrounding a planet. Earth's atmosphere has many layers to trap air in and keep lethal solar radiation out. Humans tend to destroy the atmosphere with harmful gases that weaken this natural barrier.",
    "hydrosphere": "The liquid water on a planet. Earth's hydrosphere covers most of its surface, hence the nickname, \"The blue planet.\"",
    "biosphere": "The life on a planet. As far as the government has told us, Earth is the only known planet with a biosphere.",
    "geosphere": "The solid part of a planet. All <span class='word' onclick='showDef(\"rocky planet\")'>rocky planets</span> have a geosphere.",
    "channel": "A strip of flowing water on a planet. Similar terms include river, stream, and canal. The key difference is that a channel still remains after the water leaves, in which it can be called a chasm or canyon."
}
let subs = {
    "systems": "system",
    "landforms": "landform",
    "atmospheric": "atmosphere"
}

for(let i = 0; i < spanNodes.length; i++)
    spanNodes[i].setAttribute("onclick",`showDef("${spanNodes[i].textContent}")`);

function showDef(def) {
    document.getElementById("def").style = "display:block;";
    document.querySelector("#def h2").innerHTML = definitions[def] ? def : subs[def];
    document.querySelector("#def p").innerHTML = definitions[def] || definitions[subs[def]];
}

const hideDef = () => document.getElementById("def").style = "display:none;";