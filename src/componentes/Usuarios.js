
export default function Usuarios(props){
    return(
      <div className="m-2" >

        {/*Esto es una card de b5 que fue editada para que quede linda*/}
        <div className="card w-50 text-dark m-auto" style={{backgroundColor: props.color}}>
          <div className="card-body">
            <h5 className="card-title">{props.nombre}</h5>
            <p className="card-text">Edad:{props.edad}</p>
            <p className="card-text">Localidad: {props.localidad}</p>
          </div>
        </div>
      </div>
    );
  }

