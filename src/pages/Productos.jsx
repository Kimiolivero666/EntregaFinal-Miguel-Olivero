import { Container, Row, Col, } from "react-bootstrap"
import ItemListContainer from "../components/productos/ItemListContainer"




const Productos = () => {

    return (

        <Container>

            <h2 className="mt-5 title-productos"># Productos</h2>
            <p className="p-productos">Inicio . productos</p>

            <Row>
                <Col md={2}>
                    <div className="filter">
                        <div className="categories">
                            <h3 className="mt-5">Marcas</h3>

                            <li>Samsung</li>
                            <li>Iphone</li>
                            <li>Xiomi</li>
                            <li>Nokia</li>
                            <li>Apple</li>
                            <li>LG</li>
                            <li>Canon</li>
                            <li>SanDisk</li>

                        </div>
                    </div>

                </Col>
                <Col md={10}>
                    <div className="products-box">
                        <div className="container">
                            <ItemListContainer />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}

export default Productos