
import React from "react";
import "./class.css"
class App extends React.Component{
    render(){
        return(
            <div>
            <div id="gril">
            <h1>Class Based Components</h1>
            </div>
            <div id="helo">
                
                <thead>
                    <tr>
                        <th>s.no</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1.</td>
                        <td>Haritha</td>
                        <td>22</td>
                        <td>Tirupathi</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Vijay</td>
                        <td>25</td>
                        <td>Chittoor</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Rajesh</td>
                        <td>23</td>
                        <td>Rayachoti</td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>Bharath</td>
                        <td>21</td>
                        <td>Nellore</td>
                    </tr>
                    <tr>
                        <td>5.</td>
                        <td>Likitha</td>
                        <td>20</td>
                        <td>Kadapa</td>
                    </tr>
                </tbody>
            </div>
            </div>
        )
    }
}

export default App;