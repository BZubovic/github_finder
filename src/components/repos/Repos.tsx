import React from 'react';
import RepoItem from './RepoItem';
interface props {
  repos: any;
}
const Repos: React.FC<props> = ({ repos }) => {
  return repos.map((repo: any) => <RepoItem repo={repo} key={repo.id} />);
};
export default Repos;
