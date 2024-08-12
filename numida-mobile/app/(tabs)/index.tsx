import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import client from "../../graphql/client";
import { store } from "../../redux/store/store";

import Dashboard from "../../components/Dashboard";
import LoanApplicationForm from "../../components/LoanApplication";

import { RootStackParamList } from "../../types/interfaces";

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Stack.Navigator
          screenOptions={{
            headerBackButtonMenuEnabled: true,
            headerBackTitleVisible: true,
            headerTitle: "",
          }}
        >
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="LoanApplicationForm"
            component={LoanApplicationForm}
          />
        </Stack.Navigator>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
