import { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import { ArchiveIcon, GlobeAltIcon, PuzzleIcon, ViewGridIcon } from '@heroicons/react/solid';
import ProjectCard from './ProjectCard';

export default function Projects({ projects }) {
	const [showAll, setShowAll] = useState(false);

	const filteredProjects = showAll ? projects : projects.slice(0, 4);

	return (
		<section className="relative pb-24">
			<h2 className="text-2xl mb-8 font-semibold">Projects</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{
					filteredProjects.map((project) => 
						<ProjectCard project={project} key={project.slug} />
					)
				}
			</div>
			<div className="text-center mt-12 px-6 py-3">
				<button onClick={() => setShowAll(!showAll)} className="px-6 py-3">
					{ showAll ? 'Show less' : 'Show all' }
				</button>
			</div>
		</section>
	)
}
