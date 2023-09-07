import React, { useState } from "react";
import ProductJson from "./Product.json";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './Cart.css';
import { Link } from "react-router-dom";

const GymProducts = () => {
    // State to hold the search query
    const [searchTerm, setSearchTerm] = useState('');

    // Filtered products based on the search term
    const filteredProducts = ProductJson.products.filter(prod =>
        prod.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="gym-products">
            <Container>
                <h1>Gym Products</h1>

                {/* Search input */}
                <input 
                    type="text" 
                    placeholder="Search products..." 
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    style={{  width: '40%', border_radius:"5px",display:"block",margin:"30px auto"}}
                    className="search"
                />

                <Row>
                    {filteredProducts.map((prod) => (
                        <Col key={prod.id} md={4}>
                            <Card style={{ width: "18rem" }} className="my-2">
                                <Card.Img variant="top" src={prod.image} className="prod-img" />
                                <Card.Body>
                                    <Card.Title className="text-center text-capitalize">{prod.title}</Card.Title>
                                    <Link to={`gymProdDetail/${prod.id}`}>
                                        <Button variant="primary" className="product-btn">View Details</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default GymProducts;

