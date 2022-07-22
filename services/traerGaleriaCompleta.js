import axios from "axios";


const traerGaleriaCompleta = async () =>{

    const options = {
        method: 'GET', 
        url: 'http://localhost:3000/api/cuadro'
    };

    await axios.request(options)
    .then(response => {
      return response.data

    }).catch(error => {
      return error
    });
}

export default traerGaleriaCompleta