import { mount } from "enzyme";
import { AuthContext } from "../../../auth/AuthContext";
import { LoginScreen } from "../../../components/login/LoginScreen";
import { types } from "../../../components/types/authTypes";

describe("Prubas del login screen", () => {
  const historyMock = {
    replace: jest.fn(),
  };

  const values = {
    dispatch: jest.fn(),
  };
  let action = {
    type: types.login,
    payload: {
      name: "Juanse",
    },
  };
  const wrapper = mount(
    <AuthContext.Provider value={values}>
      <LoginScreen history={historyMock} />
    </AuthContext.Provider>
  );
  test("Debe de cargar correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de realizar el dispatch y la navegación", () => {
    wrapper.find("button").simulate("click");
    expect(values.dispatch).toHaveBeenCalled();
    expect(values.dispatch).toHaveBeenCalledWith(action);
    expect(historyMock.replace).toHaveBeenCalled();
    expect(historyMock.replace).toHaveBeenCalledWith("");

    localStorage.setItem("lastPath", "/dc");
    wrapper.find("button").simulate("click");
    expect(historyMock.replace).toHaveBeenCalledWith("/dc");
  });
});
