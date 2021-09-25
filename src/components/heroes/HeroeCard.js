
import { Link } from 'react-router-dom'

export const HeroeCard = ({
    id,
    superhero, 
    alter_ego,
    first_appearance,
    characters
}) => {
    

    return (
        
        <div className="card ms-3" style={{display: 'inline-block',   maxWidth: '21rem',position:'relative' ,padding:'5px',margin:'10px'}} key= {id}>
        <div className="row no-gutters">
            <div className="col-md-6 animate__fadeInLeft" style={{display: 'flex',alignSelf:'center'}}>
            <img src={`./assets/heroes/${id}.jpg`} className="card-img-top " alt={superhero}  />
            </div>
            <div className="col-md-6 animate__fadeInRight">
                <div className="card-body">

                    <h5 className="card-title" >{superhero}</h5>
                    
                    <p className="card-text">{alter_ego}</p>

                    {alter_ego!==characters && 

                        <p className="card-text"> 
                        {Array(characters.split(','))[0].filter(caract =>caract!==alter_ego)}
                        </p>
                        
                    }
                    <br />
                    <br />
                    <p className="card-text">
                        <small className="text-muted">{first_appearance}</small>
                    </p>
                    <br />
                    <br />
                    <Link to={`/heroe/${id}`} >Mas...</Link>

                </div>
            
            
            

            
        </div>
        </div>
        </div>
      )
}
