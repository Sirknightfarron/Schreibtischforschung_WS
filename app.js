let uniqueElementsBy = (arr, fn) =>
    arr.reduce((acc, v) => {
        if(!acc.some(x => fn(v, x))) acc.push(v);
        return acc;
    }, []);


const app = Vue.createApp({
    data() {
        return {
            inventory: [],
            isVisible: false,
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
            this.isVisible = !this.isVisible;
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
                        text: "Der dunkle Saft, der alles im Gleichgewicht hält, aber auch alles aus dem Gleichgewicht bringen kann.",
                        image: "/images/Kaffeetasse_icon.png"
                    })
                    break;
                case "minzmönch":
                    this.inventory.unshift({
                        id: "minzmönch",
                        was: "Der Minzmönch",
                        text: `Der Wächter des Turmes und des dunklen Saftes.
                        Nicht viel ist über ihn bekannt, er scheint aber schon älter zu sein,
                        als man vermuten mag. Auch nach all den Jahren ist seine Kampfkunst ungeschlagen.`,
                        image: "/images/Minzmönch_icon.png"
                    })
                    break;
                case "raspberrypi":
                    this.inventory.unshift({
                        id: "raspberrypi",
                        was: "Himbeer Stadt",
                        text: `In dieser fortschrittlichen und friedvollen Stadt herrscht immer ein reges hin und her.
                        Hier versammeln sich all die jenigen, die mit Landwirtschaft und Ruinen nicht viel zu tun haben und
                        sich lieber in Bücher, Schriften und Technologie befassen. Die Stadt der Denker.`,
                        image: "/images/Raspberrypi_icon.png"
                    })
                    break;
                case "honeypot":
                    this.inventory.unshift({
                        id: "honeypot",
                        was: "Der Honeypot",
                        text: `Im Honeypot versammeln sich alle, die des schweren Arbeitsalltages, ob körperlich oder geistig ist hier egal,
                        entflüchten wollen und eine Auszeit brauchen. Nebst diversen süßen Speisen und Getränken wird bei Anbruch der Dunkelheit
                        auch mal etwas mehr Met ausgeschenkt. Die Bewohner aus Himbeer Stadt und die, der Symbol-Felder verstehen sich super. Es gibt keine Klassen`,
                        image: "/images/Honeypot_icon.png"
                    })
                    break;
                case "symbolfelder":
                    this.inventory.unshift({
                        id: "symbolfelder",
                        was: "Die Symbolfelder",
                        text: `Auf diesen fruchtbaren und weitreichenden Feldern werden kaum Nahrungsmittel angebaut, denn die Bewohner dieser Lande sind in der Lage sich rein durch kreativen Output zu ernähren.
                        Außer für Reisende wird auf den Feldern tagtäglich Symbol für Symbol geerntet um neue Kombinationen zu schaffen
                        und um diese Kombinationen mit Sinn und Leben zu füllen werden diese Symbolketten dann an Himbeer Stadt geliefert. Symbiose unter allen Bewohnern und auch Reisenden`,
                        image: "/images/Symbolfelder_icon.png"
                    })
                    break;
                default:
                    alert("Do i no dis? Error: No " + item + " in switch case")
                    break;
            }
            this.removeDups();
        },
        playVoice (path) {
            
        }
    },
});

app.component('inventory-item',{
    props: [
        'item',
        'invVisible'
    ],
    template:`
        <li class="inv-item">
            <img class="item-icon" :src="item.image" alt="">
            <h3>{{ item.was }}</h3>
            <h4>{{ item.text }}</h4>
        </li>
    `
});

app.mount('#werkstueck');