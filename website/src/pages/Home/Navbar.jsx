import React from 'react'
import { useState } from 'react';

export default function Navbar(props) {

    const [expanded, setExpanded] = useState(false);

    console.log(props.open);

    return (
        <nav className="navigation">
          <a href="/" className="brand-name">
            <h4>Tuesday Night Takes</h4>
          </a>
          <button onClick={() => {
            if(!expanded){
                setExpanded(true);
            } else{
                setExpanded(false);
            }
          }} className="hamburger">
            {/* icon from heroicons.com */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            className={expanded ? 'navigation-menu expanded' : 'navigation-menu'}>
            <ul>
              <li style={props.open ? {display: 'none'} : {display: 'block'}} onClick={() => {
                props.handleSearchResults('NBA');
                setExpanded(false);
              }}>
                <p>NBA</p>
              </li>
              <li style={props.open ? {display: 'none'} : {display: 'block'}} onClick={() => {
                props.handleSearchResults('NCAA');
                setExpanded(false);
              }}>
                <p>NCAA</p>
              </li>
              <li style={props.open ? {display: 'none'} : {display: 'block'}} onClick={() => {
                props.handleSearchResults('NFL');
                setExpanded(false);
              }}>
                <p>NFL</p>
              </li>
              <li  onClick={() => {
                setExpanded(false);
              }}>
                <a href="/"><p>HOME</p></a>
              </li>
            </ul>
          </div>
        </nav>
      );
}
