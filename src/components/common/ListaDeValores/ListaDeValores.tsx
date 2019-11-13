import * as React from 'react';

interface ListProps {
    text: string;
}
export class List extends React.Component <ListProps,any> {

    render() {
        return (
            <div>
                <h1>Lista</h1>
                    <ul>
                        <li></li>
                    </ul>
            </div>
        );
    }
}