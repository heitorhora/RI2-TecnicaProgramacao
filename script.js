function TelefoneCelular(ddd, numero) {
    this.ddd = ddd;
    this.numero = numero;

    this.getDdd = function () { return this.ddd; };
    this.setDdd = function (ddd) { this.ddd = ddd; };
    this.getDddMaiusculo = function () { return String(this.ddd).toUpperCase(); };
    this.getDddMinusculo = function () { return String(this.ddd).toLowerCase(); };

    this.getNumero = function () { return this.numero; };
    this.setNumero = function (numero) { this.numero = numero; };
    this.getNumeroMaiusculo = function () { return String(this.numero).toUpperCase(); };
    this.getNumeroMinusculo = function () { return String(this.numero).toLowerCase(); };
}

function Endereco(estado, cidade, rua, numero) {
    this.estado = estado;
    this.cidade = cidade;
    this.rua = rua;
    this.numero = numero;

    this.getEstado = function () { return this.estado; };
    this.setEstado = function (estado) { this.estado = estado; };
    this.getEstadoMaiusculo = function () { return this.estado.toUpperCase(); };
    this.getEstadoMinusculo = function () { return this.estado.toLowerCase(); };

    this.getCidade = function () { return this.cidade; };
    this.setCidade = function (cidade) { this.cidade = cidade; };
    this.getCidadeMaiusculo = function () { return this.cidade.toUpperCase(); };
    this.getCidadeMinusculo = function () { return this.cidade.toLowerCase(); };

    this.getRua = function () { return this.rua; };
    this.setRua = function (rua) { this.rua = rua; };
    this.getRuaMaiusculo = function () { return this.rua.toUpperCase(); };
    this.getRuaMinusculo = function () { return this.rua.toLowerCase(); };

    this.getNumero = function () { return this.numero; };
    this.setNumero = function (numero) { this.numero = numero; };
    this.getNumeroMaiusculo = function () { return String(this.numero).toUpperCase(); };
    this.getNumeroMinusculo = function () { return String(this.numero).toLowerCase(); };
}

function Cliente(nome, telefoneCelular, email, endereco) {
    this.nome = nome;
    this.telefoneCelular = telefoneCelular;
    this.email = email;
    this.endereco = endereco;

    this.getNome = function () { return this.nome; };
    this.setNome = function (nome) { this.nome = nome; };
    this.getNomeMaiusculo = function () { return this.nome.toUpperCase(); };
    this.getNomeMinusculo = function () { return this.nome.toLowerCase(); };

    this.getEmail = function () { return this.email; };
    this.setEmail = function (email) { this.email = email; };

    this.getCorinthians = function () {
        return "🦅 VAI CORINTHIANS!";
    };

    this.getDescricao = function () {
        return "Informações do Cliente:\n" +
               this.nome + "\n" +
               "Telefone:\n" +
               "DDD: " + this.telefoneCelular.getDdd() + "\n" +
               "Número: " + this.telefoneCelular.getNumero() + "\n" +
               "Endereço:\n" +
               "Rua: " + this.endereco.getRua() + "\n" +
               "Número: " + this.endereco.getNumero() + "\n" +
               "Cidade: " + this.endereco.getCidade() + "\n" +
               "Estado: " + this.endereco.getEstado();
    };
}

let telefone = new TelefoneCelular('11', '999999999');
let endereco = new Endereco('SP', 'São Paulo', 'Av. Paulista', '987');
let cliente = new Cliente('Carlos Conrado Heinz', telefone, 'carlos.conrado@app.com', endereco);

console.log(cliente.getDescricao());

let telefone2 = new TelefoneCelular('21', '888888888');
let endereco2 = new Endereco('SP', 'Campinas', 'Rua das Flores', '123');
let cliente2 = new Cliente('Ana Silva', telefone2, 'ana@app.com', endereco2);

let telefone3 = new TelefoneCelular('31', '777777777');
let endereco3 = new Endereco('RJ', 'Rio de Janeiro', 'Av. Atlântica', '456');
let cliente3 = new Cliente('Zeca Sousa', telefone3, 'zeca@app.com', endereco3);

const listaClientes = [cliente, cliente2, cliente3];

function ordenarClientes(clientes) {
    const clientesOrdenados = [...clientes];
    clientesOrdenados.sort(function (a, b) {
        return a.getNome().localeCompare(b.getNome());
    });
    return clientesOrdenados;
}

console.log("\n--- TESTE DE ORDENAÇÃO ---");
const resultadoOrdenado = ordenarClientes(listaClientes);
resultadoOrdenado.forEach(c => {
    console.log(c.getNome());
});

console.log("\n" + cliente.getCorinthians());