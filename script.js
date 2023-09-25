class hero {
    constructor(name, age, clas){
        this.nameOfTheHero = name
        this.ageTheHero = age
        this.classTheHero = clas
      
        console.log("Welcome " + this.nameOfTheHero + ", you has " + this.ageTheHero + " years of the age" + ", and pertence the class " + this.classTheHero);
        console.log("The " + this.classTheHero + " is preparing the atack...")
    }
    
    atack(classTheHero){
        if(this.classTheHero == "Mage"){
            console.log("The " + this.classTheHero + " used the atacke of magic");
        } else if (this.classTheHero == "Warrior"){
            console.log("The " + this.classTheHero + " used the atacke of sword");
        } else if (this.classTheHero == "Monk"){
            console.log("The " + this.classTheHero + " used the atacke of marcial arts");
        } else if (this.classTheHero == "Ninja"){
            console.log("The " + this.classTheHero + " used the atacke of marcial shuriken");
        } else{
            console.log("Class not identify!")
        }
    
    }
    
    
}

let nameHero = new hero(prompt("Write the name at hero:"), parseInt(prompt("Age of the hero:")), prompt("Selecte this class: Mage, Warrior, Monk or Ninja"));

nameHero.atack()