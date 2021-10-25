import './style.css'
import LocationImage from '../../../../../assets/images/pin.png'
import { CommonGrid, CommonToolBar, CommonPool } from '../../../../utils/Common'
import LabelContent from '../../../../utils/LabelContent'
import LoadingComponenet from '../../../../utils/LoadingComp'
import StationItem from './StationItem'
import { LoadContent } from '../methods'
import ViewContent from '../../../../ViewPages/ViewContent'
const AddressViewPage = ({ history, location, match }) =>{
     
     const { address, freeze } = LoadContent({history, location, match})
     if( freeze ) return <LoadingComponenet></LoadingComponenet> 
     const { id, street, region, uf, number, city, details, postalCode, stations  } = address 

     const goToCreateNewStation = () => history.push(`/admin/stations/create?address_id=${id}`)
     return (
          <CommonGrid>

               <header className="admin-address-view-page-header">
                    <ViewContent img={LocationImage} list={[
                         {label: "Endereço", value: ` ${street} ${number} ${region}`},
                         {label: "Detalhes", value: ` ${details}`},
                         {label: "Cidade", value: ` ${city} ${uf}`},
                         {label: "CEP", value: ` ${postalCode}`}]}/>
               </header>

               <CommonToolBar>
                    <button className="" onClick={goToCreateNewStation} > Adicionar Nova Estação </button>
               </CommonToolBar> 

               <CommonPool lg={1}>
                     { stations.map((s, i)=>( <StationItem station={s} key={i}></StationItem> ))} 
               </CommonPool> 

          </CommonGrid>
     )
}

export default AddressViewPage