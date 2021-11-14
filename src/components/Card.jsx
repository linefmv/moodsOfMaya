import moodsOfMaya from "../data/database"

const Card = () => {
    return(
      <>
        {moodsOfMaya.map(mood => 
          <div key={mood.id}>
            <img src={mood.pic} alt={mood.nameOfMood} />
            <p> Name of square  </p>
            <h2>{mood.nameOfMood}</h2>
           
            <p> Type of square</p>
            <h3>{mood.type}</h3>
            

          </div>
        )}
      </>
    )
  
  }
  export default Card
