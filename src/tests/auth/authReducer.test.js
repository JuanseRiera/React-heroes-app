import { useReducer } from "react";
import { authReducer } from "../../auth/authReducer";
import { types } from "../../components/types/authTypes";

describe("Pruebas del authReducer", () => {
  test("Debe retornar el estado por defecto", () => {
    const state = authReducer({}, {});
    expect(state).toEqual({});
  });

  test("Debe retornar el nombre del usuario y logged en true", () => {
    const state = authReducer(
      {},
      {
        type: types.login,
        payload: {
          name: "juanse",
        },
      }
    );
    expect(state.name).toBe("juanse");
    expect(state.logged).toBeTruthy();
  });

  test("Debe retornar el estado sin el nombre  logged en false", () => {
    const state = authReducer(
      {},
      {
        type: types.logout,
      }
    );
    expect(state.name).toBe(undefined);
    expect(state.logged).toBeFalsy();
  });
});
