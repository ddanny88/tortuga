CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name TEXT,
    price DECIMAL,
    category TEXT, 
    img_url TEXT
)

CREATE TABLE customer (
    customer_id SERIAL PRIMARY KEY,
    is_admin BOOLEAN DEFAULT FALSE, 
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    phone VARCHAR(24),
    username VARCHAR(50),
    hash TEXT,
    email VARCHAR(60),
    address VARCHAR(50),
    city VARCHAR(20),
    state VARCHAR(2),
    zipcode VARCHAR(10)
)

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    customerId SERIAL PRIMARY KEY,
    product_id SERIAL PRIMARY KEY,
    order_date DATETIME,
    product_name TEXT,
    price DECIMAL,
    category TEXT, 
    billingAddress VARCHAR(50),
    billingCity VARCHAR(20),
    billingState VARCHAR(2),
    billingZip VARCHAR(10),
    total DECIMAL
)

