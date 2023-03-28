import { useEffect, useState } from "react";
import { Voting, getVoting } from "../libs/firebase/voting";

export type UseVotingOutput = {
  isLoading: boolean;
  voting: Voting | undefined;
};

const DEFAULT_OUTPUT: UseVotingOutput = {
  isLoading: true,
  voting: undefined,
};

export function useVoting(id: string): UseVotingOutput {
  const [output, setOutput] = useState(DEFAULT_OUTPUT);

  useEffect(() => {
    void (async () => {
      const voting = await getVoting(id);
      setOutput({ isLoading: false, voting });
    })();
  }, [id]);

  return output;
}
