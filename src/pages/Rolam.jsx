import classes from './Rolam.module.css';
import logoimage from '../Assets/header.jpg';

const Rolam = () => {
    return (
        <div className={classes.rolam}>
            <h1>Ez a Főcím</h1>
            <p>It is a long established fact that a
                reader will be distracted by the readable 
                content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters, as 
                opposed to using 'Content here, content here', making 
                it look like readable English. Many desktop publishing
                packages and web page editors now use Lorem Ipsum as 
                their default model text, and a search for 'lorem 
                ipsum' will uncover many web sites still in their 
                infancy. Various versions have evolved over the years,
                sometimes by accident, sometimes on purpose
                 (injected humour and the like).</p>
                 <img src={logoimage} alt='logoimage'></img>
        </div>
    );
};

export default Rolam;