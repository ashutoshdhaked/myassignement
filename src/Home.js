import Header from './Header';
import {Outlet} from 'react-router-dom';
const Home = ()=>{
    return(
//         <div> 
//     {  data.map((item,index)=>{
//         return(
//             <div key={index}>
//             Hello this is the Home component   :{item._id}
//              name : { item.name}
//              email : {item.email}
//             <button>delete</button>
//             <button>update</button>
//             </div>

//         )
//     })
//  }
//         </div> 
   
        <>  
           <Header/>
           <Outlet/>
        </>


    )
}
export default Home;