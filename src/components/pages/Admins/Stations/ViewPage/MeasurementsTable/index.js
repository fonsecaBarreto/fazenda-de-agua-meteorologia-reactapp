import './style.css'
export const Table = ({ measurements }) => {


     return (
          <div className="measurement-table-container">

               <table>
                    <thead>
                         <tr>
                              <th colspan="1">Temperatura</th>
                              <th>Umidade do Ar</th>
                              <th >Vol. Chuva</th>
                              <th colspan="2">Vento</th>
               
                              <th>Coordenadas</th>
                              <th>Data</th>
                         </tr>
                    </thead>

                    <tbody>
                         { 
                         measurements.map((m, i)=> ( 
                              <tr key={i}>
                                    <td>{m.temperature} °C</td>
                          
                                   <td>{m.airHumidity}</td>
                                   <td>{m.rainVolume}</td>
                                 
                                   <td>{m.windSpeed} m/s </td>
                                   
                                   <td>{m.windDirection}</td>
                                  
                                   <td>({m.coordinates.latitude},{m.coordinates.longitude},{m.coordinates.altitude})</td>
                             
                                   <td>{new Date(m.created_at).toDateString()}</td> 
                              </tr>
                         ))
                         }
                    </tbody>
               <tfoot>
                  {/*   <tr>
                         <th>Column 1</th>
                         <th>Column 2</th>
                         <th>Column 3</th>
                         <th>Column 4</th>
                         <th>Column 5</th>
                    </tr> */}
               </tfoot>
               </table>
          </div>
     )
}


export default Table