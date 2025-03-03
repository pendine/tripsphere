import { BiShareAlt, BiCart } from 'react-icons/bi';

const Heading = () => {
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          여행 상품 제목
        </h2>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
            <BiShareAlt
              aria-hidden="true"
              className="mr-1.5 -ml-0.5 size-5 text-gray-400"
            />
            공유하기
          </button>
        </span>

        <span className="ml-3 hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
            <BiCart
              aria-hidden="true"
              className="mr-1.5 -ml-0.5 size-5 text-gray-400"
            />
            장바구니
          </button>
        </span>
      </div>
    </div>
  );
};

export default Heading;
