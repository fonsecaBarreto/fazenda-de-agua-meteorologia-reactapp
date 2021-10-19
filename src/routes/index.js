import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
/* LAOUT */
import PrimaryLayout from '../layouts/PrimaryLayout';
/* DEPENDENCIES */
import UseLocationCallBack from '../components/utils/UseLocationCallBack'
import RouterHandler from './routerHandler'
import { ROOT_STRUCT, ADMIN_PAGES, BASIC_PAGES } from './PAGES_MANIFEST'
import { ROUTES } from './ROUTES'

import SignInPage from '../components/pages/Login/SignInPage'

function Routes({user}){

	const [ pathname, setPathname ] = useState('')
	const [ struct, setStruct ] = useState(()=> ROOT_STRUCT );
 	const { currentPage, getCurrentPage } = RouterHandler(struct)

	const RenderedPages = Object.keys(ROUTES).map((p,i)=>{
		const { path, componenet: Component } = ROUTES[p]
		return (
			<Route path={path} exact key={i}>  
				<Component> </Component>
			</Route>
		)
	});

	useEffect(()=>{ BuildLayout() },[ user ])
	useEffect(()=>{
		if(!pathname) return;
		getCurrentPage(pathname);
	},[ pathname, struct ])

	const BuildLayout = () =>{
		
		const struct= { ...ROOT_STRUCT }
		if(user){
			switch(user.role){
				case 0 :
					struct.pages =[ ...struct.pages, ...BASIC_PAGES ];
				;break;
				case 1 : 
					struct.pages =[ ...struct.pages, ...ADMIN_PAGES ]	
				;break;
				default: struct.pages =[ ...struct.pages ];break;
			}
		}
		setStruct(struct)
	}


	const locationChange = (location) =>{
		setPathname(location.pathname)
	}

	return ( 
		<Router>
			<UseLocationCallBack callback={locationChange}></UseLocationCallBack>   
			<Switch>
				<Route path="/" exact> <Redirect to="/inicio" /> </Route>
				<Route path="/admin" exact> <Redirect to="/admin/panel" /> </Route>
				<Route path="/login"> <SignInPage></SignInPage> </Route>
				
				<PrimaryLayout struct={ struct } currentPage={currentPage}>
					{ RenderedPages }
				</PrimaryLayout> 

				
			</Switch> 

		</Router>
	)
}

export default Routes

