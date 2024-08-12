// @filename: models.ts
import { Models } from "@rematch/core";
import { applyForLoan } from "./applyLoan";

export interface RootModel extends Models<RootModel> {
  applyForLoan: typeof applyForLoan;
}
export const models: RootModel = {
  applyForLoan,
};
