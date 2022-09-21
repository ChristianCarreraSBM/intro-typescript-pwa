class FormulaGeneral{
    positivo:number;  //operacion en positivo
    negativo:number;  //operacion en negativo
    num_a:number;     //valor A
    num_b:number;     //valor B
    num_c:number;     //valor C
    

    operacion(){

        //operacion en positivo
        this.positivo = Math.pow(this.num_b,2) - (4 * this.num_a * this.num_c); this.positivo = Math.sqrt(this.positivo);
        this.positivo = ( - this.num_b) + (this.positivo); this.positivo = this.positivo / (2 * this.num_a);

        //operacion en negativo
        this.negativo = Math.pow(this.num_b,2) - (4 * this.num_a * this.num_c); this.negativo = Math.sqrt(this.negativo);
        this.negativo = ( - this.num_b) - (this.negativo); this.negativo = this.negativo / (2 * this.num_a);

        console.log(`${this.positivo} es X1`); //imprimir
        console.log(`${this.negativo} es X2`); //imprimir
    }
}
let resultadofinal = new FormulaGeneral(); //Asignar valores
    resultadofinal.num_a =  2;
    resultadofinal.num_b = -12;
    resultadofinal.num_c =  10;
    resultadofinal.operacion();

