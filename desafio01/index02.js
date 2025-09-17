// Builder
class Lanche {
    constructor(pao, carne, queijo, salada, molho) {
      this.pao = false;
      this.carne = false;
      this.queijo = false;
      this.salada = false;
      this.molho = false;
    }
  
    show() {
      console.log("Lanche:", {
        pao: this.pao,
        carne: this.carne,
        queijo: this.queijo,
        salada: this.salada,
        molho: this.molho,
      });
    }
  }
  
  class LancheBuilder {
    constructor() {
      this.lanche = new Lanche();
    }
  
    setPao(pao) {
      this.lanche.pao = pao;
      return this;
    }
  
    setCarne(carne) {
      this.lanche.carne = carne;
      return this;
    }
  
    setQueijo(queijo) {
      this.lanche.queijo = queijo;
      return this;
    }
  
    setSalada(salada) {
      this.lanche.salada = salada;
      return this;
    }
  
    setMolho(molho) {
      this.lanche.molho = molho;
      return this;
    }
  
    build() {
      return this.lanche;
    }
  }
  
  class LancheDirector {
    static buildLancheSimples() {
      return new LancheBuilder()
      .setPao(true)
      .setCarne(true)
      .setQueijo(false)
      .setSalada(false)
      .setMolho(false)
      .build();
    }
  
    static buildLancheCompleto() {
      return new LancheBuilder()
      .setPao(true)
      .setCarne(true)
      .setQueijo(true)
      .setSalada(true)
      .setMolho(true)
      .build();
    }
  }
  
  const lancheSimples = LancheDirector.buildLancheSimples();
  const lancheCompleto = LancheDirector.buildLancheCompleto();
  
  lancheSimples.show();
  lancheCompleto.show();
  