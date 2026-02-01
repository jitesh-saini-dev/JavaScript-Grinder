function system(data){
    if(data===undefined){
        let person={
            personName:"jsk",
            crime:"not attendin bro's cafe",
            location:"kaalapani"
        };
        return person.personName;
    }
    return data.ProductName===undefined ? "Default ProductName" : data.ProductName;
}
let res1= system();
console.log(res1);

let res2= system({
    ProductName:"Dabba",ProductDetail:"3243regv435tree",Date:"01-02-26"
});
console.log(res2);

let res3= system({ProductDetail:"3243regv435tree",Date:"01-02-26"
});
console.log(res3);