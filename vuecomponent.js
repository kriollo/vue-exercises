"use strict";
Vue.component('ppal-component',{
    template: `
        <main>
            <header>
                <h1 class="text-center">Componente Principal y componentes duplicados</h1>
            </header>
            <article>
                <li>Cuando se crea un component, se debe pensar que es una encapsulación de codigo HTML</li>
                <ul>    
                    <li>El componente puede ser reutilizado en cualquier parte de la aplicación</li>
                    <li>El componente puede recibir parametros mediante los PROPS</li>
                    <li>El componente puede tener un estado (son las variable locales del componente, o globales si usas VUEX)</li>
                    <li>El componente puede tener un ciclo de vida (created, mounted, destroy, etc.)</li>
                    <li>El componente puede tener un scope (todo lo que pasa en el componente queda dentro del componente a menos que uses Vuex) </li>
                    <li>El componente puede tener un slot (puedes inyectar codigo html dentro de un componente declaran un "slot"</li>
                    <li>El componente puede tener un evento  (seccion methods) </li>
                    <li>El componente puede tener un estilo (adopta los css declarados en la pagina principal)</li>    
                </ul>
                

            </article>
            <article>
                <div class="row">
                    <ppal-card v-for="(item,index) in productos" :key="index" :producto ="item"></ppal-card>
                </div>
            </article>
        </main>
    `,
    data() {
        return {
            productos : [
                {nombre: 'Producto 1', precio: 100},
                {nombre: 'Producto 2', precio: 200},
                {nombre: 'Producto 3', precio: 300},
                {nombre: 'Producto 4', precio: 400},
                {nombre: 'Producto 5', precio: 500},
                {nombre: 'Producto 6', precio: 600}
            ]
        };
    },
});
Vue.component('ppal-card',{
    template: `
        <div class="card col col-md-3">
            <div class="card-header">
                <h2 class="text-center">{{ producto.nombre }}</h2>
            </div>
            <div class="card-body">
                <p>card-body</p>
            </div>
            <div class="card-footer">
                <p class="text-end">Valor: $ {{ producto.precio }}</p>
            </div>
        </div>
    `,
    props : {
        producto : {
            type : Object,
            required : true
        }
    }
});


const app = new Vue({
    el: '#app',
})