function App(){
    return(
        <div>
            <label>Fullname:</label>
            <input type="text" placeholder="enter ur name"></input>
            <br></br><br/>
            <label>Email:</label>
            <input type="email" placeholder="enter ur email"></input>
            <br/><br/>
            <label>Password:</label>
            <input type="password"></input>
            <br/><br/>
            <label>Confirm Password:</label>
            <input type="password"></input>
            <br/><br/>
            <input type="submit" value="Save"></input>
        </div>
    )
}
export default App;