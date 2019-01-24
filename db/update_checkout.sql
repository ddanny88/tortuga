UPDATE checkout 
SET phone = $1, address = $2, city = $3, state = $4, zipcode = $5 
WHERE checkout_id = $6
RETURNING *;


