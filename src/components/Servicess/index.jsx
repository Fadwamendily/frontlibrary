import React from 'react'
import print from '../assets/images/print.jpg'
import pdfbook from '../assets/images/ebook-tablet.jpg'
import audio from '../assets/images/audiobook.jpg'
import './service.css'

export default () => {
    return (
        <section class="page-section" id="services">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase" style={{ color: "rgb"}} >Services</h2>
                    <h3 class="section-subheading text-muted">WHETHER YOU'RE CONSIDERING JOINING THE DIGITAL BOOKS REVOLUTION YOU WANT AUDIO, PDF OR PRINTED BOOKS HERE YOU FIND YOURSELF</h3>
                </div>
                <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }} >
                    <div className='actors' style={{ display: "flex", flexWrap: 'nowrap' }} >

                        <div >
                            <div className="photo">
                                <img className="photo" src={print} alt="" align="left" />
                                <h4 class="my-3">Printed Books</h4>
                                <p class="text-muted" style={{textAlign: "center" }} >For those who feel something that comes with turning pages, smelling the paper, and seeing permanent words printed on the pages. </p>
                            </div>
                        </div>
                        <div   >
                            <div className="photo">
                                <img className="photo" src={pdfbook} alt="" align="center" />
                                <h4 class="my-3">PDF Books</h4>
                                <p class="text-muted" style={{textAlign: "center" }}>For those who want to save a lot of space in their home and in their bag. You don't have to worry about the storage limit. </p>
                            </div>
                        </div>
                        <div  >
                            <div className="photo">
                            <img className="photo" src={audio} alt="" align="right" />
                            <h4 class="my-3">Audio Books</h4>
                            <p class="text-muted" style={{textAlign: "center" }}>For those who want to improve their reading and speaking accuracy and fluency. While the narrator(s) narrates the book, you can notice and learn .</p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    )
}