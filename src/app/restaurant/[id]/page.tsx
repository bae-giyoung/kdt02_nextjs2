import type { restaurant } from '@/app/types/restaurant';
import RestaurantDetail from '@/app/components/RestaurantDetail';
import { supabase } from '@/lib/supabase/client';

async function getRestaurantById(id: string): Promise<restaurant | null> {
  const {data: restaurant, error} = await supabase
          .from('restaurants')
          .select('*')
          .eq('uc_seq', id)
          .single<restaurant>();
  
  return restaurant || null;
}

export default async function RestaurantIdPage({ params }: { params: { id: string } }) {
  const restaurant = await getRestaurantById(params.id);
  return (
    <RestaurantDetail restaurant={restaurant} />
  );
}