import React, { useState } from 'react'
import Card from './Card'
import SkeletonCard from './SkeletonCard'

function ContactList({contacts,dispatch}) {
    const [loading,setloading] = useState(false)

    window.onscroll = function() {  // On scroll Event listener for loading more data
        const difference = document.documentElement.scrollHeight - window.innerHeight;
        const scrollposition = document.documentElement.scrollTop; 
        if (difference - scrollposition <= 2 && !loading) {
            setloading(true);
            const timer = setTimeout(()=>{
                dispatch({type:"LOAD_MORE"})
                setloading(false);
            },1000) // 1 sec timer 
        }   
    }

  return (
    <>
    <ul className='list'>
        {contacts.map((contact,index)=>{
            return <Card contact = {contact} key={index} />
        })}
    </ul>
     {loading && <SkeletonCard/>}
    </>
  )
}

export default ContactList
