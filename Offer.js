const router = require('express').Router();

let Offer = require('../models/offersModel');

//adding driver
router.route('/').get((req, res) => {
    Offer.find()
        .then(Offer => res.json(Offer))
        .catch(err => res.status(400).json('Error: '+ err));
});
router.route('/add').post((req, res) => {
    const offerAmount = Number(req.body.offerAmount);
    const expireDate = Date.parse(req.body.expireDate);
    const Discription = req.body.Discription;
    const duration = req.body.duration;
  
    const newOffer = new Offer({
      offerAmount,
      expireDate,
      Discription,
      duration
    });
    newOffer.save()
    .then(() => res.json('Offer added !'))
    .catch (err => res.status(400).json('Error: ' + err))
});


//sithmi
  // router.route('/:id').delete((req, res) => {
  //   Offer.findByIdAndDelete(req.params.id)
  //     .then(() => res.json('Offer deleted.'))
  //     .catch(err => res.status(400).json('Error: ' + err));
  // });

//ghan
  router.route('/delete/:id').delete((req, res) => {
    Offer.findByIdAndDelete(req.params.id)
      .then(() => res.json('Offer deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  // router.route('/update/:id').post((req, res) => {
  //   Offer.findById(req.params.id)
  //     .then(Offer => {
  //       Offer.offerAmount = Number(req.body.offerAmount);
  //       Offer.expireDate = Date.parse(req.body.expireDate);
  //       Offer.Discription = req.body.Discription;
  //       Offer.duration = req.body.duration;
  //       Offer.save()
  //         .then(() => res.json('Offer updated!'))
  //         .catch(err => res.status(400).json('Error: ' + err));
  //     })
  //     .catch(err => res.status(400).json('Error: ' + err));
  // });
  
  // module.exports = router;



  router.route("/update/:id").put(async(req,res)=>{

    let offerId= req.params.offerId;
    const{offerAmount,expireDate,Discription,duration}= req.body; 

    const updateBoat={
      offerAmount,
      expireDate,
      Discription,
      duration,
    
      }

    const update=  await Offer.findByIdAndUpdate(offerId,updateOffer)
    .then(()=>{
        res.status(200).send({status:"Offer newly updated"})
    }).catch((error)=>{
        console.log(error);
        res.status(500).send({status:"Task Not Completed"});
    })
    
    
})





  //update specific id----------------------------------------------------------------------------------------------------
  router.route("/get/:offerId").get(async(req,res)=>{
    try{
        let offerId = req.params.offerId;
    const Data =await Offer.findById(offerId)
            .then((Data)=>{
                res.status(200).send({status:"offer fetch",Data})

    }).catch((error)=>{
        console.log(error);
        res.status(500).send({status:"error with get user",error:error});
    })
    }
    catch(error){
        console.log(error);
        res.status(500).send({status:"error with get user",error:error});
    }

    


});

  
  module.exports = router;