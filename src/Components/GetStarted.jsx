import './GetStarted.css'
import image from '../assets/feature-image-0ba2faa9e33725374343bbad3db178f0.jpg'
export default function Homepage(){
    return(
        <main >
            <section className='start-page '>
                <h1 className="mt-5 start-page-heading ">
                    Change the way you organize your bookmarks and use your Homepage
                </h1 >
                <span>Get started by logging in with your account or sign up with your Google account or email.</span>
                <div className="login-signup">
                    <div className='p-4 bg-body-tertiary border rounded-3 m-2'>
                        <p>
                            Already have an account? Log in with your email below.
                        </p>
                        <button>
                            Log in
                        </button>
                    </div>
                    <div className='col-md-6 p-4 bg-body-tertiary border rounded-3'>
                        <p>
                            Are you new here? Sign in with your Google account or create a new account.
                        </p>
                        <button>
                            Sign in with Google
                        </button>
                        <button>
                            Create an account
                        </button>
                    </div>
                </div>
                
            </section>
            <img src={image}></img>
        </main>
        
    )
}