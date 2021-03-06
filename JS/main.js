let AmtClass = ['Archer', 'Assassin', 'Barbarian', 'Monk', 'Scout', 'Warrior', 'Bard', 'Druid', 'Healer', 'Wizard', 'AntiPaladin', 'Paladin'];
let Credit = {Archer: 1, Assassin: 2, Barbarian: 3, Monk: 4, Scout: 5, Warrior: 6, Bard: 7, Druid: 8, Healer: 9, Wizard: 10, AntiPaladin: 11, Paladin: 12};
let ClassTar = '';
let SpellTar = '';
let spellType = ["magic ball", "enchantment", "verbal", "specialty arrow", "neutral", "meta-magic"];
let spellSchool = ["command", "death", "flame", "neutral", "protection", "sorcery", "spirit", "subdual"];
let spellRange = ["magic ball", "self", "touch", "20 feet", "50 feet", "unlimited", "self or touch"];
let spellMaterials = ["magic ball", "enchant strip", "--"];
let states = ["cursed", "fragile", "frozen", "immune", "insubstantial", "out of game", "stopped", "stunned", "suppressed", "resistant"];

let classListings = document.getElementById('AmtgardClasses');
classListings.addEventListener('click', fetchClasses);
let abilityListings = document.getElementById('AmtgardSpells');
abilityListings.addEventListener('click', fetchSpells);
//let abilityListings = document.getElementById('AmtgardStates');
//abilityListings.addEventListener('click', fetchStates);
let searchBar = document.getElementById('Search');
searchBar.addEventListener('click', Search);
let filterButton = document.getElementById('filter');
filterButton.addEventListener('change', filter);

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

function PopulateSearch(){
    let searchoptions = document.getElementById('jobs');
    searchoptions.innerHTML = ""
    let option = document.createElement('option');
    option.selected = "";
    option.value = "";
    searchoptions.appendChild(option);
    let one = document.getElementById('Ground1');
    let two = document.getElementById('Ground2');
    let three = document.getElementById('Ground3');
    
    if (one.classList == "active"){
        for (job of AmtClass){
            option = document.createElement('option');
    option.value = job;
    searchoptions.appendChild(option);
    }}
    if (two.classList == "active"){
        for (spell of abilities){
            option = document.createElement('option');
    option.value = spell.name;
    searchoptions.appendChild(option);
    }}
            if (three.classList == "active"){
        for (affliction of states){
    option = document.createElement('option');
    option.value = affliction;
    searchoptions.appendChild(option);
    }}
        
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
    PopulateSearch();
    PopulateFilter();
    if(ClassTar){ 
    for(x of Classes){
    abilityConstruct(document.getElementById('Ground1'), ClassTar);
        let y = JSON.stringify(x);
        if (y.includes(ClassTar)){ classJumbo(x)}
    }}
}
function searchClasses(ev){
    let query = document.getElementById('Search-Bar');
    ClassTar = query.value;
    let job = Credit[ClassTar];
     for(x of Classes){
        let y = JSON.stringify(x);
        if (y.includes(ClassTar)){ classJumbo(x)}
    }
    abilityConstruct(document.getElementById('Ground1'), ClassTar);
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
    return xp
};
function Update(){
    let newValue = prompt('how many credits do you have?')
    Credit[ClassTar] = newValue;
    levellingMatrix(newValue);
}

function abilityConstruct(Container, job){
    console.log(Container);
    console.log(job);
    let container = Container;
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
            LTP =  JSON.stringify(job) + ':0';
            L1 =  JSON.stringify(job) + ':1';
            L2 =  JSON.stringify(job) + ':2';
            L3 =  JSON.stringify(job) + ':3';
            L4 =  JSON.stringify(job) + ':4';
            L5 =  JSON.stringify(job) + ':5';
            L6 =  JSON.stringify(job) + ':6';
                
            if (x.includes(LTP)) {
                CurrentRow = container.querySelector('#lv0');
                levelRig(i);
                console.log('ability found');
            };   
            if (x.includes(L1)) {
                CurrentRow = container.querySelector('#lv1');
                levelRig(i);
            }; 
            if (x.includes(L2)) {
                CurrentRow = container.querySelector('#lv2');
                levelRig(i);
            }; 
            if (x.includes(L3)) {
                CurrentRow = container.querySelector('#lv3');
                levelRig(i);
            }; 
            if (x.includes(L4)) {
                CurrentRow = container.querySelector('#lv4');
                levelRig(i);
            }; 
    
            if (x.includes(L5)) {
                CurrentRow = container.querySelector('#lv5');
                levelRig(i);
            }; 
            if (x.includes(L6)) {
                CurrentRow = container.querySelector('#lv6');
                levelRig(i);
            }
                ;}
    
    function levelRig(i){
        let spellplate = document.createElement('div');
        spellplate.classList.add("col-sm-12");
        spellplate.id = i.name;
        spellplate.info = i;
        spellplate.addEventListener('click', classhop);
        spellplate.classList.add("cardstock");
        let spellname = document.createElement('p');
        spellname.textContent = i.name
        spellplate.appendChild(spellname);
        if (CurrentRow.id == "lv0"){console.log(CurrentRow); console.log(spellplate)}
        CurrentRow.appendChild(spellplate);
     }
    
}

function classJumbo(z){
    console.log(z);
    let experience = levellingMatrix(Credit[ClassTar]);
    let bridge = document.getElementById('Bridge');
    bridge.innerHTML = "";
    let ClassSpecifics = document.createElement('h4');
    ClassSpecifics.textContent = z.Name;
    bridge.appendChild(ClassSpecifics);
    ClassSpecifics = document.createElement('p');
    ClassSpecifics.textContent = "Sash Colour: " + z.Sash;
    bridge.appendChild(ClassSpecifics);
    ClassSpecifics = document.createElement('p');
    ClassSpecifics.textContent = "Max Armour: " + z.Armour;
    bridge.appendChild(ClassSpecifics);
    ClassSpecifics = document.createElement('p');
    ClassSpecifics.textContent = "Largest Shield: " + z.Shield;
    bridge.appendChild(ClassSpecifics);
    ClassSpecifics = document.createElement('p');
    ClassSpecifics.textContent = "Weapon Profficiencies: ";
    for (p of z.Weapons){
        ClassSpecifics.textContent = 
        ClassSpecifics.textContent + ", " + p; 
    }
    bridge.appendChild(ClassSpecifics);
    ClassSpecifics = document.createElement('p');
    ClassSpecifics.textContent = "Level: " + experience.level;
    bridge.appendChild(ClassSpecifics);
    ClassSpecifics = document.createElement('p');
    ClassSpecifics.textContent = "Credits: " + Credit[ClassTar];
    bridge.appendChild(ClassSpecifics);
    ClassSpecifics = document.createElement('p');
    ClassSpecifics.textContent = "Cretits to go: " + experience.tilNext;
    bridge.appendChild(ClassSpecifics);
  
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
    let searchBarUpdate = document.getElementById('jobs');
    searchBarUpdate.innerHTML = ""
    let datalist = document.createElement('datalist');
    datalist.id = "jobs";
    if (SpellTar){
    Jumbo(SpellTar);};
    searchBarUpdate.appendChild(datalist);
    let x = 0;
    let CurrentRow;
    for (let i of abilities) {
        let searchShortcut = document.createElement('option');
        searchShortcut.value = i.name;
        searchShortcut.info = i;
        datalist.appendChild(searchShortcut);
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
    SpellTar = i;
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
////////////////////////////Spell Filters
function filterSpells() {
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
        abilityConstruct(container, filtervalue);
        console.log(filtervalue)
        console.log('^^ here ^^')
        
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
        spellplate.classList.add("col-sm-12");
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

function classhop(ev){
    fetchSpells(ev);
    let Spell = this.info;
    Jumbo(Spell);
   console.log(ClassTar);
    abilityConstruct(document.getElementById('Ground2'), ClassTar);
    
 ///////////////////////////////////////////////////////////////////////////////////////////// Messy but might work
 

}
////////////////States///////////

function fetchStates(){
    
    
    
}