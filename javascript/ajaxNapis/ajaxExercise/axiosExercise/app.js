// const url = 'https://swapi.dev/api/people/1/';

// axios.get(https://swapi.dev/api/people/1/)
// .then(res=>{
//   const data = res.data;
//   console.log(data);
// })
// .catch(e=>console.log('Error...',e));


const getStarWarsPeeps = async function(id){
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(res.data);    
  } catch (error) {
    console.log('Error...',error);
  }
}

getStarWarsPeeps(1);
getStarWarsPeeps(2);
getStarWarsPeeps(3);