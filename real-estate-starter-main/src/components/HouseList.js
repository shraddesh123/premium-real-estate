import React, { useContext } from 'react';


import { HouseContext } from './HouseContext'
import House from './House'
import { Link } from 'react-router-dom'
import { ImSpinner2 } from 'react-icons/im'
const HouseList = () => {
  const { houses, loading } = useContext
    (HouseContext);

    if (loading) {
      return (
        <ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4x1 mt-[200px]'/>
      );
    }
     if (houses.lenght < 1) {
      return  <div className='text-center text-3x1 text-grsy-400 mt-48'>sorry nothing found</div>
     } 
    

  return <section className='mb-20'>
    <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
          {houses.map((house,index)=> {
             return(
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house}/>
              </Link>
             )
          })}
        </div>
    </div>
  </section>;
};

export default HouseList;
