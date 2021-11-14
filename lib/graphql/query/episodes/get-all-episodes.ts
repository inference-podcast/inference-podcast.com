import { gql } from '@lib/graphql';
import type { Episode } from '@typings/episode';
import type { Guest } from '@typings/guest';

export type Episodes = {
  episodes: (Episode & Guest)[];
};

export const GET_ALL_EPISODES = gql`
  query GetAllEpisodes {
    episodes(orderBy: episodeNumber_ASC) {
      id
      title
      slug
      season
      episodeNumber
      guests {
        id
        name
        profileImage {
          url
        }
      }
    }
  }
`;
