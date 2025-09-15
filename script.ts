enum KpopGroup {
  BLACKPINK = "Blackpink",
  NEWJEANS = "Newjeans",
  EXO = "Exo",
  BABYMONSTER = "Babymonster",
  ENHYPEN = "Enhypen"
}

type Member = {
  name: string;
  age: number;
  group: KpopGroup;
  position: string;
  print(): void;
};

// TODO(Arroyo): Create an Object based on the Type created by Ynion.

const member2: Member = {
  name: "Xiumin",
  age: 35,
  group: KpopGroup.EXO,
  position:"Sub-Vocalist, Sub-Rapper",
  print() {
    console.log(`
      Name: ${this.name}
      Age: ${this.age}
      Group: ${this.group}
      Position: ${this.position}
    `);
  },
};

const member3: Member = {
  name: "Kim Ji-soo",
  age: 30,
  group: KpopGroup.BLACKPINK,
  position: "Lead Vocalist, Visual",
  print() {
    console.log(`
      Name: ${this.name}
      Age: ${this.age}
      Group: ${this.group}
      Position: ${this.position}
    `);
  },
};

const member4: Member = {
  name: "Kim Minji",
  age: 21,
  group: KpopGroup.NEWJEANS,
  position: "Rapper",
  print() {
    console.log(`
      Name: ${this.name}
      Age: ${this.age}
      Group: ${this.group}
      Position: ${this.position}
    `);
  },
};

const member5: Member = {
  name: "Jake Sim",
  age: 23,
  group: KpopGroup.ENHYPEN,
  position: "Vocalist",
  print() {
    console.log(`
      Name: ${this.name}
      Age: ${this.age}
      Group: ${this.group}
      Position: ${this.position}
    `);
  },
};

// TODO: (All Members): Call the print method you created in your object.
member2.print();
member3.print();
member4.print();
member5.print();
// NOTE: Delete the comment once a task assigned is finished/completed.