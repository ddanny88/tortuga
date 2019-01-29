select users.user_id, firstname, lastname, order_date, product_category, order_total 
from users 
join checkout on users.user_id = checkout.user_id
join orders on checkout.checkout_id = orders.checkout_id
where orders.order_id = $1;

