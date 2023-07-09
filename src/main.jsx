import ReactDOM from "react-dom/client";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./redux/store";
import "./styles/styles.scss";

const client = new ApolloClient({
	uri: "http://localhost:9002/graphql",
	cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<ApolloProvider client={client}>
		<Provider store={store}>
			<App />
		</Provider>
	</ApolloProvider>
);
