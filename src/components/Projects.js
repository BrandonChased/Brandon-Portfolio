import React from 'react'
import Project from "../components/Project"

function Projects() {
    return (
        <div className='container'>
            <h2 className='text-light text-center'>My Portolio Projects</h2>
            <div style={{flexWrap: "wrap"}} className='card bg- py-5 my-5 d-flex flex-row justify-content-around align-items-end'>
                <Project link={"https://github.com/joanataylor/C.A.M.P.S"} title={"C.A.M.P.S "} img={"https://i.imgur.com/2sLdGzB.jpg"} description={"Camp Management Application, built using Javascript, React, Bcrypt, Java,Spring-Boot, MySQL, Material-UI and Bootstrap"}/>
                <Project link={"https://github.com/BrandonChased/Compatible"} title={"Compatible "} img={"https://i.imgur.com/zHlYbxC.png"} description={"Dating Application, built using Javascript, React, Bcrypt, React-Hooks, Mongoose, MongoDb, and Bootstrap"}/>
            </div>
        </div>
    )
}

export default Projects