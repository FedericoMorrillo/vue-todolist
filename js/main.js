'use strict'

const { createApp } = Vue

  createApp({
    data() {
        
        const items = [
            {
                text: "andare a fare la spesa",
                done: false,
            },
            {
                text: "studiare vue js",
                done: false,
            },
            {
                text: "andare in palestra",
                done: false,
            },
        ]
      return {
        items,
      }
    },
    methods:{
        // funzione per impostare al click true o flase il done dell' oggetto
        checks(item){
            item.done = !item.done;
            console.log(item)
        },
        //attraverso l' array rimuoviamo 1 oggetto selezionato partendo dall' indice scelto
        removeToDo(index){
            this.items.splice(index,1);
        }
    }
  }).mount('#app')