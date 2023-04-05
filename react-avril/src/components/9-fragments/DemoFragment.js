import { Fragment } from 'react';

// ...
return (
    <ul>
        {elements.map((element, index)=>(
            <Fragment>
                <p>...</p>
                <li key={index}>{element}</li>
            </Fragment>
        ))}
    </ul>
)
// ...