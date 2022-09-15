interface alumnoUTL{
    nombre:string;
    edad:number;
    mostrarDireccion:()=>void;

 direccion:{
    calle:string;
    pais:string;
    estado:string;
    };
}

const AlumnoUTL:alumnoUTL={
    nombre:'Daniel',
    edad:22,
    direccion:{
     calle:'de la cuadrilla',
     pais:'Mexico',
     estado:'Guanajuato'
   
    },

    mostrarDireccion(){
        return this.nombre+','
               +this.edad+','
               +this.direccion.calle+','
               +this.direccion.pais+','
               +this.direccion.estado;
    }
}

const Direccion=AlumnoUTL.mostrarDireccion();
console.log(Direccion)