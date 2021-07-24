import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chole Bhature",
    description: "Delhi's specialty",
    price: 50,
  },
  {
    id: "m2",
    name: "Pizza",
    description: "American vibe... ",
    price: 200,
  },
  {
    id: "Gulab Jamun",
    name: "",
    description: "Begali Special",
    price: 30,
  },
  {
    id: "m4",
    name: "Indian Salad",
    description: "Tasty bhi... Healthy bhi...",
    price: 50,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
