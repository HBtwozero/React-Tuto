import React from 'react'
import './search-box.styles.css'

export const SearchBox =({placeholder, handleChange})=> {
        return(
            <input 
            className='search'
            type='search'
            placeholder={placeholder} 
            onChange ={handleChange}
            // onChange={e => 
            //   //set Sate is asynchronous function
            // this.setState({searchField: e.target.value})
            // //console.log(this.state) 
            // // console.log(e.target.value)
            // }
            />
        )
}