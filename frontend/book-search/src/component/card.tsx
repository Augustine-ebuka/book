import BookInterface from "../interface/book";



const Card = ({name, isbn, authors, numberOfPages,country, characters, released,publisher}:BookInterface) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="mx-auto px-5">
        <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
          <img
            className="w-full rounded-lg object-cover object-center"
            src="https://github.com/horizon-ui/horizon-tailwind-react-ts-corporate/blob/main/src/assets/img/profile/image2.png?raw=true"
            alt="product"
          />
          <div className=" font-primary">
            <div className="my-6 flex items-center justify-between px-4">
              <p className="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">Title</p>
              <p className=" font-bold text-gray-500">{name}</p>
            </div>
            <div className="my-4 flex items-center justify-between px-4">
              <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">ISBN</p>
              <p className="text-sm font-semibold text-gray-500">{isbn}</p>
            </div>
            <div className="my-4 flex items-center justify-between px-4">
              <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">Author Name</p>
              <p className="text-sm font-semibold text-gray-500">{authors}</p>
            </div>
            <div className="my-4 flex items-center justify-between px-4">
              <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">numberOfPges</p>
              <p className="text-sm font-semibold text-gray-500">{numberOfPages}</p>
            </div>
            <div className="my-4 flex items-center justify-between px-4">
              <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">Country</p>
              <p className="text-sm font-semibold text-gray-500">{country}</p>
            </div>
            <div className="my-4 flex items-center justify-between px-4">
              <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">released</p>
              <p className="text-sm font-semibold text-gray-500">{released}</p>
            </div>
            <div className="my-4 flex items-center justify-between px-4">
              <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">publisher</p>
              <p className="text-sm font-semibold text-gray-500">{publisher}</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
