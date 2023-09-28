import React from 'react';

const Moviecard = (props) => {
    return (
        <div className = 'movieCard'>

            {
                props.movieDetails.map((movie,index) => (
                    <div className='imgcard'>
                    <img src={movie.Poster} alt='moviePoster'></img>
                    <div className='overlay'>

                    </div>
                </div>
                ))
            }
            
        </div>
    );
};

export default Moviecard;