curl --include --request POST http://localhost:4741/chores \
  --header "Content-Type: application/json" \
  --data '{
    "chore": {
      "chore_name": "Do Laundry",
      "directions": "directions here",
      "day_of_week": "Monday"
    }
  }'
