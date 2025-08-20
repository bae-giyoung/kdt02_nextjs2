'use client';
import { useState, useEffect } from "react";
import type { restaurant } from "../types/restaurant";
import RestaurantCard from "../components/RestaurantCard";
import { supabase } from "@/lib/supabase/client";

export default function () {
  const [restaurants, setRestaurants] = useState<restaurant[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const PAGE_SIZE = 8;

  const fetchRestaurants = async (isInitial: boolean = false) => {
    if (!hasMore || (isLoading && !isInitial)) return;

    setIsLoading(true);

    const currentOffset = isInitial ? 0 : offset;

    const {data} = await supabase
        .from('restaurants')
        .select('*')
        .order('main_title', {ascending: true})
        .range(currentOffset, currentOffset + PAGE_SIZE - 1);

    if(data) {
        if (isInitial) {
          setRestaurants(data);
        } else {
          setRestaurants(prev => [...prev, ...data]);
        }
        setOffset(prev => prev + PAGE_SIZE);

        if(data.length < PAGE_SIZE) {
            setHasMore(false);
        }
    } else {
        setHasMore(false);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    setOffset(0);
    fetchRestaurants(true);
  }, []);

  useEffect(() => {
    console.log(restaurants);
  }, [restaurants])

  return (
    <div className="w-full lg:w-4/5 lg:max-w-7xl lg:mx-auto h-full flex flex-col bg-white lg:shadow-xl px-4 py-2">
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl font-bold">부산 맛집 리스트</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {restaurants && restaurants.map((item: restaurant) => <RestaurantCard
            key={item.uc_seq}
            restaurant={item} />)
          }
        </div>
        {
            hasMore && !isLoading && (
                <div className="flex justify-center py-4">
                    <button onClick={() => fetchRestaurants()} disabled={isLoading}
                            className="bg-blue-800 px-5 py-2 text-white rounded-4xl">
                        {isLoading ? '로딩중...' : '더보기'}
                    </button>
                </div>
            )
        }
      </div>
    </div>
  );
}