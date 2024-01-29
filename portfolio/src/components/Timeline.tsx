import React from 'react'
import { FaCamera } from "react-icons/fa6";

const Timeline = () => {
  return (
    <div className='my-40'>
      <h1 className='w-screen text-5xl font-bold text-center'>Work timeline</h1>
      <ul className="m-10 timeline timeline-vertical gap-0">
          <li>
              <div className="timeline-start">2019 - 2020</div>
              <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <div className="timeline-end timeline-box">Coding Instructor for <a href="https://www.oslo.kommune.no/byutvikling/omradesatsingene-i-oslo/delprogram-sysselsetting/koding-og-arbeid/" className='link'>Schools in Oslo</a></div>
              <hr/>
          </li>
          <li>
              <hr />
              <div className="timeline-start">2021 - Present</div>
              <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <div className="timeline-end timeline-box">Content Creator @ <a href="https://www.aktivigrorud.no/grow/" className='link'>GROW Medielab</a></div>
              <hr/>
          </li>
          <li>
              <hr/>
              <div className="timeline-start">2022 - Present</div>
              <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <div className="timeline-end timeline-box">Student at <a href="https://elvebakken.vgs.no/" className='link'>Elvebakken High School</a> - specializing in <a href="https://elvebakken.vgs.no/fagtilbud/informasjonsteknolog-og-medieproduksjon/informasjonsteknologi-og-medieproduksjon-med-praksisrettet-studiekompetanse/" className='link'>IT & Media</a></div>
              <hr/>
          </li>
          <li>
              <hr/>
              <div className="timeline-start">2023 - Present</div>
              <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <div className="timeline-end timeline-box">Content Producer @  <a href="https://jungeltelegraf1.no/" className='link'>Jungeltelegraf1</a></div>
          </li>
      </ul>
    </div>
  )
}

export default Timeline