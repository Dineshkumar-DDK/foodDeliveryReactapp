import React from 'react'
import { Link } from 'react-router-dom';

const WorkExperience = () => {
   const orgId=2;
    return (
        <div>
            <Link
                to={`/experience/${orgId}`}
            >
                Gove
            </Link>

        </div>
    )
}

export default WorkExperience