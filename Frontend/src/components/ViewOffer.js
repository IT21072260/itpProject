import axios from "axios";
import React,{ useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



function View(){

    const [offer, setOffers] = useState([]);
    const Navigate=useNavigate()

 
  useEffect(() => {
    function getOffers() {
      axios
        .get("http://localhost:8090/offer/")
        .then((res) => {
          setOffers(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getOffers();
  }, []);


  
    function getOffers(){
      axios.get("http://localhost:8090/offer/").then((res)=>{
        setOffers(res.data);
  
      }).catch((err)=>{
        console.log(err.message)
        alert(err.message)
      })
    }
  
   
    const deleteOffer = (offerId) => {
        axios
          .delete(`http://localhost:8090/offer/delete/${offerId}`)
          .then((res) => {
            alert(`deleted successfully`);
            window.location.reload(false);
          })
          .catch((err) => {
            alert(err);
          });
      };
    

      const UpdateOffer=(offerId)=>{

      //const update=(offerId)=>{

        console.log("error")
         Navigate('updated',{ state: { id: offerId } }
         )
        
    
      }
   



    return(
<center>
        <div>
           

          <br></br>
          <br></br>
            <table border = "2" width="95%">

        <thead>
            <tr>
            <th >offerAmount</th>
              <th >expireDate</th>
              <th >Discription</th>
              <th >duration</th>
             
              <th >Remove</th>
              <th >Update</th>
              
            </tr>
            </thead>

            <tbody>
            {offer.map((item) => (
              <tr>
                <td>{item.offerAmount}</td>
                <td>{item.expireDate}</td>
                <td>{item.Discription}</td>
                <td>{item.duration}</td>
                
                <td>

                  <button onClick={() => deleteOffer(item._id)}>Delete</button>
                </td>

                <td>
                <button onClick={() => UpdateOffer(item._id)}>Update</button>

                 
                </td>

                {/* <td>
                <button id="btn" onClick={() => update(item._id)}>Update</button>

                {}
                </td> */}

              
              </tr>
            ))}
            </tbody>
        </table>
        </div>
        </center>
    )
            
            }

export default View;