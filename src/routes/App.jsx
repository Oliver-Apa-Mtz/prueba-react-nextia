import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

import { createStore } from 'redux'
import { Provider } from 'react-redux'
  
import Login from '../pages/Login'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

import generalReducer from '../reducers/generalReducer'

const store = createStore(generalReducer)
  
const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Routes>
					<Route exact path="/" element={<Login/>} />
					<Route exact path="/home" element={<Home/>} />
					<Route path="*" element={<NotFound/>} />
				</Routes>
			</Router>
		</Provider>
	);
  }
  
  export default App;
  