const app = Vue.createApp({
    data() {
        return {
            inventory: [],
        }
    },
    methods: {
        testclick () {
            console.log("Hit");
            alert("Kaffetasse click");
        },
        addItem(item) {
            switch (item) {
                 case "kaffetasse":
                    this.inventory.unshift({
                        was: "Die dunkle Versuchung",
                        text: "Die Schwarze Versuchung - Der dunkle saft, der alles im Gleichgewicht hält, aber auch alles aus dem Gleichgewicht bringen kann.",
                        image: "src"
                    })
                    break;
                case "minzmönch":
                    this.inventory.unshift({
                        was: "Der Minzmönch",
                        text: "Der Wächter des Turmes und des dunklen Saftes",
                        image: "src"
                    })
                    break;
                default:
                    alert("Do i no dis?")
                    break;
            }
        }
    },
});

app.mount('#werkstueck');