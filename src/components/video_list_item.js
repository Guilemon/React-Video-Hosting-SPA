import React from 'react'

const VideoListItem = ({video,onVideoSelect})=>{
    const videoSnip = video.snippet
    const vidTitle = videoSnip.title
    const imgSrc = videoSnip.thumbnails.default.url
    return (
        <li className="list-group-item" onClick={()=>{onVideoSelect(video)}}>
            <div className="video-list media">
                <div className="media-left">
                  <img className="media-object" src={imgSrc}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{vidTitle}</div>
                    <small className="media-desc"><a href={"https://www.youtube.com/channel/"+videoSnip.channelId} target="_blank">{videoSnip.channelTitle}</a></small>
                </div>
            </div>
        </li>
        )
}

export default VideoListItem
