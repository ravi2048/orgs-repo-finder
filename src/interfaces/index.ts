export type IResponse = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  owner: {
    avatar_url: string;
    html_url: string;
  };
};

export type ICompleteResponse = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  owner: {
    avatar_url: string;
    html_url: string;
  };
  description: string;
  url: string;
  watchers_count: number;
  forks_count: number;
  open_issues_count: number;
  default_branch: string;
  subscribers_count: number;
};

export type DataContextType = {
  globalData: ICompleteResponse[];
  updateGlobalData: any | null;
};
