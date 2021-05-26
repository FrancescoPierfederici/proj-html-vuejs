
new Vue({
    el: '#app',
    data: {
        navbarLink:
            [{
                text:"HOME",
                link:"#",

            },
            {
                text:"COURSES",
                link:"#",

            },
            {
                text:"INSTRUCTORS",
                link:"#",

            },
            {
                text:"EVENTS",
                link:"#",

            },
            {
                text:"PAGES",
                link:"#",

            },
            {
                text:"ELEMENTS",
                link:"#",

            },
            {
                //BARRA DI RICERCA
                text:"",
                link:"#",
                icon:"fa-search",

            },
            {
                //SHOPPING BAG
                text:"",
                link:"#",
                icon:"fa-shopping-bag",

            },
            {
                text:"",
                link:"#",
                icon:"fa-list",
                childs: [
                    {
                        text:"ELEMENTS",
                        link:"#",
        
                    },
                    {
                        text:"ELEMENTS",
                        link:"#",
        
                    },
                    {
                        text:"ELEMENTS",
                        link:"#",
        
                    },
                ]
            },
        ], 
        footerLink:[
            {
                text:" Business English ",
                secondtext:"Preston Marshall",
                link:"#",

            },
            {
                text:"Social Computing ",
                secondtext:"David Sanders",
                link:"#",

            },
            {
                text:"Learn Spanish ",
                secondtext:"Jennie King",
                link:"#",

            },
           
        ]
    },
});

