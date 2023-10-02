import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Search = () => {
    return (
        <div>
            <Form className="d-flex mt-3 mb-3 position-relative">
                <Form.Control
                    type="search"
                    placeholder="Buscar"
                    className="me-2"
                    aria-label="Search"
                />
                <Button className='searchButton position-absolute' variant="outline-success"><i className="fa-solid fa-magnifying-glass"></i></Button>
                </Form>
        </div>
    )
}

export default Search