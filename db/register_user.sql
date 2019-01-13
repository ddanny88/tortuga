INSERT INTO users (firstName, lastName, email, username, password)
VALUES($1, $2, $3, $4, $5)
RETURNING *;

-- when  inserting into a database, if you require the inserted data then you need to return everything by using the RETURNING * syntax. 