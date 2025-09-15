// TODO(Ynion): Create an Enum with atleast 5 elements of any type.
var KpopGroup;
(function (KpopGroup) {
    KpopGroup["BLACKPINK"] = "Blackpink";
    KpopGroup["NEWJEANS"] = "Newjeans";
    KpopGroup["EXO"] = "Exo";
    KpopGroup["BABYMONSTER"] = "Babymonster";
    KpopGroup["ENHYPEN"] = "Enhypen";
})(KpopGroup || (KpopGroup = {}));
// TODO(Arroyo): Create an Object based on the Type created by Ynion.
// TODO(Delima): Create an Object based on the Type created by Ynion.
// TODO(Mejares): Create an Object based on the Type created by Ynion.
// TODO(Ynion): Create an Object based on the Type created by Ynion.
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
// TODO: (All Members): Call the print method you created in your object.
member4.print();
member5.print();
// NOTE: Delete the comment once a task assigned is finished/completed.
