var KpopGroup;
(function (KpopGroup) {
    KpopGroup["BLACKPINK"] = "Blackpink";
    KpopGroup["NEWJEANS"] = "Newjeans";
    KpopGroup["EXO"] = "Exo";
    KpopGroup["BABYMONSTER"] = "Babymonster";
    KpopGroup["ENHYPEN"] = "Enhypen";
})(KpopGroup || (KpopGroup = {}));

var member1 = {
    name: "Ruka",
    age: 23,
    group: KpopGroup.BABYMONSTER,
    position: "Main Rapper, Main Dancer",
    print: function () {
        console.log("\n      Name: ".concat(this.name, "\n      Age: ").concat(this.age, "\n      Group: ").concat(this.group, "\n      Position: ").concat(this.position, "\n    "));
    },
};

var member2 = {
    name: "Xiumin",
    age: 35,
    group: KpopGroup.EXO,
    position: "Sub-Vocalist, Sub-Rapper",
    print: function () {
        console.log("\n      Name: ".concat(this.name, "\n      Age: ").concat(this.age, "\n      Group: ").concat(this.group, "\n      Position: ").concat(this.position, "\n    "));
    },
};

var member3 = {
    name: "Kim Ji-soo",
    age: 30,
    group: KpopGroup.BLACKPINK,
    position: "Lead Vocalist, Visual",
    print: function () {
        console.log("\n      Name: ".concat(this.name, "\n      Age: ").concat(this.age, "\n      Group: ").concat(this.group, "\n      Position: ").concat(this.position, "\n    "));
    },
};

var member4 = {
    name: "Kim Minji",
    age: 21,
    group: KpopGroup.NEWJEANS,
    position: "Rapper",
    print: function () {
        console.log("\n      Name: ".concat(this.name, "\n      Age: ").concat(this.age, "\n      Group: ").concat(this.group, "\n      Position: ").concat(this.position, "\n    "));
    },
};

var member5 = {
    name: "Jake Sim",
    age: 23,
    group: KpopGroup.ENHYPEN,
    position: "Vocalist",
    print: function () {
        console.log("\n      Name: ".concat(this.name, "\n      Age: ").concat(this.age, "\n      Group: ").concat(this.group, "\n      Position: ").concat(this.position, "\n    "));
    },
};

member1.print();
member2.print();
member3.print();
member4.print();
member5.print();

