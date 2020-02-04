import React from "react";
import RepoItem from "./RepoItem";
interface ReposProps {
  repos: any;
}
export const Repos = (props: ReposProps) => {
  const { repos } = props;
  return (
    <div>
      {repos.map((repo: any) => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </div>
  );
};
