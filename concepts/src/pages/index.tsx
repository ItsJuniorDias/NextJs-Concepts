import { GetServerSideProps } from 'next';

import { Title } from '@/styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
}

interface HomeProps {
  recommendedProducts: IProduct[];
}

export default function Home({ recommendedProducts }: HomeProps) {

  async function handleSum() {
   console.log(process.env.NEXT_PUBLIC_API_URL);

   const math = (await import('../lib/math')).default;
   
   alert(math.sum(3,5));
  }

  return (
    <div> 
      <section> 
        <Title>Product</Title>

        <ul> 
          {recommendedProducts.map(recommendedProduct =>  (
            <>
            <li key={recommendedProduct.id}>
               {recommendedProduct.title}
            </li>
            </>
          ))}  
        </ul> 
      </section>

      <button onClick={handleSum}> 
        Somar !
      </button>
    </div>
  )
}

// client, server, static 

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recommended`)
  const recommendedProducts = await response.json();

  return {
    props: {
      recommendedProducts
    }
  }
}