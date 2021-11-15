import { gql } from 'lib/graphql';

export type Guest = {
  id: string;
  name: string;
  jobTitle: string;
  profileImage: {
    url: string;
  };
  episodes: Episode[];
};

export type Episode = {
  id: string;
  slug: string;
  title: string;
  season: number;
  episodeNumber: number;
};

export type AllGuests = {
  guests: Guest[];
};

export const GET_ALL_GUESTS = gql`
  query GetAllGuests {
    guests {
      id
      name
      jobTitle
      profileImage {
        url
      }
      episodes {
        id
        slug
        title
        season
        episodeNumber
      }
    }
  }
`;
