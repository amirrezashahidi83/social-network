import Dashboard from './Dashboard';
import Profile from './Profile';
import Signup from './auth/SignUp';
import Signin from './auth/SignIn';
import NewPost from './NewPost';
import ViewPost from './ViewPost';

const routes = [
	{
		path:'/dashboard',
		element:<Dashboard />
	},
	{
		path:'/Signup',
		element:<Signup />
	},
	{
		path:'/Signin',
		element:<Signin />
	},
	{
		path:'/profile/:id',
		element:<Profile />
	},
	{
		path:'/newpost',
		element:<NewPost />
	},
	{
		path:'/viewpost/:post_id',
		element:<ViewPost />
	}
]

export default routes