class Persona{
    constructor(cedula,nombres,apellidos,genero,direccion,ciudad){
        this.cedula=cedula
        this.nombres=nombres
        this.apellidos=apellidos
        this.genero=genero
        this.direccion=direccion
        this.ciudad=ciudad
    }
}

class Titular extends Persona{
    constructor(cedula,nombres,apellidos,genero,direccion,ciudad)
    super(cedula,nombres,apellidos,genero,direccion,ciudad)
}

export default Titular


