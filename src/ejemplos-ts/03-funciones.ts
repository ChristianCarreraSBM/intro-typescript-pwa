//funciones

function  sumar(a,b):void{
    console.log(a+b);
}

const resultado=sumar('Daniel','Carreras');
console.log(resultado)

function sumar2(n1:number,n2:number):number{
    return n1+n2;
}
console.log(sumar2(6,3))


function multiplicar(n1:number, otronumero:number,base:number=9):number{
    let tem=n1*base;

    return tem;

}

console.log(multiplicar(3,5));

interface Mascota{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void; //para definir si regresa un tipo de dato o no
}

function calcular(mascota:Mascota, x:number):void{
    mascota.edad+=x;
    console.log(mascota);
}
const nuevaMascota:Mascota={
    nombre:'guero',
    edad:2,
    mostrarEdad() {
        console.log('La edad es:',this.edad);
    },
}
calcular(nuevaMascota,3)


