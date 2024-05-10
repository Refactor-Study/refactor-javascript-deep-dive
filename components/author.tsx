import { authorsInfo } from '../authors';

type Authors = (typeof authorsInfo)[number]['name'];

type AuthorProps = {
  date: string;
  author: Authors;
  by?: string;
};

export default function Author({ date, author, by = 'by' }: AuthorProps) {
  return (
    <div className='mt-4 mb-16 text-gray-500 text-sm'>
      {date} {by}
      <span className="after:content-[','] last:after:content-['']">
        <a
          key={author}
          href={`https://github.com/${
            authorsInfo.find((info) => info.name === author)?.githubId
          }`}
          target='_blank'
          className='mx-1 text-current underline [text-underline-position:from-font] decoration-from-font'
        >
          {author}
        </a>
      </span>
    </div>
  );
}
