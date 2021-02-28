import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";
import { HeroScreen } from "../../../components/heroes/HeroScreen";

describe("Pruebas del componente heroscreen", () => {
  const history = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn(),
  };
  const wrapper = mount(
    <MemoryRouter initialEntries={["/hero"]}>
      <HeroScreen history={history} />
    </MemoryRouter>
  );

  test("Deberia cargar correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Si no se le pasan parametros o son errorneos me deriberia redireccionar", () => {
    expect(wrapper.find("Redirect").exists()).toBe(true);
  });

  test("Deberia mostrarme el heroe correctamente", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
        <Route
          path="/hero/:heroeId"
          component={() => <HeroScreen history={history} />}
        />
      </MemoryRouter>
    );

    expect(wrapper.find("img").exists()).toBeTruthy();
  });

  test("Deberia redireccionarme si el heroe no existe", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-spider221112112"]}>
        <Route
          path="/hero/:heroeId"
          component={() => <HeroScreen history={history} />}
        />
      </MemoryRouter>
    );

    expect(wrapper.text()).toBe("");
  });

  test("Deberia de volver para atras con el goBack", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
        <Route
          path="/hero/:heroeId"
          component={() => <HeroScreen history={history} />}
        />
      </MemoryRouter>
    );

    wrapper.find("button").simulate("click");
    expect(history.goBack).toHaveBeenCalled();
    expect(history.push).not.toHaveBeenCalled();
  });

  test("Deberia de volver al inicio con push", () => {
    const history = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn(),
    };
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
        <Route
          path="/hero/:heroeId"
          component={() => <HeroScreen history={history} />}
        />
      </MemoryRouter>
    );

    wrapper.find("button").simulate("click");
    expect(history.push).toHaveBeenCalled();
    expect(history.goBack).not.toHaveBeenCalled();
  });
});
