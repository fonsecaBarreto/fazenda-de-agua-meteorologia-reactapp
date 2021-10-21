import React, {useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
/* LAOUT */
import PrimaryLayout from '../layouts/PrimaryLayout';
/* DEPENDENCIES */
import SignInPage from '../components/pages/Public/Login/SignInPage'
import { getRoutesList} from './ROUTES'
import Guard from './RouteGuard'

function Routes(){

	const RenderedPages = getRoutesList().map((r,i)=>{
		const { path, access, component, ...rest } = r;
		return ( <Guard {...rest} path={path} exact key={i} access={access} component={component}/> )	 
	});

	return ( 
		<Router>
		
			<Switch>
				<Route path="/" exact> <Redirect to="/inicio" /> </Route>
				<Route path="/admin" exact> <Redirect to="/admin/dashboard" /> </Route>
				<Route path="/login"> <SignInPage></SignInPage> </Route> 

				<PrimaryLayout>  
					<Switch>
						{ RenderedPages }
					</Switch>
				</PrimaryLayout> 
	
			</Switch> 

		</Router>
	)

}
export default Routes
