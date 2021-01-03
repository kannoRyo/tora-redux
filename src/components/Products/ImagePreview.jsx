import React from 'react'

const ImagePreview = (props)=>{
    return(
        <div className="p-media__thumb">
            <img src={props.path} alt="プレビュー画像" onClick={props.onClick} />
        </div>
    )
}

export default ImagePreview