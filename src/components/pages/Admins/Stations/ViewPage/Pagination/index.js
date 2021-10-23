import React, { useState, useEffect } from 'react';
import ButtonsNavidator from './ButtonsNavigator'
import Table from './Table'
import { useHistory } from 'react-router-dom'

const INITIAL_MEASUREMENT_STATION = {
     page_total: 0,
     page_index: 0,
     data: []
}

const MeasurementsPagination =  ({measurements, ...rest}) =>{
     const history = useHistory();
     const [ config, setConfig ] = useState({ ...INITIAL_MEASUREMENT_STATION});

     useEffect(()=>{
          if(!measurements) return
          const { total, page_index, page_limit, data } = measurements;
          const page_total = Math.ceil(total / page_limit);
          setConfig({page_total, page_index, data})  
     },[measurements])

      const changePage = (index) =>{
          history.push({
               pathname: history.location.pathname ,
               search: "?p=" + index
           })
     }

     const { page_total, page_index, data } = config;

     return (
          <React.Fragment>
               <ButtonsNavidator page_index={page_index} page_total={page_total}  onClick={changePage} ></ButtonsNavidator>
               <Table measurements={data}/> 
               <ButtonsNavidator page_index={page_index} page_total={page_total} onClick={changePage}></ButtonsNavidator>
          </React.Fragment>
       
     )
}


export default MeasurementsPagination