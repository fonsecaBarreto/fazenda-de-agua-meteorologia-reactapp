import './style.css'
import LocationImage from '../../../../../assets/images/pin.png'
import { CommonGrid, CommonToolBar, CommonPool } from '../../../../utils/Common'
import LabelContent from '../../../../utils/LabelContent'
import LoadingComponenet from '../../../../utils/LoadingComp'
import StationItem from './StationItem'
import { LoadContent } from '../methods'

const AddressViewPage = ({ history, location, match }) =>{
     
     const { address, freeze } = LoadContent({history, location, match})
     if( freeze ) return <LoadingComponenet></LoadingComponenet> 
     const { id, street, region, uf, number, city, details, postalCode, stations  } = address 

     const goToCreateNewStation = () => history.push(`/admin/stations/create?address_id=${id}`)
     return (
          <CommonGrid>

               <header className="address-view-page-header">
                    <img src={LocationImage}/>
                    <section>
                         <LabelContent label={'Endereço'}> {street}, {number}; {region}.</LabelContent>
                         { details && <LabelContent label={'Complementos'}> {details}</LabelContent>}
                         <LabelContent label={'Cidade'}> {city} - {uf}</LabelContent>
                         <LabelContent label={'CEP'}> {postalCode}</LabelContent>
                    </section>
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