import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { DashboardRoutes } from "../../routers/DashboardRouter";

describe("Pruebas del componete DashboardRouter", () => {
  test("Deberia de cargar el componete", () => {
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
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("span").text()).toBe("Juanse");
  });
});
