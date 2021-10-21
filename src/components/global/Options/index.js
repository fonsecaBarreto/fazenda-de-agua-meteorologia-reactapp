
import React from 'react'
import OptionDialog, { MakeOption } from '../../utils/Dialog/Presentation/OptionDialog'

import { useSelector, useDispatch} from 'react-redux'
import { setOptions } from '../../../store/reducers/dialogs/actions'
import Store from '../../../store'

export const Handler = {
     MakeOption: MakeOption,
     DispatchOptions:(options) =>{
          Store.dispatch(setOptions(options))
     },
}

const NotificationComponent = () =>{
     const dispatch = useDispatch()
     const { options } = useSelector((state)=> state.dialogs)
     return (
          <React.Fragment>
              { options.length > 0 && <OptionDialog 
                    show={ options.length > 0 } 
                    onClose={()=>dispatch(setOptions())} 
                    options={options}
               ></OptionDialog>} 
          </React.Fragment>
     )
}    

export default NotificationComponent