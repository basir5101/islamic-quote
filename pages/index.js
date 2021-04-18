import Head from 'next/head'
import AddQuote from '../components/AddQuote';
import Image from 'next/image'

export default function Home({articles}) {
  const randomNumber = () =>{
    const random = Math.random() * 100;
    return parseInt(random);
  }
  
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
      <main>
        <div className="row my-5 bg-primary">
          <div className="col-6 bg-secondary">
              <Image
                src="/AlQuran_02.svg"
                alt="Picture of the author"
                width={500}
                height={400}
              />
          </div>
          <div className="col-6 d-flex align-items-center justify-content-center">
              <div>
                <h4 className="text-center text-white">সবাইকে <br/> পবিত্র রমজানের শুভেচ্ছা</h4>
                <h4 className = 'm-5 text-center'>Read <br/> And Write Islamic Quote </h4>
              </div>
          </div>
        </div>
        <div className="row">
        {
          articles && articles.data && articles.data.quotes && articles.data.quotes.map( (article) => {
           return <div key = {article._id} className = 'col-md-4 text-center'>
              <div style = {{backgroundColor: `#ffff${randomNumber()}`,}} className = 'm-1 mb-4 p-5'> 
                <h5>{article.quote}</h5> 
                <p style = {{backgroundColor: `#aaaa${randomNumber()}`,}} className = 'mt-3 p-1'> {article.verse} </p>
                <p>
                  <small style = {{position: 'absolute', left: '30px', top: '5px'}} className='text-muted'>
                    {article.user}
                  </small>
                </p>
              </div>
            </div>
          })
        }
        </div>  
        <AddQuote />      
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:8000/api/v1/quotes/quran-quotes`)
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
}

