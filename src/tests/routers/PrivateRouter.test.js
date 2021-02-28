import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { PrivateRouter } from "../../routers/PrivateRouter";

describe("Prueba de Private Router", () => {
  const props = {
    location: {
      pathname: "juanse",
      search: "busqueda",
    },
  };

  Storage.prototype.setItem = jest.fn();
  test("Deberia retorna el componente", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRouter
          isAuthenticated={true}
          component={() => <span></span>}
          {...props}
        />
      </MemoryRouter>
    );
    expect(wrapper.find("span").exists()).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "lastPath",
      props.location.pathname + props.location.search
    );
  });

  test("Debe de bloquear el componente si no esta autenticado", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRouter
          isAuthenticated={false}
          component={() => <span></span>}
          {...props}
        />
      </MemoryRouter>
    );
    expect(wrapper.find("span").exists()).toBeFalsy();
    expect(wrapper.html()).toBe("");
  });
});
