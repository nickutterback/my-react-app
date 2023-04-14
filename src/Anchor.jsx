import { useRef } from "react";

function Anchor ({children, anchorArray}) {
    const anchorRef = useRef(null);
    const sec = <section ref={anchorRef}>{children}</section>
    anchorArray.push(anchorRef);
    return (
        sec
    )

}

export default Anchor;
