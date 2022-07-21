import { getCuadroByNombre , deleteById , updateCuadro } from "../../../backEnd/Services/ServiceCuadro"

export default async function cuadroHandler (req, res)  {

    const { nombre } = req.query
    const {
      method,
      body,
    } = req
    
  
    switch (method) {
      case 'GET':
        await getCuadroByNombre(nombre).then(cuadro => {
          res.status(200).json({cuadro})
        }).catch(err => {
          res.status(500).json({err})
        })
        break
      case 'DELETE':
        await deleteById(nombre).then(cuadro => {
          res.status(200).json({cuadro})
        }).catch(err => {
          res.status(500).json({err})
        })
        break
      case 'PATCH':
        await updateCuadro(nombre, body).then(cuadro => {
          res.status(202).json({cuadro})
        }).catch(err => {
          res.status(400).json({err})
          })
        break  
      default:
        res.setHeader('Allow', ['GET', 'PATCH', 'DELETE'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  }

