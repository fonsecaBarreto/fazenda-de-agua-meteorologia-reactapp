import React, { useEffect, useState } from 'react'

const INITIAL_CURRENT_PAGE = {
    title: "",
    breadCrumbs: [  ],
    icon: null
}

const RouterState = ( pathname, routes ) =>{
    
    const [ currentPage, setCurrentPage ] = useState({ ...INITIAL_CURRENT_PAGE })

    useEffect(()=>{
        if(!pathname || !routes) return;
        const page = searchFor(pathname);
        if(page){
            setCurrentPage(page)
        }
    }, [pathname]);


    function MakeBread( pathname, breads=[] ) {

        routes.map((r,i)=>{
            if(r.path == pathname){
                breads = [ { value: r.path, label: r.title }, ...breads ]
                if(r.parent){
                    breads = MakeBread(r.parent, breads) 
                }
            }
        })
        return breads;
    }

    function searchFor(pathname){

        var page = null
        routes.map((r,i)=>{
            if(r.path == pathname){
                page = {
                    title: r.title || "Sem nome",
                    breadCrumbs: MakeBread(pathname),
                    icon: null
                } 
            }
        })
    
        return page
    }

    return {  currentPage }
 
}

export default RouterState


