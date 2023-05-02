import React from 'react';
import BackArrow from '../../ui/BackArrow/BackArrow';
import ClassicGame from '../../components/ClassicGame/ClassicGame';

const PlayGame: React.FC = () => {
    return(
        <div>
            <BackArrow />
            <ClassicGame />
        </div>
    )
}

export default PlayGame;