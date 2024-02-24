import { GithubContainer, StyledNavlink, Table } from "./styles";
import { GET_REPOSITORIES } from "../../Queries/GetRepositories";
import { useQuery } from "@apollo/client";

type RepositoryTypes = {
  id: number;
  name: string;
  createdAt: string;
  url: string;
};

const Github: React.FC<RepositoryTypes> = () => {
  const { loading, error, data } = useQuery(GET_REPOSITORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data.viewer.repositories.nodes);

  return (
    <GithubContainer>
      <h2>My Repositories</h2>
      <Table>
        <thead>
          <tr>
            <th>Repository Name</th>
            <th>Created</th>
            <th> URL</th>
          </tr>
        </thead>
        <tbody>
          {data.viewer.repositories.nodes.map((repo: RepositoryTypes) => (
            <tr key={repo.id}>
              <td>{repo.name}</td>
              <td>{repo.createdAt.slice(0, 10)}</td>
              <td>
                <StyledNavlink to={repo.url}>View on GitHub</StyledNavlink>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </GithubContainer>
  );
};

export default Github;
