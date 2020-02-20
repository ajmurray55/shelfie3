UPDATE inventory
SET imageurl = $1, name = $2, price = $3
WHERE id = $4;

SELECT * FROM inventory;