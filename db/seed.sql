CREATE TABLE products (
    product_Id SERIAL PRIMARY KEY,
    product_name TEXT,
    price DECIMAL,
    category TEXT, 
    img_url TEXT
)



-- should the following table be split into two and joined? 
CREATE TABLE customers (
    -- customer registration info: 
    customer_Id SERIAL PRIMARY KEY,
    is_admin BOOLEAN DEFAULT FALSE, 
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    username VARCHAR(50),
    password TEXT,
    -- checkout info
    email VARCHAR(60),
    phone VARCHAR(24),
    address VARCHAR(50),
    city VARCHAR(20),
    state VARCHAR(2),
    zipcode VARCHAR(10)
)

CREATE TABLE orders (
    order_Id SERIAL PRIMARY KEY,
    order_date DATETIME,
    product_name TEXT,
    price DECIMAL,
    firstName VARCHAR(50) REFERENCES customers(firstName),
    lastName VARCHAR(50) REFERENCES customers(lastName),
    category TEXT REFERENCES products(category), 
    customer_Id INT NOT NULL REFERENCES customers(customer_Id),
    product_Id INT NOT NULL REFERENCES products(product_Id),



    billingAddress VARCHAR(50),
    billingCity VARCHAR(20),
    billingState VARCHAR(2),
    billingZip VARCHAR(10),
    total DECIMAL
)


-- in the admin page, the admin can add in more inventory. 






-- should the billing info referece the shipping info? 

--When you join two or more tables, you can select specific or all columns from the joined tables. You are essentially making one big table. 




-- the following two queries are the exact same: 

-- select * 
-- from customer inner join invoice 
-- on customer.customerId = invoice.customerId;

/* select * 
from customer, invoice
where customer.customerId = invoice.customerId; */



-- testing purposes only: 
-- CREATE TABLE uses (
--     id SERIAL PRIMARY KEY,
--     firstName VARCHAR(50),
--     lastName VARCHAR(50),
--     email VARCHAR(100),
--     username VARCHAR(50),
--     password VARCHAR(100)
-- )


-- CREATE TABLE products (
--     product_Id SERIAL PRIMARY KEY,
--     product_name TEXT,
--     price DECIMAL,
--     category TEXT, 
--     img_url TEXT
-- )


INSERT INTO products (product_name, price, category, img_url)

VALUES('Captain Morgan', '28.99', 'Jager', 'https://cdn.minibardelivery.com/products/295/product/872710.jpg.jpg');
