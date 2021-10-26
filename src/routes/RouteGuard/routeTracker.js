import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../../store/reducers/global/actions'
import { getRoutesList } from '../ROUTES'

const RouteTracker = (  ) =>{

    const dispatch = useDispatch()
    const { currentPage } = useSelector(state=>state.global)

    function StackRoutes( pathname, alias, breads=[]) {
        getRoutesList().forEach((r)=>{
            if (r.path === pathname ) {
                if(r.parent) 
                    breads = StackRoutes(r.parent, null, breads);
                breads = [ ...breads , MakeBreadCrumbs(r.title, alias, r.path) ];
            }
        })
        return breads;
    }

    function MakeBreadCrumbs (label, to, path){
        return ( { label: label,  value: { to: to || path, path } } )
    }

    const use = (props) =>{
        
        const to = `${props.location.pathname}${props.location.search}`
        const path = props.computedMatch.path
        var breadCrumbs = currentPage.breadCrumbs || [];

        if(breadCrumbs.length === 0 ){
            breadCrumbs = StackRoutes(path, to, []) 
        }else{
            var isParentOrSame = breadCrumbs.indexOf(breadCrumbs.find(b=>(b.value.path ===path)))
            if(isParentOrSame > -1)
                breadCrumbs = breadCrumbs.filter((b,i)=> i < isParentOrSame); 

            breadCrumbs= [ ...breadCrumbs, MakeBreadCrumbs(props.title, to, path) ] 
        }


      /*   breadCrumbs= [ ...breadCrumbs, MakeBreadCrumbs(props.title, to, path) ]
 */
       /*  }else{
            var isParent= false;

            var isParent = breadCrumbs.find(b=>(b.value.path ===path))

            breadCrumbs = breadCrumbs.filter((b,i)=>i < breadCrumbs.indexOf(isParent))
            
            const isSame = breadCrumbs[breadCrumbs.length - 1]?.value.path === path;
            
            if(isParent || isSame) breadCrumbs.pop()
            if( !isParent ){
                breadCrumbs= [ ...breadCrumbs, MakeBreadCrumbs(props.title, to, path) ]
            }
        }
 */
        dispatch(setCurrentPage({ title: props.title || "Sem titulo", breadCrumbs})) 
    }

    return ({ use })
}

export default RouteTracker


