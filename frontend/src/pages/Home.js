import './Home.css'
import coco from './../assets/home/coconut_pencil_drawing.png'
import tree from './../assets/home/coconut_tree_icon.png'
import cocos from './../assets/home/coconuts.png'


const Home = () => (
    <>
    <div className="home-main">
        <div className="home-left">
            <h3 style={{color:'aliceblue'}}>Welcome to the <br/> world of thenga!</h3>
            <img src={tree} className="tree" alt='tree'/>
            <p style={{textAlign:'center', color: 'aliceblue'}}>
                We believe in the incredible versatility and benefits of coconut products.  
                <br/>
                From cooking to skincare, coconuts are nature’s gift that keeps on giving.
            </p>
        </div>
        <div className="home-center">
            <h2 style={{color:'darkcyan'}}>Healthy Living. Happy Living.</h2>
            <img src={coco} alt='coco'/>
            <p style={{textAlign: 'center'}}>
                Ever wondered what 'Thenga' means?
                Thenga in Malayalam means coconut!<br/>
                We are a small start-up from Kerala, India - <br/>working on products made from coconut.<br/>
                Now you can purchase our products hand-made in a small village in Kerala from anywhere in the world.
                Thank you for supporting our mission, and saving coconut shells from going to the landfill!
            </p>
        </div>
        <div className="home-right">
            <h3 style={{color:'aliceblue'}}>Join the coconut revolution</h3>
            <img src={cocos} className="tree" alt='cocos'/>
            <p style={{textAlign:'center', color: 'aliceblue'}}>
                Explore our range of coconut products and discover how they can <br/>enhance your lifestyle.  
                <br />
                We have something for everyone!
            </p>
        </div>
    </div>
    </>
  );
  
  export default Home;
  