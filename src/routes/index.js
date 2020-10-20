const {Router} = require('express');
const router = Router();
// routes
const users = require ('../usuarios.json');
console.log(users);

router.get('/users',(req,res)=> {
    res.json(users);
});




module.exports = router;
