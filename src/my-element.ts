import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-element")
export class MyElement extends LitElement {
    @property()
    title = 'Hello World';

    render() {
        return html`
            <p>${this.title}</p>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "my-element": MyElement;
    }
}