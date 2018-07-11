import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CommonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonProvider {
objective:string;
name:string;
address:string;
Email:any;
mobile:number;
course:string;
year:number;
marks:number;
sc:string;
org:string;
dur:number;
role:string;
des:string;
details:string;
description:string;
duration:any;
role1:string;
team:number;
hobby:string;

  constructor(public http: HttpClient) {
    console.log('Hello CommonProvider Provider');
  }
setObjective(objective)
{
  this.objective=objective;
}
getObjective()
{
return this.objective;
}
setObjective1(name)
{
this.name=name;
}
getObjective1()
{
return this.name;
}
setObjective2(address)
{
this.address=address;
}
getObjective2()
{
return this.address;
}
setObjective3(Email)
{
this.Email=Email;
}
getObjective3()
{
return this.Email;
}
setObjective4(mobile)
{
this.mobile=mobile;
}
getObjective4()
{
return this.mobile;
}
setObjective5(course)
{
this.course=course;
}
getObjective5()
{
return this.course;
}
setObjective6(sc)
{
this.sc=sc;
}
getObjective6()
{
return this.sc;
}
setObjective7(marks)
{
this.marks=marks;
}
getObjective7()
{
return this.marks;
}
setObjective8(year)
{
this.year=year;
}
getObjective8()
{
return this.year;
}
setObjective9(org)
{
this.org=org;
}
getObjective9()
{
return this.org;
}
setObjective10(des)
{
this.des=des;
}
getObjective10()
{
return this.des;
}
setObjective11(dur)
{
this.dur=dur;
}
getObjective11()
{
return this.dur;
}
setObjective12(role)
{
this.role=role;
}
getObjective12()
{
return this.role;
}
setObjective13(details)
{
this.details=details;
}
getObjective13()
{
return this.details;
}
setObjective14(description)
{
this.description=description;
}
getObjective14()
{
return this.description;
}
setObjective15(duration)
{
this.duration=duration;
}
getObjective15()
{
return this.duration;
}
setObjective16(role1)
{
this.role1=role1;
}
getObjective16()
{
return this.role1;
}
setObjective17(team)
{
this.team=team;
}
getObjective17()
{
return this.team;
}
setObjective18(hobby)
{
this.hobby=hobby;
}
getObjective18()
{
return this.hobby;
}
}






