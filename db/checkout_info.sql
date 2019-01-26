INSERT INTO checkout (phone, address, city, state, zipcode, user_id) --user_id
VALUES($1, $2, $3, $4, $5, $6) --need $6 for user_id
RETURNING *;