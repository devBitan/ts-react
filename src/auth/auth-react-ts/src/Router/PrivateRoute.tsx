// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';


// const PrivateRouter: React.FC = ({children:}) => {

//     const {state} = useLocation()
//     return state?.logged ? children : <Navigate to="/login"/>

    
// };

// export default PrivateRouter;

import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface PrivateRouteProps {
  children: ReactNode; // Especificamos que el prop `children` es de tipo ReactNode
}

const PrivateRouter: React.FC<PrivateRouteProps> = ({ children }) => {
  const { state } = useLocation();
  
  return state?.logged ? children : <Navigate to="/login" />;
};

export default PrivateRouter;
