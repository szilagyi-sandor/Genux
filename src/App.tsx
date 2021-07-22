// CHECKED 1.0
import React from "react";

import "./App.scss";

import LoginForm from "./Modules/Auth/SmartComponents/LoginForm/LoginForm";
import { UserBar } from "./Modules/Auth/SmartComponents/UserBar/UserBar";
import GlobalCP from "./Modules/StateManagement/Contexts/Global/GlobalCP";
import ProductDetails from "Modules/Product/SmartComponents/Details/ProductDetails";
import ProductList from "Modules/Product/SmartComponents/List/ProductList";

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

///////////////////////////////
// Abbreviations

// CP - ContextProvider
// AC - ActionCreator
// SC - StateContext
// DC - DispatchContext
// F - Fetcher

// SH - StateHandler (Interface)
// ASH - AsyncStateHandler (Interface)
// SHC - StateHandlerCreator (asnyc and sync) (Interface)
// DSH - DatalessStateHandler (Interface)
// DASH - DatalessAsyncStateHandler (Interface)
// PSH - ParamlessStateHandler (Interface)
// PASH - ParamlessAsyncStateHandler (Interface)
// SSH - SimpleStateHandler (Interface)
// SASH - SimpleAsyncStateHandler (Interface)

// GD - GenuxData
// GDState - GenuxDataState (Interface)
// GDReducer - GenuxDataReducer (Interface)
// createGDContextPair - createGenuxDataContextPair
// GDStore - GenuxDataStore (Interface)
// useGDReducer - useGenuxDataReducer
// gdReducer - genuxDataReducer

// GC - GenuxConnected
// GCState - GenuxConnectedState (Interface)
// GCReducer - GenuxConnectedReducer (Interface)
// createGCContextPair - createGenuxConnectedContextPair
// GCStore - GenuxConnectedStore (Interface)
// useGCReducer - useGenuxConnectedReducer
// gcReducer - genuxConnectedReducer

// cx3 - createComposedComponents
// cx4 - createComposedContextComponents

///////////////////////////////
// Notes:

// Store means state + dispatch together stored in an array.

// Genux can be used for:
// - sharing state between components if they are not close and they are independent
// - caching data (keep after unmount) coming from the BE (AlwaysLoad, AlwaysCache, CacheReload)

// External providers that are not part of GlobalState and should not be integrated.

// SHs should not have a dependency on something they modify, otherwise they will create infinite loops when combined with effects.
// That's the reason we're not adding a check inside the ACCs if they are already loading with the same params.

// GenuxDataStates do not support parallel calls. For example the first successful call will set the loading to false and will not
// care about a second one still running. Scenarios like this should be handled manually.
// There's an example on how to handle them at useListProductsACC and useGetProductDetailsACC.

///////////////////////////////
// Explanation Comments:

// #1: // TODO: Avoid usage of any. The type would need to be an existential type,
// which is not supported natively by TypeScript at the moment

// #2: This function is only used to preserve type safeness. If we solve the
// problem that occurs in #1 this will not be neccessary.

// #3: It's common to store the dispatch and the state in 2 different
// contexts, to prevent unneccessary rerenders. This helps
// reduce boiler for that.

///////////////////////////////
// Creatiom steps:

// 1. Product module + interfaces
// 2. Fetchers
// 3. Contexts
// 4. interfaces.ts
// 5. Stores
// 6. StateHandler Context
// 7. CP
// 8. Connecting stores to global
// 9. ACCs 1 by 1
// 10. ACC
// 11. Connect to global ACC + CP

export default App;
