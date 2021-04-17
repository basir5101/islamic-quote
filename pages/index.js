import Head from 'next/head'
import fakeData from './fakeData'

export default function Home() {
  const randomNumber = () =>{
    const random = Math.random() * 1111;
    return parseInt(random);
  }
  
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
      <main>
        <h4 className = 'm-5 text-center'>পবিত্র কুরআন হতে ১০০ উপদেশ</h4>
        <div className="row">
        {
          fakeData.map( (article) => {
           return <div key = {article.id} className = 'col-md-4 text-center'>
              <div style = {{backgroundColor: `#${randomNumber()}a`,}} className = 'm-1 mb-4 p-5'> 
                <h5>{article.title}</h5> 
                <p style = {{backgroundColor: `#${randomNumber()}a`,}} className = 'mt-3 p-1'> {article.verse} </p>
              </div>
            </div>
          })
        }
        </div>        
      </main>
    </div>
  )
}

