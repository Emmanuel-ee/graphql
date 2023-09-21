import { getCompany } from "./db/companies.js";
import { getJob, getJobs } from "./db/jobs.js";
export const resolvers = {
  Query: {
    jobs: async () => getJobs(),
    job: (_root, { id }) => getJob(id),
  },

  Job: {
    company: (job) => getCompany(job.companyId),
    date: (job) => toIsoDate(job.createdAt),
  },
};

function toIsoDate(value) {
  return value.slice(0, "yyyy-mm-dd".length);
}
