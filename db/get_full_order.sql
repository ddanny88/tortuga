select * 
from users 
join checkout on users.user_id = checkout.user_id
join orders on checkout.checkout_id = orders.checkout_id;