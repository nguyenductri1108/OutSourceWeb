import { useEffect, useState } from 'react';
import { getElementOffset } from 'src/utils/DomUtils';

function useScrollWithBody(child) {
    const [diffHeight, setDiffHeight] = useState();

    const calc = () => {
        const childOffsetTop = getElementOffset(child);
        const windowScrollTop = window.pageYOffset;

        const diffpx = childOffsetTop - windowScrollTop + window.innerHeight;
        const diffHeight = diffpx / child.offsetHeight;

        setDiffHeight(diffHeight);
    };

    useEffect(() => {
        window.addEventListener('scroll', calc);
        console.log(child);

        return () => window.removeEventListener('scroll', calc);
    }, [child]);

    return diffHeight;
}

export default useScrollWithBody;
