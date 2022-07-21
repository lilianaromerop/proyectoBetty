import { getAllCuadros , createCuadro } from "../../backEnd/Services/ServiceCuadro"


export default async function cuadroHandler (req, res)  {
  const {
    method,
    body,
  } = req

  switch (method) {
    case 'GET':
      await getAllCuadros().then(cuadros => {
        res.status(200).json({cuadros})
      }).catch(err => {
        res.status(500).json({err})
      })
      break
    case 'POST':
      await createCuadro(body).then(cuadro => {
        res.status(201).json({cuadro})
      }).catch(err => {
        res.status(400).json({err})
      })
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}