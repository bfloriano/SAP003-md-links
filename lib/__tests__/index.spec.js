const mdLinks = require("../index.js");

describe("mdLinks", () => {
  it("is a function", () => {
    expect(typeof mdLinks).toBe("function");
  });

  it("returns `pokemons filtrados por categoria tipo`", () => {
    expect(app.filtrar([
      {"id": 1, "num": "001", "name": "Bulbasaur", "type": ["Grass", "Poison"], "spawn_chance": 0.69, "weaknesses": ["Fire", "Ice", "Flying", "Psychic"]}, 
      {"id": 4, "num": "004", "name": "Charmander", "type": ["Fire"], "spawn_chance": 0.253, "weaknesses": ["Water", "Ground", "Rock"]},
      {"id": 9, "num": "009", "name": "Blastoise", "type": ["Water"], "spawn_chance": 0.0067, "weaknesses": ["Electric", "Grass"]}, 
      {"id": 72, "num": "072", "name": "Tentacool", "type": ["Water", "Poison"], "spawn_chance": 0.81, "weaknesses": ["Electric", "Ground", "Psychic"]}
    ], "Water", "type" )).toEqual([
      {"id": 9, "num": "009", "name": "Blastoise", "type": ["Water"], "spawn_chance": 0.0067, "weaknesses": ["Electric", "Grass"]}, 
      {"id": 72, "num": "072", "name": "Tentacool", "type": ["Water", "Poison"], "spawn_chance": 0.81, "weaknesses": ["Electric", "Ground", "Psychic"]}
    ]);
  });
  it("returns `pokemons filtrados por categoria fraqueza`", () => {
    expect(app.filtrar([
      {"id": 1, "num": "001", "name": "Bulbasaur", "type": ["Grass", "Poison"], "spawn_chance": 0.69, "weaknesses": ["Fire", "Ice", "Flying", "Psychic"]}, 
      {"id": 4, "num": "004", "name": "Charmander", "type": ["Fire"], "spawn_chance": 0.253, "weaknesses": ["Water", "Ground", "Rock"]},
      {"id": 9, "num": "009", "name": "Blastoise", "type": ["Water"], "spawn_chance": 0.0067, "weaknesses": ["Electric", "Grass"]}, 
      {"id": 72, "num": "072", "name": "Tentacool", "type": ["Water", "Poison"], "spawn_chance": 0.81, "weaknesses": ["Electric", "Ground", "Psychic"]}
    ], "Psychic", "weaknesses" )).toEqual([
      {"id": 1, "num": "001", "name": "Bulbasaur", "type": ["Grass", "Poison"], "spawn_chance": 0.69, "weaknesses": ["Fire", "Ice", "Flying", "Psychic"]}, 
      {"id": 72, "num": "072", "name": "Tentacool", "type": ["Water", "Poison"], "spawn_chance": 0.81, "weaknesses": ["Electric", "Ground", "Psychic"]}
    ]);
  });
});

