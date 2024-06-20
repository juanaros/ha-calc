import getDesignStrength from "../components/Utilidades"
import Select from "../components/Select"
import Input from "../components/Input"
import { useState } from "react"

const Calculator = () => {
  const [height, setHeight] = useState('')
  const [width, setWidth] = useState('')
  const [bendingMoment, setBendingMoment] = useState('')
  const [quality, setQuality] = useState('')
  const [nominalMoment, setNominalMoment] = useState(null)
  const [frame, setFrame] = useState('')

  const compute = () => {
    getDesignStrength(height, width, bendingMoment, quality, setNominalMoment, setFrame);
  };

  return (
    <div className="m-5 flex justify-center">
        <div className='flex flex-col gap-4 w-96'>
          <p className="block text-sm font-medium text-gray-900">Ingresa los datos de tu viga</p>
          <Input 
            place='Altura útil en centímetros'
            value={height}
            onChange={setHeight}
          />
          <Input 
            place='Ancho en centímetros'
            value={width}
            onChange={setWidth}
          />
          <Input 
            place='Momento Solicitante en T*m'
            value={bendingMoment}
            onChange={setBendingMoment}
          />
          <Select 
            place='Calidad del hormigón'
            value={quality}
            onChange={setQuality}
          />
          <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm py-2.5 text-center mb-2' onClick={compute}>Calcular Momento Último</button>
          <div>
            {nominalMoment !== null && (
              <div className="bg-gray-100 px-4 py-3 border border-gray-300 rounded-lg">
                <h2 className="text-md font-medium">Momento Nominal (Mn) =</h2>
                <h2 className="text-lg font-medium">{nominalMoment.toFixed(2)} [T*m]</h2>
                <h2 className="text-md font-medium mt-5">Momento Último Límite = Φ Mn =</h2>
                <h2 className="text-lg font-medium">{(nominalMoment*0.9).toFixed(2)} [T*m]</h2>
                <h2 className="text-md font-medium mt-5">{frame}</h2>
              </div>
            )}
          </div>
        </div>
    </div>
  )
}

export default Calculator


