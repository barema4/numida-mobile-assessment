import { createModel } from "@rematch/core";
import type { RootModel } from "./models";
import axios, { AxiosError } from "axios";

interface LoanApplication {
  id: string;
  fullName: string;
  email: string;
  loanAmount: number;
  loanPurpose: string;
}
interface applyForLoanState {
  isLoading: boolean;
  error: string | null;
  success: boolean;
  loanApplications: LoanApplication[];
}

const initialState: applyForLoanState = {
  isLoading: false,
  error: null,
  success: false,
  loanApplications: [],
};

const loanApplications = createModel<RootModel>()({
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
    setLoanApplications: (state, payload) => {
      return { ...state, loanApplications: payload };
    },
  },
  effects: (dispatch) => ({
    async fetchLoanApplications() {
      try {
        // Make a GraphQL API request to fetch loan applications
        dispatch.loanApplications.setLoading(true);
        dispatch.loanApplications.setError(null);
        const response = await axios.post("http://192.168.1.3:8000/graphql", {
          query: `
            query {
              loanApplications {
            id
            fullName
            email
            loanAmount
            loanPurpose
              }
            }
          `,
        });

        const { data } = await response.data;
        dispatch.loanApplications.setLoanApplications(data.loanApplications);
        dispatch.loanApplications.setSuccess(true);
      } catch (error: AxiosError | any) {
        console.log(error, "error");
        if (axios.isAxiosError(error)) {
          dispatch.loanApplications.setError(
            error.response?.data?.detail || "Fetching loans failed",
          );
        } else {
          dispatch.loanApplications.setError("Fetching loans failed");
        }
      } finally {
        dispatch.loanApplications.setLoading(false);
      }
    },
  }),
});

export default loanApplications;
