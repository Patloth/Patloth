const express = require('express');
const movies = require('./movies')
const films = require('./films')

const router = express.Router();

router.get("/movies",(req,res)=>{
    const list=movies.movie()
    res.send(list)
})

router.get('/movies/:indexNumber', function (req, res) {
         const number=req.params.indexNumber;
         const index=movies.movieIndex(number)
         
         if(number>=0 && number<=3){
            res.send(index)
        }else{
            res.send(" Use a valid index ")
        }
        
            
});

router.get("/films",(req,res)=>{
        const film=films.allFilms();
        res.send(film)
})
router.get("/films/:filmId",(req,res)=>{
     const index=req.params.filmId;
    const filmInd=films.indexFlims(index);
    if(index>=0 && index<=3){
        res.send(filmInd)
    }else{
        res.send(" Use a valid index ")
    }
    
})




module.exports = router;
// adding this comment for no reason