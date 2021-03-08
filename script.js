




var app = new Vue({
    el:'#app',
    data:{
        items:[
            
        ],
        newItem:[{
            name:'',
            quantity:0,
            unit_price:0,
        }], 
    },

    computed:{
        total(){
            var total =0;
            this.items.forEach(item =>{
                total += (item.unit_price*item.quantity);
            })
            return total;
        }
    },

    methods: {
        addItem(){
            this.items.push({
                name:this.newItem.name,
                quantity:this.newItem.quantity,
                unit_price:this.newItem.unit_price
            })
        },
        removeItem(index){
            this.items.splice(index,1)

        }
    },
})