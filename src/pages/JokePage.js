import { Subheader, Joke } from '../components';

export const JokePage = () => {
  return (
    <main>
        <Subheader heading="Chuck Norris Jokes" subHeading="Free JSON API for hand curated Chuck Norris facts" />
        <Joke />
    </main>
  )
}
