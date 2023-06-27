import { configureStore } from "@reduxjs/toolkit";
import componentReducer from "./Components";
import ComponentStyleReducer from "./ComponentStyles";

export default configureStore({
  reducer: {
    components: componentReducer,
    ComponentsStyles: ComponentStyleReducer,
  },
});
