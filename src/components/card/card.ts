import styles from './card.css';

export enum Attribut {
    "name" = "name",
    "height" = "height",
    "date_of_death" = "date_of_death",
    "hair_color" = "hair_color",
    "date_of_birth" = "date_of_birth",
    "gender" = "gender",
}

class Card extends HTMLElement{

    name?: string;
    height?: string;
    date_of_death?: string;
    hair_color?: string;
    date_of_birth?: string;
    gender?: string;

    constructor()
    {
        super();
        this.attachShadow({mode : "open"});
    }

    static get observedAttributes(){
        const attrs: Record<Attribut, null> = {
            name: null,
            height: null,
            date_of_death: null,
            hair_color: null,
            date_of_birth: null,
            gender: null,
        };
        return Object.keys(attrs);
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(
        propName: Attribut,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {           
                default:
                this[propName] = newValue;
                break;
            }
            
            this.render();
        }

        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <section class="card">
                    <section class="card-info">
                    <section class="card-text">
                    <h1>Name: ${this.name}</h1>
                    <p>Height: ${this.height}</p>
                    <p>Date of death: ${this.date_of_death}</p>
                    <p>Hair color: ${this.hair_color}</p>
                    <p>Birth year: ${this.date_of_birth}</p>
                    <p>Gender: ${this.gender}</p>
                    </section>
                    </section>
                </section>
                `;
                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);
            }
        }
}

customElements.define("my-card", Card);
export default Card;