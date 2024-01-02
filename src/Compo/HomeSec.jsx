import React from 'react'
import './HomeSec.scss'
import { Link } from 'react-router-dom';
import { SiMoneygram } from "react-icons/si";
import { GiReceiveMoney } from "react-icons/gi";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { PiStrategyBold } from "react-icons/pi";
import { HiDocumentText } from "react-icons/hi";
import { GiIncubator } from "react-icons/gi";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { GoCodescanCheckmark } from "react-icons/go";
import { MdOutlineSendTimeExtension } from "react-icons/md";

const HomeSec = () => {
  return (
    <div>
        <div className='headerSec'>
            <div className='headerText'>
                <h2>
                    Take your company to new 
                    levels of success and productivity.
                </h2>
                <p>Get help from CSConsult, a professional  business plartform <br /> with advanced experience on growth and business scaling.</p>
                <Link to={'/contact'}><button>Book Session</button></Link>
            </div>
        </div>


        <div className='soluSec'>
            <h2 className='our'>Our Solutions</h2>
            <div className='solutionDiv'>
                <div>
                    <p><SiMoneygram /></p>
                    <h2>Strategic Planning</h2>
                </div>

                <div className='blue'>
                    <p><GiReceiveMoney /></p>
                    <h2>Finance</h2>
                </div>

                <div>
                    <p><FaArrowUpRightDots /></p>
                    <h2>Business Development</h2>
                </div>


                <div className='blue'>
                    <p><PiStrategyBold /></p>
                    <h2>Marketing Strategies</h2>
                </div>


                <div className=''>
                    <p><MdOutlineSendTimeExtension /></p>
                    <h2>Agile Sales Execution</h2>
                </div>
            

                <div className='blue'>
                    <p><GiIncubator /></p>
                    <h2>Startup Incubation</h2>
                </div>


                <div>
                    <p><MdOutlineDeveloperMode /></p>
                    <h2>Product Development</h2>
                </div>

                <div className='blue'>
                    <p><GoCodescanCheckmark /></p>
                    <h2>Market Research</h2>
                </div>
            



                <div>
                    <p><HiDocumentText /></p>
                    <h2>Business Documentation: </h2>
                    <span>Pitch Decks, 
                        Business Plans, Proposals and more</span>
                </div>
            </div>
        </div>


        <div className='experineceDiv'>
            <h2>Portfolio:</h2>
            <div className='experience'>
                <div>
                    8 Years+ Experience in Business Development
                </div>

                <div>
                    5 Years+ Experience in Accounting and Finance 
                </div>

                <div>
                    3 Years+ Experience in Start-Up incubation 
                </div>

                <div>
                    6 Years+ Experience in Marketing and Sales 
                </div>

                <div>
                    Over 100 Small Businesses and Startups imparted in the last decade
                </div>

                <div>
                    Over 11 StartUps upscaled and profitable in the last 3 years
                </div>

                <div>
                    Over 500 Entrepreneurs imparted in the last Decade
                </div>

            </div>
        </div>
    </div>
  )
}

export default HomeSec