Vue.component("book-view" , {
    props: ["book"],
    template: "<li>{{ book.title }} {{ book.emoji }} <br /> {{ book.author }} </li>"
})

let app = new Vue({
    el: "#app",
    data: {
         message: "Books" ,
         ready: true,
         books: [ 
            { id: 1 , title:"The Legend of Zelda: Majora's Mask" , emoji:"📖" , author:"Akira Himekawa" } , 
            { id: 2 , title:"World of Warcraft: Arthas Rise of the Lich King" ,  emoji:"📘" , author:"Christie Golden"}
            ] 
    },
    methods: {
        bookTwo: function() {
            
        }
    }
});

