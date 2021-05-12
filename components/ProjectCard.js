import Image from 'next/image';
import Icon from '@mdi/react';
import { mdiGithub, mdiOpenInNew } from '@mdi/js';

export default function ProjectCard({ project }) {
	return (
		<div
			className="bg-gray-800 hover:-translate-y-1 transform transition hover:shadow-2xl relative rounded-lg overflow-hidden duration-200"
		>
			{
				project.image &&
					<div className="h-56 relative rounded-b-lg overflow-hidden">
						<Image alt={project.title} src={`/projects${project.image}`} layout="fill" objectFit="cover" />
					</div>
			}
			<div className="px-4 pt-4 pb-16">
				<a href={project.demo} target="_blank" className="text-xl font-semibold">{project.title}</a>
				<p className="mb-1">{project.content}</p>
				<div className="pb-4 flex items-center absolute bottom-0 w-full left-0 px-4">
					{	
						project.demo &&
							<a
								href={project.demo}
								className="p-2 mr-2"
								role="button"
								target="_blank"
								rel="noopener noreferrer"
								title="Open demo"
							>
								<Icon size="24px" path={mdiOpenInNew}></Icon>
							</a>
					}
					{
						project.github &&
							<a
								href={`https://github.com/${project.github}`}
								className="p-2"
								role="button"
								title="Open GitHub"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Icon size="24px" path={mdiGithub}></Icon>
							</a>
					}
					<div className="flex-1"></div>
					{`#${project.type}`}
				</div>
			</div>
		</div>
	);
}