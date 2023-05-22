const {createApp} = Vue;

createApp ({
    data(){
        return {
            done: true,

            listTask: [{
                text: "Comprare il latte",
                done: true,
            },
            {
                text: "Comprare il pane",
                done: false,
            },
            {
                text: "Comprare il giornale",
                done: false,
            },
            {
                text: "Ordinare la pizza",
                done: true,
            },
            {
                text: "Prendere l'ombrello",
                done: true,
            }
        ]  
    }
        
    }
}).mount("#app");