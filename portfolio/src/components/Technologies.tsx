import React from 'react'
import { SiAdobelightroomclassic, SiAdobepremierepro, SiFigma, SiAdobexd, SiAdobeindesign, SiAdobeillustrator, SiAdobephotoshop, SiJavascript, SiPhp, SiHtml5, SiCss3, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { PiPaintBrushBold } from "react-icons/pi";

const Technologies = () => {
  return (
    <div className="hero">
        <div className="hero-content text-center">
            <div className="max-w-lg">
                <h1 className="text-5xl font-bold">My skills</h1>
                <p className="py-6">I am a relatively versatile developer and content producer. This flexebility allows for me to quickly be able to introduce myself to several technologies and new software and at the same time work with customers and others fluently. Some technologies i currently am actively using include:</p>
                <button className="btn btn-outline m-2">
                    <SiHtml5 />
                    HTML
                </button>
                <button className="btn btn-outline m-2">
                    <SiCss3 />
                    CSS
                </button>
                <button className="btn btn-outline m-2">
                    <SiTailwindcss />
                    Tailwind CSS
                </button>
                <button className="btn btn-outline m-2">
                    <FaReact />
                    React
                </button>
                <button className="btn btn-outline m-2">
                    <SiNextdotjs />
                    Next JS
                </button>
                <button className="btn btn-outline m-2">
                    <SiPhp />
                    PHP
                </button>
                <button className="btn btn-outline m-2">
                    <SiJavascript />
                    JavaScript
                </button>
                <div className='divider'></div>
                <button className="btn btn-outline m-2">
                    <SiAdobephotoshop />
                    Photoshop
                </button>
                <button className="btn btn-outline m-2">
                    <SiAdobeillustrator />
                    Illustrator
                </button>
                <button className="btn btn-outline m-2">
                    <SiAdobeindesign />
                    InDesign
                </button>
                <button className="btn btn-outline m-2">
                    <PiPaintBrushBold />
                    Paint.net
                </button>
                <button className="btn btn-outline m-2">
                    <SiAdobexd />
                    Adobe XD
                </button>
                <button className="btn btn-outline m-2">
                    <SiFigma />
                    Figma
                </button>
                <button className="btn btn-outline m-2">
                    <SiAdobepremierepro />
                    Premiere Pro
                </button>
                <button className="btn btn-outline m-2">
                    <SiAdobelightroomclassic />
                    Lightroom
                </button>
            </div>
        </div>
    </div>
  )
}

export default Technologies