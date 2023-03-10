import EMPTable from "./employeetable";
import EmpForm from "./EmpForm";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
function App(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<EMPTable/>}/>
                    <Route path="/EmpForm" element={<EmpForm/>}/>
                    

                </Routes>
            </Router>
        </div>
    )
}
export default App;