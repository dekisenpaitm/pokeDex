export class UserComment{
  constructor(name:string,comment:string,date:string){
    this.name=name;
    this.comment=comment;
    this.date=date;
  }
  name!:string;
  comment!:string;
  date!:string;
}
