import React from 'react';
import BookInterface from '../interface/book';

const ProjectCard: React.FC<BookInterface> = ({
  name,
  numberOfPages,
  imageSrc,
  key,
  authors
}) => (
  <div className="mt-3 flex items-center justify-between rounded-2xl bg-gray-50 p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none" key={key}>
    <div className="flex items-center">
      <div>
        <img
          className="h-[83px] w-[83px] rounded-lg"
          src={imageSrc}
          alt=""
        />
      </div>
      <div className="ml-4">
        <p className="text-base font-medium text-navy-700 dark:text-white">
          {name}
        </p>
        <p className="mt-2 text-sm text-gray-600">
          auth: {authors}
          <p className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-white">
            pg: {numberOfPages}
          </p>
        </p>
      </div>
    </div>
  </div>
);


export default ProjectCard;
