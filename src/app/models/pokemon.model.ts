export class Pokemon{
  constructor(name:string){
    this.name=name;
  }
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

  export class PulledPokemon{
    constructor(name:string,img:string,lvl:number,shiny:string,power:string,beauty:string,date:string){
      this.name=name;
      this.img = img;
      this.lvl = lvl;
      this.shiny = shiny;
      this.power = power;
      this.beauty = beauty;
      this.pulled = date;
    }
    name!:string;
    img!:string;
    lvl!:number;
    shiny!:string;
    power!:string;
    beauty!:string;
    pulled!: string;
  }
