new Vue({
    el: "#app",
    data: {
        id: 0,
        tasks: [{
            title: "",
            body: "",
            radio: "",
            priority: "",
            tags: []
        }, 
    ]},
    
    methods: {
        
        storeData() {
            this.id = this.tasks.length;
            this.tasks.push({ title: "", body: "", radio: "", priority: "", tags:[]});
        },
        
        getTask(){
            
            if(this.tasks[this.id]) {
                return this.tasks[this.id];
            } else {
                return "";
            }
        },
    }   
});