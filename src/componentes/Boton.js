export default function Boton(props) {
    return (
      <div>
        <h3 className="text-center mt-3">Leer sobre React componentes</h3>
  
        <a href={props.url} target="_blank" rel="noreferrer">
          <button type="button" className="btn btn-primary m-auto">
            Documentación
          </button>
        </a>
      </div>
    );
  }
  