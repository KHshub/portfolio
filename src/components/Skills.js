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
                    <li><img alt='logo' src={reactLogo}></img></li>
                    <li><img alt='logo' src={figmaLogo}></img></li>
                    <li><img alt='logo' src={htmlLogo}></img></li>
                    <li><img alt='logo' src={jsLogo}></img></li>
                    <li><img alt='logo' src={css3Logo}></img></li>
                    <li><img alt='logo' src={phpLogo}></img></li>
                    <li><img alt='logo' src={sqlogo}></img></li>
                    <li><img alt='logo' src={vuejsLogo}></img></li>
                    <li><img alt='logo' src={javaLogo}></img></li>
                    <li><img alt='logo' src={cplusLogo}></img></li>
                    <li><img alt='logo' src={gitLogo}></img></li>
                    <li><img alt='logo' src={asepriteLogo}></img></li>
                    <li><img alt='logo' src={blenderLogo}></img></li>
                    <li><img alt='logo' src={godotLogo}></img></li>
                    <li><img alt='logo' src={unityLogo}></img></li>
                    <li><img alt='logo' src={swiftLogo}></img></li>
                    {/* duplicates for looping */}
                    <li><img alt='logo' src={reactLogo}></img></li>
                    <li><img alt='logo' src={figmaLogo}></img></li>
                    <li><img alt='logo' src={htmlLogo}></img></li>
                    <li><img alt='logo' src={jsLogo}></img></li>
                    <li><img alt='logo' src={css3Logo}></img></li>
                    <li><img alt='logo' src={phpLogo}></img></li>
                    <li><img alt='logo' src={sqlogo}></img></li>
                    <li><img alt='logo' src={vuejsLogo}></img></li>
                    <li><img alt='logo' src={javaLogo}></img></li>
                    <li><img alt='logo' src={cplusLogo}></img></li>
                    <li><img alt='logo' src={gitLogo}></img></li>
                    <li><img alt='logo' src={asepriteLogo}></img></li>
                    <li><img alt='logo' src={blenderLogo}></img></li>
                    <li><img alt='logo' src={godotLogo}></img></li>
                    <li><img alt='logo' src={unityLogo}></img></li>
                    <li><img alt='logo' src={swiftLogo}></img></li>
                </ul>
            </div>
        </div>
    );
}

export default Skills;