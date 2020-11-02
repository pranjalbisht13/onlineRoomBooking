import React from 'react'

export default function Title({name,title}) {
            return (
            <div className ="text-primary">
                <div className="col-10 mx-auto my-5 text-center text-title">
                    <h1 className="text-capitalize font-weight">
                        {name} <strong className="text-blue">{title}
                        </strong>
                    </h1>
                </div>                
            </div>
        );
    }

