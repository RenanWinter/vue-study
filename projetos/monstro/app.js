new Vue({
  el: "#app",
  data: {
    running: false,
    playerLife: 20,
    monsterLife: 0,
    logs: [],
  },
  methods: {
    iniciarJogo() {
      this.playerLife = 100;
      this.monsterLife = 100;
      this.running = true;
      console.log(this);
      console.log(this.$attrs);
    },
    desistir() {
      this.running = false;
    },
    atacar(special) {
      const player = this.hurt("player", 7, 12, false);
      this.registerLog('Você foi atacado com força: ' + player, 'player');
      if (this.monsterLife > 0){
          const monster = this.hurt("monster", 5, 8, special);
          this.registerLog('Monstro foi atacado com força: ' + monster, 'monster');
      }
    },
    hurt(player, min, max, special) {
      const force = special ? 5 : 0;
      const attack = this.getRandom(min + force, max + force);
      this[player + "Life"] = Math.max(this[player + "Life"] - attack, 0);
      return attack;
    },
    healAndHurt() {
      const heal = this.getRandom(10, 15);
      this.playerLife = Math.min(this.playerLife + heal, 100);
      this.registerLog('Você foi curado com força: ' + heal, 'player');
      
      const player = this.hurt("player", 7, 12, false);
      this.registerLog('Você foi atacado com força: ' + player, 'player');

    },
    getRandom(min, max) {
      const calculado = Math.random() * (max - min) + min;
      return Math.round(calculado);
    },
    registerLog(log, player) {
      this.logs.unshift({ log, class: player == 'player' ? 'bg-success' : 'bg-danger' });
    },
  },
  computed: {
    temResultado() {
      return this.monsterLife == 0 || this.playerLife == 0;
    },
    resultado() {
      if (this.monsterLife > this.playerLife) {
        return "lost";
      } else if (this.monsterLife < this.playerLife) {
        return "win";
      }
      return "draw";
    },
  },
  watch: {
    temResultado(valor) {
      if (valor) {
        this.running = false;
      }
    },
  },

});
