const band = {
    bandName : "Maroon 5",
    famousSong : "Girls Like You ! ",
    anotherBand : "One Direction"
};

// const bandName = band.bandName;
// const famousSong = band.famousSong;

// console.log(band);
// console.log(bandName);
// console.log(famousSong);

// object destructuring

let { bandName:var1, famousSong:var2, bandSinger = "Zayn Malik",...rest } = band;
// var1 = "Hello World";
console.log(var1);
console.log(var2);