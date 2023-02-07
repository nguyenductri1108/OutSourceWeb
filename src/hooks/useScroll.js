import { useEffect, useState } from 'react';
import { getElementOffset } from 'src/utils/DomUtils';

function useScroll(stickyChild, parent, growPercent) {
    const [diffHeight, setDiffHeight] = useState();
    const [diffGrow, setDiffGrow] = useState();

    const calc = () => {
        console.log(stickyChild);
        const e1OffsetTop = stickyChild.offsetTop;
        const e2OffsetTop = getElementOffset(parent);

        const diffpx = e1OffsetTop - e2OffsetTop;
        const diffHeight = diffpx / (parent.offsetHeight - stickyChild.offsetHeight);

        setDiffHeight(diffHeight);
        setDiffGrow(diffHeight * growPercent);
        console.log(diffHeight);
    };

    useEffect(() => {
        window.addEventListener('scroll', calc);
        console.log(stickyChild, parent, growPercent);

        return () => window.removeEventListener('scroll', calc);
    }, [stickyChild, parent, growPercent]);

    return [diffHeight, diffGrow];
}

export default useScroll;
