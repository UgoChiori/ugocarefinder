import React from "react";
import { NavLink } from "react-router-dom";
import "./healthtips.css";

type Props = {};

const HealthTips = (props: Props) => {
  return (
    <div className="tip-container">
     
      <div className="tips-tips">
      <h1 className="tip-head">Health Tips</h1>
        <p>1. Eat a variety of foods</p>
        <p>2. Base your diet on plenty of foods rich in carbohydrates</p>
        <p>3. Replace saturated with unsaturated fat</p>
        <p>4. Enjoy plenty of fruits and vegetables</p>
        <p>5. Reduce salt and sugar intake</p>
        <p>6. Eat regularly, control the portion size</p>
        <p>7. Drink plenty of fluids</p>
        <p>8. Maintain a healthy body weight</p>
        <p>9. Get on the move, make it a habit!</p>
        <p>10. Start now! And keep changing gradually.</p>
        <p>11. Remember: foods are not good or bad</p>
        <p>12. Plan your meals ahead</p>
        <p>13. Learn how to cook your own meals</p>
        <p>14. When dining out avoid "supersize" menu items</p>
        <p>15. Encourage breastfeeding and eat fresh food</p>
        <p>16. Care for your food; prepare and store it safely</p>
        <p>17. Avoid eating while watching TV, driving, or working</p>
        <p>18. Eat together as a family whenever possible</p>
        <p>19. Buy fresh and seasonal fruits and vegetables</p>
        <p>20. Grow your own vegetables</p>
        <p>21. Choose whole grains whenever you can</p>
        <p>22. Limit consumption of red and processed meat</p>
        <p>23. Limit consumption of salty foods</p>
        <p>24. Limit consumption of processed foods</p>
        <p>25. Limit consumption of alcohol products</p>
        <p>26. Do not use food to reward or punish a child</p>
        <p>27. Do not force children to eat more than they want</p>
        <p>28. Do not use food to show love</p>
        <p>29. Do not skip breakfast</p>
        <p>30. Do not eat late at night</p>
        <p>31. Do not eat raw or undercooked foods</p>
        <p>32. Do not drink beverages with your meals</p>
        <p>33. Do not buy food or drinks from street vendors</p>
        <p>34. Do not eat foods that have been kept at room temperature</p>
        <p>35. Do not eat food that has passed its expiry date</p>
        <p>36. Do not eat food that has been left out in the open</p>
        <p>37. Do not eat food that has been kept in the fridge for too long</p>
        <p>38. Do not eat food that has been reheated more than once</p>
        <p>39. Do not eat food that has been thawed and refrozen</p>
        <p>40. Do not eat food that has been cooked and kept for several hours</p>
        <p>41. Do not eat food that has been cooked and kept in the fridge</p>
        <p>42. Do not eat food that has been cooked and kept in the freezer</p>
        <p>43. Do not eat food that has been cooked and kept in the microwave</p>
        <p>44. Do not eat food that has been cooked and kept in the oven</p>
        <p>45. Do not eat food that has fallen on the ground</p>
        <p>45. Do not eat food that is not hygienically handled</p>
        <p>46. Do not eat food that is not hygienically prepared</p>
        <p>47. Do not eat food that is not hygienically stored</p>
        <p>48. Do not eat food that is not hygienically served</p>
        <p>49. Do not eat food that is not hygienically cooked</p>
        <p>50. Exercise regularly. At least, three days a week</p>


      </div>

      <NavLink to="/" className="link">
        Home
      </NavLink>
    </div>
  );
};

export default HealthTips;
