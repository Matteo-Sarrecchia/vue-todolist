const {createApp} = Vue;

createApp ({
    data(){
        return {
            done: true,
            newTask: "",

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
        ]}
    },

    methods: {
        addTask () {
            console.log(this.newTask);
            console.log(this.listTask)
            this.listTask.unshift(this.newTask)
        }
    }
}).mount("#app");