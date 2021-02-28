import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";
import { SearchScreen } from "../../../components/search/SearchScreen";

describe("Pruabs del search screen", () => {
  test("Debe de cargaar correctamente con valores por defecto", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <Route path="/search" component={() => <SearchScreen />} />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find(".alert-info").text().trim()).toBe("Busque un heroe");
  });

  test("Debe mostrar a batman y le input con el valor del queryString", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <Route path="/search" component={() => <SearchScreen />} />
      </MemoryRouter>
    );

    expect(wrapper.find("img").exists()).toBeTruthy();
    expect(wrapper.find("input").prop("value")).toBe("batman");
  });

  test("Debe de mostrar un error si no se encuentra el heroe", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batman122121"]}>
        <Route path="/search" component={() => <SearchScreen />} />
      </MemoryRouter>
    );

    expect(wrapper.find(".alert-danger").exists()).toBeTruthy();
    expect(wrapper.find(".alert-danger").text().trim()).toBe(
      "No se encontro el heroe"
    );
  });

  test("Debe de llamar el push del history", () => {
    const history = {
      push: jest.fn(),
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <Route
          path="/search"
          component={() => <SearchScreen history={history} />}
        />
      </MemoryRouter>
    );

    wrapper.find("input").simulate("change", {
      target: {
        name: "searchHero",
        value: "batman",
      },
    });

    wrapper.find("button").simulate("submit", {
      preventEvent: jest.fn(),
    });

    expect(history.push).toHaveBeenCalledWith("?q=batman");
  });
});
