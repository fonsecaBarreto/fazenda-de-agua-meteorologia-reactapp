import { Handler as notify } from '../Notifications'

const ConfirmationAdapter = ( messages = {}, action ) =>{  
     const { confirm, succed } = messages

     const execute = (payload) => {
          notify.confirm( async (answer)=>{
               if(answer !== 0) return; // any other answer that is not 0 will close the dialog

               notify.setLoading(true)
               try{
                    await action(payload)
                    notify.success( null, ...succed(payload) );
                    
               } catch (err) {  
                    notify.failure( null, err.message || "ERRO INESPERADO." );
               } finally { notify.setLoading(false); }

               return true // return true, prevents the global dialog isntance  to be closed
          }, ...confirm(payload) )
     }

     return execute
}

export default ConfirmationAdapter