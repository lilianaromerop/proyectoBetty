import db from "../Db/mongoDb";
import Cuadro from "../model/cuadro";


export const getAllCuadros = async () => {
    await db();
    const cuadros = await Cuadro.find({});
    return cuadros;
}

export const createCuadro = async (cuadro) => {
    await db();
    const newCuadro = new Cuadro(cuadro);
    const result = await newCuadro.save();
    return  result;

}

export const getCuadroByNombre = async (nombre) => {
    await db();
    const cuadro = await Cuadro.find({nombre});
    return cuadro;
}

export const deleteById = async (id) => {
    await db();
    const result = await Cuadro.deleteOne({_id: id});
    return result;
}

export const updateCuadro = async (id, cuadro) => {
    await db();
    const result = await Cuadro.updateOne({_id: id}, cuadro);
    return result;
}