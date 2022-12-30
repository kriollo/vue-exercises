"use strict";
Vue.component('ppal-component',{
    template: `
        <main>
            <header>
                <h1 class="text-center">Componente Principal y componentes duplicados</h1>
            </header>
            <article>
                <li>Cuando se crea un componente, se debe pensar que es una encapsulación de codigo HTML</li>
                <ul>
                    <li>Puede ser reutilizado en cualquier parte de la aplicación</li>
                    <li>Puede recibir parametros mediante los PROPS</li>
                    <li>Puede tener un estado (son las variable locales del componente, o globales si usas VUEX)</li>
                    <li>Puede tener un ciclo de vida (created, mounted, destroy, etc.)</li>
                    <li>Puede tener un scope (todo lo que pasa en el componente queda dentro del componente a menos que uses Vuex) </li>
                    <li>Puede tener un slot (puedes inyectar codigo html dentro de un componente declaran un "slot"</li>
                    <li>Puede tener un evento  (seccion methods) </li>
                    <li>Puede tener un estilo (adopta los css declarados en la pagina principal)</li>    
                </ul>
            </article>
            <article>
                <div class="col col-md-12">
                    <div class="row">
                        <ppal-card class="col-3 p-0" v-for="(item,index) in productos" :key="index" :producto ="item">
                            <template v-slot:body>{{ item.body }}</template>
                        </ppal-card>
                    </div>
                </div>
            </article>
        </main>
    `,
    data() {
        return {
            productos : [
                {nombre: 'Producto 1', precio: 100, body:`
                    Este es el cuerpo del producto
                `},
                {nombre: 'Producto 2', precio: 200,body:`
                Este es el cuerpo del producto
            `},
                {nombre: 'Producto 3', precio: 300,body:`
                Este es el cuerpo del producto
            `},
                {nombre: 'Producto 4', precio: 400,body:`
                Este es el cuerpo del producto
            `},
                {nombre: 'Producto 5', precio: 500,body:`
                Este es el cuerpo del producto
            `},
                {nombre: 'Producto 6', precio: 600,body:`
                <p>Este es el cuerpo del producto 1</p>
            `}
            ]
        };
    },
});
Vue.component('ppal-card',{
    template: `
        <div class="card">
            <div class="card-header">
                <h2 class="text-center">{{ producto.nombre }}</h2>
            </div>
            <div class="card-body">
                <slot name="body"></slot>
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