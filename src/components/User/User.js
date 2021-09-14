import React from 'react';

const User = (props) => {
    const familiar = props.familiar;

    return (
        <div>
            <div>
                <h2>Greetings</h2>
                { 
                familiar ?  <p>WElcome, my friend.</p> : <p>Who the hell are you?</p>
                }
                
            </div>
            <div>
                <h2>Food</h2>
                { 
                familiar ?  <p>I will buy food for you.</p> : <p>Lets eat his his whose whose?</p>
                }
            </div>
            <div>
                <h2>Connection</h2>
                { 
                familiar &&  <p>Let's join my facebook.</p>
                }
            </div>
        </div>
    );
};

export default User;