import "./components/index"
import styles from './index.css';
import {obtener_starwars} from './data'
import  Card, { Attribut } from "./components/card/card";

class AppContainer extends HTMLElement {
    
    cardss: Card[]=[];
    constructor(){
        super();
        this.attachShadow({ mode: "open" })
    }
    
    
    
    async connectedCallback(){
        const data = await obtener_starwars();
        console.log(data);
        data?.forEach((e:any) => {
            const prof = this.ownerDocument.createElement(
                "my-card"
                ) as Card;
                prof.setAttribute(Attribut.name, e.name);
                prof.setAttribute(Attribut.height, e.height);
                prof.setAttribute(Attribut.date_of_death, e.date_of_death);
                prof.setAttribute(Attribut.hair_color, e.hair_color);
                prof.setAttribute(Attribut.date_of_birth, e.date_of_birth);
                prof.setAttribute(Attribut.gender, e.gender);
                
                this.cardss.push(prof);
            });
            this.render(this.cardss);
        }
        
        render(cardss: any){
            if(this.shadowRoot)
            this.shadowRoot.innerHTML = ``
            const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);

            const card = this.ownerDocument.createElement("section")
            card.className = "card";

            for (let index = 0; index < cardss.length; index++) {
                 card.appendChild(cardss[index]);
            }  
            this.shadowRoot?.appendChild(card);
        }
    }
    
    customElements.define('app-container', AppContainer)