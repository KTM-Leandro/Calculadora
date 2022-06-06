function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => this.capturaCliques();

    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    this.addNumDisplay = el => this.display.value += el.innerText;
    this.del = () => this.display.value = this.display.value.slice(0, -1);
    this.clear = () => this.display.value = '';

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);

            if (!conta) {
                alert('Conta Inválida');
                this.clear();
                return;
            }
            this.display.value = conta;
        } catch (e) {
            alert('Conta Inválida');
            this.clear();
            return;
        }
    };
}
const calculadora = new Calculadora();
calculadora.inicia();