import AddressItem from './Item'
import CommonPool from '../../../../utils/Common/CommonPool'
import CommonToolBar from '../../../../utils/Common/CommonToolBar'
import CommonGrid from '../../../../utils/Common/CommonGrid'
import LoadingComp from '../../../../utils/LoadingComp'
import { InitAddresses } from '../methods/init_method'

const ListAddresses = ({ history }) =>{

     const { isLoading, addresses } = InitAddresses()
     const goTo = () =>{  history.push('/admin/addresses/create')  }

     return (
          <CommonGrid>

               <CommonToolBar>
                    <button onClick={goTo}> Novo </button>
               </CommonToolBar>

               {
                   isLoading ? <LoadingComp></LoadingComp>:
                    <CommonPool>
                         { addresses.map((a, i)=>( <AddressItem address={a} key={i}></AddressItem> ))}
                    </CommonPool>
               }

          </CommonGrid>
     )
}

export default ListAddresses