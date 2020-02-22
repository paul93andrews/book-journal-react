import React, { useEffect} from 'react';
import { useDispatch } from 'react-redux';

import { trackCurrentPage } from '../actions/displayChanges';



const JournalHome = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(trackCurrentPage('homePage'));
    }, [])

    return (
        <main>
            <h1>The Book Journal Project</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores accusantium ab repudiandae, quod at quos a debitis sapiente iste magnam eaque veritatis fugiat in dolore cupiditate voluptatem amet eveniet natus reprehenderit ad doloribus! Deleniti quia voluptatem porro quae dolores.</p>
        </main>
    )
}

export default JournalHome;