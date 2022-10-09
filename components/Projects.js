import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Title } from './Title';
import { client } from '../client';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const Projects = () => {
	const [projectData, setProjectData] = useState(null);
	// Query for projects
	useEffect(() => {
		client
			.fetch(
				`*[_type == "projects"]{
	    title,
	    description,
			link,
	    mainImage{
	      asset->{
	        _id,
	        url
	      }
	    }
	  }`
			)
			.then((data) => setProjectData(data))
			.catch(console.error);
	}, []);

	return (
		<section className="projects">
			<div className="container">
				<Title title="Projects" className="title" />
				{/* <Marquee > */}
				<div className="projects__flex">
					{projectData &&
						projectData.map((project, index) => (
							<div key={index}>
								<div>
									<Image className="profile" src={project.mainImage.asset.url} alt={project.name} width={800} height={400} />
									<div className="">
										<h4 className=" ">{project.title}</h4>
										<p>{project.description}</p>
									</div>
									<div className="">
										<span>Live site:</span>
										<a target="_blank" rel="noopener noreferrer" href={project.projectLink}></a>
									</div>
								</div>
							</div>
						))}
				</div>
				{/* </Marquee> */}
			</div>
		</section>
	);
};

export default Projects;
