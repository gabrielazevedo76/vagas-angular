export class Vaga {
    idVaga: number = 0;
    titulo: string = "";
    descricao: string = "";
    requisitos: string = "";
    remuneracaoVaga: number = 0.0;
    beneficios: string = "";
    aberta: boolean = false;

    constructor(
        idVaga:number,
        titulo:string,
        descricao:string,
        requisitos:string,
        remuneracaoVaga:number,
        beneficios:string,
        aberta:boolean
    )
    {
        this.idVaga = idVaga;
        this.titulo = titulo;
        this.descricao = descricao;
        this.requisitos = requisitos;
        this.remuneracaoVaga = remuneracaoVaga;
        this.beneficios = beneficios;
        this.aberta = aberta;
    }

}