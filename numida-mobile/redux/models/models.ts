// @filename: models.ts
import { Models } from "@rematch/core";
import { applyForLoan } from "./applyLoan";
import loanApplications from "./loanApplications";

export interface RootModel extends Models<RootModel> {
  applyForLoan: typeof applyForLoan;
  loanApplications: typeof loanApplications;
}
export const models: RootModel = {
  applyForLoan,
  loanApplications,
};
