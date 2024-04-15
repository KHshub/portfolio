import React from 'react';
import './Skills.css';
import reactLogo from '../assets/react.png';
import figmaLogo from '../assets/figma.png';
import htmlLogo from '../assets/html5.png';
import vuejsLogo from '../assets/vuejs.png';
import css3Logo from '../assets/css3.png';
import phpLogo from '../assets/php.png';
import sqlogo from '../assets/sql.png';
import jsLogo from '../assets/js.png';
import javaLogo from '../assets/java.png';
import cplusLogo from '../assets/cplus.png';
import gitLogo from '../assets/github.png';
import asepriteLogo from '../assets/aseprite.png';
import blenderLogo from '../assets/blender.png';
import godotLogo from '../assets/godot.png';
import unityLogo from '../assets/unity.png';
import swiftLogo from '../assets/swift.png';




const scrollers = document.querySelectorAll('.scroller');

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach(scroller => {
        scroller.setAttribute("data-animated", true);
        })
}

const Skills = () => {
    return (
        <div className='scroller-container'>
            <div className='scroller'>
                <ul className='tag-list scroller-inner'>
                    <li><img src={reactLogo}></img></li>
                    <li><img src={figmaLogo}></img></li>
                    <li><img src={htmlLogo}></img></li>
                    <li><img src={jsLogo}></img></li>
                    <li><img src={css3Logo}></img></li>
                    <li><img src={phpLogo}></img></li>
                    <li><img src={sqlogo}></img></li>
                    <li><img src={vuejsLogo}></img></li>
                    <li><img src={javaLogo}></img></li>
                    <li><img src={cplusLogo}></img></li>
                    <li><img src={gitLogo}></img></li>
                    <li><img src={asepriteLogo}></img></li>
                    <li><img src={blenderLogo}></img></li>
                    <li><img src={godotLogo}></img></li>
                    <li><img src={unityLogo}></img></li>
                    <li><img src={swiftLogo}></img></li>
                    {/* duplicates for looping */}
                    <li><img src={reactLogo}></img></li>
                    <li><img src={figmaLogo}></img></li>
                    <li><img src={htmlLogo}></img></li>
                    <li><img src={jsLogo}></img></li>
                    <li><img src={css3Logo}></img></li>
                    <li><img src={phpLogo}></img></li>
                    <li><img src={sqlogo}></img></li>
                    <li><img src={vuejsLogo}></img></li>
                    <li><img src={javaLogo}></img></li>
                    <li><img src={cplusLogo}></img></li>
                    <li><img src={gitLogo}></img></li>
                    <li><img src={asepriteLogo}></img></li>
                    <li><img src={blenderLogo}></img></li>
                    <li><img src={godotLogo}></img></li>
                    <li><img src={unityLogo}></img></li>
                    <li><img src={swiftLogo}></img></li>
                </ul>
            </div>
        </div>
    );
}

export default Skills;