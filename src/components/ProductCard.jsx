import React from 'react';
import {
  BiCart,
  BiHeart,
  BiShareAlt,
  BiCalendarAlt,
  BiTime,
} from 'react-icons/bi';
import { IoIosMan } from 'react-icons/io';
import { MdChildCare } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ProductCard = ({ index, array }) => {
  return (
    <Link to="/product/0">
      {/* 각 여행패키지 정보*/}
      <article
        className={`group card bg-base-100 transition-shadow grid grid-cols-[2fr_5fr] gap-[20px] ${
          index === 0 ? 'pb-[30px]' : 'py-[30px]'
        } ${index !== array.length - 1 ? 'border-b border-gray-200' : ''}`}>
        {/* 패키지 사진 영역*/}
        <figure>
          <div className="h-full relative">
            <div className="h-[200px] rounded-md overflow-hidden">
              <img
                src="https://i.ibb.co/JjbW5yMn/andrew-ruiz-fmz-B9-At9i-Q-unsplash-1024x357.jpg"
                alt=""
                className="h-full object-cover"
              />
            </div>
          </div>
          {/* <figcaption>여행 패키지 상품 사진</figcaption> */}
        </figure>

        <div className="card-body py-0 px-0 gap-0">
          {/* 패키지 이름 */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <div className="badge badge-soft badge-secondary">NEW</div>
              <div className="badge badge-soft badge-info">서울</div>
            </div>
            <div class="flex gap-2">
              <span className="hidden sm:block">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                  <BiShareAlt
                    aria-hidden="true"
                    className="size-5 text-gray-400"
                  />
                </button>
              </span>

              <span className="hidden sm:block">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                  <BiCart
                    aria-hidden="true"
                    className="size-5 text-gray-400"
                  />
                </button>
              </span>

              <span className="hidden sm:block">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                  <BiHeart
                    aria-hidden="true"
                    className="size-5 text-gray-400"
                  />
                </button>
              </span>
            </div>
          </div>
          <h2
            className=" transition-colors card-title text-2xl pb-3.5 border-b-1 border-gray-200"
            title="여행 패키지 이름">
            Trip Package Name Here
          </h2>

          {/* 패키지 정보 */}
          <div
            className="grid grid-cols-[3fr_1fr] h-4/5 "
            title="패키지 상세정보들">
            <div className="py-4 pr-4">
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-2.5">
                <div className="flex gap-4 items-center">
                  <div className="flex items-center gap-2 min-w-[90px]">
                    <BiCalendarAlt className="text-base" />
                    <p className="font-bold">체크인</p>
                  </div>
                  <time dateTime="2025-04-01">2025-04-01</time>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="flex items-center gap-2 min-w-[90px]">
                    <BiCalendarAlt className="text-base" />
                    <p className="font-bold">체크아웃</p>
                  </div>
                  <time dateTime="2025-04-03">2025-04-03</time>
                </div>

                <div>
                  <div className="flex gap-4 items-center">
                    <div className="flex items-center gap-2 min-w-[100px]">
                      <BiTime className="text-base" />
                      <span className="font-bold">총 소요 일수 </span>
                    </div>
                    <span>3일</span>
                  </div>
                </div>
              </div>

              <p
                className="line-clamp-2"
                title="패키지 설명">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, maiores nam, officiis earum id, perspiciatis
                inventore beatae eligendi tempore deleniti quos repudiandae eius
                ipsam ex. Quam animi qui atque dolor.
              </p>
            </div>

            <div
              className="flex flex-col border-l border-gray-200 pl-4 py-4"
              title="여행 패키지 정보">
              {/* 가격정보 */}
              <div
                title="가격정보"
                className="flex flex-col justify-around items-start">
                <div title="가격할인">
                  <p
                    className="line-through text-red-600"
                    title="정가">
                    500000원
                  </p>
                  <p
                    className="underline font-bold text-2xl transition-colors"
                    title="할인가">
                    300000원
                  </p>
                </div>
                <span> -40% </span>
              </div>

              {/* 참여 가능인원 */}
              <div className="flex flex-col items-end">
                <span>잔여 티켓</span>
                <div className="flex gap-x-1 items-center">
                  <span>
                    <IoIosMan className="text-base" />
                  </span>
                  <span>성인 :</span>
                  <span>15명</span>
                </div>
                <div className="flex gap-x-1 items-center">
                  <span>
                    <MdChildCare className="text-base" />
                  </span>
                  <span>어린이 : </span>
                  <span>15명</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
