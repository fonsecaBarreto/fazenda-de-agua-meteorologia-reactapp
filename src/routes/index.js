import React, {useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
/* LAOUT */
import PrimaryLayout from '../layouts/PrimaryLayout';
/* DEPENDENCIES */
import SignInPage from '../components/pages/Public/Login/SignInPage'
import { getRoutesList} from './ROUTES'
import UseLocationCallBack from '../components/utils/UseLocationCallBack'
import RouterHandler from './routerHandler'
import Guard from './RouteGuard'

function Routes({user}){

	const RenderedPages = getRoutesList().map((r,i)=>{
		const { path, access, component: Component, role } = r;
		return (
			<Guard path={path} exact key={i} access={access}>  
				<Component> </Component>
			</Guard> 
		)	 
	});

	const [ pathname, setPathname ] = useState('');
 	const { currentPage } = RouterHandler(pathname, getRoutesList()) 

	const locationChange = (location) =>{ setPathname(location.pathname) }

	return ( 
		<Router>

			<UseLocationCallBack callback={locationChange}></UseLocationCallBack>   
		
			<Switch>
				<Route path="/" exact> <Redirect to="/inicio" /> </Route>
				<Route path="/admin" exact> <Redirect to="/admin/dashboard" /> </Route>
				<Route path="/login"> <SignInPage></SignInPage> </Route> 

				<PrimaryLayout currentPage={currentPage}>  
					<Switch>
						{ RenderedPages }
					</Switch>
				</PrimaryLayout> 
		

			</Switch> 

		</Router>
	)

}
export default Routes
