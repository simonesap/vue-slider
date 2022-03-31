// Descrizione
// Partendo da un array di immagini, realizziamo uno slider con Vue.js come da mockup
// Al click delle freccette "sinistra" e "destra" lo slider cambierà l'immagine visibile passando alla successiva oppure alla precedente.
// Consigli
// Ricordiamoci come visualizzare un singolo elemento alla volta di un array
// Attenzione
// Quando le immagini terminano, lo slider ricomincerà dalla prima
// Bonus
// applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente ( riguardare la documentazione su i lifecycle hooks )
// Al click su un pallino verrà visualizzata l'immagine di riferimento associata ( il terzo pallino sarà associato alla terza immagine e così via..)

var app = new Vue(
    {
        el: '#root',
        
        // created() {
        //     setTimeout(3000)
        // },

        data: {
            // media: [
            //     {
            //     id: 1,
        mediaImg: ['https://source.unsplash.com/random/?space',
                    'https://source.unsplash.com/random/?nature',
                    'https://source.unsplash.com/random/?space',
                    'https://source.unsplash.com/random/?space',
                    'https://source.unsplash.com/random/?space'
            ],
            classiImg: 'middle',
            classContainer: 'h_100vh',
            // counter: 0,
            newArray: [],
            
        },
        

        methods: {
            
            // Funzione per calcolare l'indice dell'array
            getIndexArrayCalcuate: function(element, i){
                this.mediaImg.forEach(
                    (element, index) => {
                        console.log(index)
                        this.newArray += element.index
                        return this.newArray
                    }
                )
              
            },

            // Funzione per aggiungere un elemento all'array
            getRight: function(element, index){
                let counter = this.mediaImg++
                this.newArray.forEach(
                    (elmenet, index) => {
                        if(true && counter <=  this.mediaImg.length){
                            index++
                            console.log(index)
                        } return this.newArray
                        
                        
                    }
                ) 
                 
            },

            // Funzione per togliere un elemento all'array
            getLeft: function(element, index){
                let counter = this.mediaImg--
                this.newArray.forEach(
                    (elmenet, index) => {
                        if(true && counter >=  this.mediaImg.length){
                            counter--
                            console.log(counter)
                        } 
                        return this.newArray
                    }
                ) 
                 
            },
           
        }
        },
       
)