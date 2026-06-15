import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { getProblemFromFolder, getProblemsFromFolder } from "./problems.server";

export const getProblems = createServerFn({ method: "GET" }).handler(async () => {
  return getProblemsFromFolder();
});

export const getProblem = createServerFn({ method: "GET" })
  .validator(z.object({ id: z.number() }))
  .handler(async ({ data }) => {
    return getProblemFromFolder(data.id);
  });
