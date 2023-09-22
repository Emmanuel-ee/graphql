import { getCompany } from "./db/companies.js";
import { createJob, getJob, getJobs, getJobsByCompany } from "./db/jobs.js";
import { GraphQLError } from "graphql";
export const resolvers = {
  Query: {
    company: async (_root, { id }) => {
      const company = await getCompany(id);
      if (!company) {
        throw notFoundError("No Company found with id " + id);
      }
      return company;
    },
    jobs: async () => getJobs(),

    job: async (_root, { id }) => {
      const job = await getJob(id);
      if (!job) {
        throw notFoundError("No job found with id " + id);
      }
      return job;
    },
  },

  Mutation: {
    createJob: (_root, { title, description }) => {
      const companyId = "FjcJCHJALA4i"; // TODO set based on user
      return createJob({ companyId, title, description });
    },
  },

  Company: {
    jobs: (company) => getJobsByCompany(company.id),
  },

  Job: {
    company: (job) => getCompany(job.companyId),
    date: (job) => toIsoDate(job.createdAt),
  },
};

function notFoundError(message) {
  throw new GraphQLError(message, {
    extensions: { code: "NOT_FOUND" },
  });
}

function toIsoDate(value) {
  return value.slice(0, "yyyy-mm-dd".length);
}
