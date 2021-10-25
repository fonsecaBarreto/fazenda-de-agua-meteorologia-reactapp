export class ClientSideError extends Error {
     constructor(message, params= null){
          super(message)
          this.params= params
     }
}
