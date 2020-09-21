//Candy One aka Twix
class firstCandy {

    //Construcst the name and quantity of firstCandy
    constructor(name) {
        this.name = name;
        this.quantity = 15;
    }

    //Renders firstCandy and returns it to index.html
    render() {
        return `
            <div>${this.name}</div>
            <div>Quantity: ${this.quantity}</div>
        `
    }

    //Decreases the quantity of firstCandy when the purchase button is clicked on
    purchase() {
        this.quantity --;
    }
}

//firstCandy becomes Twix and also grabs the id of candyOne from index.html
let candy1 = new firstCandy("Twix");
let candyOne = document.getElementById("candyOne");
//Renders the properties of Twix and puts it into candyOneon index.html
candyOne.innerHTML = candy1.render();

/*When clicked on in index.html it activates the purchase function within Twix and if there are no more Twix left the page alerts 
user */
function twixPurchase() {
    if(candy1.quantity==0){
        alert("You can't buy anymore Twix")
    }else {
        candy1.purchase();
        candyOne.innerHTML = candy1.render();
    }
}

//Candy Two aka Twizzlers
class secondCandy {
    //Construct the name and quantity of secondCandy
    constructor(name){
        this.name = name;
        this.quantity = 22;
    }

    //Renders secondCandy and returns it to index.html
    render() {
        return `
            <div>${this.name}</div>
            <div>Quantity: ${this.quantity}</div>
        `
    }

    //Decreases the quantity of secondCandy when the purchase button is clicked on
    purchase() {
        this.quantity --;
    }
}

//secondCandy becomes Twizzlers and grabs the id of candyTwo form index.html
let candy2 = new secondCandy("Twizzlers");
let candyTwo = document.getElementById("candyTwo");
//Renders the properties of Twizzlers and puts it into candTwo on index.html
candyTwo.innerHTML = candy2.render();

/*When clicked on in index.html it activates the purchase function within Twizzlers and if there are no more Twizzlers 
left the page alerts user */
function twizPurchase() {
    if(candy2.quantity==0){
        alert("You can't buy anymore Twizzlers")
    }else {
        candy2.purchase();
        candyTwo.innerHTML = candy2.render();
    }
}

//firstChips aka Chili Cheese Fritos
class firstChips {
    //Constructs the name and the quantity of firstChips
    constructor(name){
        this.name = name;
        this.quantity = 8;
    }

    //Renders firstChips and returns it to index.html
    render() {
        return `
            <div>${this.name}</div>
            <div>Quantity: ${this.quantity}</div>
        `
    }

    //Decreases the quantity of firstCandy when the purchase button is clicked on
    purchase() {
        this.quantity --;
    }
}

//firstChips becomes TChili Cheese Fritos and grabs the id of chips form index.html
let chips1 = new firstChips("Chili Cheese Fritos");
let chips = document.getElementById("chips");
//Renders the properties of Chili Cheese Fritos and puts it into chips on index.html
chips.innerHTML = chips1.render();

/*When clicked on in index.html it activates the purchase function within Chili Cheese Fritos and if there are no more Fritos
left the page alerts user */
function fritPurchase() {
    if(chips1.quantity==0){
        alert("You can't buy anymore Chili Cheese Fritos")
    }else {
        chips1.purchase();
        chips.innerHTML = chips1.render();
    }
}



