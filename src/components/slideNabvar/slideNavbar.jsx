import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { openAudio, openComputation, openCelulares, closedAudio, closedComputation, closedCelulares, restartMenu } from '../../../store/slices/menuState/menuState';
import { ImHome } from "react-icons/im";
import { FaHandshake } from "react-icons/fa";






export const SlideNavbar = () => {

  const {computationState, celularesState, audioState} = useSelector(state => state.menuState)
  const dispatch = useDispatch()

  return (
    <nav className='bg-gray-950 fixed h-full w-64 mt-12 text-white'>

      <div className='fixed ml-8 mt-10 flex'>

        <ul>

          <div className=''>
            <p className=' text-4xl ml-2'>MERCADO</p>
            <p className=' text-4xl ml-12'>LIBRE</p>
            <FaHandshake className=' text-9xl ml-6'/>
          </div>
       
        <div className='flex items-center'>

 
          
       
              <Link to="inicio">
                <li className="flex items-center -ml-1 text-xl hover:text-blue-500 duration-300" onClick={() => dispatch(restartMenu())}>
                <ImHome className=' mr-3'/>
                  Inicio 
                </li>
              </Link>

        </div>


        <div className='flex items-center'>

          <FaPlus 
          className={`cursor-pointer hover:text-blue-500 duration-300 transform hover:rotate-90 `}
          onClick={() => !computationState ? dispatch(openComputation()) : dispatch(closedComputation())}
          />
       
              <Link to="computacion">
                <li className="flex items-center ml-3 text-xl hover:text-blue-500 duration-300" onClick={() => dispatch(restartMenu())}>
                  Computacion 
                </li>
              </Link>

        </div>


          {computationState && (
            <ul>

              <Link to="/computacion/audio">
                <div className='flex items-center'>
                  <SlArrowRight />
                  <li onClick={() => !audioState ? dispatch(openAudio()) : dispatch(closedAudio())}>
                    Audio
                  </li>
                </div>
                    { audioState && (
                      <ul>
                        <li className=' ml-6 flex items-center'>

                          Auriculares
                        </li>
                      </ul>
                    )}
                
              </Link>


              <Link to="/computacion/electronica">
                <div className='flex items-center'>
                  <SlArrowRight />
                    <li>
                      Electronica
                    </li>
                </div>
              </Link>

              <Link to="/computacion/video">
                <div className='flex items-center'>
                  <SlArrowRight />
                    <li>
                      Video
                    </li>
                </div>
              </Link>

            </ul>
          )}

  

          <div className={`flex items-center  `}>

            <FaMinus 
            className='cursor-pointer hover:text-blue-500 duration-300 transform hover:rotate-180' 
            onClick={() => !celularesState ? dispatch(openCelulares()) : dispatch(closedCelulares())}
            />

                <Link to="celulares">
                  <li className="flex items-center ml-3 text-xl hover:text-blue-500 duration-300 " onClick={() => dispatch(restartMenu())}>
                    Celulares
                  </li>
                </Link>

          </div>

          {celularesState && (
            <ul>

              <Link to="/celulares/iphone">
              <li>
                Iphone
              </li>
              </Link>

              <Link to="/computacion/Android">
              <li>
                Android
              </li>
              </Link>

              <Link to="/computacion/telefonos">
              <li>
                Telefonos
              </li>
              </Link>

            </ul>
          )}
   
        </ul>

      </div>

    </nav>
  )
}
