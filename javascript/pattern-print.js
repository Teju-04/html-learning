let num = 4;
let res = ""
for (let i = 1; i <= num; i++) {
    res = ""
    for (let j = 1; j <= i; j++) {
        res += "* "
    }
    console.log(res);
    console.log();
}


console.log("------ Next Pattern ------")

let str = "* ";
for (let i = 1; i <= num; i++) {
    console.log(str.repeat(i));
}

console.log("------ Next Pattern ------")

for (let i = num; i >= 1; i--) {
    res = ""
    for (let j = 1; j <= i; j++) {
        res += "* ";
    }
    console.log(res);
    console.log();
}

console.log("------ Next Pattern ------")

for (let i = num; i >= 1; i--) {
    console.log(str.repeat(i));
}

console.log("------Next Pattern -----");
let space;
for (let i = 1; i <= num; i++) {

    res = "";
    for (let j = num - 1; j >= i; j--) {
        res += "  ";
    }

    for (let k = 1; k <= i; k++) {
        res += "* ";
    }
    console.log(res);
}

console.log("------Next Pattern------");

space = "  "
let space_no = num;

for (let i = 1; i <= num; i++) {
    space_no = space_no - 1;
    first_part = space.repeat(space_no);
    second_part = str.repeat(i)
    console.log(first_part + second_part);
}


