import { mount } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import { AppRouter } from "../../routers/AppRouter";
describe("Pruebas del componente AppRouter", () => {
  const authValue = {
    user: {
      logged: false,
    },
    dispatch: jest.fn(),
  };
  test("Deberia mostrar login si no esta logeado", () => {
    const wrapper = mount(
      <AuthContext.Provider value={authValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper.find(".navbar").exists()).toBe(false);
  });

  test("Deberia mostrar las rutas privadas si esta logeado", () => {
    const authValue = {
      user: {
        logged: true,
        name: "Juanse",
      },
      dispatch: jest.fn(),
    };

    const wrapper = mount(
      <AuthContext.Provider value={authValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper.find(".navbar").exists()).toBe(true);
    expect(wrapper.find("span").text()).toBe("Juanse");
  });
});
