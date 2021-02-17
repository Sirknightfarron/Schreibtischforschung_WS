let uniqueElementsBy = (arr, fn) =>
    arr.reduce((acc, v) => {
        if(!acc.some(x => fn(v, x))) acc.push(v);
        return acc;
    }, []);


const app = Vue.createApp({
    data() {
        return {
            inventory: [],
            invVisible: false,
        }
    },
    computed: {
        invEmpty () {
            return this.inventory.length == 0;
        },
    },
    methods: {
        testclick () {
            console.log("Hit");
            alert("Kaffetasse click");
        },
        toggleInv () {
            this.invVisible = !this.invVisible
        },
        removeDups() {
            console.log("I know")
            this.inventory = uniqueElementsBy(this.inventory, (a, b) => a.id == b.id);
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
                    alert("Do i no dis? Error: No " + item + " in switch case")
                    break;
            }
            this.removeDups();
        }   
    },
});

app.component('inventory-item',{
    props: ['item'],
    template:`
        <li class="inv-item">
            <img class="item-icon" :src="item.image" alt="">
            <h3>{{ item.was }}</h3>
            <h4>{{ item.text }}</h4>
        </li>
    `
});

app.mount('#werkstueck');