import React, { useEffect, useState } from 'react'

const INITIAL_CURRENT_PAGE = {
    title: "",
    breadCrumbs: [  ],
    icon: null
}

const RouterState = ( struct ) =>{
    
    const [ currentPage, setcurrentPage ] = useState({ ...INITIAL_CURRENT_PAGE })

    function getCurrentPage(pathname){
       var page = searchFor(pathname, struct);
       setcurrentPage(page)
    }
  
    function searchFor(pathname, struct, breads =[]){

        breads = [ ...breads, MakeBread(struct) ]

        if(!struct.pages) {
            if( ( `${struct.path}${ pathname.endsWith("/") ? "/" : "" }` ) === pathname ){
                breads = [ ...breads, MakeBread(struct) ]
                return obtainPageData(struct, breads)
            }
        }else{
            for (let a of struct.pages){
                const innerPage = searchFor(pathname, a, breads);
                if(innerPage){
                    breads = [ ...breads, MakeBread(a) ]
                    return obtainPageData(innerPage, breads);
                }
            } 
        }
            
        return null
    }

    function obtainPageData(r, breads){
        var page = {
            title: r.title,
            breadCrumbs: breads || [],
            icon: r.icon || null
        }   
        return page
    }

    function MakeBread(v) {
        const value = v.path || (v.pages.length > 0 ?  v.pages[v.default || 0].path : '');
        const label = v.title;
        return { value, label }
    }


    return {  currentPage, getCurrentPage }
 
}

export default RouterState


