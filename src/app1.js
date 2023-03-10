import React , {useState} from 'react';
import Navbar from './components/Navbar';
import Amazon from './components/Amazon';
import Cart from './components/Cart';
import './styles/amazon.css';
import "./app1.css"
import { BiListUl,BiPlus,BiCart } from "react-icons/bi";
import list from './data';
//import { BsFillStarFill } from "react-icons/bs";

const App1 = () => {
	const [show, setShow] = useState(true);
	const [cart , setCart] = useState([]);
	const [warning, setWarning] = useState(false);
	 //const[filter,setFilter]=useState()
	// const Search=()=>{
	// 	const searchText=(event)=>{
	// 		setFilter(event.target.value);
	// 	}
	// 	let dataSearch=Data.cardData.filter(item=>{
	// 		return object.keys(item).some(key=>{
	// 			item[key].toString().toLowerCase().includes(toString().toLowerCase())
	// 		})
	// 	})
	// }

	const handleClick = (item)=>{
		let isPresent = false;
		cart.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
		if (isPresent){
			setWarning(true);
			setTimeout(()=>{
				setWarning(false);
			}, 2000);
			return ;
		}
		setCart([...cart, item]);
	}

	const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}

  return (
	
	<React.Fragment>
		<div id="up">
            <h1><BiListUl/></h1>
            <h4 id="h">Flipkart</h4>
            <h1 id="r"><BiPlus/></h1>
            <h1><BiCart/></h1>
            <h4 id="a">Login</h4>
            <input type="text" placeholder="    search for products,brands and more"  ></input>
			{/* {
				
				list.filter((val) => {
					if(filter===""){
						return val;
					}
					else if(val.title.toLowerCase().includes(filter.toLowerCase())){
						return val;
					}
					return true;
				})
				.map((val)=>{
					return(
						<div key={val.id}>
							<img src={val.img} alt=""/>
							<h3>{val.title}</h3>
							<p>{val.price}</p>
							<p>{val.author}</p>
						</div>
					)
				})
			} */}
			
			
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
            {/* <img src="https://th.bing.com/th/id/OIP.0_18zt4k6RGSKl018fac2wHaEH?w=319&h=180&c=7&r=0&o=5&pid=1.7" alt="" height="400px" width="100%"></img> */}
          </div>
		<Navbar size={cart.length} setShow={setShow} />
		{
			show ? <Amazon handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
		}
		{
			warning && <div className='warning'>Item is already added to your cart</div>
		}
	</React.Fragment>
  )
}

export default App1;