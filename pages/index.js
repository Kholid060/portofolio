import Head from 'next/head'
import Icon from '@mdi/react';
import { mdiGithub, mdiEmail, mdiTwitter } from '@mdi/js';
import { getAllContent } from '../lib/api';
import Projects from '../components/Projects';

export default function Home({ projects }) {
  const techs = ['HTML', '(S)CSS', 'Vue.js', 'Next.js', 'Javascript (ES6+)', 'Express', 'Node.js'];
  const socials = [
    { name: 'Email', url: 'mailto:kholid060@gmail.com', icon: mdiEmail },
    { name: 'GitHub', url: 'https://github.com/kholid060', icon: mdiGithub },
    { name: 'Twitter', url: 'https://twitter.com/kholid060', icon: mdiTwitter },
  ];

  return (
    <main className="container">
      <Head>
        <title>Ahmad Kholid</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <section
        className="pt-24 md:pt-40 pb-48"
        style={{ minHeight: '500px' }}
      >
        <h1 className="text-5xl font-semibold mb-4 bg-gradient-to-br from-blue-400 to-indigo-600 text-transparent bg-clip-text">
          Hi, I'm Kholid. <br/>
          Front-End Developer.
        </h1>
        <p className="max-w-xl">
          I'm a self-taught front-end developer based in Indonesia. And focused on building interactive web apps and some browser extensions.
        </p>
        <div className="mt-4">
          <p>Here are a few technologies I've been working with recently:</p> 
          <ul className="list-disc list-inside grid grid-cols-2 max-w-md mt-4">
            {
              techs.map((tech) => <li>{tech}</li>)
            }
          </ul>
        </div>
        <a href="mailto:kholid060@gmail.com" className="mt-12 inline-block" rel="noopener noreferrer">
          <button className="primary">Contact me</button>
        </a>
      </section>
      <Projects projects={projects}></Projects>
      <section className="py-24 border-t border-gray-800 text-center">
        <ul className="space-x-8">
          {
            socials.map((social) => 
              <li className="inline-block">
                <a href={social.url} title={social.name} target="_blank" rel="noopener noreferrer">
                  <Icon path={social.icon} size={1.2}></Icon>
                </a>
              </li>
            )
          }
        </ul>
      </section>
    </main>
  )
}

export async function getStaticProps() {
  const projects = getAllContent('_projects').sort((a, b) => b.id - a.id);

  return {
    props: {
      projects,
    },
  };
}