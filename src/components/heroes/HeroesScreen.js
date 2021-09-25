import { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroesById'



export const HeroesScreen = ({history}) => {

    const {heroesId} = useParams()// extrae todo los valores que vienen por url 

    const heroe = useMemo(() => getHeroesById(heroesId), [heroesId])

    if(!heroe) {
        return <Redirect to="/" />
    }
    const handleReturn = () => {

    if(history.length <=2) {
        history.push('/');
    }else{
        history.goBack();
    }


}
    const {
        superhero, 
        alter_ego,
        publisher,
        first_appearance,
        characters
    } = heroe;

    let charactersUnique;
    if (Array(characters.split(','))[0].length > 1) {
        charactersUnique =  Array(characters.split(','))[0].filter(caract => caract !==alter_ego)

    }else{
        charactersUnique =  characters
    }
   
                
                     
                    
  

    return (
        
        <div className="row mt-5">

            <div className="col-4">
                <img 
                className="img-thumbnail animate__animated animate__fadeInLeft"
                src={`../assets/heroes/${heroesId}.jpg`} 
                alt = {superhero}
                />

            </div>
            <div className='col-8 mt-5 animate__animated animate__fadeInRight' >
                
                <h2 style = {{ textAlign:'center'}}> {superhero} </h2>
                <ul className='list-group list-group-flush'style = {{ textAlign:'center',margin:'30px'}}>
                    <li className='list-group-item' style = {{ padding:'10px', margin:'10px'}}><b>Alter Ego:</b> {alter_ego}</li>
                    <li className='list-group-item' style = {{ padding:'10px', margin:'10px'}}><b>First Appearance:</b> {first_appearance}</li>
                    <li className='list-group-item' style = {{ padding:'10px', margin:'10px'}}><b>Publisher:</b> {publisher}</li>

                    </ul>
                <h4 style = {{ padding:'10px', margin:'10px',textAlign:'center'}}>Characters</h4>
                <h6 style = {{padding:'10px', margin:'10px', textAlign:'center'}} >{charactersUnique}</h6>
                <br/>
                <br/>
                <button 
                    className = 'btn btn-outline-info' 
                    style = {{display:'flex',marginLeft:'auto',marginRight:'auto',justifyContent:'center',width:'200px'}}
                    onClick = {handleReturn}
                    
                    >

                    Return


                </button>




                


            </div>

            
            
        </div>
    )
}
