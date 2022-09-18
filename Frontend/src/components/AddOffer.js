import React,{useState} from "react";
import axios from "axios";

export default function AddOffer(){

    const [offerAmount, setofferAmount] = useState("");
    const [expireDate,setexpireDate] = useState("");
    const [Discription,setDiscription] = useState("");
    const [duration,setduration] = useState("");

    function sendData(e){
        e.preventDefault();

        const newOffer = {

          offerAmount,
          expireDate,
          Discription,
          duration

        }


        axios.post("http://localhost:8090/offer/add",newOffer).then(()=>{
            alert("Offer Added")
        }).catch((err)=>{
            alert(err)
        })

    }

    return(

        <div className="container">
        
        <form onSubmit={sendData}>

  <div class="form-group">
    <label for="offerAmount">offerAmount</label>
    <input type="Number" className="form-control" id="offerAmount" placeholder="Enter the offerAmount" 
    onChange={(e)=>{
        setofferAmount(e.target.value);
    }}/>
  </div>

  <div className="form-group">
    <label for="expireDate">expireDate</label>
    <input type="text" className="form-control" id="expireDate" placeholder="Enter the offer expireDate" 
    onChange={(e)=>{
        setexpireDate(e.target.value);
    
    }}/>
  </div>

  <div className="form-group">
    <label for="Discription">Discription</label>
    <input type="text" className="form-control" id="Discription" placeholder="Enter the boat Discription" 
     onChange={(e)=>{
        setDiscription(e.target.value);
    }}/>
  </div>

  <div className="form-group">
    <label for="duration">duration</label>
    <input type="text" className="form-control" id="duration" placeholder="Enter the boat duration" 
     onChange={(e)=>{
        setduration(e.target.value);
    }}/>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>    
</div>
       

    )


}