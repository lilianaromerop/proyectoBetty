import mongoose  from 'mongoose';

const cuadroSchema = new mongoose.Schema({
    id              :String, 
    nombre          :{
        type        :String,
        required    :true,
        unique      :true
    }, 
    fechaCreacion   :{
        type        :Date,
        required    :true,
    }, 
    categoria       :{
        type        :String,
        required    :true,
    }, 
    tecnica         :{
        type        :String,
        required    :true,
        
    },
    size            :{
        type        :String,
        required    :true,
    },
    descripcion     :{
        type        :String,
        required    :true,

    },
    precio          :{
        type        :Number,
        required    :true,

    },
    imagen          :{
        type        :String,
        required    :true,
    },
    estado          :{
        type        :String,
        enum        :['disponible','inactivo','vendido'],
        default     :'disponible',
    },
    
});
  
export default mongoose.models.Cuadro || mongoose.model("Cuadro", cuadroSchema);