import React, { createElement, useEffect, useState } from 'react'
import {IoMdGrid} from 'react-icons/io'
import {AiOutlineStar} from 'react-icons/ai'
import {CgArrowsHAlt} from 'react-icons/cg'
import {MdContentCopy} from 'react-icons/md'
import {BsFillUnlockFill} from 'react-icons/bs'
import { ColorTranslator, Harmony, Mix } from 'colortranslator';
import ReactTooltip from 'react-tooltip';


const ColorCode = ({index,update,hexCode}) => {

let style = {
  backgroundColor:hexCode
  }
  
//  To set color variation or shades for corresponding color plate
 const handleColorShades=(targetColor) => {
   const container = document.querySelector("#color_variant");
   var tints = ColorTranslator.getTints(targetColor, 20);
  
    tints.forEach((c) => {
      const box = document.createElement("div");
       box.style.backgroundColor = c;
      container.appendChild(box);
    });
  }

  // to set favorit color into local strage
  const handleFavouritColor = (targetColor) => {
    var previousValue =JSON.parse(localStorage.getItem('FavouriteColor')) ||[];
        if (previousValue.indexOf(targetColor)==-1) {
            previousValue.push(targetColor);
           localStorage.setItem("FavouriteColor", JSON.stringify(previousValue));
        }     
};


    return (
      <div id='previousColor' className='color' style={style}>
        <div className='coor_details'>
          <div className='close_icon'>X<ReactTooltip><span>Close</span>
          </ReactTooltip>
          </div>
          <div id='color_variant' onClick={()=>handleColorShades(hexCode.toUpperCase())} className='color_variant'>
            <IoMdGrid />
          </div>
          <div  onClick={() => handleFavouritColor(hexCode.toUpperCase())}><AiOutlineStar/> </div>
          <div> <CgArrowsHAlt/></div>
          <div onClick={() => { navigator.clipboard.writeText(hexCode.toUpperCase())}}><MdContentCopy/></div>
          <div id='show_hide_copy_message' className='show_hide_copy_message'></div>
          <div><BsFillUnlockFill/></div>
        </div>
        <div className='modal_color_plate'>
          <div>{hexCode.toUpperCase()}</div>
        </div>
      </div>
    );
  }


export default ColorCode