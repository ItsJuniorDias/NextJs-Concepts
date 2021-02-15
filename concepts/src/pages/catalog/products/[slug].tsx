import { useRouter } from 'next/router';

export default function Product() {
  const router = useRouter();

  return (
    <div> 
      <h1>{router.query.slug}</h1>
    </div>
  )
}
