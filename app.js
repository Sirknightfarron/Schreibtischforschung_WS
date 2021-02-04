
const app = Vue.createApp({
    data() {
        return {
            inventory: [],
        }
    },
    computed: {},
    methods: {
        testclick () {
            console.log("Hit");
            alert("Kaffetasse click");
        },
        inventoryEmpty () {
            if(this.inventory.length == 0) {
                return true;
            }
            return false;
        },
        addItem(item) {
            switch (item) {
                case "kaffetasse":
                    this.inventory.unshift({
                        id: "kaffetasse",
                        was: "Die dunkle Versuchung",
                        text: "Die Schwarze Versuchung - Der dunkle Saft, der alles im Gleichgewicht hält, aber auch alles aus dem Gleichgewicht bringen kann.",
                        image: "/images/Kaffeetasse_icon.png"
                    })
                    break;
                case "minzmönch":
                    this.inventory.unshift({
                        id: "minzmönch",
                        was: "Der Minzmönch",
                        text: `Der Wächter des Turmes und des dunklen Saftes.
                        Nicht viel ist über ihn bekannt, er scheint aber schon älter zu sein,
                        als man vermuten mag. Auch nach all den Jahren ist seine Kampfkunst ungeschlagen.
                        `,
                        image: "/images/Minzmönch_icon.png"
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