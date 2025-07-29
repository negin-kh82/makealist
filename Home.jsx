import  { useEffect , useState } from "react"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Home = () => {
  const[data, setData]=useState([])
  const navigate=useNavigate();
  useEffect(()=>{
    axios.get('http://localhost:8000/users')
    .then(res => setData(res.data))
    .catch(err=> console.log(err));
      
    },[]);

    const handleDelete=(id)=>{
      const confirm=window.confirm ("are you sure?");
      if (confirm){
        axios.delete('http://localhost:8000/users'+id)
        .then(res =>{
          location.reload( );

        }).catch (err=>console.log(err));

      }
      

    }

  return (
    <div className="d-flex flex-column justify-content-center align-item-center bg-light vh-100">
        <h1 style={{textAlign:"center"}}>LIST </h1>
        <div className="w-7 rounded bg-white border shadow p-5">
          <div className="d-flex justify-content-end"><Link to="/create" className="btn btn-success me-2">Add +</Link> </div>
          <table className="table table-bordered ">
            <thead>
              <tr>
                 <th>id</th>
                 <th>name</th>
                 <th>phone</th>
                 <th>action</th>
                 <th>email</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((d,i)=>(
                  <tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{d.phone}</td>
                    <td>{d.action}</td>
                    <td>{d.email}</td>
                    <td>
                      <Link to={`/read/${d.id}`} className="btn btn-sm btn-info me-2 p-2">Read</Link>
                      <Link to={`/update${d.id}`} className="btn btn-sm btn-primary me-2 p-2">Edit</Link>
                      <button onClick={ e=>handleDelete(d.id)} className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
           
          </table>

        </div>
        </div>
    
  )
}

export default Home;