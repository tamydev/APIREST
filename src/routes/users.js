const{Router}= require ('express');
const router = Router ();

router.function* ('/',(req, res)=> {
    res.send ('users');

});


module.exports =router;