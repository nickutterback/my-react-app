import {useRef} from 'react'

function Bold(content){
    return <strong className = 'inline'>{content}</strong>
}
function Italic(content){
    return <em className = 'inline'>{content}</em>
}
function Anchor(content, {anchorArray}){
    const anchorRef = useRef(null);
    anchorArray.push(anchorRef);
    return <section className = 'inline' ref={anchorRef}>{content}</section>
}
function Text(content){
    return <p className = 'inline'>{content}</p>
}
