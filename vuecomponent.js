"use strict";

Vue.component("ppalcomponent", {
  setup() {
    const count = Vue.ref(0);
    Vue.provide("contador", count);

    const setCount = () => {
      count.value++;
    };
    Vue.provide("setCount", setCount);

    const productos = [
      {
        nombre: "Producto 1",
        precio: 100,
        body: `Este es el cuerpo del producto`,
      },
      {
        nombre: "Producto 2",
        precio: 200,
        body: `
                  Este es el cuerpo del producto
              `,
      },
      {
        nombre: "Producto 3",
        precio: 300,
        body: `
                  Este es el cuerpo del producto
              `,
      },
      {
        nombre: "Producto 4",
        precio: 400,
        body: `
                  Este es el cuerpo del producto
              `,
      },
      {
        nombre: "Producto 5",
        precio: 500,
        body: `
                  Este es el cuerpo del producto
              `,
      },
      {
        nombre: "Producto 6",
        precio: 600,
        body: `
                  <p>Este es el cuerpo del producto 1</p>
              `,
      },
      {
        nombre: "Producto 7",
        precio: 700,
        body: `Este es el cuerpo del producto 2`,
      },
    ];

    return {
      count,
      setCount,
      productos,
    };
  },
  template: `
          <main>
              <header>
                  <h1 class="text-center">Componente Principal y componentes secundarios o hijos</h1>
              </header>
              <article>
                  <li>Cuando se crea un componente, se debe pensar que es una encapsulación de codigo HTML</li>
                  <ul>
                      <li>Puede ser reutilizado en cualquier parte de la aplicación</li>
                      <li>Puede recibir parametros mediante los PROPS</li>
                      <li>Puede tener un estado (son las variable locales del componente, heredable mediante provide/inject o globales si usas VUEX o PINIA)</li>
                      <li>Los componentes hijos pueden emitar estados al componente padre</li>
                      <li>Puede tener un scope (todo lo que pasa en el componente queda dentro del componente a menos que uses un estado global u otra acción que devulva un resultado) </li>
                      <li>Puedes devolver resultados del componente mediante emit, v-model, estado global</li>
                      <li>Puede tener un ciclo de vida (created, mounted, destroy, etc.)</li>
                      <li>Puede tener un slot (puedes inyectar codigo html dentro de un componente declarando un "slot"</li>
                      <li>Puede tener un evento  (seccion methods) </li>
                      <li>Puede tener un estilo (adopta los css declarados en la pagina principal)</li>
                      <li>Puede tener una directiva (v-if, v-for, v-show, etc.)</li>
                      <li>Puede tener una propiedad computada (son como los metodos pero se ejecutan de manera automatica cuando sus dependencias cambian)</li>
                      <li>Puede tener una propiedad watch (observa cambios en una propiedad y ejecuta una accion)</li>
                      <li>Puede tener una propiedad inject (inyecta un valor desde un componente padre a un componente hijo)</li>
                      <li>Puede tener una propiedad provide (provee un valor desde un componente padre a un componente hijo)</li>
                      <li>Puede tener una propiedad ref (referencia a un elemento del DOM)</li>
                      <li>Todo es posible, depende de tu astucia.</li>
                  </ul>
              </article>
              <article>
                <header><button @click="setCount()" >+</button></header>
                  <div class="col col-md-12">
                     <div class="grid overflow-auto">
                          <ppalcard v-for="(item,index) in productos" :key="index" :producto ="item">
                              <template v-slot:body><p v-html="item.body"></p></template>
                          </ppalcard>
                      </div>
                  </div>
              </article>
          </main>
      `,
});
Vue.component("ppalcard", {
  setup() {
    const contador = Vue.inject("contador");
    const setCount = Vue.inject("setCount");
    return {
      contador,
      setCount,
    };
  },
  template: `
    <article>
      <header>
        <button @click="setCount">+</button>
        <h2 class="text-center">{{ contador }} {{ producto.nombre }}</h2>
      </header>
      <div class="card-body">
        <slot name="body"></slot>
      </div>
      <footer>
        <p class="text-end">Valor: $ {{ producto.precio }}</p>
      </footer>
    </article>
  `,
  props: {
    producto: {
      type: Object,
      required: true,
    },
  },
});

const app = new Vue({
  el: "#app",
});
