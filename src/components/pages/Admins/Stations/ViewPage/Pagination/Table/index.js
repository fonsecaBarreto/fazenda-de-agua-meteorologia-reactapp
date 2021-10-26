import './style.css'
export const Table = ({ measurements }) => {

     return (
          <div className="measurement-table-container">

               <table>
                    <thead>
                         <tr>
                              <th>Data</th>
                              <th>Temperatura</th>
                              <th>Umidade do Ar</th>
                              <th>Dir. Vento</th>
                              <th>Vel. Vento</th>
                              <th>Vol. Chuva</th>
                              <th>Vol. Acc. Chuva </th>
                              <th>Coordenadas</th>
                         </tr>
                    </thead>

                    <tbody>
                         { 
                         measurements.map((m, i)=> ( 
                              <tr key={i}>
                                   <td>{new Date(m.created_at).toDateString()}</td> 
                                   <td>{m.temperature} °C</td>
                                   <td>{m.airHumidity}</td>
                                   <td>{m.windDirection}</td>
                                   <td>{m.windSpeed} m/s </td>
                                   <td>{m.rainVolume}</td>
                                   <td>{m.accRainVolume} </td>
                                   <td>{JSON.stringify(m.coordinates)}</td>
                              </tr>
                         ))
                         }
                    </tbody>
              { measurements.length > 0 && <tfoot>
                    <tr>
                         <th>Data</th>
                         <th>Temperatura</th>
                         <th>Umidade do Ar</th>
                         <th>Dir. Vento</th>
                         <th>Vel. Vento</th>
                         <th>Vol. Chuva</th>
                         <th>Vol. Acc. Chuva </th>
                         <th>Coordenadas</th>
                    </tr>
               </tfoot>}
               </table>
          </div>
     )
}


export default Table