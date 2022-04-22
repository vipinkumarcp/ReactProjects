import React,{useState} from "react";


function Nav() {

  const [shrink, changeshrink] = useState(false);
  const changeNavbar = () =>{
     if(window.scrollY >= 80){
        changeshrink(true);
     }
     else{
        changeshrink(false);
     }
  };
  window.addEventListener('scroll', changeNavbar);
    return (
        <div>
            <div id={changeNavbar ? 'navbar' : 'navbar'}>
                <a href="#default" id="logo">CompanyLogo</a>
                <div id="navbar-right">
                    <a class="active" href="#home">Home</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            </div>

        </div>
    );
}

export default Nav;