import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Computacion } from '../Computacion/computacion'
import { Electronica } from '../Computacion/Elec-Audio-Video/ElectronicaProducts/electronica'
import { Audio } from '../Computacion/Elec-Audio-Video/AudioProducts/audio'
import { Video } from '../Computacion/Elec-Audio-Video/VideoProducts/video'
import { ElecAudioVideo } from '../Computacion/Elec-Audio-Video/elec-audio-video'
import { Celulares } from '../CelularesYTelefonos/celulares'

import { Inicio } from '../Home/Inicio'

export const CategoryRoute = () => {
  return (
    <div className=' fixed ml-72 mt-20 mr-3 h-5/6'>
    <Routes>


        <Route path="/electronicaAyB" element={ <ElecAudioVideo /> }/>
        <Route path="/computacion" element={ <Computacion /> }/>
        <Route path="/electronica" element={ <Electronica /> }/>
        <Route path="/audio" element={ <Audio /> }/>
        <Route path="/video" element={ <Video /> }/>
        <Route path="/celulares" element={ <Celulares /> }/>
        <Route path="/inicio" element={ <Inicio /> }/>

        <Route path="/*" element={ <Navigate to="/inicio" />} />



    </Routes>
    </div>
  )
}
