--takes in the products name, price, category (wine, liquor, beer), and image url.
CREATE TABLE products (
    product_Id SERIAL PRIMARY KEY,
    product_name TEXT,
    price DECIMAL,
    category TEXT, 
    img_url TEXT
)


-- customer registration info: 
CREATE TABLE users(
    user_Id SERIAL PRIMARY KEY,
    is_admin BOOLEAN DEFAULT FALSE, 
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    email VARCHAR(60),
    username VARCHAR(50),
    password VARCHAR(150)
)


-- checkout info
CREATE TABLE checkout (
    checkout_Id SERIAL PRIMARY KEY, 
    phone VARCHAR(24),
    address VARCHAR(50),
    city VARCHAR(20),
    state VARCHAR(2),
    zipcode VARCHAR(10),
    order_date DATE DEFAULT CURRENT_DATE,
    user_id INT REFERENCES users(user_Id)
)


CREATE TABLE orders (
    order_Id SERIAL PRIMARY KEY,
    product_category VARCHAR(50),
    price DECIMAL,
    checkout_Id INT NOT NULL REFERENCES checkout(checkout_Id),
    product_name VARCHAR(50),
    order_total DECIMAL
);


update users set is_admin = true where user_id = 1;
SELECT SUM(price) from orders;

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





INSERT INTO products (product_name, price, category, img_url)
VALUES('Crown Royal', '44.99','Whiskey', 'https://s3.us-east-2.amazonaws.com/tortuga-assets/crown.jpg');
CREATE TABLE orders (
    order_Id SERIAL PRIMARY KEY,
    firstName VARCHAR(50) REFERENCES users(firstName),
    lastName VARCHAR(50) REFERENCES users(lastName),
    customer_Id INT NOT NULL REFERENCES users(customer_Id),
    category TEXT REFERENCES products(category), 
    product_Id INT NOT NULL REFERENCES products(product_Id),
    price DECIMAL REFERENCES products(price),
    product_name TEXT REFERENCES products(product_name),
    order_date DATE REFERENCES checkout(order_date)
);
