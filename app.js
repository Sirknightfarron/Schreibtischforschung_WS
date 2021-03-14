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
            showModal: true,
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
            console.log('Yo')
            console.log(this.invVisible)
        },
        removeDups() {
            this.inventory = uniqueElementsBy(this.inventory, (a, b) => a.id == b.id);
        },
        addItem(item) {
            switch (item) {
                case "kaffetasse":
                    this.inventory.unshift({
                        id: "kaffetasse",
                        was: "Die dunkle Versuchung",
                        text: "Der dunkle Saft, der alles im Gleichgewicht hält, aber auch alles aus dem Gleichgewicht bringen kann.",
                        image: "./images/Kaffeetasse_icon.png",
                        voice: ""
                    })
                    break;
                case "minzmönch":
                    this.inventory.unshift({
                        id: "minzmönch",
                        was: "Der Minzmönch",
                        text: `Der Wächter des Turmes und des dunklen Saftes.
                        Nicht viel ist über ihn bekannt, er scheint aber schon älter zu sein,
                        als man vermuten mag. Auch nach all den Jahren ist seine Kampfkunst ungeschlagen.`,
                        image: "./images/Minzmönch_icon.png",
                        voice: ""
                    })
                    break;
                case "raspberrypi":
                    this.inventory.unshift({
                        id: "raspberrypi",
                        was: "Himbeer Stadt",
                        text: `In dieser fortschrittlichen und friedvollen Stadt herrscht immer ein reges hin und her.
                        Hier versammeln sich all die jenigen, die mit Landwirtschaft und Ruinen nicht viel zu tun haben und
                        sich lieber in Bücher, Schriften und Technologie befassen. Die Stadt der Denker.`,
                        image: "./images/Raspberrypi_icon.png",
                        voice: ""
                    })
                    break;
                case "honeypot":
                    this.inventory.unshift({
                        id: "honeypot",
                        was: "Der Honeypot",
                        text: `Im Honeypot versammeln sich alle, die des schweren Arbeitsalltages, ob körperlich oder geistig ist hier egal,
                        entflüchten wollen und eine Auszeit brauchen. Nebst diversen süßen Speisen und Getränken wird bei Anbruch der Dunkelheit
                        auch mal etwas mehr Met ausgeschenkt. Die Bewohner aus Himbeer Stadt und die, der Symbol-Felder verstehen sich super. Es gibt keine Klassen`,
                        image: "./images/Honeypot_icon.png",
                        voice: ""
                    })
                    break;
                case "symbolfelder":
                    this.inventory.unshift({
                        id: "symbolfelder",
                        was: "Die Symbolfelder",
                        text: `Auf diesen fruchtbaren und weitreichenden Feldern werden nur für Reisende Nahrungsmittel angebaut, denn die Bewohner dieser Lande sind in der Lage sich rein durch kreativen Output zu ernähren.
                        So wird auf den Feldern tagtäglich Symbol für Symbol geerntet um neue Kombinationen zu schaffen, die die Bevölkerung von Scribeterra weiterbringt.
                        Um diese Kombinationen mit Sinn und Leben zu füllen werden diese Symbolketten dann an Himbeer-Stadt geliefert. Symbiose unter allen Bewohnern und auch Reisenden`,
                        image: "./images/Symbolfelder_icon.png",
                        voice: "./voices/symbolfelder_voice.mp3"
                    })
                    // this.playVoice(this.inventory[0].voice);
                    break;
                case "mictower":
                    this.inventory.unshift({
                        id: "mictower",
                        was: "Der Mictower",
                        text: `Der Ort um einmal seine Stellung in der Welt zu prüfen. 
                                Niemand, der den Turm bisher betreten hat, hat die Spitze erklimmen können`,
                        image: "./images/Mictower_icon.png",
                        voice: ""
                    })
                    break;
                case "kupfermeer":
                    this.inventory.unshift({
                        id: "kupfermeer",
                        was: "Das Kupfermeer",
                        text: `Es ist eigentlich ein großer See aus Kupfer. Der Ort an dem du ürsprünglich aufgewacht bist.
                            Hier in der Nähe siehst du einige Merkwürdige Dinge, die du so noch nie gesehen hast. 
                            Im Süden siehst du ein Riesiges, scheinbar mit Wasserdampf betriebenes Gebirge, weiter Östlich davon
                            scheint ein riesiges Feld zu liegen. Im Nordosten des Sees ist ein Weiterer Großer Berg und einige dubios wirkende Gestalten
                            mit Mänteln, die schwer bepackt zu sein scheinen.
                        `,
                        image: "./images/Kupfermeer_icon.png",
                        voice: ""
                    })
                    break;
                case "wuerfel2":
                    this.inventory.unshift({
                        id: "wuerfel2",
                        was: "Ein Ominöser Händler",
                        text: `Ein Ortsansässiger Händler dessen Waren genauso seltsam sind, wie das Geschöpf selbst.
                                Er und seine Begleiterin scheinen gerne zu Meiern, wenn es um Rabatte und die Feierabendschicht geht.`,
                        image: "./images/Wuerfel_2_icon.png",
                        voice: ""
                    })
                    break;
                case "wuerfel6":
                    this.inventory.unshift({
                        id: "wuerfel6",
                        was: "Noch ein ominöser Händler",
                        text: `Nieman weiß, ob die beiden Händler miteinander verwandt sind, aber eines ist sicher.
                                Wenn du etwas brauchst, können sie es besorgen. Egal wie abstrus der Wunsch auch sein mag.`,
                        image: "./images/Wuerfel_6_icon.png",
                        voice: ""
                    })
                    break;
                case "soundmassiv":
                    this.inventory.unshift({
                        id: "soundmassiv",
                        was: "Das Soundmassiv",
                        text: `Einer der größeren Berge in Scribeterra. Vor, auf und um diesem Bergmassiv werden jedes Jahr die Lautesten und besten Feiern veranstaltet. 
                                Aufgrund der Nähe zu Himbeer Stadt und dem Lager mit den beiden Numerösen, ominösen Händlern ist die Materialbeschaffung jedes mal ein klacks`,
                        image: "./images/Soundmassiv_icon.png",
                        voice: ""
                    })
                    break;
                case "messerschneide":
                    this.inventory.unshift({
                        id: "messerschneide",
                        was: "Der Messerpass",
                        text: `Der einzige Weg um zum Eingang des Mictowers zu kommen. Bewacht von dem Wohlduftenden dient dies als erster Schritt um den Turm zu erklimmen.
                                Wer diesen weg nicht, oder nur gerade so übersteht hat im Turm wahrloch keine chance.`,
                        image: "./images/Messerschneide_icon.png",
                        voice: ""
                    })
                    break;
                case "frenchpress":
                    this.inventory.unshift({
                        id: "frenchpress",
                        was: "Der Vorrat",
                        text: `Der Ursprung der dunklen Versuchung. Nicht nur die Gezeiten, sonern die Zeit selbst scheint sich nach dem
                                Füllstand des Vorrates zu richten. Solange noch etwas drin ist geht das Leben und die Zeit wohl weiter,
                                was danach kommt vermag nicht einmal der weise Minzmönch zu erzählen`,
                        image: "./images/Frenchpress_icon.png",
                        voice: ""
                    })
                    break;
                case "controller":
                    this.inventory.unshift({
                        id: "controller",
                        was: "Der Dampf Controller",
                        text: `Nur der Mönch weiß, wie man dieses alte Dampgetriebene Relikt aus alter Zeit nutzt und wozu es gut ist.
                                Doch er spricht nie darüber, warum dieses Gerät, welches so groß wie ein Gebirge ist hier in Scribeterra steht.`,
                        image: "./images/Controller_icon.png",
                        voice: ""
                    })
                    break;
                default:
                    alert("Do i no dis? Error: No " + item + " in switch case")
                    break;
            }
            this.removeDups();
        },
        playVoice (path) {
            if(path) {
                var audio = new Audio(path);
                audio.play();
            }
        },
    },
});


app.component('inventory-item',{
    props: [
        'item',
    ],
    template:`
    <li class="inv-item">
    <img class="item-icon" :src="item.image">
    <h3>{{ item.was }}</h3>
    <h4>{{ item.text }}</h4>
    <audio :src="item.voice" controls="true" controlslist="nodownload "></audio>
    </li>
    `
});
  
  app.component("modal", {
    template: "#modal-template",
    props:[
        'item',
    ]
  })
  

app.mount('#werkstueck');