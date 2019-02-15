import React from 'react';
import styles from './TodoTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TodoTemplate = ({viewer, spaceNavigator}) => {
    return (
        <div>
            <header>Astronomy Picture of the Day</header>
            <div>
                {viewer}
                <div>
                    {/* {spaceNavigator} */}
                </div>
            </div>
        </div>
    )
}

export default TodoTemplate;
