const {createApp} = Vue;

createApp ({
    data(){
        return {
            done: true,
            newTask: "",
            error: false,
            
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
        addTask (){
            if (this.newTask !== "" && this.newTask.length >= 5){
                this.listTask.unshift(
                    {   text:this.newTask,
                        done:false
                    });
                    this.newTask= "",
                    this.error = false
                    // console.log(this.newTask);
                    // console.log(this.listTask)
            } else {
                this.error = true,
                console.log("è troppo corto")
            }
            
        },
        removeTask (index){
            this.listTask.splice(index,1)
        }
    }
}).mount("#app");