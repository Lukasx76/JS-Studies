const people = [
    { id: 3, name:"james" },
    { id: 2, name:"paul" },
    { id: 1, name:"otto" }
];

const newPeople = new Map();

for (const p of people) {
    newPeople.set(p.id, { ...p }) 
}

// the map data structure preserves the order of the insertion of the data