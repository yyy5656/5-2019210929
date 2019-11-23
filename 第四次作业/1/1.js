



function Father(bloodType) {
    this.bloodType=bloodType;
}
Object.defineProperty(Father,"bloodtype",{
    value:'A',
    writable:false
})
Father.prototype.wife='miss';
function Son(name,age,phone,mother) {
    Father.call(this,'A');
    this.name=name;
    this.age=age;
    this.phone=phone;
    this.mother=Father.prototype.wife;
}
function Daughter(name,age,phone) {
    Father.call(this,'A');
    this.name=name;
    this.age=age;
    this.phone=phone;
    this.mother=Father.prototype.wife;
}
var son1=new Son('mike','5',15110518746);
Object.defineProperty(son1,"name",{
    value:"mike",
    writable:false,
})
var daughter1=new Daughter('mier','15',15110518746);
console.log('son1');
console.log(son1);
console.log('daughter1');
console.log(daughter1);
console.log('son1.name=draven');
console.log(son1.name='draven');
console.log(son1);
console.log('Father.prototype.wife');
console.log(Father.prototype.wife);
console.log('Son===Son.prototype.constructor');
console.log(Son===Son.prototype.constructor);