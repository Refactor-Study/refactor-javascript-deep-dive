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
      name: '임재도',
      githubId: 'effozen',
   },
   {
      name: '구지원',
      githubId: 'ITKOO',
   },
   {
      name: '지우진',
      githubId: 'random6-xyz',
   },
   {
      name: '이가은',
      githubId: 'gaeunnlee',
   },
] as const;
