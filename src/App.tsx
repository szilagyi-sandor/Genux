import React from "react";

import "./App.scss";

import LoginForm from "./Modules/Auth/SmartComponents/LoginForm/LoginForm";
import { UserBar } from "./Modules/Auth/SmartComponents/UserBar/UserBar";
import GlobalCP from "./Modules/StateManagement/Contexts/Global/GlobalCP";
import ProductDetails from "Modules/Product/SmartComponents/Details/ProductDetails";
import ProductList from "Modules/Product/SmartComponents/List/ProductList";

// TODO: naming convetions. what is a reducer what is a store what is a context etc...

// Notes:

// Genux can be used for:
// - sharing state between components
// - caching data coming from the BE (AlwaysLoad, AlwaysCache, CacheReload)

// External providers are not part of GlobalState and should be integrated.

// ACCs should not have a dependency on something they modify, otherwise they will create infinite loops when combined with effects.
// That's the reason we're not adding a check inside the ACCs if they are already loading with the same params.

// GenuxDataStates do not support parallel calls. For example the first successful call will set the loading to false and will not
// care about a second one still running. Scenarioes like this should be prevented.
// There's an example on how to prevent them at useListProductsACC and useGetProductDetailsACC.

// TODO: Future improvements:
// - ACC templates
// - Parallel call prevention hook -> usecallback with an extra useref

function App() {
  return (
    <div id="app">
      <GlobalCP>
        <main>
          <header>
            <h1>Genux</h1>

            <UserBar />
          </header>

          <div className="content">
            <LoginForm />

            <ProductList />

            <ProductDetails />
          </div>
        </main>
      </GlobalCP>
    </div>
  );
}

// TODO:
// CP - ContextProvider
// AC - ActionCreator
// SC - StateContext
// DC - DispatchContext
// ACC - ApiCallerCreator

// GDState - GenuxDataState
// GDReducer - GenuxDataReducer

// ACT - ApiCallerTemplate

// TODO:
// 1. Product module + interfaces
// 2. Fetchers
// 3. Contexts
// 4. interfaces.ts
// 5. Stores
// 6. ApiCaller Context
// 7. CP
// 8. Connecting stores to global
// 9. ACCs 1 by 1
// 10. ACC
// 11. Connect to global ACC + CP

export default App;
