# Development

### Link to Deployed Website
https://watercup1000.github.io/development/

### Goal and Value of the Application
The purpose of this website is for a user to be able to order drinks. The user can filter between different types of drinks and different types of prices. Additionally, the user can sort between the drinks by price. 

### Usability Principles Considered
I considered many different usability principles. First, user control and freedom was considered as I added a remove from cart function. Second, I considered flexibility and efficiency of use as the user has multiple different filtering and sorting options. Third, I incorperated a aesthetic and minimalist design so that there would be no distraction from the main purpose of the site. 

### Organization of Components
In total I have four different components. First I have App which holds the FilteredList component. In the FilteredList, which filters elements, I have the DisplayList component which sorts the DrinkItem components which it holds. The DrinkItem component display an individual drink.  

### How Data is Passed Down Through Components
In FilteredList, I hold states for filtering and sorting. I have a type (which fiilters by type of drink), price (which filters by price of drink), and sortBy (which holds what the user wants to filter by). I past a list of what items the user should see and how the list should be sorted in props to the DisplayList component. In DisplayList I have states which maintain the total cost of the users cart as well as what items are in the cart. Through props, I pass the actual drink item, the cart total, the function to update the cart total, the items in the cart, and the function to update the items in the cart. I pass these as props to the DrinkItem component. Within DrinkItem, I have a state value what says if an item is in one's cart, and another state value which I use to change the text within the "Add to cart" button. 


### How the User Triggers State Changes
The user triggers state changes by changing the filtering and sorting dropdown options, and by adding/removing from their cart. 
