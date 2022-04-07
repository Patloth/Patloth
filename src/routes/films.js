const films=[ {
    "id": 1,
    "name": "The Shining"
   }, {
    "id": 2,
    "name": "Incendies"
   }, {
    "id": 3,
    "name": "Rang de Basanti"
   }, {
    "id": 4,
    "name": "Finding Nemo"
   }]

   const allFilms=()=>{
       return films;
   }
   const indexFlims=(index)=>{
       const output=films.find((list)=>{
           return list.id==index
       })
       return output;
   }
   
   module.exports={allFilms,indexFlims}