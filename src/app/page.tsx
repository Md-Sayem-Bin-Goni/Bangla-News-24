import MainNews from '@/components/MainNews';
import Marquee from '@/components/Marquee';


interface INews {

  title: string
  imageUrl: string
  category: string

}


const HomePage = async () => {

  const res = await fetch('https://news-api-v2.vercel.app/api/news')
  const data = await res.json();

  const allNews: INews[] = data.data
  const firstNews: INews = data.data[0]

  console.log(allNews);




  return (
    <div >
      <Marquee />

      <div className='container mx-auto mt-5'>
        <MainNews firstNews={firstNews} allNews={allNews} />
      </div>



    </div>
  );
};

export default HomePage;
