import { ContainerCentered, ContainerFluid } from "../components/Containers";

export default function Home() {
  return (
    <ContainerCentered>
      <ContainerFluid>
        <span className="text-primary my-3">This is basic text UI!</span>
        <input type="text" className="form-control rounded-pill my-3" />
        <button className="btn btn-primary rounded-pill w-100 my-3">
          Basic Button
        </button>
      </ContainerFluid>
    </ContainerCentered>
  );
}
