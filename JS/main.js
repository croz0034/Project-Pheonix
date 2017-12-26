let AmtClass = ['Archer', 'Assassin', 'Barbarian', 'Monk', 'Scout', 'Warrior', 'Bard', 'Druid', 'Healer', 'Wizard', 'AntiPaladin', 'Paladin'];
let Credit = {Archer: 1, Assassin: 2, Barbarian: 3, Monk: 4, Scout: 5, Warrior: 6, Bard: 7, Druid: 8, Healer: 9, Wizard: 10, AntiPaladin: 11, Paladin: 12};
let ProtoOrk = "Tryeltech"
let ClassTar = '';
let abilitySet = '';
let spellType = ["magic ball", "enchantment", "verbal", "specialty arrow", "neutral", "meta-magic"];
let spellSchool = ["command", "death", "flame", "neutral", "protection", "sorcery", "spirit", "subdual"];
let spellRange = ["magic ball", "self", "touch", "20 feet", "50 feet", "unlimited", "self or touch"];
let spellMaterials = ["magic ball", "enchant strip", "--"];
let states = ["cursed", "fragile", "frozen", "immune", "insubstantial", "out of game", "stopped", "stunned", "suppressed", "resistant"];

let classListings = document.getElementById('AmtgardClasses');
classListings.addEventListener('click', fetchClasses);
let abilityListings = document.getElementById('AmtgardSpells');
abilityListings.addEventListener('click', fetchSpells);
let searchBar = document.getElementById('Search');
searchBar.addEventListener('click', Search);
let filterButton = document.getElementById('Filter');
filterButton.addEventListener('click', filter);

///////////////// Populate ground 0
//function fetchSpells(ev){
//    fetch
//        .then(response => response.json())
//        .then(data => {
//            console.log(data);
////            Nuke(data)
//            })
//        .catch(err => {
//            console.log(err)
//    })
//}

function Search (ev){
    let one = document.getElementById('Ground1');
    let two = document.getElementById('Ground2');
    let three = document.getElementById('Ground3');
    if (one.classList == "active"){searchClasses(ev)}
    else if (two.classList == "active"){Searchspells(ev)}
    else if (thee.classList == "active"){SearchStates(ev);}
}
function filter (ev){
    let one = document.getElementById('Ground1');
    let two = document.getElementById('Ground2');
    let three = document.getElementById('Ground3');
    if (one.classList == "active"){filterClasses(ev);
        console.log("Filter 2 run");}
    else if (two.classList == "active"){filterSpells(ev);
        console.log("Filter 2 run");}
    else if (thee.classList == "active"){filterStates(ev);
        console.log("Filter 2 run");}
}
function PopulateFilter(){
    let filtration = document.getElementById('filter');
    filtration.innerHTML = ""
    let option = document.createElement('option');
    option.selected = "";
    option.value = "";
    let optgroup;
    filtration.appendChild(option);
    let one = document.getElementById('Ground1');
    let two = document.getElementById('Ground2');
    let three = document.getElementById('Ground3');
    
    if (one.classList == "active"){
    option.textContent = "Class Filter";
    filtration.appendChild(option);
    option = document.createElement('option');
    option.textContent = "Melee Classes";
    filtration.appendChild(option);
        option = document.createElement('option');
    option.textContent = "Magic Classes";
    filtration.appendChild(option);
        option = document.createElement('option');
    option.textContent = "Restricted Classes";
    filtration.appendChild(option);
    }
    
    else if (two.classList == "active"){
    option.textContent = "Spell Filter";
    filtration.appendChild(option);
        let X = 0;
    optgroup = document.createElement('optgroup');
    optgroup.label = "Classes";
    filtration.appendChild(optgroup);
    for (i = 0; i <= AmtClass.length; i++) {
    option = document.createElement('option');
    option.value = X;
    option.textContent = AmtClass[i];
    optgroup.appendChild(option);
        X++;};
        
    
    optgroup = document.createElement('optgroup');
    optgroup.label = "Schools";
        X = 20;
    filtration.appendChild(optgroup);
    for (i = 0; i <= spellSchool.length; i++) {
    option = document.createElement('option');
    option.value = X;
    option.textContent = spellSchool[i];
    optgroup.appendChild(option);
        X++;};
        
         optgroup = document.createElement('optgroup');
    optgroup.label = "Spell Type";
        X = 30;
    filtration.appendChild(optgroup);
    for (i = 0; i <= spellType.length; i++) {
    option = document.createElement('option');
    option.value = X;
    option.textContent = spellType[i];
    optgroup.appendChild(option);
        X++;};
        
        optgroup = document.createElement('optgroup');
    optgroup.label = "Related to State";
        X = 40;
    filtration.appendChild(optgroup);
    for (i = 0; i <= states.length; i++) {
    option = document.createElement('option');
    option.value = X;
    option.textContent = states[i];
    optgroup.appendChild(option);
        X++;};}
             
    else if (thee.classList == "active"){
        
        ///////////////////////////////////////Nothing yet
    }
    
    
}

/////////////////////////////Classes 

function fetchClasses(ev){
let classListings = document.getElementById('AmtgardClasses');
    classListings.classList.add('active')
let abilityListings = document.getElementById('AmtgardSpells');
    abilityListings.classList.remove('active');
    let stateList = document.getElementById('AmtgardStates');
    stateList.classList.remove('active');
    let past = document.getElementById('Ground2');
    past.classList.remove('active');
    past = document.getElementById('Ground3');
    past.classList.remove('active');
let container = document.getElementById("Ground1");
    container.classList.add('active');
    PopulateFilter();
}
function searchClasses(ev){
    let query = document.getElementById('Search-Bar');
    ClassTar = query.value;
    let job = Credit[ClassTar];
    console.log(job);
    levellingMatrix(job);
    abilityConstruct(job);
}
function levellingMatrix(job){
    let xp = {"level":0, "next":0, "tilNext":0};
    if (job > 0 && job < 5 ){xp.level = 1; xp.next=2; xp.tilNext= 5 - job;}
    else if (job >= 5 && job < 12){xp.level = 2; xp.next=3; xp.tilNext= 12 - job;}
    else if (job >= 12 && job < 21){xp.level = 3; xp.next=4; xp.tilNext= 21 - job;}
    else if (job >= 21 && job < 34 ){xp.level = 4; xp.next=5; xp.tilNext= 34 - job;}
    else if (job >= 34 && job < 53){xp.level = 5; xp.next=6; xp.tilNext= 53 - job;}
    else if (job >= 53) {xp.level = 6; xp.next="Silver Trim!"; xp.tilNext=" Mastery of the class ;)"}
    else {};
    let table = document.getElementById('Bridge')
    table.innerHTML= '';
    let popBar = document.createElement('h4');
    popBar.textContent = ClassTar;
    table.appendChild(popBar);
    let level = document.createElement('p');
    level.id = "level";
    level.textContent = "level: " + xp.level;
    table.appendChild(level);
    let credit = document.createElement('p');
    credit.id = "credits";
    credit.textContent = job;
    credit.addEventListener('click', Update);
    table.appendChild(credit);
    let next = document.createElement('li');
    next.id = "next";
    next.textContent = xp.tilNext;
    table.appendChild(next);
};
function Update(){
    let newValue = prompt('how many credits do you have?')
    Credit[ClassTar] = newValue;
    levellingMatrix(newValue);
}

function abilityConstruct(){
    let container = document.getElementById("Ground1");
    container.innerHTML = "";
    let CurrentRow;
    let x = 0;
    for (x=0; x<7; x++){
    CurrentRow = document.createElement("div");
    CurrentRow.classList.add('container')
    CurrentRow.classList.add('row');
     CurrentRow.id = "lv" + x;
    container.appendChild(CurrentRow);
        let heading = document.createElement('div');
        heading.classList.add("col-sm-12");
        heading.textContent = " Level "+ x;
        CurrentRow.appendChild(heading);
    };
    
            for (let i of abilities) {
            x = JSON.stringify(i["class/level"]);
            LTP =  JSON.stringify(ClassTar) + ':0';
            L1 =  JSON.stringify(ClassTar) + ':1';
            L2 =  JSON.stringify(ClassTar) + ':2';
            L3 =  JSON.stringify(ClassTar) + ':3';
            L4 =  JSON.stringify(ClassTar) + ':4';
            L5 =  JSON.stringify(ClassTar) + ':5';
            L6 =  JSON.stringify(ClassTar) + ':6';
                
            if (x.includes(LTP)) {
                CurrentRow = document.getElementById('lv0');
                levelRig(i);
            };   
            if (x.includes(L1)) {
                CurrentRow = document.getElementById('lv1');
                levelRig(i);
            }; 
            if (x.includes(L2)) {
                CurrentRow = document.getElementById('lv2');
                levelRig(i);
            }; 
            if (x.includes(L3)) {
                CurrentRow = document.getElementById('lv3');
                levelRig(i);
            }; 
            if (x.includes(L4)) {
                CurrentRow = document.getElementById('lv4');
                levelRig(i);
            }; 
    
            if (x.includes(L5)) {
                CurrentRow = document.getElementById('lv5');
                levelRig(i);
            }; 
            if (x.includes(L6)) {
                CurrentRow = document.getElementById('lv6');
                levelRig(i);
            }
                ;}
    
    function levelRig(i){
        let spellplate = document.createElement('div');
        spellplate.classList.add("col-sm-1");
        spellplate.id = i.name;
        spellplate.info = i;
        spellplate.classList.add("cardstock");
//        spellplate.addEventListener("click", swaptoAbilities)
        CurrentRow.appendChild(spellplate);
        let spellname = document.createElement('p');
        spellname.textContent = i.name
        CurrentRow.appendChild(spellname);
     }
    
}



////////////////////////////////Spells and Abilities/////////////////////
/////////////////////////Setup/Initialize
function fetchSpells(ev) {
    
let classListings = document.getElementById('AmtgardClasses');
    classListings.classList.remove('active');
let abilityListings = document.getElementById('AmtgardSpells');
    abilityListings.classList.add('active');
let stateListings = document.getElementById('AmtgardStates');
    stateListings.classList.remove('active');
    
    let past = document.getElementById('Ground1');
    past.classList.remove('active');
    past = document.getElementById('Ground3');
    past.classList.remove('active');
    let df = document.createDocumentFragment();
    let container = document.getElementById("Ground2");
    container.classList.add('active');
    PopulateFilter();
    container.innerHTML = "";
    let searchBarUpdate = document.getElementById('jobs');
    searchBarUpdate.innerHTML = ""
    let datalist = document.createElement('datalist');
    datalist.id = "jobs";
    searchBarUpdate.appendChild(datalist);
    let x = 0;
    let CurrentRow;
    for (let i of abilities) {
        if (x % 3 == 0) {
            CurrentRow = document.createElement("div");
            CurrentRow.classList.add('row');
            df.appendChild(CurrentRow);
        } else {};
        let spellplate = document.createElement('div');
        spellplate.classList.add("col-sm-3");
        spellplate.id = i.name;
        spellplate.info = i;
        spellplate.classList.add("cardstock");
        spellplate.addEventListener("click", OnScreen)
        CurrentRow.appendChild(spellplate);
        document.createElement("p");
        let spellname = document.createElement('p');
        spellname.textContent = i.name
        spellplate.appendChild(spellname);
        let searchShortcut = document.createElement('option');
        searchShortcut.value = i.name;
        searchShortcut.info = i;
        datalist.appendChild(searchShortcut);
        x++;
        i++;
        container.appendChild(df);
    };
}


///////////////////////////Jumbotron spell screen functionality
function Searchspells(ev) {
    let query = document.getElementById('Search-Bar');
    for (let i of abilities) {
        if (JSON.stringify(i.name) == JSON.stringify(query.value)) {
            Jumbo(i);
        }
        i++;
    }
}

function OnScreen(ev) {
    let Spell = this.info;
    Jumbo(Spell);
}

function Jumbo(i) {
    let Spell = i;

    let bridge = document.getElementById('Bridge');
    bridge.innerHTML = "";
    let spellname = document.createElement('h4');
    spellname.textContent = Spell.name;
    bridge.appendChild(spellname)
    let users = document.createElement('p');
    for (let i of Spell["class/level"]) {
        users.textContent += JSON.stringify(i);
        i++
    }
    bridge.appendChild(users)
    let TypeSchoolRange = document.createElement('p');
    TypeSchoolRange.textContent += "Type: " + spellType[Spell.type] + ", ";
    TypeSchoolRange.textContent +="School: " + spellSchool[Spell.school] + ", ";
    TypeSchoolRange.textContent +="Range: " + spellRange[Spell.range];
    bridge.appendChild(TypeSchoolRange);
    let incantation = document.createElement('p');
    incantation.textContent = "Incantation: " + Spell.incant[0] + " X " + Spell.incant[1];
    bridge.appendChild(incantation);
    if (Spell.materials){let spellmats = document.createElement('p');
    let cloth = Spell.materials[1];
    spellmats.textContent = "Materials: " + Spell.materials[0] + spellMaterials[cloth];
    bridge.appendChild(spellmats);}
    if (Spell.effect){let spelleffect = document.createElement('p');
    spelleffect.textContent = "Effect: " + Spell.effect;
    bridge.appendChild(spelleffect);}
    if (Spell.limitations){let spelllimitations = document.createElement('p');
    spelllimitations.textContent = "Limitations: " +Spell.limitations;
    bridge.appendChild(spelllimitations);}
    if (Spell.note){let spellnote = document.createElement('p');
    spellnote.textContent = "Notes: " + Spell.note;
    bridge.appendChild(spellnote);}
    if (Spell.statelink){
        let forward = document.createElement('a');
        let complexity = i.statelink.length;
        let y = "(" + complexity +" entries)"
        if (complexity > 1){
            for ( p of Spell.statelink){
                y = y + ", " + states[p];

            }}
            else{
            y = Spell.statelink;
            y = states[y];
            }
            forward.textContent = y;
        bridge.appendChild(forward);
        }
    }
    


function presence (part){
    if (data){
        let item = document.createElement('p');
        item.textContent = Spell.part;
        
    }
}
////////////////////////////Spell Filters
function filterSpells(ev) {
    let df = document.createDocumentFragment();
    let container = document.getElementById("Ground2");
    container.innerHTML = "";
    let searchBarUpdate = document.getElementById('jobs');
    searchBarUpdate.innerHTML = ""
    let datalist = document.createElement('datalist');
    datalist.id = "jobs";
    searchBarUpdate.appendChild(datalist);
    let x = 0;
    let CurrentRow;

    let filtervalue = document.getElementById('filter');
    filtervalue = filtervalue.value;
    if (filtervalue <= 19) {
        let x;
        filtervalue = AmtClass[filtervalue];
        let z = JSON.stringify(filtervalue);
        console.log(z);
        for (let i of abilities) {
            x = JSON.stringify(i["class/level"]);
            if (x.includes(z)) {
                addSpell(i)
            };
        }
    } else if (filtervalue >= 20 && filtervalue < 30) {
        let query = filtervalue - 20;
        for (let i of abilities) {
            if (i.school == query) {
                addSpell(i)
            };
        }
    } else if (filtervalue >= 30 && filtervalue < 40) {
        let query = filtervalue - 30;
        for (let i of abilities) {
            if (i.type == query) {
                addSpell(i)
            };
        }
    } else if (filtervalue >= 40) {
        let query = filtervalue - 40;
        for (let i of abilities) {
            let x = JSON.stringify(i.statelink)
            let z = JSON.stringify(query);
            if (x.includes(z)) {
                addSpell(i)
            };
        }
    }

    function addSpell(i) {
        if (x % 3 == 0) {
            CurrentRow = document.createElement("div");
            CurrentRow.classList.add('row');
            df.appendChild(CurrentRow);
        } else {};
        let spellplate = document.createElement('div');
        spellplate.classList.add("col-sm-3");
        spellplate.id = i.name;
        spellplate.info = i;
        spellplate.classList.add("cardstock");
        spellplate.addEventListener("click", OnScreen)
        CurrentRow.appendChild(spellplate);
        document.createElement("p");
        let spellname = document.createElement('p');
        spellname.textContent = i.name
        spellplate.appendChild(spellname);
        let searchShortcut = document.createElement('option');
        searchShortcut.value = i.name;
        searchShortcut.info = i;
        datalist.appendChild(searchShortcut);
        x++;
        i++;
        container.appendChild(df);
    };}

