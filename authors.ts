type AuthorType = {
  name: string;
  githubId: string;
};

export const authorsInfo: AuthorType[] = [
  {
    name: '이호연',
    githubId: 'ho991217',
  },
] as const;