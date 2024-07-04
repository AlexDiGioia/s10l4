import { render, screen } from "@testing-library/react";

import MyFooter from "./components/MyFooter";

test("Verifica che il componente Welcome venga montato correttamente", () => {
  render(<MyFooter />);
  const welcome = screen.getByText(/EPICODE/i);
  expect(welcome).toBeInTheDocument();
});
