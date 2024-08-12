import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import configureStore from 'redux-mock-store';
import LoanApplicationForm from './index';

type RootStackParamList = {
  Dashboard: undefined;
  LoanApplicationForm: undefined;
};

type MockRouteProp = RouteProp<RootStackParamList, "LoanApplicationForm">;

type MockNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "LoanApplicationForm"
>;


const mockRoute: MockRouteProp = {
  key: "LoanApplicationForm",
  name: "LoanApplicationForm",
  params: undefined,
};

const mockNavigate = jest.fn();
//@ts-ignore
const mockNavigation: MockNavigationProp = {
  navigate: mockNavigate,
  goBack: jest.fn(),
  reset: jest.fn(),
  dispatch: jest.fn(),
  setParams: jest.fn(),
  canGoBack: jest.fn(),
  isFocused: jest.fn(),
  addListener: jest.fn(),
  removeListener: jest.fn(),
  getId: jest.fn(),
  getState: jest.fn(),
};



const mockStore = configureStore([]);
const store = mockStore({
  applyForLoan: { isLoading: false, error: null },
});


describe('LoanApplicationForm', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('renders the loan application form', () => {
    render(
      <Provider store={store}>
        <LoanApplicationForm navigation={mockNavigation} route={mockRoute} />
      </Provider>
    );

    expect(screen.getByPlaceholderText('Name')).toBeTruthy();
    expect(screen.getByPlaceholderText('Email')).toBeTruthy();
    expect(screen.getByPlaceholderText('Loan Amount')).toBeTruthy();
    expect(screen.getByPlaceholderText('Loan Purpose')).toBeTruthy();
  });

  // it('shows validation errors when form is submitted with empty fields', async () => {
  //   render(
  //     <Provider store={store}>
  //       <LoanApplicationForm navigation={mockNavigation} route={mockRoute} />
  //     </Provider>
  //   );

  //   fireEvent.press(screen.getByText('SUBMIT'));

  //   await waitFor(() => {
  //     expect(screen.getByText('Full Name is required')).toBeTruthy();
  //     expect(screen.getByText('Email is required')).toBeTruthy();
  //     expect(screen.getByText('Loan Amount is required')).toBeTruthy();
  //     expect(screen.getByText('Loan Purpose is required')).toBeTruthy();
  //   });
  // });

  // it('handles form submission with valid data', async () => {
  //   render(
  //     <Provider store={store}>
  //       <LoanApplicationForm navigation={mockNavigation} route={mockRoute} />
  //     </Provider>
  //   );

  //   fireEvent.changeText(screen.getByPlaceholderText('Name'), 'John Doe');
  //   fireEvent.changeText(screen.getByPlaceholderText('Email'), 'john@example.com');
  //   fireEvent.changeText(screen.getByPlaceholderText('Loan Amount'), '5000');
  //   fireEvent.changeText(screen.getByPlaceholderText('Loan Purpose'), 'Business');

  //   fireEvent.press(screen.getByText('SUBMIT'));

  //   await waitFor(() => {
  //     expect(mockNavigate).toHaveBeenCalledWith('Dashboard');
  //   });
  // });

  // it('displays server error message if the submission fails', async () => {
  //   const errorStore = mockStore({
  //     applyForLoan: { isLoading: false, error: 'Server error' },
  //   });

  //   render(
  //     <Provider store={errorStore}>
  //       <LoanApplicationForm navigation={mockNavigation} route={mockRoute} />
  //     </Provider>
  //   );

  //   fireEvent.changeText(screen.getByPlaceholderText('Name'), 'John Doe');
  //   fireEvent.changeText(screen.getByPlaceholderText('Email'), 'john@example.com');
  //   fireEvent.changeText(screen.getByPlaceholderText('Loan Amount'), '5000');
  //   fireEvent.changeText(screen.getByPlaceholderText('Loan Purpose'), 'Business');

  //   fireEvent.press(screen.getByText('SUBMIT'));

  //   await waitFor(() => {
  //     expect(screen.getByText('Error: Server error')).toBeTruthy();
  //   });
  // });
});
