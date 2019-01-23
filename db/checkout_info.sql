INSERT INTO checkout (phone, address, city, state, zipcode)
VALUES($1, $2, $3, $4, $5)
RETURNING *;