export class Pokemon{
  id!:number;
  name!:string;
}

export class PokemonInfo{
  constructor(id:number,name:string,height:number){
    this.id=id;
    this.name=name;
    this.height=height;
  }
  id!:number;
  name!:string;
  height!:number;
  }

  export class PokemonStats{
    constructor(name:string,baseStat:string){
      this.name=name;
      this.baseStat=baseStat;
    }
    name!:string;
    baseStat!:string;
  }

  export class PokemonTypes{
    constructor(name:string){
      this.name=name;
    }
    name!:string;
  }

  export class RandomPokemon{
    constructor(){

    }
    name!:string;

  }
