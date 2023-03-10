
import { BiListUl,BiPlus,BiCart } from "react-icons/bi";
import { BsFillStarFill } from "react-icons/bs";
import "./flipkarthome.css"
function Home(){
    return(
        <div>
        <div id="up">
            <h1><BiListUl/></h1>
            <h4 id="h">Flipkart</h4>
            <h1 id="r"><BiPlus/></h1>
            <h1><BiCart/></h1>
            <h4 id="a">Login</h4>
            <input type="text" placeholder="    search for products,brands and more"></input>
          </div>
          <div id="down">
            <div>
            <img src="https://th.bing.com/th/id/OIP.6Ds_8M7uHSxCquMYooNv8wHaEK?w=280&h=180&c=7&r=0&o=5&pid=1.7" alt="MOBILES"></img>
            <center><h5>MOBILES</h5></center>
            </div>
            <div>
                <img src="https://th.bing.com/th/id/OIP.tu1ugnF9frWTK6ILIZhXBQHaE8?w=272&h=182&c=7&r=0&o=5&pid=1.7" alt="FASHION"></img>
                <center><h5>FASHION</h5></center>
            </div>
            <div>
                <img src="https://th.bing.com/th?q=Electronic+Appliances&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" alt="appliances" height="190px"></img>
                <center><h5>APPLIANCES</h5></center>
            </div>
            <div>
                <img src="https://th.bing.com/th?q=Computers+and+Electronics&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" alt="electroics"  height="190px"></img>
                <center><h5>ELECTRONICS</h5></center>
            </div>
            <div>
                <img src="https://th.bing.com/th/id/OIP.wMGShJGrEXwyNRaH7fWXLgHaE7?w=271&h=180&c=7&r=0&o=5&pid=1.7" alt="home"></img>
                <center><h5>HOME</h5></center>
            </div>
            <div>
                <img src="https://th.bing.com/th/id/OIP.ahW6YvI-o1jqJzgs1gratgHaEK?w=219&h=180&c=7&r=0&o=5&pid=1.7" alt="furniture"></img>
                <center><h5>FURNITURE</h5></center>
                
            </div>
          </div>
          <div>
            <img src="https://th.bing.com/th/id/OIP.0_18zt4k6RGSKl018fac2wHaEH?w=319&h=180&c=7&r=0&o=5&pid=1.7" alt="" height="400px" width="100%"></img>
          </div>
          <div id="left">
           <div className="app">
            <img src="https://th.bing.com/th/id/OIP.YnCujCs5FtnNa97KRX0MfwHaGk?w=214&h=190&c=7&r=0&o=5&pid=1.7" alt=""></img>
            <h2>Apple iphone 13<br/>(stright,128 GB)</h2>
            <h3 id="star"><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/></h3>
            <h4>$60,999</h4>
            <p>Free delivery</p>
            <button>ADD CART</button>
           </div>
           <div className="app">
            <img src="https://th.bing.com/th/id/OIP.MGZnteO1WRsvSqkZrnKvrwHaHa?w=170&h=180&c=7&r=0&o=5&pid=1.7" alt=""></img>
            <h2>OOPO f11<br/>(stright,128 GB)</h2>
            <h3 id="star"><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/></h3>
            <h4>$20,999</h4>
            <p>Free delivery</p>
            <button>ADD CART</button>
           </div>
           <div className="app">
            <img src="https://th.bing.com/th/id/OIP.R_j0fYLodQMsLeuw3tV4XwHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7" alt=""></img>
            <h2>OOPO A93<br/>(stright,128 GB)</h2>
            <h3 id="star"><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/></h3>
            <h4>$25,999</h4>
            <p>Free delivery</p>
            <button>ADD CART</button>
           </div>
           <div className="app">
            <img src="https://th.bing.com/th/id/OIP.YLjtFyDSAjghN4Pswin_nwHaHa?w=185&h=185&c=7&r=0&o=5&pid=1.7" alt=""></img>
            <h2>vivo<br/>(stright,128 GB)</h2>
            <h3 id="star"><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/></h3>
            <h4>$11,999</h4>
            <p>Free delivery</p>
            <button>ADD CART</button>
           </div>
           </div>
           <div id="right">
           <div className="app">
            <img src="https://th.bing.com/th/id/OIP.kyaMJi-qdVFFjGBAgRBy8gHaHa?w=177&h=185&c=7&r=0&o=5&pid=1.7" alt=""></img>
            <h2>Poco<br/>(stright,128 GB)</h2>
            <h3 id="star"><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/></h3>
            <h4>$14,999</h4>
            <p>Free delivery</p>
            <button>ADD CART</button>
           </div>
           <div className="app">
            <img src="https://th.bing.com/th/id/OIP.0GT25T34ILyyfWiijNWjKQHaHa?w=208&h=208&c=7&r=0&o=5&pid=1.7" alt=""></img>
            <h2>Samsung<br/>(stright,128 GB)</h2>
            <h3 id="star"><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/></h3>
            <h4>$21,999</h4>
            <p>Free delivery</p>
            <button>ADD CART</button>
           </div>
           <div className="app">
            <img src="https://th.bing.com/th/id/OIP.krfOfpSyiTDsUIPbmcWxYQHaHa?w=211&h=211&c=7&r=0&o=5&pid=1.7" alt=""></img>
            <h2>Realme<br/>(stright,128 GB)</h2>
            <h3 id="star"><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/></h3>
            <h4>$20,999</h4>
            <p>Free delivery</p>
            <button>ADD CART</button>
           </div>
           <div className="app">
            <img src="https://th.bing.com/th/id/OIP.1CfCf9ztJ4_yL0VOhQVJmwHaHa?w=214&h=214&c=7&r=0&o=5&pid=1.7" alt=""></img>
            <h2>Moto<br/>(stright,128 GB)</h2>
            <h3 id="star"><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/></h3>
            <h4>$9,999</h4>
            <p>Free delivery</p>
            <button>ADD CART</button>
           </div>
           </div>
           <div id="center">
           <div className="app">
            <img src="https://th.bing.com/th/id/OIP.kVnWFddQowcrRRBuOpgtAgHaHa?w=206&h=206&c=7&r=0&o=5&pid=1.7" alt=""></img>
            <h2>Oneplus<br/>(stright,128 GB)</h2>
            <h3 id="star"><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/></h3>
            <h4>$14,999</h4>
            <p>Free delivery</p>
            <button>ADD CART</button>
           </div>
           <div className="app">
            <img src="https://th.bing.com/th/id/OIP.Hm3Z4iECbiO9lDiT2y4g5AHaIO?w=177&h=196&c=7&r=0&o=5&pid=1.7" alt=""></img>
            <h2>IQ<br/>(stright,128 GB)</h2>
            <h3 id="star"><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/></h3>
            <h4>$14,999</h4>
            <p>Free delivery</p>
            <button>ADD CART</button>
           </div>
           <div>
            <img src="https://th.bing.com/th/id/OIP.0G464cU_48YVtH-ModvQigHaJH?w=152&h=187&c=7&r=0&o=5&pid=1.7" alt=""></img>
            <h2>Redme<br/>(stright,128 GB)</h2>
            <h3 id="star"><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/></h3>
            <h4>$14,999</h4>
            <p>Free delivery</p>
            <button>ADD CART</button>
           </div>
           <div>
            <img src="https://th.bing.com/th/id/OIP.UylaMFeEJd599fdIT_SL2gHaHa?w=184&h=185&c=7&r=0&o=5&pid=1.7" alt=""></img>
            <h2>Nokia<br/>(stright,4 GB)</h2>
            <h3 id="star"><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/></h3>
            <h4>$5,999</h4>
            <p>Free delivery</p>
            <button>ADD CART</button>
           </div>
            </div>
        </div>
    )
}
export default Home;