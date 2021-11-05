import { ImStatsBars } from 'react-icons/im'
import { AiOutlineStock } from 'react-icons/ai'

export const ChartTypesPickers = ({ state }) =>{
     const handleClick = (key) =>{
          state.chartConfig.setType(key)
     }
     return (
          <section className="chart-picker-section">
               <button onClick={()=>handleClick('bars')}> <ImStatsBars/>Barras </button>
               <button onClick={()=>handleClick('lines')}> <AiOutlineStock/>Linhas </button>
               <button onClick={()=>handleClick('radar')}> <AiOutlineStock/>Radar </button>
          </section>
     )
}

export default ChartTypesPickers