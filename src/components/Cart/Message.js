import {Link} from "react-router-dom"

const Message = () => {
    return (<div className="MessageEmpty">
        <h1>No se encuentran productos</h1>
        <Link to="/">
            <button className="checkout-btn btn btn-success btn-block btn-keyBuying">Continuar comprando</button>
        </Link>
    </div>)
}

export default Message