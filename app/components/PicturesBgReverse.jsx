import React from 'react'

export default function PicturesBgReverse() {
    return (
        <div className={`flex  overflow-hidden `}>
            <div className='flex space-x-4 animate-infinite-scroll-reverse [&_img]:max-w-none'>
                <img src="/Photo1Bis.png" alt="" />
                <img src="/Photo2.png" alt="" />
                <img src="/Photo3.png" alt="" />
                <img src="/Photo4.png" alt="" />
                <img src="/Photo2.png" alt="" />
                <img src="/Photo3.png" alt="" />
                <img src="/Photo1Bis.png" alt="" />
                <img src="/Photo4.png" alt="" />
            </div>
            <div className='flex space-x-4 animate-infinite-scroll-reverse [&_img]:max-w-none'>
                <img src="/Photo3.png" alt="" />
                <img src="/Photo1Bis.png" alt="" />
                <img src="/Photo4.png" alt="" />
                <img src="/Photo2.png" alt="" />
                <img src="/Photo1Bis.png" alt="" />
                <img src="/Photo4.png" alt="" />
                <img src="/Photo3.png" alt="" />
                <img src="/Photo2.png" alt="" />
            </div>
        </div>
    )
}
