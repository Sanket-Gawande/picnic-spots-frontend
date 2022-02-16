import {useEffect , useState} from 'react'
import {NavLink , useNavigate} from 'react-router-dom'


// importing styling
import '../styles/navbar.scss'
function NavBar(){
  const history = useNavigate();

 const [state , setState] = useState(false)
 const [isLoggedIn, setIsLoggedIn] = useState(false)
 
 useEffect(() => {
   fetch('/api/isLoggedIn' , {method : 'post'}).then(textResponse => textResponse.json()).then(obj => { setIsLoggedIn(obj.isLoggedIn); console.log(obj)})
 } , [state])

 function tmenu(){
   setState(!state)
 } 
 
  //close menu on page load 
  const links = document.querySelectorAll('a')
  for (let listItem of links){
    listItem.onclick = ()=> {
    setState(false)

  }
}
useEffect(()=> {
  const menu = document.querySelector('.menus')
  if(state){
   menu.classList.add('menu-open')
  }
  else{
   menu.classList.remove('menu-open')
 }
}, [state] )

// log out functionality

async function  logout(){
const res = await fetch('/api/logout', {method:'post'})
const {status} = res.json();

if(status === 'destroyed' ) setIsLoggedIn(false)

}

 return(
    <>
        <header>
            <div className='header'>
            <h2 className="logo">Spots</h2>
            <ul className="menus menu-open">
            
              <NavLink to='/'>
                   <li>Home</li>
              </NavLink> 
              <NavLink to='/all-places'><li>All places</li> </NavLink> 
              <NavLink to='/users'> <li>Users</li></NavLink> 
              {isLoggedIn ?
              (<>
              <li className='a' onClick={()=> logout()}> Logout</li> 
              <NavLink to='/profile'> <li className='login-button'>Proifle</li></NavLink> 
              </>
              ) 
              :
              <NavLink to='/login'> <li className='login-button'>Login</li></NavLink>  
              }
            </ul>
            <span onClick={() => tmenu()}><i className="fa fa-align-right" ></i></span>
            </div>
        </header>
     {console.log('navbar rendered')}
    </>
     )
}

export default NavBar;