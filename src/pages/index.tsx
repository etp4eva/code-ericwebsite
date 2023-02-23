import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import { Header, LockScale } from '@/components/Header'
import { Raleway } from '@next/font/google'
import { ProjectList } from '@/components/ProjectList'
import { Footer } from '@/components/Footer'
import { ProjectSummary, getIntro, getProjectSummaries } from '@/lib/Projects'

const raleway = Raleway({ subsets: ['latin']})

interface HomeProps {
  projects: ProjectSummary[]
  blurb: string
}

export const getStaticProps = async ()  => {
  const allPostsData = await getProjectSummaries();
  const blurb = await getIntro();
  
  return {
    props: {
      projects: allPostsData,
      blurb: blurb,
    },
  };
}

export default function Home({projects, blurb}: HomeProps) {
  return (
    <>
      <Head>
        <title>CODE // ERIC WEBSITE</title>
        <meta name="description" content="A little portfolio for a clever coder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>      

      <div className={ [raleway.className, styles.body].join(" ") }>
        <Header lockScale={ LockScale.REACTIVE }/>
        
        <div className={ styles.bgImage }>
        <main 
          className={ styles.contentBox }
          dangerouslySetInnerHTML={{ __html: blurb }}
        />
        </div>

        <ProjectList projects={projects}/>

        <Footer/>
        
      </div>
    </>
  )
}
