import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import { ProjectCard } from '@/components/ProjectCard'
import { Header, LockScale } from '@/components/HeaderComponent'
import { Raleway } from '@next/font/google'

const raleway = Raleway({ subsets: ['latin']})

export default function Home() {
  return (
    <>
      <Head>
        <title>CODE // ERIC WEBSITE</title>
        <meta name="description" content="A little portfolio for a clever coder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>      
      <body className={ raleway.className }>
        <Header lockScale={ LockScale.REACTIVE }/>
        
        <main className={ styles.contentBox }>
          <p className={ styles.indent }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum augue nec diam semper pharetra sodales at nibh. Integer iaculis justo vel elit mattis porttitor. Aenean in urna tristique, scelerisque augue id, elementum augue. Nulla vitae vehicula quam. Phasellus in sapien mattis, fermentum sem eu, viverra augue. Proin quis diam consequat, bibendum lectus ut, mattis dui. Etiam pulvinar, felis non vehicula placerat, felis lacus vehicula ante, eget volutpat ligula erat a ligula. Phasellus mattis ipsum at posuere vehicula. Morbi lacinia vestibulum dui et sagittis.</p>
          <p className={ styles.indent }>Nulla sed dignissim dui. Cras sed eros nec velit elementum molestie. Maecenas gravida odio id ipsum commodo, vel tristique nibh luctus. Nam ullamcorper orci non massa bibendum scelerisque. Quisque rhoncus non diam nec bibendum. Donec eget fringilla est. Aenean pharetra, ligula ut aliquam posuere, tortor dolor ornare magna, ac vehicula enim purus quis felis. Etiam vestibulum ante eget velit mollis interdum. Donec porttitor, enim non sodales fermentum, libero magna pretium lectus, id fringilla dui erat a velit. Phasellus nunc orci, faucibus nec sodales at, tincidunt non nunc.</p>
        </main>

        <div>
          <h2>Projects</h2>
          <div className={ styles.projectRows }>
            <ProjectCard 
              title={'Trees'} 
              imgSrc={'/images/trees.jpg'} 
              imgWidth={1280}
              imgHeight={400}
              imgScale={0.33}
              videoSrc={'/videos/trees.webm'}
              blurb={'Hello i\'m tree'} 
            />

            <ProjectCard 
              title={'Trees'} 
              imgSrc={'/images/trees.jpg'}
              imgWidth={1280}
              imgHeight={400}
              imgScale={0.33}
              videoSrc={'/videos/trees.webm'}
              blurb={'Hello i\'m tree'} 
            />
          </div>
        </div>

        <footer>
          <div>footer</div>
          <div>footer</div>
          <div>footer</div>
        </footer> 
      </body>
    </>
  )
}
