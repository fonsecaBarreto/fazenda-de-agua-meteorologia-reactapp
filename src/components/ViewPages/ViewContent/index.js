import './style.css'
import LabelContent from "../../utils/LabelContent"
const ViewPageHeader = ({list=[], img, children}) => {
     return (

          <div className="admin-view-page-content">
               <section>
                    <img src={img}></img>
               </section>
               <section>
                    {list.map((j,i)=>(
                         <LabelContent label={j.label} key={i}> {j.value}</LabelContent> 
                         ))}
               </section>
               <section>
                    {children}
               </section>
               </div>
          )
}

export default ViewPageHeader