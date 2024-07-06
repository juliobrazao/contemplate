import { ContainerCentered, ContainerFluid } from "../components/Containers";

export default function Home() {
  return (
    <ContainerCentered>
      <ContainerFluid>
        <span className="text-primary my-3">
          <strong>This is basic text UI!</strong>
        </span>
        <input type="text" className="form-control rounded-pill my-3" />
        <button className="btn btn-primary rounded-pill w-100 my-3">
          <strong>Basic Button</strong>
        </button>

        <button className="btn btn-secondary rounded-pill w-100 my-3">
          <strong>Another Button</strong>
        </button>

        <button className="btn btn-info rounded-pill w-100 my-3">
          <strong>Another Button</strong>
        </button>
      </ContainerFluid>
    </ContainerCentered>
  );
}
