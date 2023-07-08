(function($) {

    let newEvents = function(selector) {
        if (!new.target) {
            return new newEvents(selector);
        }
        $.call(this, selector);
        this.mouseOut = function(callBackFn) {
            this.addEvent('mouseleave', callBackFn); 
            return this;
        }
        this.mouseOn = function(callBackFn) {
            this.addEvent('mouseenter', callBackFn); 
            return this;
        }
    };

    newEvents.prototype = Object.create($.prototype);
    // newEvents.prototype.constructor = newEvents;

    let obj = newEvents('test1');
    obj.mouseOn((css) => {
        css.color = 'red';
        css.backgroundColor = 'black';
    }).mouseOut((css) => {
        css.color = 'black';
        css.backgroundColor = 'red';
    });

})($);

const Pessoa = function(nome, endereco) {
    this.nome = nome;
    this.endereco = endereco;
    this.print = function() {
        return `Nome: ${this.nome} | Desconto ${this.endereco}`;
    }
}

const Funcionario = function(nome, endereco, salario) {
    Pessoa.call(this, nome, endereco);
    this.salario = salario;
}

const Estagiario = function(nome, endereco, salario, bonificacao) {
    Funcionario.call(this, nome, endereco, salario);
    this.bonificacao = bonificacao;
    this.calcular = function() {
        let calculo = this.salario + this.salario * this.bonificacao;
        return `Calculo Bonificação: ${calculo}`;
    }
}


Pessoa.prototype = Funcionario;
Funcionario.prototype = Estagiario;
Funcionario.constructor = Funcionario;
Estagiario.constructor = Estagiario;

const estagiario = new Estagiario('Celso Bastos', 'R. Castro, 15', 2000, 0.10);

// console.dir(estagiario);
// console.dir(estagiario.print());
// console.dir(estagiario.calcular());

console.dir(new Pessoa('Celso Bastos', 'R. Castro, 15'));