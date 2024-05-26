type AuthorType = {
   name: string;
   githubId: string;
};

export const authorsInfo: Readonly<AuthorType[]> = [
   {
      name: '이호연',
      githubId: 'ho991217',
   },
   {
      name: '이가은',
      githubId: 'gaeunnlee',
   },
] as const;
