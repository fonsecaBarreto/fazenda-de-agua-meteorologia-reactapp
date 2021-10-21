import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../../store/reducers/global/actions'
import { getRoutesList } from '../ROUTES'

const RouteTracker = (  ) =>{
    const dispatch = useDispatch()
    const { currentPage } = useSelector(state=>state.global)
    function MakeBread( routes, pathname, alias, breads=[]) {
        routes.forEach((r)=>{
            if(r.path === pathname){
                if(r.parent)
                    breads = MakeBread(routes, r.parent, null, breads);
                breads = [ ...breads , { value: { to: alias || r.path , path: r.path }, label: r.title }, ]
            }
        })
        return breads;
    }

    const use = (props) =>{

        const routes = getRoutesList()
        if(!props.title) return;

        const incomming_uri = `${props.location.pathname}${props.location.search}`
        const path = props.computedMatch.path

        var isParent= false;
        var isSame = false
        var breadCrumbs
        if(currentPage.breadCrumbs.length > 0 ){
            const last = currentPage.breadCrumbs[currentPage.breadCrumbs.length - 1];
            isParent= (last.value.path === props.parent)
            isSame = last.value.path === path
        }

        if(isSame){
            var clone = [ ...currentPage.breadCrumbs  ] || []
            clone.pop()
            breadCrumbs= [ ...clone, { value: { to: incomming_uri, path}, label: props.title } ]
        }
        else if(isParent){
            breadCrumbs = [ ...currentPage.breadCrumbs, { value: { to: incomming_uri, path}, label: props.title } ]
        }else{
            breadCrumbs = MakeBread(routes, path, incomming_uri);
        }
        dispatch(setCurrentPage({ title: props.title, breadCrumbs})) 
    }

    return ({ use })
}

export default RouteTracker


