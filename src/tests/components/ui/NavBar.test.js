import { mount } from "enzyme";
import { MemoryRouter, Router } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext";
import { types } from "../../../components/types/authTypes";
import { Navbar } from "../../../components/ui/NavBar";

describe("Prubas del navbar", () => {
  const history = {
    push: jest.fn(),
    listen: jest.fn(),
    location: {},
    createHref: jest.fn(),
  };
  const authValue = {
    user: {
      logged: true,
      name: "Juanse",
    },
    dispatch: jest.fn(),
  };
  const wrapper = mount(
    <AuthContext.Provider value={authValue}>
      <MemoryRouter>
        <Router history={history}>
          <Navbar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test("Deberia cargar correctamente", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("span").text()).toBe("Juanse");
  });

  test("Deberia llamar a handleLogout y se deberia llamar a dispath y a history push", () => {
    wrapper.find("button").simulate("click");
    expect(authValue.dispatch).toHaveBeenCalledTimes(1);
    expect(authValue.dispatch).toHaveBeenCalledWith({
      type: types.logout,
    });
    expect(history.push).toHaveBeenCalledTimes(1);
    expect(history.push).toHaveBeenCalledWith("/login");
  });
});
