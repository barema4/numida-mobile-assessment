import { createModel } from "@rematch/core";
import type { RootModel } from "./models";
import axios from "axios";

interface applyForLoanState {
  isLoading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: applyForLoanState = {
  isLoading: false,
  error: null,
  success: false,
};

export const applyForLoan = createModel<RootModel>()({
  state: initialState,
  reducers: {
    setLoading(state, payload: boolean) {
      return { ...state, isLoading: payload };
    },
    setError(state, payload: string | null) {
      return { ...state, error: payload };
    },
    setSuccess(state, payload: boolean) {
      return { ...state, success: payload };
    },
  },
  effects: (dispatch) => ({
    async applyForLoan(payload: any) {
      try {
        dispatch.applyForLoan.setLoading(true);
        dispatch.applyForLoan.setError(null);
        const response = await axios.post(
          `http://192.168.1.2:8000/apply-loan`,
          payload,
        );
        dispatch.applyForLoan.setSuccess(true);
      } catch (error: any) {
        dispatch.applyForLoan.setError(
          error.message || "Loan application failed",
        );
      } finally {
        dispatch.applyForLoan.setLoading(false);
      }
    },
  }),
});
