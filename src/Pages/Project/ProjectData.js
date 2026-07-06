import project2 from './../../Images/MovieAPI.png'
import project4 from './../../Images/MealPlan.png'
import project8 from './../../Images/WunshList.png'
import projectFlashcard from './../../Images/Frischcard.png'

const projects = [
	{
		image: project2,
		borderColor: '#fd2155',
		link: 'https://trailerbar.netlify.app/',
		githubLink: 'https://github.com/Tetiana-Pasichnyk/Movie-API',
		buttonColor: '#fd2155',
		name: 'Trailer Bar',
		title: 'React / API',
		description:
			'Movie trailer app with search and browse features, built with React and a public movie API.',
	},
	{
		image: project4,
		borderColor: '#0efcd7',
		link: 'https://mealplan2024.netlify.app/',
		githubLink: 'https://github.com/Tetiana-Pasichnyk/meal-plan-frontend',
		buttonColor: '#0efcd7',
		name: 'Meal Plan',
		title: 'React / Node.js',
		description:
			'Weekly meal planner with recipes and ingredients, using a React frontend and Node.js backend.',
	},
	{
		image: project8,
		borderColor: '#ffa500',
		link: 'https://famous-mandazi-e8e122.netlify.app',
		githubLink: 'https://github.com/Tetiana-Pasichnyk/grocery-list',
		buttonColor: '#ffa500',
		name: 'Wish List',
		title: 'React',
		description:
			'Simple wish list app to add, edit, and remove items with a clean and responsive UI.',
	},
	{
		image: projectFlashcard,
		borderColor: '#81d8f7',
		link: 'https://flashcard-buddy-starter.netlify.app/',
		githubLink: 'https://github.com/Tetiana-Pasichnyk/flashcard_buddy_starter',
		buttonColor: '#81d8f7',
		name: 'Flashcard Buddy',
		title: 'JavaScript / Vite',
		description:
			'Flashcard app for creating and studying cards with flip interactions and a clean responsive UI.',
	},
	{
		isPlaceholder: true,
		borderColor: '#6c757d',
		buttonColor: '#6c757d',
		name: 'New Project',
		title: 'Coming soon',
		description: 'A new project will be added here soon.',
	},
	{
		isPlaceholder: true,
		borderColor: '#6c757d',
		buttonColor: '#6c757d',
		name: 'New Project',
		title: 'Coming soon',
		description: 'A new project will be added here soon.',
	},
]

export default projects
