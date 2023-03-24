import { TPlace } from '@/types';
import { useRouter } from 'next/router';

const PlaceId = () => {
  const router = useRouter();
  const { params } = router.query;

  return (
    <section>
      <h1>Place</h1>
      <p>params: {params}</p>
    </section>
  );
};

