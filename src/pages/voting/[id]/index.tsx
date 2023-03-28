import { useVoting } from '@/hooks/useVoting';
import { useRouter } from 'next/router';

export default function VotingPage() {
    const router = useRouter();
    const { id } = router.query;

    const voting = useVoting(id as string);
    if (id && typeof id !== "string") {
        //error
        return (<></>)
    }
    console.log(voting)
    return (<>
        {voting.voting?.title}
    </>)
}