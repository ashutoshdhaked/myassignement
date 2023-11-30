import { useNavigate } from "react-router-dom";
const Header = ()=>{
 const Navigate = useNavigate();

    return(
        <div>
               This is the Header Part Displayed 
                <div>
                    <button onClick={()=> {Navigate("/")}}>All Student</button>
                    <button onClick={()=>{Navigate("/create")}}> Create Student </button>
                </div>
        </div>
    )
}

export default Header;