import React from 'react'
import Banner from '../../components/Banner';
import Services from '../../components/Servicess';
import Books from '../../components/Books';
import Libraries from '../../components/Libraries';
import Authors from '../../components/Authors';
import Contact from '../../components/Contact';
export default () => {
    return (
        <>
            <Banner/>
            <Services/>
            <Books/>
            <Libraries/>
            <Authors/>
            <Contact/>
        </>
    )
}