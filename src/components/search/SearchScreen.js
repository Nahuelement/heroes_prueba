import React,{ useMemo } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { HeroeCard } from '../heroes/HeroeCard'
import { useFormset } from '../hooks/useForm'
import { getHreoesByName } from '../../selectors/getHreoesByName'





export const SearchScreen = ({history}) => {

    const location = useLocation()
    const {q = ''} = useMemo(() => queryString.parse(location.search), [location])

    
    const [formValues, handleInput] = useFormset({
        searchText:q

    })
    const {searchText} = formValues
    
    const heroesFilter = useMemo(() => getHreoesByName(q), [q])

    const handleSearch = (e) => {
        e.preventDefault()
        history.push(`?q=${searchText}`)
        
        
    }

    return (
        <div>
            <h1>Search</h1> 
            <hr/>
            <div className="row">
                <div className="col-5">
            <form
            onSubmit = {handleSearch}
            >

                <input 
                className="form-control"
                type="text"
                placeholder="Search Heroe" 
                autoComplete = 'off'
                name = 'searchText'
                value = {searchText}
                onChange = {handleInput}
                />
                <button 

                type="submit"
                className="btn m-1 btn-block btn-outline-primary">
                    Search..
                </button>



            </form>


                </div>
                <div className="col-7">
                    <h3>Result</h3>
                    <hr/>

                    {
                        (q==='') 
                        &&
                         <div className = 'alert alert-info'>
                             Search HeroeCard
                        </div>
                    }
                                        {
                        (q!=='' & heroesFilter.length ==0)  
                        &&
                         <div className = 'alert alert-dismiss'>
                             Dont exist to heroes
                        </div>
                    }

                    {
                        heroesFilter.map(heroe=> (
                            <HeroeCard
                            key = {heroe.id}
                            {...heroe}
                            />
                            )
                            )

                    }




                    

                </div>




            </div>

        
            
        </div>
    )
}
