import  './style.css'

export const CommonPool = ({children, sm=1, md=1, lg=2 }) => {
     return (
          <div className={`common-pool sm-${sm}-size md-${md}-size lg-${lg}-size`}>
               { children}
          </div>
     )
}

export default CommonPool