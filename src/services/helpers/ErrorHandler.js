

const NOT_FOUND = "Rota não existe."
const UNKNOWN_ERROR = "Erro inesperado."

function ResultError(message, error){
    this.message = message; 
    this.params = null

    if(error){
        if(typeof error == "string"){
            this.message = error
        }else if(typeof error == "object"){
            const { message, params } = error
            this.message = message
            this.params = params
        }
    }
}

export function errorHandler(err) {
    if(!err.response) return new ResultError(UNKNOWN_ERROR)
    if(err.response.status === 404 ) return new ResultError(NOT_FOUND)
    var { error } = err.response.data
    return new ResultError(UNKNOWN_ERROR, error)
}