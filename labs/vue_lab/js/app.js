
let book1 = new Vue({
    el: "#book1",
    data: {
         message: "Book1" ,
         ready: true,
         books: [
            {title:"The Legend of Zelda: Majora's Mask" , emoji:"📖" , author:"Akira Himekawa" }  
         ]
    },
});

let book2 = new Vue({
    el: "#book2",
    data: {
         message: "Book2" ,
         ready: false,
         books: [
            {title:"World of Warcraft: Arthas Rise of the Lich King" , emoji:"📘" , author:"Christie Golden" }  
         ]
    },
    methods: {
        bookTwo: function() {
            if (this.ready == false){
                this.ready = true;
            } else if(this.ready == true) {
                this.ready = false;
            }
        }
    }
});
