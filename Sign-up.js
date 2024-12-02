const signUpLink = document.getElementById( 'sign-up-text' );
const signInForm = document.getElementById( 'sign-in-box' );

const signUpForm = document.getElementById( 'sign-up-box' );
const signInLink = document.getElementById( 'sign-in-text' );

signUpLink.addEventListener( 'click', () => {

    signUpForm.style.animation = 'none';

    setTimeout(() => {
        signInForm.style.animation = 'dropBox 350ms forwards ease-in-out';
        signUpForm.style.animation = 'dropBox-reverse 350ms forwards ease-in-out';
    },200 )
} );


signInLink.addEventListener('click', () => {
    signInForm.style.animation = 'none';

        setTimeout(() => {
            signUpForm.style.animation = 'dropBox 350ms forwards ease-in-out';
            signInForm.style.animation = 'dropBox-reverse 350ms reverse ease-in-out';
        }, 200);
 
});