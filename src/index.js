import ReactDom from 'react-dom'
import App from "./App";
import { UserContextProvider } from './auth/auth';

ReactDom.render( <UserContextProvider><App/></UserContextProvider> , document.querySelector("body") );
