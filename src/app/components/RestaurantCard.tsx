'use client'
import type { restaurant } from "../types/restaurant";
import Link from "next/link";

interface RestaurantCardProps {
  restaurant: restaurant  
}

// 맛집 정보를 표시하는 카드 컴포넌트
export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <Link href={`/restaurant/${restaurant.uc_seq}`} className="block group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col transition-transform group-hover:scale-105 duration-300">
        <div className="w-full h-48 bg-amber-100 flex-shrink-0">
          <img
            src={restaurant.main_img_thumb ? restaurant.main_img_thumb : '/noimg.png'}
            alt={restaurant.main_title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 flex-grow flex flex-col">
          <h3 className="text-lg font-semibold truncate" title={restaurant.main_title}>
            {restaurant.main_title}
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            {restaurant.gugun_nm}
          </p>
          <p className="text-sm text-gray-500 mt-2 truncate" 
              title={restaurant.addr1}>
            {restaurant.addr1}
          </p>
        </div>
      </div>
     </Link>
  );
}