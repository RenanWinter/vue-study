
class MeuVue{

    constructor(params){
        this.$el = document.querySelector(params.el);
        this.$data = params.data;

        for (let attr in this.$data){
            Object.defineProperty(this,attr,{
                get:()=>{
                    return this.$data[attr];
                },

                set: value =>{
                    this.$data[attr] = value;
                }
            })
        }

        // interpolar
        const regex = /\{\{([\s\w+]*)\}\}/g;
        this.$el.innerHTML = this.$el.innerHTML.replace(regex,(match,$1)=>{
            const value = this[$1.trim()];
            return value ?? eval($1)
        })
    }
}

const vm = new MeuVue({
    el:'#app',
    data:{
        nome: 'Renan',
        idade: 39
    }
})