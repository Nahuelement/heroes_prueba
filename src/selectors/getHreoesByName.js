
import { heroes } from '../data/heroes'



export const getHreoesByName = (name = '') => {

    if(name ===''){
        return []
    }

    name = name.toLowerCase()

    return heroes.filter(({superhero }) => superhero.toLocaleLowerCase().includes(name))

    
}
