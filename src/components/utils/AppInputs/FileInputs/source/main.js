

export const useFileInput = (options,callback) =>{
    const { multiple = false } = options
    const fileInput = document.createElement('input')
    fileInput.type="file"
    fileInput.multiple = multiple

     const Open = (e) =>{
          e.preventDefault();
          fileInput.click()
          fileInput.onchange = e => {
              e.preventDefault();
              const input = e.target;
              callback(multiple === true ? input.files : input.files[0])
          }  
      }

     return ( { Open } )
}