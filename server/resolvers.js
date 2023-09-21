import { getCompany } from "./db/companies.js";
import { getJobs } from "./db/jobs.js";
export const resolvers = {
  Query: {
    jobs: async () => getJobs(),
  },

  Job: {
    company: (job) => {
      return getCompany(job.companyId);
      // return {
      //     id: 'test-id',
      //     name: 'my-company'
      // }
    },
    date: (job) => {
      //   console.log("resolving date for job", job);
      //   return "2022-12-31";
      return toIsoDate(job.createdAt);
    },
  },
};

function toIsoDate(value) {
  return value.slice(0, "yyyy-mm-dd".length);
}
