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

        data: {
            mediaImg: ['https://source.unsplash.com/random/?space',
                    'https://source.unsplash.com/random/?nature',
                    'https://source.unsplash.com/random/?city',
                    'https://source.unsplash.com/random/?fruit',
                    'https://source.unsplash.com/random/?dog'
            ],
            classiImg: 'middle',
            classContainer: 'h_100vh',
            counterImg: 0,
            
        },
        
        created() {
            this.nextPhotoTiming();
        },

        methods: {

            // Funzione per spostarsi di un elemento a destra nell''array
            nextPhotoRight: function(){
                this.counterImg += 1;
                if(this.counterImg > (this.mediaImg.length -1)){
                    this.counterImg = 0;
                }
            },

            // Funzione per spostarsi di un elemento a sinistra nell''array
            nextPhotoLeft: function(){
                this.counterImg -= 1;
                if(this.counterImg < 0){
                    this.counterImg = this.mediaImg.length - 1;
                }
            },

            // Funzione per l'intervallo di tempo
            nextPhotoTiming: function(){
                setInterval(() => {
                    this.nextPhotoRight();
                },3000);
            },

            // Funzione per vedere la foto cliccata secondo l'indice comune di foto e pallino
            clickDots: function(indexPhoto){
                console.log(indexPhoto);
                    this.counterImg = indexPhoto;
            }
    
        }
        },
       
)