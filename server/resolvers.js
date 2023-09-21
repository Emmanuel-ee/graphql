import { getJobs } from "./db/jobs.js";
export const resolvers = {
  Query: {
    jobs: async () => {
      //   const jobs = await getJobs();
      //     console.log(jobs)
      return getJobs();
      //   return [
      //     {
      //       id: "test-id-1",
      //       title: "Hello Emmanuel",
      //       description: "You are a full blown developer",
      //     },
      //     {
      //       id: "test-id-2",
      //       title: "Hello Samuel",
      //       description: "You are a full blown Doctor",
      //     },
      //     {
      //       id: "test-id-3",
      //       title: "Hello Comfort",
      //       description: "You are a full blown Diplomat",
      //     },
      //   ];
    },
  },
};
